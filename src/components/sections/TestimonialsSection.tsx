import Image from "next/image";

// ── Assets ────────────────────────────────────────────────────────────────────
// RecruitU logo (white — used in the active testimonial header)
const IMG_RECRUITU_WHITE =
  "http://localhost:3845/assets/b8ae49b0681801520fc376fcb8ed7ae1c60464b1.png";

// Brooks Gammill avatar
const IMG_BROOKS =
  "http://localhost:3845/assets/13c743a4a2744c3f528c5a7825360e466f36f0a3.png";

// Gold badge / seal sticker
const IMG_BADGE =
  "http://localhost:3845/assets/9d16bc33058369b7f4e8bf3eaac6e3a048fdb3ef.png";

// Tab logos (rendered black via CSS mask)
const IMG_LIGHTDASH =
  "http://localhost:3845/assets/c6d6363b6a6f614289928ada0bb344e2af613109.png";
const IMG_RECRUITU_DARK =
  "http://localhost:3845/assets/9ac900ba7010a83e1f3e5e019cb6f822328c747b.png";

// SVG logo assets for Seamless.AI (variant 28) – two path images masked together
const IMG_SEAMLESS_V1 =
  "http://localhost:3845/assets/4cca228aed99e726b2566cd8972f8cd2edba20dd.svg";
const IMG_SEAMLESS_V2 =
  "http://localhost:3845/assets/26a4f146aaac5625a9952e797b5019793378f650.svg";

// N3XT (variant 29)
const IMG_N3XT =
  "http://localhost:3845/assets/eac1b2e8289f15edfb04ece6c49567af0da1f771.svg";

// SPATIAL (variant 30) – two path images masked together
const IMG_SPATIAL_V1 =
  "http://localhost:3845/assets/8b2887590a6cc14c4efcb28a89741ce70805e1c5.svg";
const IMG_SPATIAL_V2 =
  "http://localhost:3845/assets/1befee7884c39fc1ff9cd4ec1d45bf80c4673602.svg";

// ── Tab definitions ───────────────────────────────────────────────────────────
function LightdashLogo() {
  return (
    <div className="relative h-[21px] w-[99px]">
      <Image
        src={IMG_LIGHTDASH}
        alt="Lightdash"
        fill
        className="object-contain"
        unoptimized
      />
    </div>
  );
}

function RecruitULogo({ white = false }: { white?: boolean }) {
  return (
    <div
      className="relative h-[14px] w-[70px]"
      style={
        white
          ? { filter: "brightness(0) invert(1)" }
          : {}
      }
    >
      <Image
        src={IMG_RECRUITU_DARK}
        alt="RecruitU"
        fill
        className="object-contain"
        unoptimized
      />
    </div>
  );
}

function SeamlessLogo() {
  return (
    <div className="relative h-[22px] w-[102px]">
      <div className="absolute inset-0">
        <Image src={IMG_SEAMLESS_V1} alt="" fill className="object-contain" unoptimized />
      </div>
      <div className="absolute inset-0">
        <Image src={IMG_SEAMLESS_V2} alt="" fill className="object-contain" unoptimized />
      </div>
      <span className="sr-only">Seamless.AI</span>
    </div>
  );
}

function N3xtLogo() {
  return (
    <div className="relative h-[16px] w-[57px]">
      <Image src={IMG_N3XT} alt="N3XT" fill className="object-contain" unoptimized />
    </div>
  );
}

function SpatialLogo() {
  return (
    <div className="relative h-[17px] w-[82px]">
      <div className="absolute inset-0">
        <Image src={IMG_SPATIAL_V1} alt="" fill className="object-contain" unoptimized />
      </div>
      <div className="absolute inset-0">
        <Image src={IMG_SPATIAL_V2} alt="" fill className="object-contain" unoptimized />
      </div>
      <span className="sr-only">SPATIAL</span>
    </div>
  );
}

const TABS = [
  { name: "Lightdash", logo: <LightdashLogo />, bg: "bg-[#F5F5F5]" },
  { name: "RecruitU", logo: <RecruitULogo />, bg: "bg-[#EDEDED]", active: true },
  { name: "Seamless.AI", logo: <SeamlessLogo />, bg: "bg-[#F5F5F5]" },
  { name: "N3XT", logo: <N3xtLogo />, bg: "bg-[#F5F5F5]" },
  { name: "SPATIAL", logo: <SpatialLogo />, bg: "bg-[#F5F5F5]" },
];

export default function TestimonialsSection() {
  return (
    <>
      {/* Section divider */}
      <div className="border-t border-black/5" />

      <section id="testimonials" className="bg-[#FAFAFA] py-[100px]">
        <div className="max-w-[960px] mx-auto px-5">
          {/* Heading */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <p className="font-mono text-[11px] font-normal text-[#71717A] uppercase leading-3">
              why choose us
            </p>
            <div className="flex flex-col items-center">
              <h2 className="text-[37.3px] font-bold text-charade text-center leading-[44px] tracking-[-0.5px] font-sans whitespace-nowrap">
                We&apos;ve helped 100+ companies
              </h2>
              <h2 className="text-[36.6px] font-bold text-charade text-center leading-[44px] tracking-[-0.5px] font-sans whitespace-nowrap">
                design, ship, and raise.
              </h2>
            </div>
            <p className="text-[13.6px] font-normal text-[#1E2633] text-center leading-[22.5px] tracking-[-0.1px] font-sans opacity-80">
              Hear it from founders who&apos;ve raised, scaled, and shipped with us.
            </p>
          </div>

          {/* Testimonial card */}
          <div className="relative rounded-[24px] overflow-hidden border border-white shadow-sm">
            {/* Gold badge — top-right corner */}
            <div className="absolute top-0 right-0 translate-x-[28px] -translate-y-[28px] w-[124px] h-[124px] z-10 rotate-[10deg]">
              <Image
                src={IMG_BADGE}
                alt="Award badge"
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Quote area */}
            <div className="bg-white px-8 py-20 flex flex-col gap-6 items-center relative">
              {/* Green "Raised" badge */}
              <div className="absolute top-5 left-5 bg-[rgba(224,242,211,0.6)] px-3 py-1 rounded-[4px]">
                <span className="text-[13px] font-semibold text-[#224F00] leading-[19.5px] tracking-[0.2px] whitespace-nowrap">
                  Raised $5M Seed
                </span>
              </div>

              {/* Active logo — RecruitU white */}
              <div className="h-8 flex items-center justify-center">
                <div className="relative h-[16px] w-[78px]">
                  <Image
                    src={IMG_RECRUITU_WHITE}
                    alt="RecruitU"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* Quote text */}
              <div className="max-w-[590px] text-center">
                <p className="text-[15px] leading-[22.5px] tracking-[0.2px] text-black font-sans">
                  <strong className="font-bold">
                    &ldquo;Their versatility and expertise are unmatched.
                  </strong>{" "}
                  Working with DesignMe has been incredible. They{" "}
                  <strong className="font-bold">
                    quickly grasped our business model and vision
                  </strong>
                  , transforming our landing page, creating pitch decks, and more.&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-2.5">
                <div className="relative w-11 h-11 rounded-[10px] overflow-hidden shrink-0">
                  <Image
                    src={IMG_BROOKS}
                    alt="Brooks Gammill"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-black leading-[22px] tracking-[-0.32px]">
                    Brooks Gammill
                  </span>
                  <span className="text-[14px] font-medium text-[#282C36] leading-[22.4px] opacity-70 font-sans">
                    Co-Founder
                  </span>
                </div>
              </div>
            </div>

            {/* Company tabs strip */}
            <div className="flex">
              {TABS.map((tab) => (
                <div
                  key={tab.name}
                  className={`flex-1 ${tab.bg} p-8 flex flex-col items-center justify-center relative`}
                >
                  {/* White border overlay */}
                  <div className="absolute inset-0 border border-white pointer-events-none" />

                  {/* Logo */}
                  <div className="h-8 flex items-center justify-center">
                    {tab.logo}
                  </div>

                  {/* Active indicator bar */}
                  {tab.active && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
