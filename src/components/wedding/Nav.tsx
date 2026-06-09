import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#details", label: "Details" },
    { href: "#venues", label: "Venues" },
    { href: "#gallery", label: "Gallery" },
    { href: "#blessings", label: "Blessings" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-md" : "py-5"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(180deg, rgba(3,16,42,0.75), rgba(3,16,42,0))"
          : "transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#hero" className="font-display text-lg tracking-[0.4em] text-gold-bright">
          O · M
        </a>
        <ul className="hidden gap-8 text-xs uppercase tracking-[0.3em] text-ivory/70 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-gold-bright">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#details"
          className="hidden rounded-full border border-gold/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ivory transition hover:bg-gold/10 sm:inline-block"
        >
          Save the Date
        </a>
      </div>
    </nav>
  );
}