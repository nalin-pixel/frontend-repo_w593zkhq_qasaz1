import { ShieldCheck, Check } from 'lucide-react';

export default function Pricing({ variant = 'A', onCTAClick }) {
  const inclusions = [
    'Setup e ottimizzazione Google Business Profile',
    'Ricerca keyword locali e categorie',
    'Creazione/ottimizzazione contenuti e foto',
    'Post mensili e gestione recensioni',
    'Tracciamento chiamate e azioni',
    'Report con posizionamenti e KPI',
  ];

  const heading = variant === 'B' ? 'Offerta lancio: solo 99 € al mese' : 'Primi Posti — 99 € al mese';
  const sub = variant === 'B' ? 'Blocco prezzo oggi. Disdici quando vuoi.' : 'Tutto incluso. Nessun vincolo.';

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
        <p className="mt-1 text-gray-600">{sub}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-gray-900">99 €</span>
              <span className="text-gray-500">/ mese</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">Attivazione media: 3–7 giorni lavorativi</p>
            <ul className="mt-6 space-y-3">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => onCTAClick?.('pricing_primary')}
              className="mt-8 w-full rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Prova Primi Posti adesso
            </button>
            <p className="mt-2 text-center text-xs text-gray-500">
              Pagamento sicuro. Cancellazione in qualsiasi momento.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Transazioni protette con SSL
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Cosa include</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {inclusions.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-800">
              Garanzia soddisfatti o rimborsati 14 giorni se non vedi miglioramenti misurabili.
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
            Varianti per A/B test — headline:
            <ul className="mt-2 list-disc pl-5">
              <li>Più clienti dalla tua zona in 7 giorni</li>
              <li>Dominare le ricerche locali a prezzo fisso</li>
              <li>La scorciatoia per i primi posti su Google</li>
            </ul>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
            Varianti per A/B test — sezione prezzi:
            <ul className="mt-2 list-disc pl-5">
              <li>Offerta prova: 99 € il primo mese, poi 149 €</li>
              <li>Piano trimestrale: 249 € / 3 mesi (risparmia 48 €)</li>
              <li>Piano annuale: 999 € / anno (risparmia 189 €)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
