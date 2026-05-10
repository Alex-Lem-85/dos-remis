import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  CheckCircle,
  Clock,
  FastForward,
  Info,
  PersonStanding,
  Stethoscope,
  Syringe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Parcours SOS Lumbago | Traitement urgent - Dos-Remis Sète & Montpellier",
  description: "Parcours de soins accéléré pour les lombalgies aiguës. Prise en charge en urgence avec infiltration écho-guidée et suivi médical à Sète et Montpellier.",
};

export default function SOSLumbago() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Identique à la page d'accueil */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent drop-shadow-sm">
                SOS Lumbago
              </span>
            </h1>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://form.jotform.com/242954146506055"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 font-semibold shadow-md"
              >
                Demander un RDV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Message clé */}
      <section className="py-12 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Message important</h2>
            <p className="text-xl">
              L'équipe de SOS lumbago vous propose d'accélérer le processus de
              guérison en diminuant la douleur aiguë. Cela permet de casser le
              cercle vicieux qui pourrait conduire à l'apparition de douleurs
              chroniques
            </p>
          </div>
        </div>
      </section>

      {/* Notre solution - Version améliorée en 2 étapes */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Notre solution
            </h2>
            <p className="text-xl text-red-600 font-medium">
              Soigner vite, soigner mieux et soigner durablement votre mal de dos
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Nous suivons les recommandations de la HAS (Haute Autorité de Santé)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Étape 1 - Traitement */}
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-primary/5 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <Syringe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">
                  Étape 1 : Le traitement SOS Lumbago
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Durée : 5 minutes</p>
                      <p className="text-gray-600">
                        Comptez 1 à 2 h au total avec les formalités et la surveillance
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FastForward className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Action rapide</p>
                      <p className="text-gray-600">
                        Soulagement immédiat, effet maximal le lendemain
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Technique sûre</p>
                      <p className="text-gray-600">
                        Infiltration myo-fasciale guidée par échographie pour une précision parfaite. 
                        Nous injectons un produit anesthésiant (Ropivacaine) au niveau du fascia 
                        thoraco-lombaire. Ainsi "endormi", il va pouvoir se détendre et se régénérer 
                        seul. Ce n'est ni une infiltration de cortisone ni une péridurale. Nous restons 
                        à distance des nerfs et de la colonne vertébrale
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Étape 2 - Suivi */}
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-primary/5 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">
                  Étape 2 : Le suivi personnalisé
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <PersonStanding className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-600">
                        Profitez de l'anesthésie pour faire des étirements et reprendre le jour même 
                        une activité physique et professionnelle adaptée à votre douleur
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        <a
                          href="https://dos-remis.com/suivi/"
                          rel="noopener noreferrer"
                          className="text-primary underline hover:text-primary/90"
                        >
                          Réévaluation 2 semaines plus tard
                        </a>
                      </p>
                      <p className="text-gray-600">
                        Elle est importante pour évaluer le risque de chronicisation des douleurs 
                        et vous orienter vers les bons professionnels (RDV au cabinet Anesthau 7)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Info className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Kinésithérapie</p>
                      <p className="text-gray-600">
                        Prescription de 5 séances avec réévaluation à la 4ème séance
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-600">
                        En cas d'arrêt de travail, il n'est pas nécessaire d'attendre la disparition 
                        des symptômes pour reprendre. La reprise précoce améliore le pronostic
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Vidéo présentation */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Découvrez SOS lumbago en vidéo
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Des explications par notre maître, le Dr. Choquet, du CHU de Montpellier
            </p>
          </div>

          <div
            className="relative w-full overflow-hidden rounded-2xl shadow-xl"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/cXU6P7MNVUY"
              title="SOS Lumbago vidéo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              Vous souffrez d'un lumbago ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              N'attendez pas que la douleur s'aggrave. Plus vous tardez, plus
              vos muscles diminuent à cause de l'inactivité et plus vos fascias se fibrosent.
            </p>
            <div className="mt-8">
              <Button asChild variant="secondary" size="lg">
                <a
                  href="https://form.jotform.com/242954146506055"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prendre rendez-vous en urgence
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
