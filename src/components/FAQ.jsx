export default function FAQ() {
  const faqs = [
    {
      q: 'Quanto tempo serve per vedere i risultati?',
      a: 'In media 3–7 giorni per i primi miglioramenti nelle ricerche locali. A seconda della concorrenza, il consolidamento richiede 2–4 settimane.',
    },
    {
      q: 'È incluso tutto nel prezzo?',
      a: 'Sì. Setup, ottimizzazione, contenuti, post, gestione recensioni e report sono inclusi a 99 € / mese.',
    },
    {
      q: 'Serve un contratto a lungo termine?',
      a: 'No. Paghi mese per mese e puoi disdire quando vuoi, senza penali.',
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900">Domande frequenti</h2>
        <div className="mt-6 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {faqs.map((f, idx) => (
            <details key={f.q} className="group p-6" itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-left text-lg font-semibold text-gray-900" itemProp="name">{f.q}</span>
                <span className="ml-4 text-emerald-600 transition group-open:rotate-45">+</span>
              </summary>
              <div className="mt-2 text-gray-600" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p itemProp="text">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
