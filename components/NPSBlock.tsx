"use client";

import { useEffect, useState } from "react";

type SheetRow = Record<string, string | undefined>;

export default function NPSBlock() {
  const [nps, setNps] = useState<number | null>(null);
  const [responsesCount, setResponsesCount] = useState<number>(0);
  const [displayedNps, setDisplayedNps] = useState(0);

  useEffect(() => {
    async function loadNPS() {
      try {
        const res = await fetch(
          "https://opensheet.elk.sh/1ziqoV37aDOhACAju-d3eg8e-77U0AeeCsHs-_3-KQcM/Form%20responses"
        );
        const data: SheetRow[] = await res.json();

        const normalize = (value: string) =>
          value
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();

        const keys = Object.keys(data[0] ?? {});
        const npsKey = keys.find((key) => normalize(key) === "nps");

        const scores = data
          .map((row) => {
            const raw = String((npsKey ? row[npsKey] : "") ?? "").trim();
            if (raw === "") return null;

            const value = Number(raw.replace(",", "."));
            if (Number.isNaN(value)) return null;

            return value;
          })
          .filter(
            (value): value is number =>
              value !== null && value >= 0 && value <= 10
          );

        const total = scores.length;
        setResponsesCount(total);

        if (total === 0) {
          setNps(null);
          return;
        }

        const promoters = scores.filter((score) => score >= 9).length;
        const detractors = scores.filter((score) => score <= 6).length;

        const score = Math.round(((promoters - detractors) / total) * 100);
        setNps(score);
      } catch (error) {
        console.error("Erreur de chargement du NPS :", error);
        setNps(null);
      }
    }

    loadNPS();
  }, []);

  useEffect(() => {
    if (nps === null) return;

    let start = 0;
    const duration = 800;
    const stepTime = 15;
    const increment = nps / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;

      if (start >= nps) {
        setDisplayedNps(nps);
        clearInterval(counter);
      } else {
        setDisplayedNps(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [nps]);

  const label =
    nps === null
      ? "Mise à jour en cours"
      : nps >= 70
      ? "Excellent"
      : nps >= 50
      ? "Très bon"
      : nps >= 30
      ? "Solide"
      : "En progression";

  const stars =
    nps === null ? 0 : nps >= 70 ? 5 : nps >= 50 ? 4 : nps >= 30 ? 3 : 2;

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="px-6 py-10 md:px-12 md:py-14">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Le Net Promoter Score (NPS) : un indicateur simple mais exigeant
              </h2>

              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                On ne peut améliorer que ce que l’on peut mesurer
              </p>

              <div className="mt-10 flex justify-center">
                <div className="flex min-w-[220px] flex-col items-center rounded-[2rem] border border-primary/15 bg-gradient-to-b from-white to-primary/5 px-10 py-8 shadow-sm">
                  <span className="text-lg font-bold uppercase tracking-[0.25em] text-gray-700">
                    NPS
                  </span>
                  <p className="mt-2 text-6xl sm:text-7xl font-bold text-primary leading-none">
                    {nps !== null ? displayedNps : "…"}
                  </p>
                  <p className="mt-3 text-base font-semibold text-gray-900">
                    {label}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`text-2xl ${
                      index < stars ? "text-yellow-400" : "text-gray-200"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="mt-6 text-lg text-gray-700">
                Basé sur{" "}
                <span className="font-semibold text-gray-900">
                  {responsesCount}
                </span>{" "}
                réponse{responsesCount > 1 ? "s" : ""} patient
                {responsesCount > 1 ? "s" : ""}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                Score mis à jour automatiquement à partir des retours patients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
