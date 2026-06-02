export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgvqljr";

export async function submitToFormspree(payload: Record<string, unknown>, subject: string) {
  const body = {
    ...payload,
    _subject: subject,
    submitted_at: new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
  };
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Formspree error ${res.status}`);
  return res.json().catch(() => ({}));
}
