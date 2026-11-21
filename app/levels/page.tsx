"use client";

import { useState } from "react";
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
    prompt: "What makes cryptocurrency different from traditional fiat money like cash in a wallet?",
    options: [
      {
        key: "A",
        label: "It exists electronically, uses cryptography, and typically runs without a central bank or government authority.",
      },
      {
        key: "B",
        label: "It is printed on special cotton paper and stored inside a single central bank vault.",
      },
      {
        key: "C",
        label: "It requires a government official to approve every payment before it can be sent.",
      },
    ],
    correctKey: "A",
    explanation:
      "Cryptocurrency is electronic money secured by cryptography that usually operates on a decentralized network rather than through a central authority.",
  },
  {
    id: "q2",
    prompt: "What is the role of the decentralized ledger kept across computers around the world?",
    options: [
      {
        key: "A",
        label: "It acts as a shared record of transactions so participants can verify balances without trusting one middleman.",
      },
      {
        key: "B",
        label: "It deletes old transactions every hour so computers do not run out of screen space.",
      },
      {
        key: "C",
        label: "It fixes the price of every coin so the market never moves up or down.",
      },
    ],
    correctKey: "A",
    explanation:
      "A shared ledger across many computers lets the network track who owns what and spot invalid or double-spent transactions collectively.",
  },
  {
    id: "q3",
    prompt: "At a high level, what does mining do in a proof-of-work network?",
    options: [
      {
        key: "A",
        label: "Computers compete to validate and bundle transactions into new blocks added to the chain.",
      },
      {
        key: "B",
        label: "Users dig underground for physical metal tokens that match digital balances.",
      },
      {
        key: "C",
        label: "A single company manually types every new transaction into a spreadsheet.",
      },
    ],
    correctKey: "A",
    explanation:
      "Mining involves specialized computers doing computational work to verify transactions, propose new blocks, and keep the ledger updated.",
  },
];

export default function LevelsPage() {
  const [activeLevel, setActiveLevel] = useState<"map" | "level-1">("map");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [completedLevelOne, setCompletedLevelOne] = useState(false);

  const score = LEVEL_ONE_MCQS.reduce((total, q) => {
    return selectedAnswers[q.id] === q.correctKey ? total + 1 : total;
  }, 0);

  const handleSelectOption = (questionId: string, optionKey: string) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  const handleCheckAnswers = () => {
    setSubmitted(true);
    if (score === LEVEL_ONE_MCQS.length) {
      setCompletedLevelOne(true);
    }
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  return (
    <main className="page-shell px-6 py-14">
      <div className="content-wide space-y-14">
        <nav className="flex items-center justify-between border-b border-[#1f2937] pb-6">
          <Link
            href="/"
            className="text-sm font-medium text-[#9ca3af] hover:text-[#f3f4f6] transition-colors"
          >
            &larr; Back to Title
          </Link>

          <div className="flex items-center gap-6">
            {activeLevel === "level-1" && (
              <button
                type="button"
                onClick={() => setActiveLevel("map")}
                className="text-sm font-medium text-[#818cf8] hover:underline cursor-pointer"
              >
                &larr; Back to Level Path
              </button>
            )}
            <span className="text-sm font-medium text-[#9ca3af]">
              Progress: {completedLevelOne ? 1 : 0} of 6 Levels
            </span>
          </div>
        </nav>

        {activeLevel === "map" ? (
          <>
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.2]">
                Level Path
              </h1>
              <p className="text-base sm:text-lg leading-[1.9]">
                Start with <span className="text-[#818cf8] font-semibold">Crypto</span>{" "}
                (which brings <span className="text-[#38bdf8] font-semibold">Technology</span>{" "}
                and <span className="text-[#34d399] font-semibold">Finance</span> together),
                then explore each side in greater detail.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="surface-panel-active w-full max-w-lg p-8 space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#818cf8]">
                    Level 01 &bull; {completedLevelOne ? "Completed" : "Available"}
                  </span>
                  <span className="track-badge-crypto">Crypto</span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold leading-snug">
                    The Basics
                  </h2>
                  <p className="text-base leading-[1.9]">
                    Learn what cryptocurrency is, how a shared ledger works across
                    computers, and the big picture of mining before diving deeper.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveLevel("level-1")}
                    className="primary-action-btn w-full py-3.5 px-6 text-base cursor-pointer"
                  >
                    <span>
                      {completedLevelOne ? "Replay Level 01: The Basics" : "Play Level 01: The Basics"}
                    </span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>

              <div className="path-connector-active" />

              <div className="surface-panel-locked w-full max-w-lg p-8 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                    Level 02 &bull; Locked
                  </span>
                  <span className="track-badge-finance">Finance</span>
                </div>

                <div className="space-y-2.5">
                  <h2 className="text-xl font-bold leading-snug">
                    First Trade: Supply &amp; Volatility
                  </h2>
                  <p className="text-sm sm:text-base leading-[1.9]">
                    Manage a starter budget through a simulated market cycle and weigh
                    risk against reward.
                  </p>
                </div>
              </div>

              <div className="path-connector" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full">
                <div className="surface-panel-locked p-7 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                      Level 03 &bull; Locked
                    </span>
                    <span className="track-badge-technology">Technology</span>
                  </div>
                  <h2 className="text-lg font-bold leading-snug">Hash Lab</h2>
                  <p className="text-sm leading-[1.9]">
                    Spot tampering and see how cryptographic hashes behave when
                    inputs change.
                  </p>
                </div>

                <div className="surface-panel-locked p-7 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                      Level 04 &bull; Locked
                    </span>
                    <span className="track-badge-crypto">Crypto</span>
                  </div>
                  <h2 className="text-lg font-bold leading-snug">Gas &amp; Fees</h2>
                  <p className="text-sm leading-[1.9]">
                    Balance confirmation speed and network costs when sending value.
                  </p>
                </div>

                <div className="surface-panel-locked p-7 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                      Level 05 &bull; Locked
                    </span>
                    <span className="track-badge-finance">Finance</span>
                  </div>
                  <h2 className="text-lg font-bold leading-snug">
                    Risk &amp; Diversification
                  </h2>
                  <p className="text-sm leading-[1.9]">
                    Handle price swings across multiple assets without putting
                    everything in one place.
                  </p>
                </div>
              </div>

              <div className="path-connector" />

              <div className="surface-panel-locked w-full max-w-lg p-8 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
                    Level 06 &bull; Requires Levels 03, 04 &amp; 05
                  </span>
                  <span className="track-badge-crypto">Crypto</span>
                </div>

                <div className="space-y-2.5">
                  <h2 className="text-xl font-bold leading-snug">
                    Mainnet Launch
                  </h2>
                  <p className="text-sm sm:text-base leading-[1.9]">
                    Bring key security, fee trade-offs, and portfolio risk together
                    in one final round.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <section className="content-narrow space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#818cf8]">
                  Level 01
                </span>
                <span className="track-badge-crypto">Crypto</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.2]">
                The Basics
              </h1>
              <p className="text-base sm:text-lg leading-[1.9]">
                A quick introduction to how digital money, shared ledgers, and
                mining fit together before you dive into the details.
              </p>
            </div>

            <div className="surface-panel p-8 sm:p-10 space-y-6">
              <h2 className="text-2xl font-bold leading-snug">
                Introduction
              </h2>

              <p className="text-base leading-[1.95]">
                Cryptocurrency (often called crypto) is a digital or virtual
                currency that exists only electronically, uses cryptography to
                secure transactions and prevent counterfeiting, and usually
                operates on a decentralized network without a central bank or
                government authority. Instead of handing over physical bills or
                relying on a single bank to update an account balance, users send
                value directly across a network governed by rules in code.
              </p>

              <p className="text-base leading-[1.95]">
                To keep track of who owns what without one central company in
                charge, the network maintains a decentralized ledger kept by
                computers across the world. Every computer running the software
                can check that incoming transactions follow the network rules—such
                as making sure the sender actually has the funds to spend—so
                everyone can agree on the shared history.
              </p>

              <p className="text-base leading-[1.95]">
                In many classic crypto networks, transactions are grouped into
                batches called blocks through a process often called mining.
                Specialized computers compete to solve cryptographic puzzles and
                package valid transactions into new blocks, linking them in order
                and earning rewards for helping keep the ledger secure and up to
                date.
              </p>
            </div>

            <div className="surface-panel p-8 sm:p-10 space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                  Quick Check
                </span>
                <h2 className="text-2xl font-bold leading-snug">
                  Consolidate Your Understanding
                </h2>
                <p className="text-sm sm:text-base leading-[1.9]">
                  Answer these three short questions to lock in the big picture
                  before moving on to deeper topics.
                </p>
              </div>

              <div className="space-y-8">
                {LEVEL_ONE_MCQS.map((question, index) => {
                  const chosen = selectedAnswers[question.id];
                  const isCorrect = chosen === question.correctKey;

                  return (
                    <div
                      key={question.id}
                      className="space-y-4 pt-6 border-t border-[#1f2937] first:border-t-0 first:pt-0"
                    >
                      <p className="text-base font-semibold text-[#f3f4f6] leading-[1.8]">
                        {index + 1}. {question.prompt}
                      </p>

                      <div className="space-y-3">
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
                              onClick={() => handleSelectOption(question.id, option.key)}
                              className={`${optionClass} cursor-pointer`}
                            >
                              <span className="font-bold mr-3 text-[#818cf8]">
                                {option.key}.
                              </span>
                              <span className="text-sm sm:text-base leading-[1.75]">
                                {option.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {submitted && (
                        <div className="p-4 rounded-xl bg-[#090d16] border border-[#1f2937] space-y-1">
                          <span
                            className={`text-xs font-bold uppercase tracking-wider block ${
                              isCorrect ? "text-[#34d399]" : "text-[#f87171]"
                            }`}
                          >
                            {isCorrect ? "Correct" : `Answer: ${question.correctKey}`}
                          </span>
                          <p className="text-sm leading-[1.8]">
                            {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#1f2937]">
                {!submitted ? (
                  <button
                    type="button"
                    onClick={handleCheckAnswers}
                    disabled={Object.keys(selectedAnswers).length < LEVEL_ONE_MCQS.length}
                    className="primary-action-btn px-7 py-3.5 text-sm sm:text-base cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span>Check Answers</span>
                  </button>
                ) : (
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-sm sm:text-base font-bold text-[#f3f4f6]">
                      Score: {score} of {LEVEL_ONE_MCQS.length}
                    </span>
                    <button
                      type="button"
                      onClick={handleRetry}
                      className="secondary-action-btn px-5 py-2.5 text-sm cursor-pointer"
                    >
                      <span>Try Again</span>
                    </button>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setActiveLevel("map")}
                  className="secondary-action-btn px-5 py-2.5 text-sm cursor-pointer"
                >
                  <span>Return to Level Path</span>
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}