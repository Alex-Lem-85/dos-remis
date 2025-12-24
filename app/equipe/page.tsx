import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Stethoscope, Users, Star } from "lucide-react";

const doctors = [
  {
    name: "Dr. Lemaitre",
    role: "Médecin Anesthésiste Réanimateur",
    specialties: ["Traitement du lumbago", "Médecine de la douleur"],
  },
  {
    name: "Dr. Swisser",
    role: "Médecin Anesthésiste Réanimateur",
    specialties: ["Traitement du lumbago", "Médecine de la douleur"],
  },
  {
    name: "Dr. Sekkat",
    role: "Médecin Anesthésiste Réanimateur",
    specialties: ["Traitement du lumbago", "Médecine de la douleur"],
  },
  {
    name: "Dr. Gallais",
    role: "Médecin Anesthésiste Réanimateur",
    specialties: ["Traitement du lumbago", "Médecine de la douleur"],
  },
  {
    name: "Dr. Vallée",
    role: "Médecin Anesthésiste Réanimateur",
    specialties: ["Traitement du lumbago", "Médecine de la douleur"],
  },
];

const reviews = [
  {
    author: "Evelyne",
    text: "Prise en charge rapide (le jour même de l'appel) et efficace . Ca m'a évité un arrêt de travail et des douleurs inutiles. Merci",
  },
  {
    author: "Isabel",
    text: "Une équipe à l'écoute, et sympathique de surcroît. Le soulagement a été immédiat. C'est magique ! Inutile de souffrir pendant des semaines... Encore merci.",
  },
  {
    author: "Ber",
    text: "Un énorme MERCI. La prise en charge rapide, les explications claires et la gentillesse de l'anesthésiste, Dr Alexandre Lemaitre, ont été au top, en tout point de vue. Arrivé bloqué avec d'intenses douleurs, incapable de trouver une posture de repos, je suis reparti souriant et soulagé, impressionné du résultat immédiat. N'hésitez surtout pas, en attendant inutilement de souffrir. Je ne peux que vous recommander et vous remercier.",
  },
  {
    author: "Pierre",
    text: "Une équipe au TOP! Simple, rapide, efficace. Ils sont aux petits soin, dans l'accompagnement et l'écoute. Des soignants et des professionnels de santé (de la secrétaire aux anesth) où j'ai rien a redire. Le protocole est complet, avec suivi et recommandations. C'est encore peu connu et gagné a l'être. Merci sos lumbago d'exister et de prendre soin de notre dos. Car si on passe par la méthode traditionnel, c'est bien plus long",
  },
  {
    author: "Patient",
    text: "Un grand merci au Dr Lemaitre Alexandre pour son efficacité. Grâce à son intervention j'ai été soulagé de la douleur immédiatement et pu me rendre rapidement chez mon osthéo pour régler mon souci de dos. Je le recommande à 100%.",
  },
  {
    author: "Delphine",
    text: "Anesthésiste très efficace qui après une écho repère tout de suite le problème. Après plusieurs injections,une surveillance en salle de réveil avec des infirmières adorables. Retour chez moi et comme par magie plus aucune douleur. Alors que le matin j'étais pliée en 2 le soir je pouvais m'occuper de mes enfant",
  },
];

function Etoiles5() {
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      <Star className="h-4 w-4" />
      <Star className="h-4 w-4" />
      <Star className="h-4 w-4" />
      <Star className="h-4 w-4" />
      <Star className="h-4 w-4" />
    </div>
  );
}

export default function Equipe() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Notre équipe médicale
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Des médecins anesthésistes réanimateurs spécialisés dans le
              traitement du lumbago
            </p>

            {/* Marqueur visible pour vérifier que le bon fichier est déployé */}
            <div className="mt-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              NOUVEAU : section avis activée
            </div>
          </div>
        </div>
      </section>

      {/* Équipe Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {doctors.map((doctor) => (
              <Card
                key={doctor.name}
                className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:rotate-1 hover:bg-primary/5 group"
              >
                <CardHeader>
                  <Stethoscope className="h-8 w-8 text-primary mb-4 transition-colors duration-300 group-hover:text-primary/80" />
                  <CardTitle className="transition-colors duration-300 group-hover:text-primary">
                    {doctor.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                    {doctor.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {doctor.specialties.map((specialty, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-center transition-colors duration-300 group-hover:text-gray-700"
                      >
                        <Award className="h-4 w-4 mr-2 text-primary transition-colors duration-300 group-hover:text-primary/80" />
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Avis (2 visibles + défilement horizontal) */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Avis
            </h2>

            <div className="-mx-4 px-4 overflow-x-auto">
              <div className="flex gap-6 snap-x snap-mandatory">
                {reviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[48%] rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <p className="font-semibold text-gray-900">
                        {review.author}
                      </p>
                      <Etoiles5 />
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      “{review.text}”
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500">
              Faites défiler horizontalement pour voir les autres avis.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nos valeurs</h2>
            <p className="mt-4 text-lg text-gray-600">
              Une équipe unie par des valeurs communes au service de votre santé
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Une équipe de médecins spécialisés dans le traitement du
                  lumbago
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Un engagement constant vers les meilleurs résultats pour nos
                  patients
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Formation continue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Une mise à jour permanente de nos connaissances et techniques
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
