"use client";

import { useEffect, useState } from "react";

type SheetRow = {
  EVA?: string;
  EVA2?: string;
  EIFEL?: string;
  EIFEL2?: string;
};

export default function ClinicalResultsBlock() {
  const [evaBefore, setEvaBefore] = useState<number | null>(null);
  const [evaAfter, setEvaAfter] = useState<number | null>(null);
  const [eifelBefore, setEifelBefore] = useState<number | null>(null);
  const [eifelAfter, setEifelAfter] = useState<number | null>(null);

  const [evaCount, setEvaCount] = useState<number>(0);
  const [eifelCount, setEifelCount] = useState<number>(0);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(
          "https://opensheet.elk.sh/1fV0I_TpI3bDenR_27218klfe9L1tUzeiv9ahlJ-tar4/Dos-Remis"
        );
        const data: SheetRow[] = await res.json();

        const toNumber = (value: string | undefined) => {
          const raw = String(value ?? "").trim();
          if (raw === "") return null;

          const parsed = Number(raw.replace(",", "."));
          return Number.isNaN(parsed) ? null : parsed;
        };

        const evaPairs = data
          .map((row) => {
            const before = toNumber(row.EVA);
            const after = toNumber(row.EVA2);

            if (before === null || after === null) return null;
            return { before, after };
          })
          .filter(
            (pair): pair is { before: number; after: number } => pair !== null
          );

        const eifelPairs = data
          .map((row) => {
            const before = toNumber(row.EIFEL);
            const after = toNumber(row.EIFEL2);

            if (before === null || after === null) return null;
            return { before, after };
          })
          .filter(
            (pair): pair is { before: number; after: number } => pair !== null
          );

        const avg = (values: number[]) =>
          values.reduce((sum, value) => sum + value, 0) / values.length;

        setEvaCount(evaPairs.length);
        setEifelCount(eifelPairs.length);

        if (evaPairs.length > 0) {
          setEvaBefore(avg(evaPairs.map((pair) => pair.before)));
          setEvaAfter(avg(evaPairs.map((pair) => pair.after)));
        }

        if (eifelPairs.length > 0) {
          setEifelBefore(avg(eifelPairs.map((pair) => pair.before)));
          setEifelAfter(avg(eifelPairs.map((pair) => pair.after)));
        }
      } catch (error) {
        console.error("Erreur chargement résultats :", error);
      }
    }

    loadData();
  }, []);

  const format = (value: number | null) =>
    value !== null ? value.toFixed(1) : "…";

  const percentChange = (before: number | null, after: number | null) => {
    if (before === null || after === null || before === 0) return null;
    return Math.round(((before - after) / before) * 100);
  };

  const evaGain = percentChange(evaBefore, evaAfter);
  const eifelGain = percentChange(eifelBefore, eifelAfter);

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Nos résultats cliniques en direct
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Evolution du score de douleur (EVA) et du score de gêne
              fonctionnelle (EIFEL) avant et après l&apos;infiltration
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* EVA */}
            <div className="flex justify-center">
              <div className="flex min-w-[240px] flex-col items-center rounded-[2rem] border border-primary/15 bg-gradient-to-b from-white to-primary/5 px-10 py-10 shadow-sm text-center">
                <p className="text-base font-bold uppercase tracking-widest text-primary">
                  Douleur (EVA)
                </p>

                <p className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                  {format(evaBefore)} → {format(evaAfter)}
                </p>

                {evaGain !== null && (
                  <p className="mt-3 text-xl font-semibold text-green-600">
                    ↓ {evaGain}%
                  </p>
                )}

                <p className="mt-4 text-sm text-gray-500">
                  Basé sur {evaCount} répondant{evaCount > 1 ? "s" : ""}
                </p>
              </div>
            </div>

            {/* EIFEL */}
            <div className="flex justify-center">
              <div className="flex min-w-[240px] flex-col items-center rounded-[2rem] border border-primary/15 bg-gradient-to-b from-white to-primary/5 px-10 py-10 shadow-sm text-center">
                <p className="text-base font-bold uppercase tracking-widest text-primary">
                  Handicap (EIFEL)
                </p>

                <p className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                  {format(eifelBefore)} → {format(eifelAfter)}
                </p>

                {eifelGain !== null && (
                  <p className="mt-3 text-xl font-semibold text-green-600">
                    ↓ {eifelGain}%
                  </p>
                )}

                <p className="mt-4 text-sm text-gray-500">
                  Basé sur {eifelCount} répondant{eifelCount > 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
