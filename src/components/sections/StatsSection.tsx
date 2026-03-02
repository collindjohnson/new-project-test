// ── Pixel-art dot icons (recreated from Figma absolute-positioned divs) ───────

function Dot({
  x,
  y,
  opacity = 1,
}: {
  x: number;
  y: number;
  opacity?: number;
}) {
  return (
    <div
      className="absolute w-[15px] h-[15px] bg-[#FD013A]"
      style={{ left: x, top: y, opacity }}
    />
  );
}

/** ROI-Focused: plus/cross shape, 95×74 container */
function RoiIcon() {
  return (
    <div className="relative w-[95px] h-[74px]">
      <Dot x={20} y={19} opacity={0.4} />
      <Dot x={38} y={19} />
      <Dot x={57} y={19} opacity={0.4} />
      <Dot x={38} y={0} opacity={0.4} />
      <Dot x={38} y={38} />
      <Dot x={38} y={59} />
    </div>
  );
}

/** Partnership Model: 3-col block grid, 53×72 container */
function PartnershipIcon() {
  return (
    <div className="relative w-[53px] h-[72px]">
      <Dot x={0} y={0} />
      <Dot x={19} y={0} />
      <Dot x={38} y={0} />
      <Dot x={0} y={19} />
      <Dot x={19} y={38} opacity={0.4} />
      <Dot x={0} y={38} />
      <Dot x={38} y={38} />
      <Dot x={19} y={57} />
      <Dot x={38} y={57} />
      <Dot x={0} y={57} />
    </div>
  );
}

/** Stage-Specific: cross with fades, 95×74 container */
function StageIcon() {
  return (
    <div className="relative w-[95px] h-[74px]">
      {/* Center column */}
      <Dot x={37} y={0} opacity={0.4} />
      <Dot x={37} y={19} />
      <Dot x={37} y={38} opacity={0.4} />
      {/* Horizontal row at mid */}
      <Dot x={0} y={19} opacity={0.4} />
      <Dot x={19} y={19} opacity={0.1} />
      <Dot x={56} y={19} opacity={0.4} />
      <Dot x={75} y={19} opacity={0.1} />
    </div>
  );
}

/** Startup Speed: scattered cluster, 76×72 container */
function SpeedIcon() {
  return (
    <div className="relative w-[76px] h-[72px]">
      {/* Top row */}
      <Dot x={0} y={9} />
      <Dot x={19} y={10} opacity={0.4} />
      <Dot x={38} y={9} opacity={0.4} />
      <Dot x={57} y={9} opacity={0.4} />
      {/* Middle row */}
      <Dot x={0} y={28} opacity={0.4} />
      <Dot x={19} y={28} />
      <Dot x={38} y={28} opacity={0.4} />
      <Dot x={57} y={28} opacity={0.4} />
      {/* Bottom row */}
      <Dot x={0} y={47} />
      <Dot x={19} y={47} opacity={0.4} />
      <Dot x={38} y={47} opacity={0.4} />
      <Dot x={57} y={47} opacity={0.4} />
    </div>
  );
}

// ── Stat card data ────────────────────────────────────────────────────────────
interface StatCard {
  tag: string;
  tagColor: string;
  tagBg: string;
  icon: React.ReactNode;
  stat: [string, string]; // two-line headline
  desc: [string, string]; // two-line description
}

const STATS: StatCard[] = [
  {
    tag: "ROI-Focused",
    tagColor: "#096909",
    tagBg: "#F3E8FA",
    icon: <RoiIcon />,
    stat: ["+30% average", "demo conversion"],
    desc: [
      "Better product = better conversions.",
      "We design what sells.",
    ],
  },
  {
    tag: "Partnership Model",
    tagColor: "#A63232",
    tagBg: "#F3E8FA",
    icon: <PartnershipIcon />,
    stat: ["6+ months", "average engagement"],
    desc: [
      "We become an extension of your",
      "design & dev team.",
    ],
  },
  {
    tag: "Stage-Specific",
    tagColor: "#996917",
    tagBg: "#EBEBEB",
    icon: <StageIcon />,
    stat: ["65+ startups", "Seed to Series A"],
    desc: [
      "From MVP to fundable. We know",
      "what matters at your stage.",
    ],
  },
  {
    tag: "Startup Speed",
    tagColor: "#542173",
    tagBg: "#F3E8FA",
    icon: <SpeedIcon />,
    stat: ["4-8 weeks", "average delivery"],
    desc: [
      "From brief to live in weeks, not",
      "6-month agency timelines.",
    ],
  },
];

function StatCard({ tag, tagColor, tagBg, icon, stat, desc }: StatCard) {
  return (
    <div className="bg-white rounded-[20px] px-5 py-10 flex flex-col items-center gap-[30px] flex-1">
      {/* Tag badge */}
      <div
        className="px-3 py-[3px] rounded-[2px]"
        style={{ backgroundColor: tagBg }}
      >
        <span
          className="text-[13px] font-normal leading-[22.4px] tracking-[0.56px] whitespace-nowrap font-sans"
          style={{ color: tagColor }}
        >
          {tag}
        </span>
      </div>

      {/* Pixel icon */}
      <div className="flex items-center justify-center">{icon}</div>

      {/* Stat + description */}
      <div className="flex flex-col items-center gap-[10px] w-full">
        <div className="text-center">
          <p className="text-[26px] font-medium text-charade leading-[30.8px] tracking-[-0.5px] font-sans">
            {stat[0]}
          </p>
          <p className="text-[25.9px] font-medium text-charade leading-[30.8px] tracking-[-0.5px] font-sans">
            {stat[1]}
          </p>
        </div>
        <div className="text-center">
          <p className="text-[14.6px] font-normal text-[#3B4554] leading-[20.8px] font-sans">
            {desc[0]}
          </p>
          <p className="text-[14.6px] font-normal text-[#3B4554] leading-[20.8px] font-sans">
            {desc[1]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <>
      {/* Section divider */}
      <div className="border-t border-black/5" />

      <section className="bg-white py-[60px]">
        <div className="max-w-[980px] mx-auto px-5">
          {/* Heading */}
          <div className="flex flex-col items-center gap-4 mb-[60px]">
            <p className="font-mono text-[11px] font-normal text-[#71717A] uppercase leading-3">
              ready to move faster?
            </p>
            <h2 className="text-[37px] font-bold text-charade text-center leading-[44px] tracking-[-0.5px] font-sans">
              Stop waiting on design. Start shipping.
            </h2>
            <p className="text-[13.6px] font-normal text-[#1E2633] text-center leading-[22.5px] tracking-[-0.1px] font-sans opacity-80">
              Your roadmap won&apos;t wait. Neither do we. Here&apos;s what you get:
            </p>
          </div>

          {/* 2×2 stat cards */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-6">
              <StatCard {...STATS[0]} />
              <StatCard {...STATS[1]} />
            </div>
            <div className="flex gap-6">
              <StatCard {...STATS[2]} />
              <StatCard {...STATS[3]} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
