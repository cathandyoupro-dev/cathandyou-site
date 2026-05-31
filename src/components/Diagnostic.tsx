import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

type Step = "form" | "questions" | "result";

const questions = [
  {
    key: "objectif",
    label: "Quel est votre principal objectif ?",
    options: ["Gagner en visibilité", "Trouver plus de clients", "Développer mes réseaux sociaux", "Améliorer ma fiche Google Business", "Créer un site internet", "Mettre en place de la publicité"],
  },
  { key: "gbp", label: "Disposez-vous d'une fiche Google Business ?", options: ["Oui", "Non", "Je ne sais pas"] },
  { key: "reseaux", label: "Publiez-vous régulièrement sur vos réseaux sociaux ?", options: ["Oui", "Non", "Occasionnellement"] },
  { key: "site", label: "Possédez-vous un site internet ?", options: ["Oui", "Non"] },
  { key: "pub", label: "Avez-vous déjà réalisé des campagnes publicitaires ?", options: ["Oui", "Non"] },
];

export function Diagnostic() {
  const [step, setStep] = useState<Step>("form");
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <section id="diagnostic" className="bg-[color:var(--cream)] py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="mb-10 text-center">
          <span className="font-script text-2xl text-[color:var(--turquoise)]">Offert</span>
          <h2 className="mt-2 text-4xl text-foreground md:text-5xl">Recevez votre mini diagnostic visibilité gratuit</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Découvrez les points forts et les axes d'amélioration de votre présence digitale.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-10">
          {step === "form" && <PreForm onSubmit={() => setStep("questions")} />}

          {step === "questions" && (
            <div className="space-y-6">
              {questions.map((q) => (
                <div key={q.key}>
                  <label className="block text-sm font-medium text-foreground">{q.label}</label>
                  <div className="relative mt-2">
                    <select
                      className="w-full appearance-none rounded-2xl border border-border bg-background px-4 py-3 pr-10 text-sm focus:border-[color:var(--turquoise)] focus:outline-none"
                      value={answers[q.key] ?? ""}
                      onChange={(e) => setAnswers({ ...answers, [q.key]: e.target.value })}
                    >
                      <option value="">Sélectionnez…</option>
                      {q.options.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
              ))}
              <div className="flex justify-center pt-2">
                <button
                  disabled={Object.keys(answers).length < questions.length}
                  onClick={() => setStep("result")}
                  className="rounded-full bg-foreground px-8 py-3.5 font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-40"
                >
                  Voir mon diagnostic
                </button>
              </div>
            </div>
          )}

          {step === "result" && (
            <div className="space-y-6">
              <div className="rounded-2xl bg-[image:var(--gradient-soft)] p-6">
                <h3 className="text-2xl text-foreground">Votre diagnostic personnalisé</h3>
                <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                  {answers.gbp !== "Oui" && <li>• Activer et optimiser votre fiche <strong>Google Business Profile</strong> pour capter la recherche locale.</li>}
                  {answers.reseaux !== "Oui" && <li>• Mettre en place un <strong>calendrier éditorial régulier</strong> sur vos réseaux sociaux.</li>}
                  {answers.site !== "Oui" && <li>• Créer un <strong>site vitrine ou tunnel de vente</strong> pour transformer vos visiteurs en prospects.</li>}
                  {answers.pub !== "Oui" && <li>• Tester une première campagne <strong>Meta Ads locale</strong> pour générer rapidement des leads qualifiés.</li>}
                  <li>• Objectif identifié : <strong>{answers.objectif}</strong>. Plan d'action sur-mesure proposé après échange.</li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="text-center text-sm text-muted-foreground">Échangeons pour transformer ces axes en résultats concrets.</p>
                <WhatsAppButton label="Discutons de votre projet" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-[color:var(--turquoise)] focus:outline-none"
      />
    </label>
  );
}
