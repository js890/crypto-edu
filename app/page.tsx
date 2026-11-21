import Link from "next/link";

export default function TitleScreen() {
  return (
    <main className="page-shell flex flex-col justify-center px-6 py-20">
      <div className="content-narrow text-center space-y-14">
        <div className="space-y-7">
          <h1 className="text-5xl sm:text-7xl font-black leading-[1.15] bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">
            Crypto &amp; Technological Friends
          </h1>

          <p className="text-lg sm:text-xl leading-[1.9] max-w-2xl mx-auto">
            An interactive game for high schoolers exploring{" "}
            <span className="text-[#34d399] font-semibold">
              finance and markets
            </span>{" "}
            alongside{" "}
            <span className="text-[#38bdf8] font-semibold">
              cryptography and system mechanics
            </span>
            .
          </p>
        </div>

        <div className="surface-panel p-8 sm:p-10 text-left space-y-8">
          <div className="space-y-3">
            <h2 className="text-xl font-bold leading-snug">How It Works</h2>
            <p className="text-base leading-[1.9]">
              Move step by step through short minigames that pair real financial
              decisions with the technology operating underneath.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-[#1f2937]">
            <div className="space-y-2.5">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                Step One
              </span>
              <h3 className="text-base font-bold leading-snug">
                Play Minigames
              </h3>
              <p className="text-sm leading-[1.85]">
                Make focused choices across hands-on finance and security
                challenges.
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#34d399]">
                Step Two
              </span>
              <h3 className="text-base font-bold leading-snug">
                Follow the Path
              </h3>
              <p className="text-sm leading-[1.85]">
                Advance along the map and unlock branching paths as ideas build.
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#818cf8]">
                Step Three
              </span>
              <h3 className="text-base font-bold leading-snug">
                See How It Works
              </h3>
              <p className="text-sm leading-[1.85]">
                Understand the reasoning and system behavior behind every result.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/levels"
            className="primary-action-btn px-10 py-4 text-lg"
          >
            <span>Start Game</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}