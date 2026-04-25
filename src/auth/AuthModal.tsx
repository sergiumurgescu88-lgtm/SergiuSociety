import { useState } from 'react';
import { useAuth } from './AuthContext';

interface Props {
  mode: 'signin' | 'signup';
  onClose: () => void;
  onSwitchMode: (m: 'signin' | 'signup') => void;
}

export default function AuthModal({ mode, onClose, onSwitchMode }: Props) {
  const { login, signup, loginWithGoogle } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');
    if (!email || !password) { setError('Completează toate câmpurile.'); return; }
    if (mode === 'signup' && !name) { setError('Introduceți numele.'); return; }
    setLoading(true);
    const result = mode === 'signup'
      ? await signup(email, password, name)
      : await login(email, password);
    setLoading(false);
    if (result.ok) onClose();
    else setError(result.error || 'Eroare necunoscută.');
  };

  const handleGoogle = async () => {
    setError('');
    setGoogleLoading(true);
    const result = await loginWithGoogle();
    setGoogleLoading(false);
    if (result.ok) onClose();
    else if (result.error) setError(result.error);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 z-10">
        <button onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 text-sm font-black transition-all">
          ✕
        </button>

        <div className="text-center mb-6">
          <div className="text-3xl mb-3">🇷🇴</div>
          <h2 className="text-2xl font-black text-slate-900 mb-1">
            {mode === 'signup' ? 'Creează cont DaRomania' : 'Bine ai revenit!'}
          </h2>
          <p className="text-slate-500 text-sm">
            {mode === 'signup' ? 'Începe gratuit, fără obligații.' : 'Intră în contul tău.'}
          </p>
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogle}
          disabled={googleLoading}
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-3.5 rounded-2xl transition-all disabled:opacity-60 mb-4"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          {googleLoading ? 'Se conectează...' : 'Continuă cu Google'}
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400 font-medium">sau cu email</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        <div className="space-y-3">
          {mode === 'signup' && (
            <input
              type="text" placeholder="Numele tău" value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border-2 border-slate-200 focus:border-blue-500 rounded-2xl px-4 py-3 text-sm font-semibold outline-none transition-all"
            />
          )}
          <input
            type="email" placeholder="Email" value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            className="w-full border-2 border-slate-200 focus:border-blue-500 rounded-2xl px-4 py-3 text-sm font-semibold outline-none transition-all"
          />
          <input
            type="password" placeholder="Parola (minim 6 caractere)" value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            className="w-full border-2 border-slate-200 focus:border-blue-500 rounded-2xl px-4 py-3 text-sm font-semibold outline-none transition-all"
          />
        </div>

        {error && (
          <div className="mt-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 text-center">
            {error}
          </div>
        )}

        <button onClick={handleSubmit} disabled={loading}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-black py-3.5 rounded-2xl transition-all disabled:opacity-60 disabled:cursor-not-allowed text-sm">
          {loading ? 'Se procesează...' : mode === 'signup' ? 'Creează cont' : 'Intră în cont'}
        </button>

        <p className="text-center text-sm text-slate-400 mt-4">
          {mode === 'signup' ? (
            <>Ai deja cont?{' '}
              <button onClick={() => onSwitchMode('signin')} className="text-blue-600 font-black hover:underline">Intră în cont</button>
            </>
          ) : (
            <>Nu ai cont?{' '}
              <button onClick={() => onSwitchMode('signup')} className="text-blue-600 font-black hover:underline">Înregistrează-te gratuit</button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
