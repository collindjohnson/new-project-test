import Image from "next/image";

const ZOOM_ICON =
  "http://localhost:3845/assets/541d8dd14ac67954b1b6311a2ca95747a04d60d4.svg";

const ROW_ONE = [
  {
    name: "Seamless.AI",
    src: "http://localhost:3845/assets/00089aa0b5210aea90aa36d8bb94b1d8e5034446.png",
  },
  {
    name: "Lightdash",
    src: "http://localhost:3845/assets/8a0d768d845119c71bde295f4fadfb164dc6020a.png",
  },
  {
    name: "N3XT",
    src: "http://localhost:3845/assets/6750ddf239d43fdc58957d4ed8bdf9c2c30489a7.png",
  },
  {
    name: "datawizz",
    src: "http://localhost:3845/assets/01dc734bcd831a6bbe68a9d6087f3d3a2ec2601e.png",
  },
  {
    name: "Gan.AI",
    src: "http://localhost:3845/assets/d5b1215c176d97e0bc9640560413fb0bbfae6040.png",
  },
  {
    name: "Ethena",
    src: "http://localhost:3845/assets/5719a84bacbcb3730fd909f6f10ebe084942e251.png",
  },
];

const ROW_TWO = [
  {
    name: "IDLI",
    src: "http://localhost:3845/assets/261135140ab219a8ec26d668b23b8e782d14477c.png",
  },
  {
    name: "Quotient",
    src: "http://localhost:3845/assets/05991b8a459f65849d215c4bdabb1cf74dab6e3f.png",
  },
  {
    name: "iClosed",
    src: "http://localhost:3845/assets/02e7732aa76aa10cf3f40ec186317072c79db210.png",
  },
  {
    name: "workamajig",
    src: "http://localhost:3845/assets/583af569f328223a0b2d4f7530e271f19cf95985.png",
  },
  {
    name: "SPATIAL",
    src: "http://localhost:3845/assets/d1c75c0f693c5cee3ecbeb5a8a75bf0569e441c1.png",
  },
  {
    name: "BALLOGY",
    src: "http://localhost:3845/assets/2e4f8fa1649d2e383ef9c5a55e73a4a03d36fbac.png",
  },
  {
    name: "zave.it",
    src: "http://localhost:3845/assets/f06f5d5fe8da74af39684ecb210eefc877f4ce61.png",
  },
];

function LogoCell({ name, src }: { name: string; src: string }) {
  return (
    <div className="relative flex items-center justify-center bg-white border-b border-l border-black/10 h-20 group">
      {/* Zoom icon */}
      <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity">
        <Image src={ZOOM_ICON} alt="" width={14} height={14} unoptimized />
      </div>

      {/* Logo */}
      <div className="relative w-[99px] h-[30px]">
        <Image
          src={src}
          alt={name}
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  );
}

export default function LogoStrip() {
  return (
    <section className="border-t border-b border-black/10">
      {/* Label */}
      <div className="max-w-[1160px] mx-auto px-5">
        <p className="font-mono text-[10px] font-normal text-storm-gray uppercase tracking-[0.5px] text-center py-4">
          Trusted by 100+ B2B companies across AI, SaaS, and Fintech.
        </p>
      </div>

      {/* Row 1 — 6 logos */}
      <div className="border-t border-black/10">
        <div className="max-w-[1160px] mx-auto grid grid-cols-6 border-r border-black/10">
          {ROW_ONE.map((logo) => (
            <LogoCell key={logo.name} name={logo.name} src={logo.src} />
          ))}
        </div>
      </div>

      {/* Row 2 — 7 logos */}
      <div>
        <div className="max-w-[1160px] mx-auto grid grid-cols-7 border-r border-black/10">
          {ROW_TWO.map((logo) => (
            <LogoCell key={logo.name} name={logo.name} src={logo.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
