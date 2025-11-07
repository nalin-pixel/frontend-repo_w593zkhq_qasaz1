import { CheckCircle2, Gauge, Users } from 'lucide-react';

export default function Benefits() {
  const items = [
    {
      icon: CheckCircle2,
      title: 'Visibilità locale tra i primi risultati',
      text: 'Ottimizziamo la tua presenza su Google e Maps per intercettare clienti vicino a te.',
    },
    {
      icon: Gauge,
      title: 'Risultati rapidi e misurabili',
      text: 'Report chiari su chiamate, richieste e posizioni con miglioramenti visibili in 7 giorni.',
    },
    {
      icon: Users,
      title: 'Pacchetto completo, zero pensieri',
      text: 'Dalla scheda Google ai contenuti: ci occupiamo noi di tutto a prezzo fisso.',
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <Icon className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
