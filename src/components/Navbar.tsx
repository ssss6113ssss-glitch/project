import { useEffect, useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const LINKS = [
  { label: 'Heritage', href: '#heritage' },
  { label: 'Saffron', href: '#saffron' },
  { label: 'Confectionery', href: '#confectionery' },
  { label: 'Rugs', href: '#rugs' },
  { label: 'Checkout', href: '#checkout' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, open } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-espresso-950/85 backdrop-blur-xl border-b border-saffron-500/15 py-2'
            : 'bg-transparent py-3.5'
        }`}
      >
        <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-saffron-500/40 bg-espresso-800/60 transition-transform duration-500 group-hover:rotate-180">
              <SaffronMark className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl font-semibold tracking-wide text-cream-50">
                Persian Treasures
              </span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-saffron-400/80">
                Est. Khorasan
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-5 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm font-medium tracking-wide text-cream-200 transition-colors hover:text-saffron-300"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={open}
              className="group relative flex items-center gap-2 rounded-full border border-saffron-500/30 bg-espresso-800/40 px-4 py-2 text-sm font-medium text-cream-100 transition-all hover:border-saffron-400/60 hover:bg-espresso-700/60"
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingBag className="h-4 w-4 text-saffron-400" />
              <span className="hidden sm:inline">Cart</span>
              {count > 0 && (
                <span className="grid h-5 min-w-5 place-items-center rounded-full bg-gold-gradient px-1 text-[11px] font-bold text-espresso-950">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-saffron-500/30 text-cream-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="mx-auto max-w-8xl space-y-1 px-5 pb-3.5 pt-3 sm:px-8">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl border border-saffron-500/10 bg-espresso-900/60 px-5 py-2 font-serif text-lg text-cream-100 transition-colors hover:border-saffron-400/40 hover:text-saffron-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export function SaffronMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <path d="M16 4c-2 4-2 8 0 12c2-4 2-8 0-12z" fill="#e8a838" />
      <path d="M16 16c-5 2-8 5-9 9c5-1 8-4 9-9z" fill="#c9352f" />
      <path d="M16 16c5 2 8 5 9 9c-5-1-8-4-9-9z" fill="#c9352f" />
      <path d="M16 10v8" stroke="#7a4a1f" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
