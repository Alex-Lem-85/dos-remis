import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlarmClockCheck,
  ClipboardCheck,
  Ear,
  Stethoscope,
  Users,
  Star,
} from "lucide-react";

const doctors = [
  { name: "Dr. Lemaitre", role: "Médecin Anesthésiste Réanimateur" },
  { name: "Dr. Swisser", role: "Médecin Anesthésiste Réanimateur" },
  { name: "Dr. Sekkat", role: "Médecin Anesthésiste Réanimateur" },
  { name: "Dr. Gallais", role: "Médecin Anesthésiste Réanimateur" },
  { name: "Dr. Vallée", role: "Médecin Anesthésiste Réanimateur" },
];

const reviews = [
  {
    name: "Evelyne",
    text: "Prise en charge rapide (le jour même de l'appel) et efficace. Cela m’a évité un arrêt de travail et des douleurs inutiles. Merci.",
  },
  {
    name: "Isabel",
    text: "Une équipe à l'écoute, et sympathique de surcroît. Le soulagement a été immédiat. C'est magique ! Inutile de souffrir pendant des semaines... Encore merci.",
  },
  {
    name: "Ber",
    text: "Un énorme MERCI. La prise en charge rapide, les explications claires et la gentillesse de l'anesthésiste, Dr Alexandre Lemaitre, ont été au top, en tout point de vue. Arrivé bloqué avec d'intenses douleurs, incapable de trouver une posture de repos, je suis reparti souriant et soulagé, impressionné du résultat immédiat. N'hésitez surtout pas, en attendant inutilement de souffrir. Je ne peux que vous recommander et vous remercier.",
  },
  {
    name: "Pierre",
    text: "Une équipe au TOP! Simple, rapide, efficace. Ils sont aux petits soin, dans l'accompagnement et l'écoute. Des soignants et des professionnels de santé (de la secrétaire aux anesth) où j'ai rien a redire. Le protocole est complet, avec suivi et recommandations. C'est encore peu connu et gagné a l'être. Merci sos lumbago d'exister et de prendre soin de notre dos. Car si on passe par la méthode traditionnel, c'est bien plus long.",
  },
  {
    name: "Delphine",
    text: "Anesthésiste très efficace qui après une écho repère tout de suite le problème. Après plusieurs injections,une surveillance en salle de réveil avec des infirmières adorables. Retour chez moi et comme par magie plus aucune douleur .Alors que le matin j'étais pliée en 2 le soir je pouvais m'occuper de mes enfants",
  },
    {
    name: "Solei",
    text: "Un grand merci au Dr Lemaitre Alexandre pour son efficacité. Grâce à son intervention j'ai été soulagé de la douleur immédiatement et pu me rendre rapidement chez mon osthéo pour régler mon souci de dos. Je le recommande à 100%",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Prenons soin de votre dos
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Une équipe spécialisée dans le traitement de la lombalgie aiguë
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/sos-lumbago"
                className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90"
              >
                Découvrir SOS Lumbago
              </a>
              <a
                href="https://form.jotform.com/242954146506055"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary py-3 px-6 rounded-lg hover:bg-primary hover:text-white"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary" />
                <CardTitle>Équipe expérimentée</CardTitle>
                <CardDescription>Spécialistes reconnus</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <AlarmClockCheck className="h-8 w-8 text-primary" />
                <CardTitle>Traitement rapide</CardTitle>
                <CardDescription>Prise en charge immédiate</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <ClipboardCheck className="h-8 w-8 text-primary" />
                <CardTitle>Suivi personnalisé</CardTitle>
                <CardDescription>Orientation adaptée</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Ear className="h-8 w-8 text-primary" />
                <CardTitle>À l’écoute</CardTitle>
                <CardDescription>Disponibilité et bienveillance</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Notre équipe médicale
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {doctors.map((doctor) => (
              <Card key={doctor.name} className="text-center">
                <CardHeader>
                  <Stethoscope className="h-8 w-8 text-primary mx-auto mb-4" />
                  <CardTitle>{doctor.name}</CardTitle>
                  <p className="text-sm text-gray-600">{doctor.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avis patients */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Avis de nos patients
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-md bg-white rounded-xl border p-6 shadow-sm snap-center"
              >
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {review.text}
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Besoin d'une consultation ?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Notre équipe est disponible
          </p>
          <div className="mt-8">
            <Button asChild variant="secondary" size="lg">
              <a
                href="https://form.jotform.com/242954146506055"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prendre rendez-vous
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
