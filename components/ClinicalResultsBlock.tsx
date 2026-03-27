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
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(
          "https://opensheet.elk.sh/1fV0I_TpI3bDenR_27218klfe9L1tUzeiv9ahlJ-tar4/Dos-Remis"
        );
        const data: SheetRow[] = await res.json();

        const validRows = data.filter((row) => {
          const evaAfter = Number(String(row.EVA2 ?? "").replace(",", "."));
          return !Number.isNaN(evaAfter);
        });

        const total = validRows.length;
        setCount(total);

        if (total === 0) return;

        const avg = (arr: number[]) =>
          arr.reduce((a, b) => a + b, 0) / arr.length;

        const evaBeforeArr: number[] = [];
        const evaAfterArr: number[] = [];
        const eifelBeforeArr: number[] = [];
        const eifelAfterArr: number[] = [];

        validRows.forEach((row) => {
          const evaB = Number(String(row.EVA ?? "").replace(",", "."));
          const evaA = Number(String(row.EVA2 ?? "").replace(",", "."));
          const eifelB = Number(String(row.EIFEL ?? "").replace(",", "."));
          const eifelA = Number(String(row.EIFEL2 ?? "").replace(",", "."));

          if (!Number.isNaN(evaB)) evaBeforeArr.push(evaB);
          if (!Number.isNaN(evaA)) evaAfterArr.push(evaA);
          if (!Number.isNaN(eifelB)) eifelBeforeArr.push(eifelB);
          if (!Number.isNaN(eifelA)) eifelAfterArr.push(eifelA);
        });

        setEvaBefore(avg(evaBeforeArr));
        setEvaAfter(avg(evaAfterArr));
        setEifelBefore(avg(eifelBeforeArr));
        setEifelAfter(avg(eifelAfterArr));
      } catch (error) {
        console.error("Erreur chargement résultats :", error);
      }
    }

    loadData();
  }, []);

  const format = (value: number | null) =>
    value !== null ? value.toFixed(1) : "…";

  const percentChange = (before: number | null, after: number | null) => {
    if (before === null || after === null) return null;
    return Math.round(((before - after) / before) * 100);
  };

  const evaGain = percentChange(evaBefore, evaAfter);
  const eifelGain = percentChange(eifelBefore, eifelAfter);

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-primary/10 to-primary/5 p-10 shadow-sm">

          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Résultats cliniques
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Évolution moyenne des patients après prise en charge
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* EVA */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 text-center">
              <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
                Douleur (EVA)
              </p>

              <div className="mt-4 text-3xl font-bold text-gray-900">
                {format(evaBefore)} → {format(evaAfter)}
              </div>

              {evaGain !== null && (
                <p className="mt-2 text-lg font-semibold text-green-600">
                  ↓ {evaGain}%
                </p>
              )}
            </div>

            {/* EIFEL */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 text-center">
              <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
                Handicap (EIFEL)
              </p>

              <div className="mt-4 text-3xl font-bold text-gray-900">
                {format(eifelBefore)} → {format(eifelAfter)}
              </div>

              {eifelGain !== null && (
                <p className="mt-2 text-lg font-semibold text-green-600">
                  ↓ {eifelGain}%
                </p>
              )}
            </div>

          </div>

          <p className="mt-10 text-center text-gray-600">
            Basé sur <span className="font-semibold text-gray-900">{count}</span>{" "}
            patient{count > 1 ? "s" : ""}
          </p>

        </div>
      </div>
    </section>
  );
}
