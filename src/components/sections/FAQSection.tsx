import Image from "next/image";

// ── Sidebar avatar assets ─────────────────────────────────────────────────────
const IMG_LUKE =
  "http://localhost:3845/assets/32f4e2ac60f062d88669c407d0ebcca1bd200e63.png";
const IMG_ADRIAN =
  "http://localhost:3845/assets/cc0043dbab4b3aa6d21e6b0703c8e7d8d366ed35.png";

// ── FAQ data ──────────────────────────────────────────────────────────────────
const FAQS = [
  "How soon can you start?",
  "What happens if my project scope changes mid-way?",
  "How many people work on my project?",
  "How do you communicate and manage work?",
  "Can you collaborate with our in-house team?",
  "Why not hire designers full-time?",
  "Designme vs other contractors",
  "What if I don't have enough design work every month?",
  "How is this different than hiring a freelancer?",
  "Can we scale up the team if we need more?",
  "Can you handle branding, product, and website work?",
  "What do you need to start working together?",
  "What happens when my subscription ends?",
  "Can we sign an NDA or confidentiality agreement?",
  "Do I own everything you design?",
];

function PlusIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M7 1V13M1 7H13"
        stroke="#FD013A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FAQSection() {
  return (
    <>
      {/* Section divider */}
      <div className="border-t border-black/5" />

      <section id="faqs" className="bg-white py-[100px]">
        <div className="max-w-[1240px] mx-auto px-[130px]">
          <div className="flex gap-6 items-start">
            {/* ── Left sidebar ─────────────────────────────────────────── */}
            <div className="shrink-0 w-[353px] pt-[18px] sticky top-8">
              <div className="flex flex-col gap-8">
                {/* Heading */}
                <div className="flex flex-col gap-[10px]">
                  <p className="font-mono text-[11px] font-normal text-[#71717A] uppercase leading-3">
                    still got questions?
                  </p>
                  <h2 className="text-[37.7px] font-bold text-charade leading-[44px] tracking-[-0.5px] font-sans">
                    Read the FAQs
                  </h2>
                </div>

                {/* CTA card */}
                <div className="bg-white rounded-[20px] p-6 flex flex-col gap-[14px] border border-black/5 shadow-sm">
                  {/* Avatars */}
                  <div className="relative h-[52px] w-[97px]">
                    {/* Luke (back) */}
                    <div className="absolute left-0 top-0 w-[52px] h-[52px] rounded-2xl overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src={IMG_LUKE}
                        alt="Luke"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    {/* Adrian (front) */}
                    <div className="absolute left-[45px] top-0 w-[52px] h-[52px] rounded-2xl overflow-hidden border-2 border-white shadow-md bg-[#f0f0f0]">
                      <Image
                        src={IMG_ADRIAN}
                        alt="Adrian"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="flex flex-col gap-1">
                    <p className="text-[15px] font-bold text-[#1D2029] leading-[22.5px] tracking-[0.2px] font-sans">
                      Can&apos;t find your answer?
                    </p>
                    <p className="text-[13px] font-normal text-[#72727D] leading-[19.5px] font-sans">
                      Book a call and let&apos;s talk.
                    </p>
                  </div>

                  {/* CTA button */}
                  <a
                    href="https://cal.com"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#1D2029] text-white text-[13px] font-medium leading-none rounded-lg px-4 py-3 hover:bg-[#2E323D] transition-colors"
                  >
                    Book a strategy call →
                  </a>

                  {/* Email link */}
                  <p className="text-[13px] text-[#72727D] font-sans leading-[19.5px]">
                    Or email us →{" "}
                    <a
                      href="mailto:hello@designme.agency"
                      className="text-[#1D2029] font-medium underline underline-offset-2"
                    >
                      hello@designme.agency
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* ── Accordion list ───────────────────────────────────────── */}
            <div className="flex-1 flex flex-col">
              {FAQS.map((question, i) => (
                <div key={i} className="border-b border-black/5 last:border-b-0">
                  <div className="flex items-center gap-[14px] py-5">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      <PlusIcon />
                    </div>
                    <p className="text-[15px] font-normal text-[#1D2029] leading-[22.5px] tracking-[-0.1px] font-sans flex-1">
                      {question}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
