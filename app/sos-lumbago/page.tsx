import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, Clock, CheckCircle, Shield, AlertCircle, Info, 
  X, Activity, Brain, Pill, Ban, Stethoscope, Laptop, BookOpen, 
  Heart, Utensils, Weight, Cigarette, HelpCircle 
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DrapeauxRouges from "@/components/DrapeauxRouges";


const faqItems = [
  {
    question: "Mal de dos brutal ?",
    answer: "Vous avez probablement un lumbago, aussi appelé « tour de rein » ou lombalgie aiguë non spécifique par les médecins. C'est une douleur soudaine dans le bas du dos qui peut survenir lors d'un effort, après un faux mouvement, ou parfois sans raison apparente."
  },
  {
    question: "C'est grave docteur ?",
    answer: "Rassurez-vous, ce n'est pas grave et vous allez guérir naturellement. Le lumbago est une contracture musculaire sans réelle lésion sous-jacente. La douleur peut irradier dans la fesse sans qu'il s'agisse d'une compression nerveuse (sciatique) car c'est le trajet des muscles."
  },
{
    question: "Faut-il faire des examens d'imagerie ?",
    answer: (
      <>
        <DrapeauxRouges />
      </>
    )
  },
  {
    question: "Combien de temps ça va durer ?",
    answer: "La guérison naturelle peut prendre entre 1 et 6 semaines. Mais avec la prise en charge SOS lumbago, nous pouvons accélérer ce processus et soulager rapidement votre douleur."
  },
  {
    question: "Comment guérir plus vite ?",
    answer: "Les études scientifiques prouvent que le traitement de la lombalgie aigüe c'est le mouvement. Facile à dire quand on est bloqué."
  },
  {
    question: "Et que pouvez vous me prescrire pour avoir moins mal ?",
    answer: (
      <div className="space-y-4">
        <p>Primum non nocere : les médicaments sont quasiment inefficaces et font plus de mal que de bien.</p>
        <ul className="space-y-2">
        </ul>
      </div>
    )
  },
  {
    question: "Et les techniques non médicamenteuses ?",
    answer: (
      <div className="space-y-4">
        <p>Celles qui ne sont pas recommandées : ultrasons, tractions lombaires, semelles orthopédiques, acupuncture, acupression, dry needling</p>
        <p>En l'absence d'étude de bonne qualité, il n'est pas possible de statuer sur l'efficacité de la sophrologie, de la relaxation, de la « méditation pleine conscience » ou de l'hypnose. Elles peuvent cependant être envisagées.</p>
        <p>Il est possible d'envisager le port d'une ceinture lombaire ou d'un corset sur une courte durée pour aider à la reprise d'activités bien qu'ils n'aient pas démontré d'efficacité sur l'évolution de la lombalgie.</p>
      </div>
    )
  }
];

export default function SOSLumbago() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              SOS Lumbago
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Une prise en charge rapide et efficace de votre mal de dos
            </p>
          </div>
        </div>
      </section>

      {/* Message clé */}
      <section className="py-12 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Message important</h2>
            <p className="text-xl">
              L'équipe de SOS lumbago vous propose d'accélérer le processus de guérison en diminuant la douleur aiguë. 
              Cela permet de casser le cercle vicieux qui pourrait conduire à l'apparition de douleurs chroniques
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">C'est quoi un lumbago au fait ?</h2>
          
          <div className="flex justify-center mb-6"> {/* Center the button and add margin bottom */}
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 border border-primary"
            >
              <a 
                href="https://www.ameli.fr/sites/default/files/Documents/Parcours-soins-patient-je-souffre-lombalgie.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Cliquez pour plus d'informations
              </a>
            </Button>
          </div>

          <div className="grid gap-8">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info 
                      className="h-5 w-5 text-primary" 
                      aria-label="Question fréquente"
                    />
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {item.answer}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* Notre solution */}
<section className="py-12 bg-primary">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center text-white">
      <h2 className="text-4xl font-bold mb-4">Notre solution</h2>
      <p className="text-xl mb-6">
        Une approche rapide et efficace pour soulager votre douleur
      </p>
    </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
       <CardHeader className="text-center">
          <CardTitle className="text-center">Le traitement : SOS Lumbago</CardTitle>
       </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Clock className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Durée : 5 minutes</p>
                      <p className="text-gray-600">Comptez 1 à 2 h au total avec les formalités et la surveillance</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Action rapide</p>
                      <p className="text-gray-600">Soulagement immédiat, effet maximal le lendemain</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="h-32 w-32 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Technique sûre</p>
                      <p className="text-gray-600">Infiltration musculaire guidée par échographie pour une précision parfaite. Nous injectons un produit anesthésisant (Ropivacaine). Le muscle endormi va pouvoir se  décontracter. Ce n'est ni une infiltration de cortisone ni une péridurale. Nous restons à distance des nerfs et de la colonne vertebrale</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
           <CardHeader className="text-center">
             <CardTitle className="text-center">Et après ?</CardTitle>
           </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Activity className="h-20 w-20 text-primary mt-1" />
                    <div>
                      <p className="text-gray-600">Profitez de l'anesthésie du muscle pour faire des étirements et reprendre le jour même une activité physique et professionnelle adaptées à votre douleur</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Stethoscope className="h-20 w-20 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Réévaluation à 3-4 semaines plus tard</p>
                      <p className="text-gray-600">Elle est importante pour évaluer le risque de chronicisation des douleurs et vous orienter vers les bons professionnels (RDV au cabinet Anesthau 7)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Kinésithérapie</p>
                      <p className="text-gray-600">Prescription de 5 séances avec réévaluation à la 4ème séance</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="h-20 w-20 text-primary mt-1" />
                    <div>
                      <p className="text-gray-600">En cas d'arrêt de travail, il n'est pas nécessaire d'attendre la disparition des symptômes pour reprendre. La reprise précoce améliore le pronostic</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
              N'attendez pas que la douleur s'aggrave. Plus vous tardez, plus vos muscles fondent à cause de l'inactivité.
            </p>
            <div className="mt-8">
              <Button asChild variant="secondary" size="lg">
                <a href="https://form.jotform.com/242954146506055" target="_blank" rel="noopener noreferrer">
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
