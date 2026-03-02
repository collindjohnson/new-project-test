import Image from "next/image";

// ── Day 1 assets (video call / cal.com) ────────────────────────────────────
const IMG_VIDEO_1 =
  "http://localhost:3845/assets/6b70333f66106284fda71c967af952f937cfc95d.png";
const IMG_VIDEO_2 =
  "http://localhost:3845/assets/e9c62ae59d42a157be6e399c57e4cced02f15d96.png";
const IMG_ZOOM_LOGO =
  "http://localhost:3845/assets/9d95fcb286c3a9621e7f987b686bcc13bd8fbdb7.png";

// ── Day 2 assets (task board) ───────────────────────────────────────────────
const IMG_TASK_AVATAR =
  "http://localhost:3845/assets/f6d85d4d52a1024f8b72fac05e666fadf6f49ca7.png";
const IMG_TASK_AVATAR2 =
  "http://localhost:3845/assets/6f870117c2d1cb1e645030c1d747a8247fc2ac14.png";
const IMG_TASK_THUMB =
  "http://localhost:3845/assets/6ac2ba7740ca2b0e15a785584794f59ce14a6af6.png";

// ── Day 3 assets (app design) ───────────────────────────────────────────────
const IMG_APP_SCREEN =
  "http://localhost:3845/assets/6b4f78b6c63bb9209d51adbbdf82d2aa51960c29.png";
const IMG_APP_PHONE =
  "http://localhost:3845/assets/cf02ca40ffdc6af6352fdaf9b075c86fa601e9f0.png";
const IMG_APP_TOP =
  "http://localhost:3845/assets/e91a60f6d1f5f2086830abfe1adfd7d240dab81e.png";
const IMG_APP_MID =
  "http://localhost:3845/assets/05de47b86bb973bec08d5a577477159ab1ef9526.png";
const IMG_APP_BOT =
  "http://localhost:3845/assets/5615c9262ddd14ebff1a1a6fd687c489d410da30.png";

// ── Step card content ───────────────────────────────────────────────────────
interface Step {
  day: string;
  title: string;
  description: string;
  preview: React.ReactNode;
}

function StepCard({ step }: { step: Step }) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-black/5">
      {/* Image preview area */}
      <div className="relative bg-[#FAFAFA] h-[280px] w-full overflow-hidden">
        {step.preview}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-0 px-4 pt-[22px] pb-6 bg-white">
        <p className="font-mono text-[11px] font-medium text-designme-red uppercase leading-3 mb-[10px]">
          {step.day}
        </p>
        <h3 className="text-[15px] font-medium text-charade leading-[22.5px] tracking-[-0.1px] font-sans mb-[13px]">
          {step.title}
        </h3>
        <p className="text-[13.6px] font-normal text-storm-gray leading-[21px] tracking-[0.15px] font-sans">
          {step.description}
        </p>
      </div>
    </div>
  );
}

// ── Preview composites ──────────────────────────────────────────────────────

function Day1Preview() {
  return (
    <div className="absolute inset-0">
      {/* Background video thumbnails */}
      <div className="absolute left-[30px] top-[55px] w-[203px] h-[135px] rounded-lg overflow-hidden border border-white/20 shadow-md">
        <Image src={IMG_VIDEO_1} alt="Call preview" fill className="object-cover" unoptimized />
      </div>
      <div className="absolute left-[180px] top-[38px] w-[211px] h-[145px] rounded-lg overflow-hidden border border-white/20 shadow-md">
        <Image src={IMG_VIDEO_2} alt="Call preview" fill className="object-cover" unoptimized />
      </div>

      {/* Zoom logo badge */}
      <div className="absolute top-[37px] right-[21px] w-[38px] h-[38px] rounded-lg overflow-hidden bg-white shadow-sm border border-black/5">
        <Image src={IMG_ZOOM_LOGO} alt="Zoom" fill className="object-contain p-1" unoptimized />
      </div>
    </div>
  );
}

function Day2Preview() {
  return (
    <div className="absolute inset-0 flex items-start justify-center pt-[49px]">
      {/* Simplified Notion-style task board */}
      <div className="w-[340px] bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden">
        {/* Column headers */}
        <div className="flex border-b border-black/5">
          {["Task Backlog (2)", "Active (2)", "✅ Completed (0)"].map((col) => (
            <div key={col} className="flex-1 px-2 py-2 text-[8px] font-medium text-[#2E323D] border-r last:border-r-0 border-black/5">
              {col}
            </div>
          ))}
        </div>
        {/* Task rows */}
        <div className="flex divide-x divide-black/5 min-h-[160px]">
          {/* Backlog column */}
          <div className="flex-1 p-1.5 flex flex-col gap-1">
            <div className="bg-[#FAFAFA] rounded border border-black/5 p-1.5">
              <p className="text-[6.5px] text-[#2E323D] font-medium">App Onboarding Flow</p>
              <div className="mt-1 flex items-center gap-1">
                <div className="w-3 h-2 rounded-sm overflow-hidden relative bg-gray-100">
                  <Image src={IMG_TASK_THUMB} alt="" fill className="object-cover" unoptimized />
                </div>
              </div>
            </div>
            <div className="bg-[#FAFAFA] rounded border border-black/5 p-1.5">
              <p className="text-[6.5px] text-[#2E323D] font-medium">Web &amp; Mobile: Resources</p>
              <div className="mt-1 w-3.5 h-3 relative">
                <Image src={IMG_TASK_AVATAR} alt="" fill className="object-cover rounded-sm" unoptimized />
              </div>
            </div>
            <div className="bg-[#FAFAFA] rounded border border-black/5 p-1.5">
              <p className="text-[6.5px] text-[#2E323D] font-medium">Web &amp; Mobile: Events</p>
              <div className="mt-1 w-5 h-3.5 relative">
                <Image src={IMG_TASK_AVATAR2} alt="" fill className="object-cover rounded-sm" unoptimized />
              </div>
            </div>
          </div>
          {/* Active column */}
          <div className="flex-1 p-1.5 flex flex-col gap-1">
            <div className="bg-[#FAFAFA] rounded border border-black/5 p-1.5">
              <p className="text-[6.5px] text-[#2E323D] font-medium">Splash Screen</p>
            </div>
          </div>
          {/* Completed column */}
          <div className="flex-1 p-1.5" />
        </div>
      </div>
    </div>
  );
}

function Day3Preview() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Background screenshot strips */}
      <div className="absolute left-[78px] top-[36px] flex flex-col gap-[14px] w-[161px]">
        <div className="relative w-full h-[94px] rounded overflow-hidden">
          <Image src={IMG_APP_TOP} alt="" fill className="object-cover" unoptimized />
        </div>
        <div className="relative w-full h-[8px] rounded overflow-hidden">
          <Image src={IMG_APP_MID} alt="" fill className="object-cover" unoptimized />
        </div>
        <div className="relative w-full h-[94px] rounded overflow-hidden">
          <Image src={IMG_APP_BOT} alt="" fill className="object-cover" unoptimized />
        </div>
      </div>
      {/* Phone mockup overlay */}
      <div className="absolute left-[53px] top-[13px] w-[212px] h-[373px]">
        <Image src={IMG_APP_PHONE} alt="App design" fill className="object-cover rounded-xl" unoptimized />
      </div>
      {/* Small top screenshot */}
      <div className="absolute left-[79px] top-[-14px] w-[160px] h-[116px] rounded overflow-hidden opacity-60">
        <Image src={IMG_APP_SCREEN} alt="" fill className="object-cover" unoptimized />
      </div>
    </div>
  );
}

const STEPS: Step[] = [
  {
    day: "Day 1",
    title: "Book a 15-min intro call",
    description:
      "We learn about your product, timeline, and goals, and see if we're a fit to work together.",
    preview: <Day1Preview />,
  },
  {
    day: "Day 2",
    title: "Your project kicks off",
    description:
      "We set up your project workspace, align on priorities, and lock in the first sprint.",
    preview: <Day2Preview />,
  },
  {
    day: "Day 3",
    title: "You start seeing work",
    description:
      "First designs land in your Slack and Notion inbox. Daily updates from there.",
    preview: <Day3Preview />,
  },
];

export default function ProcessSection() {
  return (
    <>
      {/* Section divider */}
      <div className="border-t border-black/5" />

      <section id="process" className="bg-white py-[100px]">
        <div className="max-w-[1240px] mx-auto px-[100px]">
          {/* Heading */}
          <div className="flex flex-col items-center gap-[22px] mb-[60px]">
            <p className="font-mono text-[11px] font-normal text-[#71717A] uppercase leading-3">
              starting is easy
            </p>
            <h2 className="text-[37.2px] font-bold text-charade text-center leading-[44px] tracking-[-0.5px] font-sans">
              How does it work?
            </h2>
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-3 gap-5">
            {STEPS.map((step) => (
              <StepCard key={step.day} step={step} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
