import React from 'react';

const AfacereLaCheie: React.FC = () => {
  const steps = [
    { num: '01', title: 'Consultație Gratuită', desc: 'Discutăm viziunea ta și identificăm cea mai profitabilă nișă' },
    { num: '02', title: 'Strategie Personalizată', desc: 'Echipa noastră construiește planul complet de business' },
    { num: '03', title: 'Implementare Completă', desc: 'Lansăm tot: site, branding, procese, primii clienți' },
    { num: '04', title: 'Predare & Suport 30 Zile', desc: 'Preluai afacerea gata de funcționare, cu suport inclus' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-block', background: 'rgba(234,179,8,0.15)', border: '1px solid rgba(234,179,8,0.4)', borderRadius: 20, padding: '6px 18px', fontSize: 13, color: '#fbbf24', marginBottom: 20 }}>
            🏆 DONE-FOR-YOU BUSINESS
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.15 }}>
            Afacerea ta,{' '}
            <span style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              gata în 14 zile
            </span>
          </h1>
          <p style={{ fontSize: 18, color: '#94a3b8', maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Tu alegi viziunea. Noi facem tot restul. Primești o afacere complet funcțională, gata să genereze venituri din prima săptămână.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/checkout?plan=afacerelacheie" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#000', padding: '14px 32px', borderRadius: 12, fontSize: 16, fontWeight: 800, textDecoration: 'none' }}>
              Rezervă Locul — $99 →
            </a>
            <a href="#process" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', color: '#e2e8f0', padding: '14px 32px', borderRadius: 12, fontSize: 16, textDecoration: 'none' }}>
              Cum funcționează
            </a>
          </div>
          <p style={{ color: '#64748b', fontSize: 13, marginTop: 14 }}>⚡ Doar 5 locuri disponibile pe lună</p>
        </div>

        {/* Process */}
        <div id="process" style={{ marginBottom: 64 }}>
          <h2 style={{ textAlign: 'center', fontSize: 28, fontWeight: 800, marginBottom: 40 }}>Procesul nostru în 4 pași</h2>
          <div style={{ display: 'grid', gap: 20 }}>
            {steps.map((s) => (
              <div key={s.num} style={{ display: 'flex', gap: 24, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: 16, padding: '24px 28px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: '#fbbf24', minWidth: 48, opacity: 0.7 }}>{s.num}</div>
                <div>
                  <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 700 }}>{s.title}</h3>
                  <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Includes */}
        <div style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.25)', borderRadius: 24, padding: '40px 32px', marginBottom: 48, textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 28 }}>Ce primești în pachet</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, textAlign: 'left' }}>
            {[
              '✅ Site complet (design + dev)',
              '✅ Brand identity (logo, culori, fonturi)',
              '✅ Strategie de marketing 90 zile',
              '✅ Primii 3 clienți garantați',
              '✅ Automatizări CRM + email',
              '✅ Training echipă 2h live',
              '✅ Suport 30 de zile post-lansare',
              '✅ Documentație completă de procese',
            ].map(item => (
              <div key={item} style={{ color: '#e2e8f0', fontSize: 14, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{item}</div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href="/checkout?plan=afacerelacheie" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#000', padding: '18px 48px', borderRadius: 14, fontSize: 20, fontWeight: 800, textDecoration: 'none' }}>
            Vreau Afacerea Mea →
          </a>
          <p style={{ color: '#64748b', fontSize: 13, marginTop: 16 }}>Garanție 100% rambursare dacă nu livrăm în 14 zile</p>
        </div>
      </div>
    </div>
  );
};

export default AfacereLaCheie;
