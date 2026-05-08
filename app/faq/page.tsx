import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

const faqItems = [
  {
    question: "Mal de dos brutal ?",
    answer:
      "Vous avez probablement un lumbago, aussi appelé « tour de rein » ou lombalgie aiguë non spécifique par les médecins. C'est une douleur soudaine dans le bas du dos qui peut survenir lors d'un effort, après un faux mouvement, ou parfois sans raison apparente.",
  },
  {
    question: "C'est grave docteur ?",
    answer:
      "Rassurez-vous, ce n'est pas grave et vous allez guérir naturellement. Le lumbago est un exces de tension et d'inflammation dans le fascia. La douleur peut irradier dans la fesse sans qu'il s'agisse d'une compression nerveuse (sciatique) car c'est le trajet des fascias.",
  },
  {
    question: "Faut-il faire des examens d'imagerie ?",
    answer: "Non, sauf en cas de signes d'alerte (drapeaux rouges) : fièvre, perte de poids inexpliquée, antécédents de cancer, troubles urinaires ou fécaux, faiblesse musculaire importante, ou traumatisme violent. Dans ces cas, consultez en urgence.",
  },
  {
    question: "Combien de temps ça va durer ?",
    answer:
      "La guérison naturelle peut prendre entre 1 et 6 semaines. Mais avec la prise en charge SOS lumbago, nous pouvons accélérer ce processus et soulager rapidement votre douleur.",
  },
  {
    question: "Comment guérir plus vite ?",
    answer:
      "Les études scientifiques prouvent que le traitement de la lombalgie aigüe c'est le mouvement. Facile à dire quand on est bloqué.",
  },
  {
    question: "Et que pouvez vous me prescrire pour avoir moins mal ?",
    answer: (
      <div className="space-y-4">
        <p>
          Primum non nocere : les médicaments sont quasiment inefficaces et font
          plus de mal que de bien.
        </p>
        <ul className="space-y-2"></ul>
      </div>
    ),
  },
  {
    question: "Et les techniques non médicamenteuses ?",
    answer: (
      <div className="space-y-4">
        <p>
          Celles qui ne sont pas recommandées : ultrasons, tractions lombaires,
          semelles orthopédiques, acupuncture, acupression, dry needling
        </p>
        <p>
          En l'absence d'étude de bonne qualité, il n'est pas possible de
          statuer sur l'efficacité de la sophrologie, de la relaxation, de la «
          méditation pleine conscience » ou de l'hypnose. Elles peuvent
          cependant être envisagées.
        </p>
        <p>
          Il est possible d'envisager le port d'une ceinture lombaire ou d'un
          corset sur une courte durée pour aider à la reprise d'activités bien
          qu'ils n'aient pas démontré d'efficacité sur l'évolution de la
          lombalgie.
        </p>
      </div>
    ),
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent drop-shadow-sm">
                FAQ : au fait c'est quoi un lumbago docteur ?
              </span>
            </h1>
            <div className="mt-8">
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6">
            {faqItems.map((item, index) => (
              <Card 
                key={index} 
                className="transition-all duration-200 hover:shadow-lg hover:border-primary/20 border"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Info className="h-6 w-6 text-primary" aria-label="Question fréquente" />
                    </div>
                    <span className="text-primary font-medium">{item.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="pl-13">
                    {item.answer}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
