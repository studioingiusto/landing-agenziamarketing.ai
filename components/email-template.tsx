import * as React from 'react';

interface EmailTemplateProps {
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
}) => (
  <div style={{ fontFamily: 'sans-serif', color: '#111', backgroundColor: '#ffffff' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '24px' }}>
      <h2 style={{ color: '#000000' }}>🎤 Aiutaci a costruire agenziamarketing.ai su misura per te</h2>
      <p>Ciao,</p>
      <p>
        Grazie per esserti iscritto alla waiting list di <strong>agenziamarketing.ai</strong> 🚀
      </p>
      <p>
        Stiamo costruendo una piattaforma che automatizza l'analisi SEO, la ricerca keyword e la creazione di contenuti grazie all'intelligenza artificiale.
      </p>
      <p><strong>Ma vogliamo farlo insieme a te.</strong></p>
      <p>
        Rispondi a queste poche domande e aiutaci a creare qualcosa di davvero utile per te e il tuo business.
      </p>
      <ul>
        <li>✅ Accesso anticipato alla beta</li>
        <li>✅ Bonus esclusivo al lancio</li>
        <li>✅ Prodotto costruito sulle tue esigenze reali</li>
      </ul>
      <p style={{ marginTop: '24px' }}>
        👉 <a href="https://form.typeform.com/to/vmKUYmqr" target="_blank" style={{ background: '#9c55ff', color: '#ffffff', padding: '12px 20px', textDecoration: 'none', borderRadius: '6px' }}>COMPILA IL FORM</a>
      </p>
      <p>Grazie ancora 🙌<br />Il team di agenziamarketing.ai</p>
    </div>
  </div>
); 