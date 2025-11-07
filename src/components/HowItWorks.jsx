import { ListChecks, Wrench, TrendingUp } from 'lucide-react';

function Step({ icon: Icon, title, text }) {
  return (
    <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      icon: ListChecks,
      title: 'Analisi e setup',
      text: 'Valutiamo la tua presenza attuale, raccogliamo dati e configuriamo la strategia locale.',
    },
    {
      icon: Wrench,
      title: 'Ottimizzazione e contenuti',
      text: 'Ottimizziamo scheda Google, categorie, foto, post e keyword locali pertinenti.',
    },
    {
      icon: TrendingUp,
      title: 'Monitoraggio e prove',
      text: 'Tracciamo risultati e inviamo report. Interventi iterativi per consolidare le prime posizioni.',
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900">Come funziona</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <Step key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
