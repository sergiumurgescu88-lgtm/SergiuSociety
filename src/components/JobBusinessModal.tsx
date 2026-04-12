import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, ChevronDown, ChevronUp, RefreshCw, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { JobData } from '../constants';
import { jobQuestions, defaultQuestions } from '../constants/jobQuestions';

interface Props {
  job: JobData;
  onClose: () => void;
}

const STRATEGY_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-strategy`;

const pipelineGradients = [
  { gradient: 'from-red-600 to-rose-700', border: 'border-red-500/30', bg: 'bg-red-950/40' },
  { gradient: 'from-blue-600 to-cyan-700', border: 'border-blue-500/30', bg: 'bg-blue-950/40' },
  { gradient: 'from-amber-500 to-yellow-600', border: 'border-amber-500/30', bg: 'bg-amber-950/40' },
  { gradient: 'from-emerald-600 to-green-700', border: 'border-emerald-500/30', bg: 'bg-emerald-950/40' },
  { gradient: 'from-purple-600 to-violet-700', border: 'border-purple-500/30', bg: 'bg-purple-950/40' },
];

function parsePipelines(markdown: string) {
  const sections = markdown.split(/(?=^## [🎬🤖💰🎓🔗])/m).filter(s => s.trim());
  return sections.map((section, i) => {
    const titleMatch = section.match(/^## (.+)/m);
    const title = titleMatch ? titleMatch[1].trim() : `Pipeline ${i + 1}`;
    return { title, content: section.replace(/^## .+\n?/, '').trim(), style: pipelineGradients[i % 5] };
  });
}

export default function JobBusinessModal({ job, onClose }: Props) {
  const [step, setStep] = useState<'questions' | 'loading' | 'result'>('questions');
  const [answers, setAnswers] = useState<string[]>(['', '', '']);
  const [strategyMarkdown, setStrategyMarkdown] = useState('');
  const [openPipelines, setOpenPipelines] = useState<Record<number, boolean>>({});
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const abortRef = useRef<AbortController | null>(null);

  const questions = jobQuestions[job.title] || defaultQuestions;

  const canSubmit = answers.every(a => a.trim().length > 0);

  const streamStrategy = useCallback(async () => {
    setStep('loading');
    setStrategyMarkdown('');
    setError('');
    setOpenPipelines({});

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const resp = await fetch(STRATEGY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ jobTitle: job.title, questions, answers }),
        signal: controller.signal,
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: 'Unknown error' }));
        setError(err.error || `Error ${resp.status}`);
        setStep('questions');
        return;
      }

      if (!resp.body) {
        setError('No response body');
        setStep('questions');
        return;
      }

      setStep('result');
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = buffer.indexOf('\n')) !== -1) {
          let line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);
          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              fullText += content;
              setStrategyMarkdown(fullText);
            }
          } catch {
            buffer = line + '\n' + buffer;
            break;
          }
        }
      }

      // flush remaining
      if (buffer.trim()) {
        for (let raw of buffer.split('\n')) {
          if (!raw) continue;
          if (raw.endsWith('\r')) raw = raw.slice(0, -1);
          if (raw.startsWith(':') || raw.trim() === '') continue;
          if (!raw.startsWith('data: ')) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === '[DONE]') continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              fullText += content;
              setStrategyMarkdown(fullText);
            }
          } catch { /* ignore */ }
        }
      }
    } catch (e: any) {
      if (e.name !== 'AbortError') {
        setError(e.message || 'Failed to generate strategy');
        setStep('questions');
      }
    }
  }, [job.title, questions, answers]);

  const handleCopyAll = () => {
    navigator.clipboard.writeText(strategyMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const togglePipeline = (idx: number) => {
    setOpenPipelines(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const pipelines = parsePipelines(strategyMarkdown);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        <motion.div
          className="relative w-full md:max-w-3xl h-full bg-slate-950 overflow-y-auto shadow-2xl md:border-l border-slate-800"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 p-3 md:p-5 flex items-center justify-between">
            <div className="min-w-0 flex-1 mr-2">
              <h2 className="text-base md:text-xl font-black text-white truncate">{job.title}</h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">{job.category}</span>
                <span className={`text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 rounded-full ${job.automationRisk > 80 ? 'bg-rose-500/20 text-rose-400' : job.automationRisk > 50 ? 'bg-amber-500/20 text-amber-400' : 'bg-green-500/20 text-green-400'}`}>
                  {job.automationRisk}%
                </span>
                {step !== 'questions' && (
                  <button
                    onClick={() => { setStep('questions'); abortRef.current?.abort(); }}
                    className="text-[10px] md:text-xs text-blue-400 hover:text-blue-300 font-medium ml-2"
                  >
                    ← Înapoi la întrebări
                  </button>
                )}
              </div>
            </div>
            <button
              onClick={() => { onClose(); abortRef.current?.abort(); }}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-3 md:p-5">
            {/* ═══════ STEP 1: Questions ═══════ */}
            {step === 'questions' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                <div className="text-center mb-6">
                  <h3 className="text-lg md:text-xl font-black text-white mb-2">
                    📋 Spune-ne mai multe despre tine
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Răspunde la 3 întrebări pentru a genera o strategie <span className="text-white font-bold">100% personalizată</span> cu AI
                  </p>
                </div>

                {error && (
                  <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-3 text-rose-400 text-sm">
                    ⚠️ {error}
                  </div>
                )}

                {questions.map((q, i) => (
                  <div key={i} className="space-y-2">
                    <label className="block text-sm font-bold text-slate-300">
                      <span className="text-blue-400 mr-1.5">Q{i + 1}.</span>
                      {q}
                    </label>
                    <textarea
                      value={answers[i]}
                      onChange={(e) => {
                        const next = [...answers];
                        next[i] = e.target.value;
                        setAnswers(next);
                      }}
                      placeholder="Scrie răspunsul tău aici..."
                      rows={2}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 resize-none transition-colors"
                    />
                  </div>
                ))}

                <button
                  onClick={streamStrategy}
                  disabled={!canSubmit}
                  className={`w-full py-4 rounded-2xl font-black text-base transition-all ${
                    canSubmit
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25'
                      : 'bg-slate-800 text-slate-600 cursor-not-allowed'
                  }`}
                >
                  🚀 Generează Strategia
                </button>
              </motion.div>
            )}

            {/* ═══════ LOADING ═══════ */}
            {step === 'loading' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 space-y-4"
              >
                <Loader2 className="w-10 h-10 text-blue-400 animate-spin" />
                <p className="text-slate-300 text-sm text-center font-medium">
                  Analizăm profilul tău și construim<br />strategia personalizată...
                </p>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map(i => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-blue-500"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ═══════ STEP 2: Result ═══════ */}
            {step === 'result' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {/* Top action bar */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="text-xs text-slate-500">
                    {pipelines.length > 0 ? `${pipelines.length} pipeline-uri generate` : 'Se generează...'}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyAll}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
                    >
                      {copied ? <><Check className="w-3.5 h-3.5" /> Copiat!</> : <><Copy className="w-3.5 h-3.5" /> 📋 Copiază strategia</>}
                    </button>
                    <button
                      onClick={streamStrategy}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> 🔄 Regenerează
                    </button>
                  </div>
                </div>

                {/* Pipelines as accordion */}
                {pipelines.length > 0 ? (
                  pipelines.map((pipeline, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className={`rounded-2xl border ${pipeline.style.border} overflow-hidden`}
                    >
                      <button
                        onClick={() => togglePipeline(idx)}
                        className={`w-full bg-gradient-to-r ${pipeline.style.gradient} p-3 md:p-4 flex items-center justify-between text-left`}
                      >
                        <h3 className="text-sm md:text-base font-black text-white pr-2">{pipeline.title}</h3>
                        {openPipelines[idx] ? (
                          <ChevronUp className="w-5 h-5 text-white/70 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white/70 flex-shrink-0" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openPipelines[idx] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className={`${pipeline.style.bg} overflow-hidden`}
                          >
                            <div className="p-3 md:p-5 prose prose-sm prose-invert max-w-none prose-headings:text-slate-200 prose-p:text-slate-400 prose-li:text-slate-400 prose-strong:text-white prose-ul:my-1 prose-li:my-0">
                              <ReactMarkdown>{pipeline.content}</ReactMarkdown>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                ) : (
                  // Show raw streaming markdown before pipelines are fully parsed
                  <div className="bg-slate-900/80 rounded-2xl p-4 md:p-6 prose prose-sm prose-invert max-w-none prose-headings:text-slate-200 prose-p:text-slate-400 prose-li:text-slate-400 prose-strong:text-white">
                    <ReactMarkdown>{strategyMarkdown || '...'}</ReactMarkdown>
                  </div>
                )}

                {/* Bottom CTA */}
                <div className="text-center py-6">
                  <p className="text-slate-500 text-sm mb-3">Alege un pipeline și transformă-l în realitate</p>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold hover:from-indigo-600 hover:to-violet-600 transition-all"
                  >
                    🚀 Lansează proiect — $9
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
