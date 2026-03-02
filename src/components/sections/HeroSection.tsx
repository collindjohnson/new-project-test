import Image from "next/image";
import Link from "next/link";

const BALLOGY_IMG =
  "http://localhost:3845/assets/3f76cb59cd165f2c72ce155ceb8c895cd8ab7b77.png";
const TRAVELWITH_PHONE1 =
  "http://localhost:3845/assets/35954860a4026adfc572e98710ccbd1361453771.png";
const TRAVELWITH_PHONE2 =
  "http://localhost:3845/assets/8640bbc9715c5a4cbc169e708a83658f7c529948.png";
const STATIQ_IMG =
  "http://localhost:3845/assets/9faf81f36d52bdcd78fb7fc247f696546e0a41ca.png";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-wild-sand to-white overflow-hidden">
      {/* Hero copy */}
      <div className="flex flex-col items-center justify-center pt-[60px] pb-0 px-5">
        {/* Tag line */}
        <div className="flex items-center gap-1.5 mb-[7px]">
          <span className="w-1 h-1 rounded-full bg-black opacity-80 shrink-0" />
          <p className="text-[11px] font-normal text-black tracking-[-0.3px] opacity-80 font-sans">
            Webflow + Framer experts · 100+ projects shipped
          </p>
        </div>

        {/* Headline */}
        <h1 className="text-[58.4px] font-bold text-charade text-center leading-[68.2px] tracking-[-1.4px] font-sans mb-5 whitespace-nowrap">
          Design + websites for
          <br />
          funded B2B tech companies
        </h1>

        {/* Subtext */}
        <div className="flex flex-col items-center gap-0 mb-8">
          <p className="text-[13.8px] font-normal text-mirage text-center leading-[22.5px] font-sans whitespace-nowrap">
            We design and build products, websites, and brands for B2B tech
            companies.
          </p>
          <p className="text-[13.6px] font-normal text-mirage text-center leading-[22.5px] font-sans whitespace-nowrap">
            One team for design, development, and strategy.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="inline-flex items-center gap-1.5 px-4 py-3 h-11 bg-black text-white rounded-[6px] text-[12.9px] font-medium font-sans tracking-[0.141px] shadow-[0px_0.482px_0.482px_-1.25px_rgba(0,0,0,0.18),0px_1.831px_1.831px_-2.5px_rgba(0,0,0,0.16),0px_8px_8px_-3.75px_rgba(0,0,0,0.06)] hover:bg-neutral-800 transition-colors"
        >
          Book a strategy call &nbsp;→
        </Link>
      </div>

      {/* Portfolio grid */}
      <div className="mt-[52px] mx-auto max-w-[1400px] px-5 overflow-hidden">
        <div className="grid grid-cols-3 gap-4 items-end">
          {/* Left – Ballogy App */}
          <div className="flex flex-col gap-2 overflow-hidden rounded-t-lg">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-black/5 shadow-sm">
              <Image
                src={BALLOGY_IMG}
                alt="Ballogy App"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
            <p className="font-mono text-[10px] font-normal text-storm-gray uppercase tracking-widest">
              Ballogy App
            </p>
          </div>

          {/* Middle – TravelWith App */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden border border-black/5 shadow-sm">
                <Image
                  src={TRAVELWITH_PHONE1}
                  alt="TravelWith App – Basketball"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden border border-black/5 shadow-sm">
                <Image
                  src={TRAVELWITH_PHONE2}
                  alt="TravelWith App – Travel"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
            </div>
            <p className="font-mono text-[10px] font-normal text-storm-gray uppercase tracking-widest">
              TravelWith App
            </p>
          </div>

          {/* Right – Statiq.Agency */}
          <div className="flex flex-col gap-2 overflow-hidden">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/5 shadow-sm">
              <Image
                src={STATIQ_IMG}
                alt="Statiq.Agency"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
            <p className="font-mono text-[10px] font-normal text-storm-gray uppercase tracking-widest">
              Statiq.Agency
            </p>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <StatusBar />
    </section>
  );
}

function StatusBar() {
  return (
    <div className="border-t border-black/10 mt-6">
      <div className="max-w-[1080px] mx-auto px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-0">
          <span className="font-mono text-[10px] uppercase text-storm-gray leading-3">
            Gdansk |&nbsp;
          </span>
          <span className="font-mono text-[10px] text-storm-gray leading-3">
            10:57 AM GMT+1
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-jade" />
          <span className="font-mono text-[11px] font-medium text-storm-gray tracking-[-0.3px]">
            BOOKING FOR Q1&apos;26
          </span>
        </div>

        <div className="flex items-center gap-0">
          <span className="font-mono text-[10px] uppercase text-scorpion leading-3">
            NYC |&nbsp;
          </span>
          <span className="font-mono text-[10px] text-storm-gray leading-3">
            4:57 AM EST
          </span>
        </div>
      </div>
    </div>
  );
}
