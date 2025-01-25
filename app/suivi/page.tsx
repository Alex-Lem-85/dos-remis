import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity,
  Apple,
  BookOpen,
  Brain,
  Cigarette,
  Dumbbell,
  Heart,
  Image,
  Microscope,
  Scale,
  Shield,
  Smile,
  Sparkles,
  Stethoscope,
  Radiation,
  StretchVertical as Stretch,
  Target,
  UserCog,
  Building
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
    description: "Implication active du patient dans son processus de guérison"
  }
];

const preventionSteps = [
  {
    icon: Stretch,
    title: "Étirements musculaires",
    description: "Assouplissements réguliers pour maintenir la souplesse du dos"
  },
  {
    icon: Dumbbell,
    title: "Renforcement musculaire",
    description: "Musculation à intensité modérée ciblant tous les groupes musculaires : dorsaux, abdominaux, transverse, plancher pelvien et diaphragme"
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
    icon: Dumbbell,
    title: "Programme d'exercices supervisés",
    description: "Par un kinésithérapeute pour éduquer et motiver"
  },
  {
    icon: Stethoscope,
    title: "Médecins spécialistes",
    description: "Rhumatologue, médecin physique et réadaptation, neurochirurgien"
  },
  {
    icon: Brain,
    title: "Gestion du stress",
    description: "Relaxation, méditation et soutien psychologique permettent de réduire les tensions musculaires"
  },
  {
    icon: Cigarette,
    title: "Mode de vie",
    description: "Accompagnement pour le sevrage tabagique et la réduction de l'inflammation"
  },
  {
    icon: Apple,
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
  }
];

export default function Suivi() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Une approche globale */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Une approche globale
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
            <h2 className="text-3xl font-bold mb-4">Harmonie retrouvée</h2>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Notre approche en 5P</h2>
            <p className="mt-4 text-lg text-gray-600">
              Une méthodologie complète pour votre santé
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pApproach.map((p, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    {p.title}
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
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Eviter les récidives</h2>
            <p className="mt-4 text-lg text-gray-600">
              L'activité physique régulière est la clé de la prévention. 
              L'éducation et la prévention sont les meilleures des médecines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preventionSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <step.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{step.title}</CardTitle>
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

{/* Notre approche en deux temps */}
<section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre approche en deux temps</h2>
      <p className="text-lg text-gray-600 mb-12">
        SOS lumbago est seulement un traitement symptomatique
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Traitement symptomatique */}
        <Card className="bg-white shadow-md border border-gray-200">
          <CardHeader>
            <Activity className="h-12 w-12 text-primary mb-2 mx-auto" />
            <CardTitle className="text-gray-900 text-xl">1. Traitement symptomatique</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <p>SOS lumbago intervient rapidement pour soulager votre douleur aiguë</p>
          </CardContent>
        </Card>

        {/* Analyse approfondie */}
        <Card className="bg-white shadow-md border border-gray-200">
          <CardHeader>
            <Brain className="h-12 w-12 text-primary mb-2 mx-auto" />
            <CardTitle className="text-gray-900 text-xl">2. Analyse approfondie</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <p>Examen détaillé des causes sous-jacentes pour prévenir les récidives</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>

      {/* Comment vous aider */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Comment vous aider</h2>
            <div className="mt-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-red-500 hover:text-red-700 hover:bg-gray-100 shadow-lg border border-red-500"
              >
                <a 
                  href="https://www.ameli.fr/sites/default/files/Documents/Parcours-soins-patient-je-souffre-lombalgie.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Un peu d'infos
                </a>
              </Button>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Orientation vers une équipe pluridisciplinaire pour prendre le problème à la racine
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalSupport.map((support, index) => (
              <Card key={index}>
                <CardHeader>
                  <support.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{support.title}</CardTitle>
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
