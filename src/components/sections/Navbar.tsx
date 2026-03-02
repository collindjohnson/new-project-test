import Image from "next/image";
import Link from "next/link";

const LOGO_SRC =
  "http://localhost:3845/assets/aa1ada9c976e24166282d910e5ca5dc4b515db46.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials", active: true },
  { label: "FAQs", href: "#faqs" },
  { label: "Work", href: "#work", active: true },
];

export default function Navbar() {
  return (
    <header className="relative bg-white border-b border-black/20 z-50">
      <div className="max-w-[1260px] mx-auto px-5 h-[53px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative block w-[120px] h-[40px] shrink-0">
          <Image
            src={LOGO_SRC}
            alt="Designme"
            fill
            className="object-contain object-left"
            unoptimized
          />
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative flex items-center justify-center w-24 h-[53px] text-[12.9px] font-normal text-black font-sans tracking-normal transition-opacity hover:opacity-100 group`}
            >
              <span>{link.label}</span>
              <span
                className={`absolute bottom-0 left-0 right-0 h-px bg-black transition-opacity ${
                  link.active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA button */}
        <div className="shrink-0">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-[19px] py-3 h-[42px] bg-wild-sand rounded-[4px] text-[13px] font-medium text-black font-sans tracking-[0.141px] shadow-[0px_0.482px_0.482px_-1.25px_rgba(0,0,0,0.18),0px_1.831px_1.831px_-2.5px_rgba(0,0,0,0.16),0px_8px_8px_-3.75px_rgba(0,0,0,0.06)] hover:bg-[#efefef] transition-colors"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </header>
  );
}
