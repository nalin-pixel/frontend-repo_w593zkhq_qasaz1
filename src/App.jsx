import { useEffect } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';

export default function App() {
  useEffect(() => {
    document.title = 'Primi Posti: più clienti locali in 7 giorni | 99 €';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Primi Posti di primiposti.it: pacchetto completo per dominare le ricerche locali su Google e Maps. Attivazione 3–7 giorni. Prezzo fisso 99 €.'
      );
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content =
        'Primi Posti di primiposti.it: pacchetto completo per dominare le ricerche locali su Google e Maps. Attivazione 3–7 giorni. Prezzo fisso 99 €.';
      document.head.appendChild(m);
    }

    // JSON-LD FAQ schema
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quanto tempo serve per vedere i risultati?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'In media 3–7 giorni per i primi miglioramenti nelle ricerche locali. A seconda della concorrenza, il consolidamento richiede 2–4 settimane.',
          },
        },
        {
          '@type': 'Question',
          name: 'È incluso tutto nel prezzo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Sì. Setup, ottimizzazione, contenuti, post, gestione recensioni e report sono inclusi a 99 € / mese.',
          },
        },
        {
          '@type': 'Question',
          name: 'Serve un contratto a lungo termine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Paghi mese per mese e puoi disdire quando vuoi, senza penali.',
          },
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const track = (label) => {
    try {
      // Basic analytics stub: send to console and window event for integrations
      console.log('CTA_CLICK', label);
      window.dispatchEvent(new CustomEvent('cta_click', { detail: { label } }));
    } catch (e) {}
  };

  return (
    <div className="font-inter text-gray-900">
      <a href="#main" className="sr-only focus:not-sr-only">Salta al contenuto</a>
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="Logo Primi Posti" className="h-6 w-6" />
            <span className="font-semibold">Primi Posti</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
            <a href="#benefits" className="hover:text-gray-900">Benefici</a>
            <a href="#how" className="hover:text-gray-900">Come funziona</a>
            <a href="#pricing" className="hover:text-gray-900">Prezzi</a>
            <a href="/privacy" className="hover:text-gray-900">Privacy</a>
            <a href="/termini" className="hover:text-gray-900">Termini</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <Hero onCTAClick={track} />
        <div id="benefits"><Benefits /></div>
        <div id="how"><HowItWorks /></div>
        <div id="pricing"><Pricing onCTAClick={track} /></div>
        <FAQ />
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} primiposti.it — Tutti i diritti riservati.</p>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="hover:text-gray-900">Privacy</a>
              <a href="/termini" className="hover:text-gray-900">Termini</a>
            </div>
          </div>
          <div className="mt-6 text-xs">
            Palette colori suggerite:
            <ul className="mt-2 grid gap-2 sm:grid-cols-3">
              <li>Emerald, Slate, White — professionale e fresco</li>
              <li>Blue, Gray, White — affidabile e corporate</li>
              <li>Indigo, Zinc, White — tecnologico e moderno</li>
            </ul>
          </div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: `
        // Conversion tracking example: listen to CTA events
        window.addEventListener('cta_click', function(e) {
          // Replace with your analytics provider call, e.g., gtag('event', 'cta_click', {label: e.detail.label})
          console.log('CONVERSION_EVENT', e.detail);
        });
      ` }} />
    </div>
  );
}
