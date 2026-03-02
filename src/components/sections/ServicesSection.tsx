import Image from "next/image";

// ── Service card icons (red SVG per service) ───────────────────────────────
const ICON_MVPS =
  "http://localhost:3845/assets/1f4dc1805dd28c7a5a7f4a6a9a9539084985873b.svg";
const ICON_CUSTOM_DEV =
  "http://localhost:3845/assets/683e663a6d1901d924eacf5b5faa55a204835cb3.svg";
const ICON_WEBSITE =
  "http://localhost:3845/assets/f5dbf8cc4e0b76d1761e53d6e805987064201ef2.svg";
const ICON_BRAND =
  "http://localhost:3845/assets/c8f80d53038b11487e3b7d5820ad8c039fcfd1de.svg";
const ICON_3D =
  "http://localhost:3845/assets/96888a544d3cb139780459d69c37d75481f026ee.svg";
const ICON_PITCH =
  "http://localhost:3845/assets/5e4ca2adef902d1a4f25a6d3feb150a078470a42.svg";

// ── Tech stack icons ────────────────────────────────────────────────────────
const TECH_ICONS = [
  { src: "http://localhost:3845/assets/f1c03cda9e292aeea08398bc9b759134454042ef.svg", alt: "Figma", type: "svg" as const },
  { src: "http://localhost:3845/assets/afa8ae807a50d3fc135e85be468b76e4af19a729.svg", alt: "Webflow", type: "svg" as const },
  { src: "http://localhost:3845/assets/32b680d82c4a10d46533c705373384e4533d4bf7.svg", alt: "Framer", type: "svg" as const },
  { src: "http://localhost:3845/assets/a303aac4a9982039a901f1cdbd984fd080f28eb9.svg", alt: "Next.js", type: "svg" as const },
  { src: "http://localhost:3845/assets/6405cdcb307adaefd63cbb98c3e16a48771e73a2.svg", alt: "React", type: "svg" as const },
  { src: "http://localhost:3845/assets/57b02b1b1839e73a2fa524710755d6ec78fc7fee.png", alt: "ChatGPT", type: "png" as const },
  { src: "http://localhost:3845/assets/96e1e9f2ad4fd9d092a39e446323be6ba9485a59.png", alt: "Tech tool", type: "png" as const },
  { src: "http://localhost:3845/assets/f4c34c7a6de0244791acd4a114462f67b61c4ab5.svg", alt: "Tool", type: "svg" as const },
  { src: "http://localhost:3845/assets/3032f772ee41f6cfce9984168986a5896cbb38ac.svg", alt: "Tool", type: "svg" as const },
  { src: "http://localhost:3845/assets/c2b37cbf6e052f6dbbc9f40f4e1a5d31c349004f.svg", alt: "Tool", type: "svg" as const },
  { src: "http://localhost:3845/assets/102e53b520e20572aa9baf436e9270076ff36a8e.svg", alt: "Tool", type: "svg" as const },
  { src: "http://localhost:3845/assets/d13339fbbbaf212d52be028526aba14e0a5cfbfb.svg", alt: "Tool", type: "svg" as const },
];

const SERVICES = [
  { icon: ICON_MVPS, label: "MVPs & product design" },
  { icon: ICON_CUSTOM_DEV, label: "Custom product development" },
  { icon: ICON_WEBSITE, label: "Website design & dev" },
  { icon: ICON_BRAND, label: "Brand identity" },
  { icon: ICON_3D, label: "3D Design & Motion" },
  { icon: ICON_PITCH, label: "Pitch Decks & Collateral" },
];

function ServiceCard({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col justify-end gap-2.5 min-h-[180px]">
      <div className="relative w-6 h-6 shrink-0">
        <Image src={icon} alt="" fill className="object-contain" unoptimized />
      </div>
      <p className="text-[16px] font-normal text-[#2B2F38] leading-6 tracking-[-0.1px] font-sans">
        {label}
      </p>
    </div>
  );
}

function TechIcon({ src, alt, type }: (typeof TECH_ICONS)[number]) {
  return (
    <div className="bg-white rounded-xl w-14 h-14 shrink-0 flex items-center justify-center overflow-hidden">
      {type === "png" ? (
        <div className="relative w-9 h-[30px]">
          <Image src={src} alt={alt} fill className="object-contain" unoptimized />
        </div>
      ) : (
        <div className="relative w-6 h-6">
          <Image src={src} alt={alt} fill className="object-contain" unoptimized />
        </div>
      )}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#FAFAFA] py-[100px]">
      <div className="max-w-[960px] mx-auto px-5 flex flex-col gap-[70px] items-center">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 w-full">
          <p className="font-mono text-[11px] font-normal text-[#71717A] uppercase leading-3 tracking-normal">
            our services
          </p>
          <h2 className="text-[37.3px] font-bold text-charade text-center leading-[44px] tracking-[-0.5px] font-sans">
            One team, full stack
          </h2>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-3 gap-5 w-full">
          {SERVICES.map((service) => (
            <ServiceCard key={service.label} icon={service.icon} label={service.label} />
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-col items-center gap-5 w-full">
          <p className="font-mono text-[11px] font-normal text-[#71717A] uppercase leading-3">
            Our tech stack
          </p>
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            {TECH_ICONS.map((icon, i) => (
              <TechIcon key={i} {...icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
