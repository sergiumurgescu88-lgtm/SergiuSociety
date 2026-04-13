import React from 'react';

const Academy: React.FC = () => {
  const features = [
    { icon: '🎓', title: 'Cursuri Video HD', desc: 'Peste 200 de ore de conținut practic, actualizat lunar' },
    { icon: '🤖', title: 'AI Mentor Personal', desc: 'Asistent AI disponibil 24/7 pentru întrebările tale' },
    { icon: '📋', title: 'Proiecte Reale', desc: '71 de proiecte cu feedback de la experți din industrie' },
    { icon: '🏆', title: 'Certificare Recunoscută', desc: 'Certificat verificabil, acceptat de angajatori top din RO' },
    { icon: '👥', title: 'Comunitate Activă', desc: 'Acces la grupul privat cu 2,400+ profesioniști' },
    { icon: '♾️', title: 'Acces Pe Viață', desc: 'Plătești o dată, ai acces la toate actualizările viitoare' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-block', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 20, padding: '6px 18px', fontSize: 13, color: '#a78bfa', marginBottom: 20 }}>
            🎓 ACADEMIA DA ROMÂNIA
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.15 }}>
            Devino expert în{' '}
            <span style={{ background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              noua economie
            </span>
          </h1>
          <p style={{ fontSize: 18, color: '#94a3b8', maxWidth: 580, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Cursuri practice, proiecte reale și un AI mentor care te ghidează pas cu pas spre cariera pe care o meriți.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/checkout?plan=academy" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', color: '#fff', padding: '14px 32px', borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
              Înscrie-te — $29/lună →
            </a>
            <a href="#features" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', color: '#e2e8f0', padding: '14px 32px', borderRadius: 12, fontSize: 16, textDecoration: 'none' }}>
              Vezi curriculum
            </a>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 64, textAlign: 'center' }}>
          {[['71', 'Proiecte practice'], ['2,400+', 'Studenți activi'], ['94%', 'Rată de angajare']].map(([val, label]) => (
            <div key={label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: '28px 16px' }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: '#a78bfa' }}>{val}</div>
              <div style={{ color: '#94a3b8', fontSize: 14, marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div id="features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 64 }}>
          {features.map((f) => (
            <div key={f.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 36, marginBottom: 14 }}>{f.icon}</div>
              <h3 style={{ margin: '0 0 10px', fontSize: 18, fontWeight: 700 }}>{f.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: 14, margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: 24, padding: '48px 32px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 12px' }}>Gata să începi?</h2>
          <p style={{ color: '#94a3b8', marginBottom: 28 }}>Primul modul e gratuit. Fără card de credit necesar.</p>
          <a href="/checkout?plan=academy" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', color: '#fff', padding: '16px 40px', borderRadius: 12, fontSize: 18, fontWeight: 700, textDecoration: 'none' }}>
            Începe Gratuit Acum →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Academy;
