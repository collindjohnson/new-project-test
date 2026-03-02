import Image from "next/image";

// ── Project screenshot assets ─────────────────────────────────────────────────
const IMG_CARD_1 =
  "http://localhost:3845/assets/9471d15bbba0f611cd8e31ede9a4705b3310ed68.png";
const IMG_CARD_2 =
  "http://localhost:3845/assets/e79056dede4f6967e985a04d721d7e1f0a57ffd4.png";
const IMG_CARD_3 =
  "http://localhost:3845/assets/e2137d6dab7cb356b7e21d4dc9a7a9ceca72fdcb.png";
const IMG_CARD_4 =
  "http://localhost:3845/assets/2ef1c5b668b257bb9bfd4d6d76de4faf8e4b12d8.png";

interface ProjectCard {
  image: string;
  alt: string;
  caption: string;
  raisedLabel: string;
  // percentage-based inset for the image within the card: [top, right, bottom, left]
  inset: string;
}

const PROJECTS: ProjectCard[] = [
  {
    image: IMG_CARD_1,
    alt: "N3XT dashboard",
    caption: "N3XT · Brand · Product · Website · Fintech · ",
    raisedLabel: "$72M raised",
    inset: "24.04% 5% 0 5%",
  },
  {
    image: IMG_CARD_2,
    alt: "N3XT brand visuals",
    caption: "N3XT · Brand · Product · Website · Fintech · ",
    raisedLabel: "$72M raised",
    inset: "22.46% 15% 0 15%",
  },
  {
    image: IMG_CARD_3,
    alt: "N3XT product screens",
    caption: "N3XT · Brand · Product · Website · Fintech · ",
    raisedLabel: "$72M raised",
    inset: "17.35% 8.5% 17.34% 8.5%",
  },
  {
    image: IMG_CARD_4,
    alt: "N3XT analytics dashboard",
    caption: "N3XT · Brand · Product · Website · Fintech · ",
    raisedLabel: "$72M raised",
    inset: "20.1% 12% 0 12%",
  },
];

function ProjectCard({ image, alt, caption, raisedLabel, inset }: ProjectCard) {
  return (
    <div className="relative bg-[#FAFAFA] h-[680px] overflow-hidden flex-1 min-w-0">
      {/* Screenshot image */}
      <div
        className="absolute overflow-hidden rounded-[10px]"
        style={{ inset }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Caption tag */}
      <div className="absolute bottom-5 left-5 bg-white rounded-[4px] px-1.5 py-[3.25px]">
        <p className="font-mono text-[12px] font-normal leading-[14.4px] uppercase whitespace-nowrap">
          <span className="text-[#6b6b6b]">{caption}</span>
          <span className="text-[#FF3C00]">{raisedLabel}</span>
        </p>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <>
      {/* Section divider */}
      <div className="border-t border-black/5" />

      <section id="work" className="bg-white pt-[60px] pb-5">
        {/* Heading — centered */}
        <div className="flex flex-col items-center gap-[10px] mb-[30px]">
          <p className="font-mono text-[11px] font-normal text-[#71717A] uppercase leading-3">
            selected work
          </p>
          <h2 className="text-[35.9px] font-black text-charade text-center leading-[44px] tracking-[-0.5px] font-sans">
            Products we&apos;ve shipped
          </h2>
        </div>

        {/* 2×2 card grid — full-width with 20px padding + gap */}
        <div className="grid grid-cols-2 gap-5 px-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
