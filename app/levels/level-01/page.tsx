"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Question = {
  id: string;
  prompt: string;
  options: {
    key: string;
    label: string;
  }[];
  correctKey: string;
  explanation: string;
};

const LEVEL_ONE_MCQS: Question[] = [
  {
    id: "q1",
    prompt:
      "What makes cryptocurrency different from traditional government-issued cash?",
    options: [
      {
        key: "A",
        label:
          "It exists electronically, uses cryptography to protect transactions, and usually runs without a central bank or government authority.",
      },
      {
        key: "B",
        label:
          "It is printed on physical bills by a single national mint and stored in one bank vault.",
      },
      {
        key: "C",
        label:
          "It requires a central bank clerk to approve every transfer before it can happen.",
      },
    ],
    correctKey: "A",
    explanation:
      "Cryptocurrency is electronic money secured by cryptography that typically operates on a decentralized network rather than through a central authority.",
  },
  {
    id: "q2",
    prompt:
      "Why does a crypto network keep a decentralized ledger across computers around the world?",
    options: [
      {
        key: "A",
        label:
          "So participants can verify balances and transaction history together without relying on one central middleman.",
      },
      {
        key: "B",
        label:
          "So every computer can erase older transactions at the end of each day.",
      },
      {
        key: "C",
        label:
          "So the price of every coin stays frozen at one fixed number forever.",
      },
    ],
    correctKey: "A",
    explanation:
      "A shared ledger across many computers lets everyone check the rules independently and prevents someone from spending the same funds twice.",
  },
  {
    id: "q3",
    prompt: "What happens during the mining process on a proof-of-work network?",
    options: [
      {
        key: "A",
        label:
          "Specialized computers compete to validate transactions and bundle them into new blocks added to the shared ledger.",
      },
      {
        key: "B",
        label:
          "People dig underground for physical coins that match their digital wallet balance.",
      },
      {
        key: "C",
        label:
          "One company manually types every payment into a private spreadsheet.",
      },
    ],
    correctKey: "A",
    explanation:
      "Mining uses computational effort to verify transactions, organize them into blocks, and add those blocks to the chain in exchange for network rewards.",
  },
];

export default function LevelOnePage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);

  const score = LEVEL_ONE_MCQS.reduce((total, question) => {
    return selectedAnswers[question.id] === question.correctKey
      ? total + 1
      : total;
  }, 0);

  const passedThreshold = score >= 2;
  useEffect(() => {
    if (submitted && passedThreshold) {
      window.localStorage.setItem("crypto-edu:level-01-completed", "true");
    }
  }, [submitted, passedThreshold]);

  const handleSelectOption = (questionId: string, optionKey: string) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  const handleCheckAnswers = () => {
    setSubmitted(true);
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  return (
    <main className="page-shell px-6 pt-8 sm:pt-12 pb-32">
      <div className="content-narrow space-y-12 sm:space-y-16">
        <nav className="nav-shell flex items-center justify-between gap-4 px-5 py-3">
          <Link href="/levels" className="text-sm font-bold text-[#a1a9b8] hover:text-[#f3f4f6]">
            &larr; All Levels
          </Link>
          <span className="text-sm font-black text-[#facc15]">Level 01</span>
        </nav>

        <div className="lesson-header-card p-7 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center gap-4 relative z-[1]">
            <span className="level-number">01</span>
            <span className="track-badge-crypto">Crypto Fundamentals</span>
          </div>

          <div className="space-y-4 relative z-[1]">
            <h1 className="text-4xl sm:text-6xl font-black leading-[1.12]">
              Welcome to the Network
            </h1>
            <p className="text-base sm:text-lg leading-[1.9] max-w-2xl">
              Learn what <strong className="text-[#facc15]">cryptocurrency</strong> is,
              how a <strong className="text-[#34d399]">shared ledger</strong> stays in sync,
              and how <strong className="text-[#38bdf8]">miners</strong> keep the chain moving.
            </p>
          </div>
        </div>

        <div className="surface-panel p-8 sm:p-11 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
            Introduction
          </h2>

          <div className="concept-grid">
            <div className="concept-card">
              <strong className="text-[#facc15]">Digital money</strong>
              <p>Uses cryptography and network rules instead of a physical bill or central vault.</p>
            </div>
            <div className="concept-card">
              <strong className="text-[#34d399]">Shared ledger</strong>
              <p>Independent computers compare transaction histories and agree on one account of events.</p>
            </div>
            <div className="concept-card">
              <strong className="text-[#38bdf8]">Mining</strong>
              <p>Competes to validate transactions and link new blocks to the chain securely.</p>
            </div>
          </div>

          <p className="text-base leading-[2.1]">
            <strong className="text-[#facc15] font-bold">
              Cryptocurrency
            </strong>{" "}
            (often called <strong className="text-[#facc15] font-bold">crypto</strong>)
            is a digital or virtual currency that exists only electronically,
            uses <strong className="text-[#38bdf8] font-bold">cryptography</strong>{" "}
            to secure transactions and prevent counterfeiting, and usually
            operates on a{" "}
            <strong className="text-[#34d399] font-bold">
              decentralized network
            </strong>{" "}
            without a central bank or government authority. When you use
            traditional bank money, a bank updates numbers in its own private
            database; in a crypto network, participants follow shared{" "}
            <strong className="text-[#38bdf8] font-bold">software rules</strong>{" "}
            and{" "}
            <strong className="text-[#38bdf8] font-bold">
              public-key cryptography
            </strong>{" "}
            so payments can be verified safely without asking a central
            institution for permission.
          </p>

          <p className="text-base leading-[2.1]">
            To know who owns what without putting one company in charge, the
            system relies on a{" "}
            <strong className="text-[#34d399] font-bold">
              decentralized ledger
            </strong>{" "}
            kept by computers across the world. Each participating computer—often
            called a <strong className="text-[#38bdf8] font-bold">node</strong>—stores
            and checks the transaction history against the network&apos;s rules,
            such as confirming that a sender actually holds enough balance and
            is not spending the same coins twice. Because many independent
            computers verify the same history, nobody can quietly rewrite past
            records on their own.
          </p>

          <p className="text-base leading-[2.1]">
            On many classic crypto networks, new transactions are grouped into
            batches called{" "}
            <strong className="text-[#9ca3af] font-bold">blocks</strong> through a
            process known as{" "}
            <strong className="text-[#9ca3af] font-bold">mining</strong>.
            Specialized computers compete to do computational work that secures
            the chain, bundles valid transactions into the next block, and links
            that block to the previous one—earning{" "}
            <strong className="text-[#34d399] font-bold">block rewards</strong>{" "}
            and <strong className="text-[#34d399] font-bold">transaction fees</strong>{" "}
            for helping keep the ledger accurate and running smoothly.
          </p>
        </div>

        <div className="surface-panel p-8 sm:p-11 space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
              Check Your Understanding
            </h2>
            <p className="text-sm sm:text-base leading-[2.05]">
              Try to get at least <strong className="text-[#34d399] font-bold">two out of three</strong>{" "}
              questions right so you can move on with confidence and deepen your
              understanding in the levels ahead.
            </p>
          </div>

          <div className="space-y-10">
            {LEVEL_ONE_MCQS.map((question, index) => {
              const chosen = selectedAnswers[question.id];
              const isCorrect = chosen === question.correctKey;

              return (
                <div
                  key={question.id}
                  className="space-y-5 pt-8 border-t border-[#1f2937] first:border-t-0 first:pt-0"
                >
                  <p className="text-base sm:text-lg font-bold text-[#f3f4f6] leading-[1.9]">
                    {index + 1}. {question.prompt}
                  </p>

                  <div className="space-y-3.5">
                    {question.options.map((option) => {
                      let optionClass = "mcq-option";

                      if (submitted) {
                        if (option.key === question.correctKey) {
                          optionClass = "mcq-option mcq-option-correct";
                        } else if (chosen === option.key) {
                          optionClass = "mcq-option mcq-option-incorrect";
                        }
                      } else if (chosen === option.key) {
                        optionClass = "mcq-option mcq-option-selected";
                      }

                      return (
                        <button
                          key={option.key}
                          type="button"
                          onClick={() =>
                            handleSelectOption(question.id, option.key)
                          }
                          className={`${optionClass} cursor-pointer`}
                        >
                          <span className="font-extrabold mr-4 text-[#facc15]">
                            {option.key}.
                          </span>
                          <span className="text-sm sm:text-base leading-[1.9]">
                            {" "}
                            {option.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div className="p-5 rounded-xl bg-[#090d16] border border-[#1f2937] space-y-2">
                      <span
                        className={`text-xs font-extrabold uppercase tracking-wider block ${
                          isCorrect ? "text-[#34d399]" : "text-[#f87171]"
                        }`}
                      >
                        {isCorrect
                          ? "Correct"
                          : `Correct Answer: ${question.correctKey}.`}
                      </span>
                      <p className="text-sm leading-[1.95]">
                        {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-between gap-5 border-t border-[#1f2937]">
            {!submitted ? (
              <button
                type="button"
                onClick={handleCheckAnswers}
                disabled={
                  Object.keys(selectedAnswers).length < LEVEL_ONE_MCQS.length
                }
                className="game-start-btn px-8 py-4 text-base cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>Check Answers!</span>
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-5">
                <span className="text-sm sm:text-base font-extrabold text-[#f3f4f6]">
                  Score: {score} of {LEVEL_ONE_MCQS.length}
                  {passedThreshold
                    ? " — Great job, you are ready to deepen your understanding!"
                    : " — Aim for at least 2 of 3 before moving on."}
                </span>
                <button
                  type="button"
                  onClick={handleRetry}
                  className="secondary-action-btn px-6 py-3 text-sm cursor-pointer"
                >
                  <span>Try Again</span>
                </button>
              </div>
            )}

            <Link
              href="/levels"
              className="secondary-action-btn px-6 py-3 text-sm"
            >
              <span>Return to Level Path</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}