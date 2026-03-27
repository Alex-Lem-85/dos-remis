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

        // EVA : on ne garde que les patients qui ont une valeur EVA2 renseignée
        // et une valeur EVA avant disponible pour faire une vraie comparaison
        const evaPairs = data
          .map((row) => {
            const before = toNumber(row.EVA);
            const after = toNumber(row.EVA2);

            if (before === null || after === null) return null;
            return { before, after };
          })
          .filter((pair): pair is { before: number; after: number } => pair !== null);

        // EIFEL : même logique
        const eifelPairs = data
          .map((row) => {
            const before = toNumber(row.EIFEL);
            const after = toNumber(row.EIFEL2);

            if (before === null || after === null) return null;
            return { before, after };
          })
          .filter((pair): pair is { before: number; after: number } => pair !== null);

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
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-primary/10 to-primary/5 p-10 shadow-sm">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Résultats cliniques
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Évolution moyenne des patients après prise en charge
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* EVA */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
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

              <p className="mt-4 text-sm text-gray-500">
                Basé sur {evaCount} répondant{evaCount > 1 ? "s" : ""}
              </p>
            </div>

            {/* EIFEL */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
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

              <p className="mt-4 text-sm text-gray-500">
                Basé sur {eifelCount} répondant{eifelCount > 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
