"use client";

import { useEffect, useState } from "react";

type SheetRow = Record<string, string | undefined>;

const EVA_BEFORE_KEY = "EVA initiale";
const EVA_AFTER_KEY =
  "EVA : évaluez votre douleur de 0 à 10 (aujourd'hui, c'est à dire APRES L'INFILTRATION)";

const EIFEL_BEFORE_KEY = "EIFEL initial";
const EIFEL_AFTER_KEY = "Score EIFEL";

export default function ClinicalResultsBlock() {
  const [evaBefore, setEvaBefore] = useState<number | null>(null);
  const [evaAfter, setEvaAfter] = useState<number | null>(null);
  const [eifelBefore, setEifelBefore] = useState<number | null>(null);
  const [eifelAfter, setEifelAfter] = useState<number | null>(null);

  const [evaCount, setEvaCount] = useState<number>(0);
  const [eifelCount, setEifelCount] = useState<number>(0);

  const [evaP, setEvaP] = useState<string>("");
  const [eifelP, setEifelP] = useState<string>("");

  const [evaCI, setEvaCI] = useState<string>("");
  const [eifelCI, setEifelCI] = useState<string>("");

  const [evaMeanGain, setEvaMeanGain] = useState<string>("");
  const [eifelMeanGain, setEifelMeanGain] = useState<string>("");

  useEffect(() => {
    async function loadData() {
      try {
        // Remplace NOM_DE_LA_FEUILLE par le nom exact de ton onglet Google Sheets
        // Exemple si l’onglet s’appelle "Sheet1" :
        // https://opensheet.elk.sh/1ziqoV37aDOhACAju-d3eg8e-77U0AeeCsHs-_3-KQcM/Sheet1
        const res = await fetch(
          "https://opensheet.elk.sh/1ziqoV37aDOhACAju-d3eg8e-77U0AeeCsHs-_3-KQcM/Form%20responses"
        );

        const data: SheetRow[] = await res.json();

        const toNumber = (value: string | undefined) => {
          const raw = String(value ?? "").trim();
          if (raw === "") return null;

          const parsed = Number(raw.replace(",", "."));
          return Number.isNaN(parsed) ? null : parsed;
        };

        const computePairedStats = (
          pairs: { before: number; after: number }[]
        ) => {
          const n = pairs.length;

          if (n < 2) {
            return {
              meanBefore: null as number | null,
              meanAfter: null as number | null,
              meanGain: "",
              p: "",
              ci: "",
            };
          }

          const beforeValues = pairs.map((p) => p.before);
          const afterValues = pairs.map((p) => p.after);

          // après - avant
          // négatif si amélioration
          const deltas = pairs.map((p) => p.after - p.before);

          const meanBefore =
            beforeValues.reduce((sum, v) => sum + v, 0) / n;
          const meanAfter =
            afterValues.reduce((sum, v) => sum + v, 0) / n;

          const meanDelta =
            deltas.reduce((sum, v) => sum + v, 0) / n;

          const sdDelta = Math.sqrt(
            deltas.reduce((sum, v) => sum + Math.pow(v - meanDelta, 2), 0) /
              (n - 1)
          );

          const seDelta = sdDelta / Math.sqrt(n);
          const tStat = seDelta === 0 ? 0 : meanDelta / seDelta;

          // Approximation simple du p bilatéral
          const pApprox = Math.exp(
            -0.717 * Math.abs(tStat) - 0.416 * tStat * tStat
          );

          // Approximation simple de l'IC95%
          const tCritical = 1.96;
          const ciLow = meanDelta - tCritical * seDelta;
          const ciHigh = meanDelta + tCritical * seDelta;

          return {
            meanBefore,
            meanAfter,
            meanGain: meanDelta.toFixed(1).replace(".", ","),
            p:
              pApprox < 0.001
                ? "< 0,001"
                : `= ${pApprox.toFixed(3).replace(".", ",")}`,
            ci: `[${ciLow.toFixed(1).replace(".", ",")} ; ${ciHigh
              .toFixed(1)
              .replace(".", ",")}]`,
          };
        };

        const evaPairs = data
          .map((row) => {
            const before = toNumber(row[EVA_BEFORE_KEY]);
            const after = toNumber(row[EVA_AFTER_KEY]);

            if (before === null || after === null) return null;
            return { before, after };
          })
          .filter(
            (pair): pair is { before: number; after: number } => pair !== null
          );

        const eifelPairs = data
          .map((row) => {
            const before = toNumber(row[EIFEL_BEFORE_KEY]);
            const after = toNumber(row[EIFEL_AFTER_KEY]);

            if (before === null || after === null) return null;
            return { before, after };
          })
          .filter(
            (pair): pair is { before: number; after: number } => pair !== null
          );

        const evaStats = computePairedStats(evaPairs);
        const eifelStats = computePairedStats(eifelPairs);

        setEvaCount(evaPairs.length);
        setEifelCount(eifelPairs.length);

        setEvaBefore(evaStats.meanBefore);
        setEvaAfter(evaStats.meanAfter);
        setEvaMeanGain(evaStats.meanGain);
        setEvaP(evaStats.p);
        setEvaCI(evaStats.ci);

        setEifelBefore(eifelStats.meanBefore);
        setEifelAfter(eifelStats.meanAfter);
        setEifelMeanGain(eifelStats.meanGain);
        setEifelP(eifelStats.p);
        setEifelCI(eifelStats.ci);
      } catch (error) {
        console.error("Erreur chargement résultats :", error);
      }
    }

    loadData();
  }, []);

  const format = (value: number | null) =>
    value !== null ? value.toFixed(1).replace(".", ",") : "…";

  const percentChange = (before: number | null, after: number | null) => {
    if (before === null || after === null || before === 0) return null;
    return Math.round(((before - after) / before) * 100);
  };

  const evaGainPercent = percentChange(evaBefore, evaAfter);
  const eifelGainPercent = percentChange(eifelBefore, eifelAfter);

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

                {evaGainPercent !== null && (
                  <p className="mt-3 text-xl font-semibold text-green-600">
                    ↓ {evaGainPercent}%
                  </p>
                )}

                <p className="mt-4 text-sm text-gray-500">
                  Basé sur {evaCount} répondant{evaCount > 1 ? "s" : ""}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  p {evaP}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Gain moyen : {evaMeanGain}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  IC95% : {evaCI}
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

                {eifelGainPercent !== null && (
                  <p className="mt-3 text-xl font-semibold text-green-600">
                    ↓ {eifelGainPercent}%
                  </p>
                )}

                <p className="mt-4 text-sm text-gray-500">
                  Basé sur {eifelCount} répondant{eifelCount > 1 ? "s" : ""}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  p {eifelP}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Gain moyen : {eifelMeanGain}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  IC95% : {eifelCI}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
