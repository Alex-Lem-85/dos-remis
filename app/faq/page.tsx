import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

const faqItems = [
  {
    question: "Mal de dos brutal ?",
    answer: (
      <p>
        Vous avez probablement un lumbago, aussi appelé <span className="font-bold">« tour de rein »</span> ou lombalgie aiguë non spécifique par les médecins. C&apos;est une douleur soudaine dans le bas du dos qui peut survenir lors d&apos;un effort, après un faux mouvement, ou parfois sans raison apparente.
      </p>
    ),
  },
  {
    question: "C'est grave docteur ?",
    answer: (
      <p>
        Rassurez-vous, <span className="font-bold">ce n&apos;est pas grave</span> et vous allez guérir naturellement. Le lumbago est un exces de tension et d&apos;inflammation dans le fascia. La douleur peut irradier dans la fesse et dans l&apos;arrière de la jambe sans qu&apos;il s&apos;agisse d&apos;une compression nerveuse (sciatique) car il s&apos;agit du trajet des fascias.
      </p>
    ),
  },
  {
    question: "Faut-il faire des examens d'imagerie ?",
    answer: (
      <p>
        <span className="font-bold">Non</span>, sauf en cas de signes d&apos;alerte (drapeaux rouges) : fièvre, perte de poids inexpliquée, antécédents de cancer, troubles urinaires ou fécaux, faiblesse musculaire importante, ou traumatisme violent. Dans ces cas, consultez en urgence.
      </p>
    ),
  },
  {
    question: "Combien de temps ça va durer ?",
    answer: (
      <p>
        La guérison naturelle peut prendre entre <span className="font-bold">1 et 6 semaines</span>. Mais avec la prise en charge SOS lumbago, nous pouvons accélérer ce processus et soulager rapidement votre douleur.
      </p>
    ),
  },
  {
    question: "Comment guérir plus vite ?",
    answer: (
      <p>
        Les études scientifiques prouvent que le traitement de la lombalgie aigüe c&apos;est <span className="font-bold">le mouvement</span>. Facile à dire quand on est bloqué.
      </p>
    ),
  },
  {
    question: "Et que pouvez vous me prescrire pour avoir moins mal ?",
    answer: (
      <div className="space-y-4">
        <p>
          Primum non nocere : <span className="font-bold">les médicaments sont quasi inefficaces</span> et font
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
          En l&apos;absence d&apos;étude de bonne qualité, il n&apos;est pas possible de
          statuer sur l&apos;efficacité de la sophrologie, de la relaxation, de la «
          méditation pleine conscience » ou de l&apos;hypnose. Elles peuvent
          cependant être envisagées.
        </p>
        <p>
          Il est possible d&apos;envisager le port d&apos;une ceinture lombaire ou d&apos;un
          corset sur une courte durée pour aider à la reprise d&apos;activités bien
          qu&apos;ils n&apos;aient pas démontré d&apos;efficacité sur l&apos;évolution de la
          lombalgie.
        </p>
      </div>
    ),
  },
  {
    question: "Et vous injectez où ?",
    answer: (
      <div className="space-y-4">
        <p>
          L’injection se fait dans le fascia thoraco-lombaire. Elle est guidée par échographie pour une précision parfaite.
        </p>
        <p>
          Le fascia est un tissu conjonctif dont la composition évolue en permanence en fonction des mouvements, des tensions et des compressions, selon le principe de tenségrité.
        </p>
        <p>
          C’est un organe très innervé (ce qui explique les douleurs), et il reste encore beaucoup à découvrir à son sujet.
        </p>
        <p>
          L’équipe Dos-Remis espère contribuer à améliorer les connaissances sur les fascias.
        </p>
        <div className="aspect-video w-full max-w-4xl mx-auto pt-4">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/zCyigpz1HlQ?mute=0&playsinline=1"
            title="Vidéo complémentaire sur les techniques non médicamenteuses"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
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
                C&apos;est quoi un lumbago docteur ?
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
                  Cliquez pour plus d&apos;informations
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-video w-full max-w-4xl mx-auto">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/s5WLqHypbPM?autoplay=1&start=8&mute=0&playsinline=1"
              title="Vidéo explicative sur le lumbago"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
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
