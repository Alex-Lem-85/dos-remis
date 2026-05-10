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
        Rassurez-vous, ce n&apos;est <span className="font-bold">pas grave</span> et vous allez guérir naturellement. Le lumbago est un excès de tension et d&apos;inflammation dans le fascia. <span className="font-bold">La douleur peut irradier dans la fesse et dans l&apos;arrière de la jambe sans qu&apos;il s&apos;agisse d&apos;une compression nerveuse (sciatique)</span> car il s&apos;agit du trajet des fascias. Il y a une inadéquation entre l&apos;intensité de la douleur (forte) et la gravité (faible).
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
    question: "Donc pas de repos ?",
    answer: (
      <div className="space-y-4">
        <p>
          <span className="font-bold">Surtout pas</span>. Le repos, parfois « forcé », va <span className="font-bold">enraidir vos fascias</span> (lors d&apos;une immobilisation, les fibroblastes synthétisent trop de fibres de collage) et d&apos;entrainer une <span className="font-bold">amyotrophie</span> (diminution du volume des muscles).
        </p>
        <p>
          Ces mécanismes risquent de provoquer et entretenir les douleurs lombaires : c&apos;est le <span className="font-bold">cercle vicieux de la lombalgie</span>.
        </p>
      </div>
    ),
  },
  {
    question: "Et que pouvez vous me prescrire pour avoir moins mal ?",
    answer: (
      <div className="space-y-4">
        <p>
          Primum non nocere : <span className="font-bold">les médicaments sont quasi inefficaces et font souvent plus de mal que de bien</span>. Seuls les AINS ont démontrés une baisse de 1 point d&apos;EVA mais la prise répétée augmente de risque de chronicisation des lombalgies. Tous les autres sont inefficaces, y compris les opioides qui ne font pas mieux que le placebo, mais sont source d&apos;addiction.
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
          L&apos;injection se fait dans le <span className="font-bold">fascia thoraco-lombaire</span>. Elle est guidée par échographie pour une précision parfaite.
        </p>
        <p>
          Le fascia est un tissu conjonctif dont la composition évolue en permanence en fonction des mouvements, des tensions et des compressions, selon le principe de tenségrité.
        </p>
        <p>
          C&apos;est un <span className="font-bold">organe très innervé</span> (ce qui explique les douleurs), et il reste encore beaucoup à découvrir à son sujet.
        </p>
        <p>
          L&apos;équipe Dos-Remis espère contribuer à améliorer les connaissances sur les fascias.
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
  {
    question: "Au bout de combien de temps c'est efficace ?",
    answer: (
      <p>
        L&apos;efficacité est <span className="font-bold">immédiate et progressive sur quelques jours</span>. Pour optimiser les résultats, nous vous conseillons de suivre les recommandations post-infiltration. Nous ne pouvons garantir une disparition totale de la douleur, mais une réduction qui vous permettra de reprendre vos activités en douceur.
      </p>
    ),
  },
  {
    question: "Est-ce que c'est magique ?",
    answer: (
      <div className="space-y-4">
        <p>
          Malheureusement, <span className="font-bold">aucun de nous n&apos;a étudié à Poudlard</span>. Bien que certains patients emploient ce terme, nous privilégions une <span className="font-bold">approche scientifique</span>. Ainsi, en totale transparence, nous affichons nos résultats cliniques en direct sur la page d&apos;accueil depuis le 1er janvier 2026. Il se dessine une <span className="font-bold">diminution d&apos;environ 50% de l&apos;EVA et du score d&apos;handicap EIFEL*</span>. Le reste, est entre vos mains, c&apos;est votre corps qui va le faire si vous appliquez les recommandations qui vous seront données.
        </p>
        <p>
          *Ces résultats ne sont pas encore publiés dans une revue à comité de relecture.
        </p>
      </div>
    ),
  },
  {
    question: "C'est une péridurale ?",
    answer: (
      <p>
        <span className="font-bold">Pas du tout</span>. Ce n&apos;est pas non plus une ponction lombaire ou une anesthésie loco-régionale tronculaire. <span className="font-bold">Cette technique est sans danger pour la colonne vertébrale ou les nerfs</span> : nous ne touchons ni à la colonne, ni au liquide céphalo-rachidien, ni aux racines nerveuses. Nous ciblons uniquement les muscles et les fascias, avec une précision garantie par l&apos;échographie.
      </p>
    ),
  },
  {
    question: "Combien de temps ça agit ?",
    answer: (
      <p>
        L&apos;effet anesthésiant dure environ <span className="font-bold">24 heures</span>. Ensuite, la <span className="font-bold">reprise du mouvement</span> permet à votre système myo-fascial de se réorganiser, ce qui favorise la résolution de l&apos;épisode aigu et une amélioration durable.
      </p>
    ),
  },
  {
    question: "Que faire juste après l'infiltration ?",
    answer: (
      <p>
        <span className="font-bold">Bouger !!!</span> Profitez de la baisse de douleur pour aller marcher, vous étirer, consulter votre kiné ou ostéo, et faire tout ce qui vous met en mouvement, dans la limite de vos capacités.
      </p>
    ),
  },
  {
    question: "J'ai déjà pris RDV avec mon kiné/ostéo, je dois annuler ?",
    answer: (
      <p>
        <span className="font-bold">Absolument pas, notre infiltration est complémentaire.</span> Elle va permettre au professionnel de pouvoir travailler plus efficacement car la douleur aiguë aura diminuée.
      </p>
    ),
  },
  {
    question: "Une seule injection suffit ?",
    answer: (
      <p>
        Une seule injection suffit dans la plupart des cas. Cependant, <span className="font-bold">5 à 10 % des patients peuvent nécessiter une seconde infiltration</span>, si la première a été partiellement efficace ou si la douleur réapparaît. Nos secrétaires vous appelleront systématiquement pour faire le point. Si besoin, n&apos;hésitez pas à reprendre un RDV en ligne. La balance bénéfices/risques est largement en faveur de cette seconde infiltration.
      </p>
    ),
  },
  {
    question: "Quels sont les risques ?",
    answer: (
      <div className="space-y-4">
        <p>
          Les infiltrations myo-fasciales que nous pratiquons sont sûres et très bien tolérées dans l&apos;immense majorité des cas. Toute technique comporte des risques, mais ceux-ci sont <span className="font-bold">extrêmement rares et/ou bénins</span>. Nous maîtrisons parfaitement les infiltrations écho-guidées, que nous réalisons quotidiennement au bloc opératoire.
        </p>
        <p>
          Effets temporaires :
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Légère douleur au point d&apos;injection (normale, le fascia est très innervé).</li>
          <li>Pesanteur ou tension dans le bas du dos (liée au volume injecté).</li>
          <li>Malaise vagal, bouffées de chaleur.</li>
        </ul>
        <p>
          Très rarement : anesthésie temporaire d&apos;une jambe (moins de 24h) en cas de diffusion du produit au-delà du fascia thoraco-lombaire. L&apos;échographie réduit fortement ce risque.
        </p>
        <p>
          Effets exceptionnels : Infection, réaction allergique, saignement.
        </p>
        <p>
          L&apos;absence totale d&apos;efficacité est possible mais rare.
        </p>
      </div>
    ),
  },
  {
    question: "Combien cela va me coûter ?",
    answer: (
      <p>
        Nous ne pratiquons <span className="font-bold">aucun dépassement d&apos;honoraires sur l&apos;ensemble du parcours</span>. Vous serez remboursé à 70 % par la Sécurité sociale sur la base tarifaire conventionnée, hors participation forfaitaire de 2 € à votre charge (sauf exonération). Votre mutuelle prendra en charge le reste selon votre contrat.
      </p>
    ),
  },
  {
    question: "Quels sont les sources de ces recommandations ?",
    answer: (
      <p>
        Notre parcours est basé sur les recommandations de la HAS : élimination des drapeaux rouges puis recherche des drapeaux jaunes... La technique SOS lumbago est récente et peu étudiée. Elle fera l&apos;objet de publications scientifiques approfondies pour valider son efficacité. Nous sommes fortement investis dans l&apos;étude des fascias, un domaine en pleine exploration où beaucoup reste à découvrir et à comprendre. À l&apos;avenir, nous sommes convaincus que cette technique s&apos;intégrera dans les recommandations et que de nombreux centres SOS lumbago se développeront.
      </p>
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
