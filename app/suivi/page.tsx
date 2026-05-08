import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  BedDouble,
  BicepsFlexed,
  BookOpen,
  BrainCircuit,
  CigaretteOff,
  Dumbbell,
  Fingerprint,
  Heart,
  Microscope,
  Music,
  Scale,
  Shield,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Radiation,
  StretchVertical as Stretch,
  Target,
  UserCog,
  Vegan,
  Building,
  Footprints
} from "lucide-react";

const pApproach = [
  {
    title: "Personnalisée",
    description: "Une approche adaptée à chaque patient et à son histoire"
  },
  {
    title: "Précise",
    description: "Un diagnostic méticuleux basé sur des questionnaires scientifiquement validés pour un traitement plus ciblé"
  },
  {
    title: "Prédictive",
    description: "Anticipation des risques d'évolution défavorable grace à nos algorithmes"
  },
  {
    title: "Préventive",
    description: "Actions en amont pour maintenir une bonne santé du dos"
  },
  {
    title: "Participative",
    description: "Implication active du patient dans son processus de guérison sur le long terme"
  }
];

const preventionSteps = [
  {
    icon: Stretch,
    title: "Étirements musculaires",
    description: "Assouplissements pour maintenir la mobilité du dos. Peu importe les mouvements, ils doivent être amples, lents et surtout très reguliers"
  },
  {
    icon: Footprints,
    title: "marcher",
    description: "la sédentarité est l'ennemie du dos, il faut marcher le plus possible et éviter les positions prolongées (assis ou debout)"
  },
  {
    icon: BookOpen,
    title: "Éducation posturale",
    description: "Apprentissage des bonnes postures quotidiennes : position assise, port de charges, se baisser, poste de travail..."
  }
];

const additionalSupport = [
  {
    icon: Radiation,
    title: "Imagerie",
    description: "IRM ou scanner"
  },
  {
    icon: BicepsFlexed,
    title: "Programme d'exercices supervisés",
    description: "Par un kinésithérapeute pour éduquer et motiver. Activité physique adaptée (APA) avec notre spécialiste"
  },
  {
    icon: Stethoscope,
    title: "Médecins spécialistes",
    description: "Rhumatologue, médecin physique et réadaptation, neurochirurgien"
  },
  {
    icon: BrainCircuit,
    title: "Gestion du stress",
    description: "Relaxation, méditation et soutien psychologique permettent de réduire les tensions musculaires"
  },
  {
    icon: CigaretteOff,
    title: "Tabac",
    description: "Accompagnement pour le sevrage tabagique et la réduction de l'inflammation"
  },
  {
    icon: Vegan,
    title: "Nutrition",
    description: "Conseils nutritionnels pour réduire l'inflammation et perdre du poids"
  },
  {
    icon: Scale,
    title: "Gestion du poids",
    description: "Suivi spécialisé car le surpoids aggrave les douleurs lombaires"
  },
  {
    icon: Building,
    title: "Médecine du travail",
    description: "Visite de pré reprise, adaptation du poste, reconversion"
  },
  {
    icon: BedDouble,
    title: "Sommeil",
    description: "il est important de bien dormir. Les phases de récuperations sont essentielles pour une bonne santé des fascias et des muscles"
  }
];

export default function Suivi() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Même style que SOS Lumbago */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent drop-shadow-sm">
                Une approche globale
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              L'équipe Dos-remis s'engage dans une nouvelle ère de la médecine, axée sur une vision holistique de votre santé
            </p>
          </div>
        </div>
      </section>

      {/* Harmonie retrouvée */}
      <section className="py-12 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Music className="h-8 w-8 text-white" />
              <h2 className="text-3xl font-bold">Harmonie retrouvée</h2>
              <Music className="h-8 w-8 text-white" />
            </div>
            <p className="text-xl">
              Dos-remis est le chef d'orchestre de votre prise en charge, mais vous faites partie de l'orchestre. 
              Ce sont vos exercices physiques et l'adaptation de votre mode de vie qui permettront d'éviter les récidives 
              et l'apparition de douleurs chroniques. Nous vous aiderons aussi à trouver d'autres professeurs de musique pour vous accompagner
            </p>
          </div>
        </div>
      </section>

      {/* Notre approche en 5P */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pApproach.map((p, index) => (
              <Card 
                key={index} 
                className="transition-all duration-200 hover:shadow-lg hover:border-primary/20 border group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-black">{p.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prévenir les récidives */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Eviter les récidives</h2>
            <p className="mt-4 text-lg text-gray-600">
              L'activité physique régulière est la clé de la prévention. 
              L'éducation et la prévention sont les meilleures des médecines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preventionSteps.map((step, index) => (
              <Card 
                key={index} 
                className="transition-all duration-200 hover:shadow-lg hover:border-primary/20 border group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <step.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-black">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Vous pouvez commencer seul avec l'application Activ'dos
            </p>
            <Button asChild size="lg">
              <a 
                href="https://www.ameli.fr/herault/assure/sante/themes/lombalgie-aigue/application-activ-dos" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Découvrir Activ'dos
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Vidéo */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl shadow-xl"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/YpejbojhWrY"
              title="Exercices lombalgie vidéo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Image iceberg */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="bg-primary/10 rounded-2xl p-6 mb-8 border-2 border-primary/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Comprendre les causes "profondes" : la douleur n'est que la partie visible de l'iceberg
              </h3>
              <p className="text-lg text-gray-700">
                Traiter la douleur sans les causes expose à des récidives
              </p>
            </div>
          </div>

          <img
            src="/iceberg-etapes-levrai.jpeg"
            alt="Schéma iceberg lombalgie"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Consultation de suivi avec analyse de vos réponses aux questionnaires */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
<h2 className="text-3xl font-bold text-gray-900">Orientation vers une équipe pluridisciplinaire pour prendre les problèmes à la racine</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalSupport.map((support, index) => (
              <Card 
                key={index} 
                className="transition-all duration-200 hover:shadow-lg hover:border-primary/20 border group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <support.icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                    <CardTitle className="text-black">{support.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{support.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
