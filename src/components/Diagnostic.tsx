import { useState } from "react";
import { ChevronDown, Check, CheckCircle2, Loader2 } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { submitToFormspree } from "@/lib/formspree";

type Step = "form" | "questions" | "sending" | "result" | "error";

const questions = [
  { key: "gbp", label: "Disposez-vous d'une fiche Google Business ?", options: ["Oui", "Non", "Je ne sais pas"] },
  { key: "reseaux", label: "Publiez-vous régulièrement sur vos réseaux sociaux ?", options: ["Oui", "Non", "Occasionnellement"] },
  { key: "site", label: "Possédez-vous un site internet ?", options: ["Oui", "Non"] },
  { key: "pub", label: "Avez-vous déjà réalisé des campagnes publicitaires ?", options: ["Oui", "Non"] },
];

const OBJECTIFS = [
  "Plus de visibilité",
  "Plus de clients",
  "Améliorer ma fiche Google Business Profile",
  "Créer un site internet",
  "Lancer de la publicité digitale",
];

const OUTILS = ["Facebook", "Instagram", "Google Business Profile", "Site internet", "Aucun"];

type LeadInfo = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  activite: string;
  objectifs: string[];
  outils: string[];
};

export function Diagnostic() {
  const [step, setStep] = useState<Step>("form");
  const [lead, setLead] = useState<LeadInfo | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const sendLead = async (finalAnswers: Record<string, string>) => {
    if (!lead) return;
    setStep("sending");
    try {
      await submitToFormspree(
        {
          prenom: lead.prenom,
          nom: lead.nom,
          email: lead.email,
          telephone: lead.telephone,
          activite: lead.activite,
          objectifs: lead.objectifs.join(", "),
          outils: lead.outils.join(", "),
          reponse_google_business: finalAnswers.gbp ?? "",
          reponse_reseaux_sociaux: finalAnswers.reseaux ?? "",
          reponse_site_internet: finalAnswers.site ?? "",
          reponse_publicite: finalAnswers.pub ?? "",
        },
        `Nouveau diagnostic — ${lead.prenom} ${lead.nom}`
      );
      setStep("result");
    } catch {
      setStep("error");
    }
  };

  return (
    <section id="diagnostic" className="bg-[color:var(--cream)] py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="mb-10 text-center">
          <span className="font-script text-[1.75rem] md:text-3xl text-[color:var(--turquoise)]">Offert</span>
          <h2 className="mt-2 text-balance text-3xl text-foreground sm:text-4xl md:text-5xl">
            Recevez votre mini diagnostic visibilité gratuit
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
            Découvrez les points forts et les axes d'amélioration de votre présence digitale.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:p-6 md:p-10">
          {step === "form" && (
            <PreForm
              onSubmit={(data) => {
                setLead(data);
                setStep("questions");
              }}
            />
          )}

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
                      {q.options.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
              ))}
              <div className="flex justify-center pt-2">
                <button
                  disabled={Object.keys(answers).length < questions.length}
                  onClick={() => sendLead(answers)}
                  className="rounded-full bg-foreground px-8 py-3.5 font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-40"
                >
                  Envoyer mon diagnostic
                </button>
              </div>
            </div>
          )}

          {step === "sending" && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Loader2 className="h-10 w-10 animate-spin text-[color:var(--turquoise)]" />
              <p className="mt-4 text-sm text-muted-foreground">Envoi en cours…</p>
            </div>
          )}

          {step === "result" && (
            <div className="space-y-6">
              <div className="rounded-2xl bg-[image:var(--gradient-soft)] p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-[color:var(--turquoise)]" />
                <h3 className="mt-3 text-2xl text-foreground">Merci pour votre demande.</h3>
                <p className="mx-auto mt-3 max-w-md text-balance text-sm text-foreground/80">
                  Votre guide va vous être envoyé personnellement après vérification de votre demande.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="text-balance text-center text-sm text-muted-foreground">
                  Envie d'aller plus vite ? Échangeons directement.
                </p>
                <WhatsAppButton label="Discutons de votre projet" />
              </div>
            </div>
          )}

          {step === "error" && (
            <div className="space-y-4 py-8 text-center">
              <p className="text-foreground">Une erreur est survenue lors de l'envoi.</p>
              <p className="text-sm text-muted-foreground">Vous pouvez réessayer ou nous contacter directement sur WhatsApp.</p>
              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={() => sendLead(answers)}
                  className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
                >
                  Réessayer
                </button>
                <WhatsAppButton label="Écrire sur WhatsApp" />
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

function PreForm({ onSubmit }: { onSubmit: (data: LeadInfo) => void }) {
  const [objectifs, setObjectifs] = useState<string[]>([]);
  const [outils, setOutils] = useState<string[]>([]);

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) =>
    setList(list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);

  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        onSubmit({
          prenom: String(fd.get("prenom") ?? ""),
          nom: String(fd.get("nom") ?? ""),
          email: String(fd.get("email") ?? ""),
          telephone: String(fd.get("tel") ?? ""),
          activite: String(fd.get("activite") ?? ""),
          objectifs,
          outils,
        });
      }}
    >
      <Input label="Prénom" name="prenom" required />
      <Input label="Nom" name="nom" required />
      <Input label="Email" name="email" type="email" required />
      <Input label="Téléphone" name="tel" type="tel" required />
      <div className="md:col-span-2">
        <Input label="Activité professionnelle" name="activite" required />
      </div>

      <div className="md:col-span-2">
        <span className="text-sm font-medium text-foreground">
          Quels sont vos objectifs ? <span className="text-muted-foreground">(plusieurs choix possibles)</span>
        </span>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {OBJECTIFS.map((o) => {
            const active = objectifs.includes(o);
            return (
              <label
                key={o}
                className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3 py-2.5 text-sm transition-all ${
                  active
                    ? "border-[color:var(--turquoise)] bg-[image:var(--gradient-soft)] text-foreground"
                    : "border-border bg-background text-foreground/80 hover:border-[color:var(--turquoise)]/50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => toggle(objectifs, setObjectifs, o)}
                  className="sr-only"
                />
                <span
                  className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-md border ${
                    active ? "border-[color:var(--turquoise)] bg-[color:var(--turquoise)]" : "border-border"
                  }`}
                >
                  {active && <Check className="h-3 w-3 text-white" />}
                </span>
                <span className="leading-tight">{o}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="md:col-span-2">
        <span className="text-sm font-medium text-foreground">
          Quels outils utilisez-vous actuellement ? <span className="text-muted-foreground">(plusieurs choix possibles)</span>
        </span>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {OUTILS.map((o) => {
            const active = outils.includes(o);
            return (
              <label
                key={o}
                className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3 py-2.5 text-sm transition-all ${
                  active
                    ? "border-[color:var(--turquoise)] bg-[image:var(--gradient-soft)] text-foreground"
                    : "border-border bg-background text-foreground/80 hover:border-[color:var(--turquoise)]/50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => toggle(outils, setOutils, o)}
                  className="sr-only"
                />
                <span
                  className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-md border ${
                    active ? "border-[color:var(--turquoise)] bg-[color:var(--turquoise)]" : "border-border"
                  }`}
                >
                  {active && <Check className="h-3 w-3 text-white" />}
                </span>
                <span className="leading-tight">{o}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="md:col-span-2 flex justify-center pt-2">
        <button
          type="submit"
          disabled={objectifs.length === 0}
          className="rounded-full bg-[image:var(--gradient-primary)] px-8 py-3.5 font-medium text-white shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 disabled:opacity-40"
        >
          Commencer le diagnostic
        </button>
      </div>
    </form>
  );
}
