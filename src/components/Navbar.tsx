import { useState } from "react";
import { Menu, X } from "lucide-react";
import cathAvatar from "@/assets/cath-avatar.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pour-qui", label: "Pour qui" },
  { href: "#resultats", label: "Résultats" },
  { href: "#qui-suis-je", label: "Qui suis-je" },
  { href: "#diagnostic", label: "Diagnostic" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-baseline gap-1.5">
          <span className="font-display text-2xl font-semibold text-foreground">Cath</span>
          <span className="font-script text-2xl text-[color:var(--turquoise)]">& you</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02] lg:inline-flex"
        >
          Discutons
        </a>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-muted">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
