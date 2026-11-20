import Link from "next/link";

export default function TitleScreen() {
  return (
    <main className="min-h-screen flex flex-col justify-between px-6 py-14 sm:py-20">
      {/* Main Content */}
      <div className="w-full max-w-2xl mx-auto my-auto text-center space-y-10">
        {/* Game Title & Hook */}
        <div className="space-y-5">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">
            Crypto and Technological Friends
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            An interactive game helping high schoolers explore{" "}
            <strong className="text-[#f3f4f6] font-semibold">Crypto</strong>{" "}
            (finance, risk, and markets) and{" "}
            <strong className="text-[#f3f4f6] font-semibold">Technology</strong>{" "}
            (cryptography, keys, and how systems work under the hood).
          </p>
        </div>

        {/* Overview Card */}
        <div className="card text-left p-7 sm:p-8 space-y-6 mb-0">
          <div className="space-y-2">
            <h2 className="mb-0">How It Works</h2>
            <p className="mb-0 leading-relaxed">
              Move through a path of bite-sized minigames that mix real-world
              financial trade-offs with hands-on technical mechanics—going
              deeper than standard high school material.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t text-sm"
            style={{ borderColor: "var(--border-color)" }}
          >
            <div className="space-y-1">
              <span className="font-semibold block text-[#f3f4f6]">
                1. Play Minigames
              </span>
              <span
                className="block leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Make choices in focused finance and tech challenges.
              </span>
            </div>
            <div className="space-y-1">
              <span className="font-semibold block text-[#f3f4f6]">
                2. Follow the Path
              </span>
              <span
                className="block leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Progress step by step, including split branches later on.
              </span>
            </div>
            <div className="space-y-1">
              <span className="font-semibold block text-[#f3f4f6]">
                3. See How It Works
              </span>
              <span
                className="block leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Learn the concepts behind the outcomes as you play.
              </span>
            </div>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="pt-2 flex justify-center">
          <Link
            href="/levels"
            className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl font-bold text-lg text-[#0b0f19] bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#818cf8] shadow-[0_0_30px_rgba(56,189,248,0.28)] hover:shadow-[0_0_40px_rgba(129,140,248,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Start Levels</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>

      {/* Footer at Very Bottom */}
      <footer
        className="w-full max-w-2xl mx-auto pt-12 flex items-center justify-center gap-8 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        <span>v0.1</span>
        <span className="opacity-60">Credits (Coming Soon)</span>
      </footer>
    </main>
  );
}