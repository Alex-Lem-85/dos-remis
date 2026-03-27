"use client";

import { useEffect, useState } from "react";

type SheetRow = {
  NPS?: string;
};

export default function NPSBlock() {
  const [nps, setNps] = useState<number | null>(null);
  const [responsesCount, setResponsesCount] = useState<number>(0);

  useEffect(() => {
    async function loadNPS() {
      try {
        const res = await fetch(
          "https://opensheet.elk.sh/1fV0I_TpI3bDenR_27218klfe9L1tUzeiv9ahlJ-tar4/Dos-Remis"
        );
        const data: SheetRow[] = await res.json();

        const scores = data
          .map((row) => {
            const raw = String(row.NPS ?? "").trim();
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

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Bloc premium */}
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-primary/10 to-primary/5 p-10 shadow-sm">
          
          <div className="text-center">
            
            {/* Titre */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Nos patients nous recommandent
            </h2>

            {/* Sous-titre */}
            <p className="mt-4 text-lg text-gray-600">
              Le Net Promoter Score (NPS) : un indicateur simple et exigeant
            </p>

            {/* Bloc score */}
            <div className="mt-10 flex justify-center">
              <div className="rounded-2xl border border-gray-200 bg-white px-12 py-10 shadow-sm">
                
                {/* NPS label */}
                <p className="text-base font-bold uppercase tracking-widest text-gray-500">
                  NPS
                </p>

                {/* Score */}
                <p className="mt-2 text-7xl font-bold text-primary leading-none">
                  {nps !== null ? nps : "…"}
                </p>

                {/* Label */}
                <p className="mt-3 text-xl font-semibold text-gray-900">
                  {label}
                </p>

              </div>
            </div>

            {/* Réponses */}
            <p className="mt-6 text-gray-600">
              Basé sur{" "}
              <span className="font-semibold text-gray-900">
                {responsesCount}
              </span>{" "}
              réponse{responsesCount > 1 ? "s" : ""} patient
              {responsesCount > 1 ? "s" : ""}
            </p>

            {/* Footer */}
            <p className="mt-4 text-sm text-gray-500">
              Score mis à jour automatiquement à partir des retours patients.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
