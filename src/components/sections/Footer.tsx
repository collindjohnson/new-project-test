import Image from "next/image";
import Link from "next/link";

const LOGO_SRC =
  "http://localhost:3845/assets/aa1ada9c976e24166282d910e5ca5dc4b515db46.png";

const WEBFLOW_BADGE =
  "http://localhost:3845/assets/8a64eada154d82964dff8cff210fb6c67d36b5b9.svg";

// Framer logo icon
const FRAMER_ICON =
  "http://localhost:3845/assets/1bc5b39fc2ae319cd7efaf12da6f7ceb0a33cc42.svg";

const socialLinks = [
  { label: "Dribbble", href: "#" },
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Cal.com", href: "#" },
];

function StatusBar() {
  return (
    <div className="border-b border-gallery">
      <div className="max-w-[1080px] mx-auto px-5 py-4 flex items-center justify-between">
        <div className="flex items-center w-[154px]">
          <span className="font-mono text-[10px] uppercase text-storm-gray leading-3">
            Gdansk |&nbsp;
          </span>
          <span className="font-mono text-[10px] text-storm-gray leading-3">
            10:57:15 AM GMT+1
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-jade" />
          <span className="font-mono text-[11px] font-medium text-storm-gray tracking-[-0.3px]">
            BOOKING FOR Q1&apos;26
          </span>
        </div>

        <div className="flex items-center justify-end w-[154px]">
          <span className="font-mono text-[10px] uppercase text-scorpion leading-3">
            NYC |&nbsp;
          </span>
          <span className="font-mono text-[10px] text-storm-gray leading-3">
            4:57:15 AM EST
          </span>
        </div>
      </div>
    </div>
  );
}

function PartnerBar() {
  return (
    <div className="border-b border-gallery">
      <div className="max-w-[1240px] mx-auto px-5 py-2.5 flex items-center justify-between">
        {/* Webflow Premium Partner badge */}
        <div className="relative h-[23px] w-[127px]">
          <Image
            src={WEBFLOW_BADGE}
            alt="Webflow Premium Partner"
            fill
            className="object-contain object-left"
            unoptimized
          />
        </div>

        {/* Official Framer Expert badge */}
        <div className="flex items-center gap-1.5 bg-white rounded-lg px-2 py-[7px] border border-gallery">
          <div className="relative w-2 h-3 shrink-0">
            <Image
              src={FRAMER_ICON}
              alt="Framer"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <span className="text-[10.3px] font-bold text-black font-sans tracking-[-0.11px]">
            Official Framer Expert
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <StatusBar />
      <PartnerBar />

      {/* Bottom copyright row */}
      <div className="max-w-[1240px] mx-auto px-5 h-20 flex items-center justify-between">
        {/* Copyright */}
        <div className="w-[300px]">
          <p className="font-mono text-[10px] uppercase text-storm-gray leading-3">
            © Designme 2026. All rights reserved.
          </p>
        </div>

        {/* Logo */}
        <Link href="/" className="relative w-[120px] h-10 shrink-0">
          <Image
            src={LOGO_SRC}
            alt="Designme"
            fill
            className="object-contain"
            unoptimized
          />
        </Link>

        {/* Social links */}
        <div className="flex items-center gap-6 w-[300px] justify-end">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-[10px] uppercase text-storm-gray leading-3 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
