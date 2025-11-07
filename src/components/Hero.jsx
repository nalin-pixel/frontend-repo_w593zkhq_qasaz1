import { useMemo } from 'react';
import { Rocket, MessageCircle } from 'lucide-react';

export default function Hero({ variant = 'A', onCTAClick }) {
  const content = useMemo(() => {
    if (variant === 'B') {
      return {
        title: 'Primi Posti: più clienti dalla tua zona in 7 giorni',
        subtitle:
          'Domina le ricerche locali su Google e Maps. Niente tecnicismi: risultati misurabili, prezzo fisso.',
      };
    }
    return {
      title: 'Più clienti locali con Primi Posti. Risultati in 7 giorni',
      subtitle:
        'Compari tra i primi nelle ricerche locali su Google. Pacchetto completo, zero sorprese.',
    };
  }, [variant]);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200">
              <Rocket className="h-4 w-4" />
              Crescita locale garantita
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{content.subtitle}</p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <button
                onClick={() => onCTAClick?.('hero_primary')}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Prova Primi Posti adesso
              </button>
              <a
                href="https://wa.me/393331234567?text=Ciao%2C%20vorrei%20informazioni%20su%20Primi%20Posti"
                target="_blank"
                rel="noreferrer"
                onClick={() => onCTAClick?.('hero_whatsapp')}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-base font-medium text-emerald-700 ring-1 ring-emerald-300 transition hover:bg-emerald-50"
              >
                <MessageCircle className="h-5 w-5" /> Contatta su WhatsApp
              </a>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Attivazione media: 3–7 giorni lavorativi. Nessun vincolo di rinnovo.
            </p>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Padlock-silver.svg"
                  alt="Badge SSL"
                  className="h-5 w-5"
                />
                Connessione protetta SSL
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Google_My_Business_logo.png"
                  alt="Ottimizzazione Google Business Profile"
                  className="h-5 w-5"
                />
                Ottimizzato per Google e Maps
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop"
              alt="Azienda locale che cresce grazie al posizionamento su Google"
              className="w-full rounded-xl border border-gray-200 shadow-md"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
