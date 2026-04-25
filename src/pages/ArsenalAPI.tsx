import React, { useState } from 'react';

const APIS = [
  { cat: '🤖 AI & ML', items: ['OpenAI GPT-4o', 'Anthropic Claude', 'Google Gemini', 'Stability AI', 'Whisper STT', 'ElevenLabs TTS'] },
  { cat: '💳 Plăți', items: ['Stripe', 'PayPal', 'Revolut Business', 'Netopia', 'euPlatesc', 'Braintree'] },
  { cat: '📧 Email & SMS', items: ['Resend', 'SendGrid', 'Postmark', 'Twilio SMS', 'WhatsApp Business', 'Mailchimp'] },
  { cat: '🔐 Auth & Users', items: ['Supabase Auth', 'Auth0', 'Firebase Auth', 'Clerk', 'Magic.link', 'Okta'] },
  { cat: '📊 Analytics', items: ['Google Analytics 4', 'Mixpanel', 'Amplitude', 'Posthog', 'Hotjar', 'Heap'] },
  { cat: '☁️ Storage & DB', items: ['Supabase DB', 'Firebase', 'PlanetScale', 'Neon', 'Cloudflare R2', 'AWS S3'] },
  { cat: '🗺️ Maps & Location', items: ['Google Maps', 'Mapbox', 'OpenStreetMap', 'IPInfo', 'Geocodio', 'HERE Maps'] },
  { cat: '🛒 eCommerce', items: ['Shopify', 'WooCommerce', 'Ecwid', 'Snipcart', 'Paddle', 'Lemon Squeezy'] },
];

const ArsenalAPI: React.FC = () => {
  const [search, setSearch] = useState('');
  const filtered = APIS.map(cat => ({
    ...cat,
    items: cat.items.filter(i => i.toLowerCase().includes(search.toLowerCase())),
  })).filter(cat => cat.items.length > 0 || search === '');

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e1b4b 100%)', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '60px 24px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-block', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.4)', borderRadius: 20, padding: '6px 18px', fontSize: 13, color: '#818cf8', marginBottom: 20 }}>
            ⚡ ARSENAL API
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.2 }}>
            150+ API-uri esențiale,{' '}
            <span style={{ background: 'linear-gradient(90deg, #818cf8, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              un singur loc
            </span>
          </h1>
          <p style={{ fontSize: 17, color: '#94a3b8', maxWidth: 560, margin: '0 auto 28px', lineHeight: 1.7 }}>
            Ghid complet cu documentație, exemple de cod și integrări gata de copiat pentru orice proiect digital.
          </p>
          <a href="/checkout?plan=arsenalapi" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '14px 36px', borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
            Obține Accesul — $9 one-time →
          </a>
          <p style={{ color: '#475569', fontSize: 13, marginTop: 12 }}>Acces pe viață • Actualizări incluse • Fără abonament</p>
        </div>

        {/* Search */}
        <div style={{ marginBottom: 40 }}>
          <input
            type="text"
            placeholder="🔍 Caută un API (ex: Stripe, OpenAI, Twilio...)"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', padding: '14px 20px', borderRadius: 12, border: '1px solid rgba(99,102,241,0.3)', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: 15, outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        {/* API Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {filtered.map((cat) => (
            <div key={cat.cat} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 16, padding: 24 }}>
              <h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700 }}>{cat.cat}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.items.map(item => (
                  <span key={item} style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: 8, padding: '5px 12px', fontSize: 13, color: '#c7d2fe' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div style={{ textAlign: 'center', marginTop: 60, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: 24, padding: '40px 32px' }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, margin: '0 0 12px' }}>Gata să construiești mai rapid?</h2>
          <p style={{ color: '#94a3b8', marginBottom: 24 }}>Un singur payment, acces complet la toate integrările + actualizări viitoare.</p>
          <a href="/checkout?plan=arsenalapi" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', padding: '15px 40px', borderRadius: 12, fontSize: 17, fontWeight: 700, textDecoration: 'none' }}>
            Cumpără Acum — $9 →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArsenalAPI;
