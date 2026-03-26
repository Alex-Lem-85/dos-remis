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
  Users,
  Star,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Lemaitre",
    role: "Médecin Anesthésiste Réanimateur",
    image: "/lemaitre.jpeg",
    objectPosition: "center 18%",
  },
  {
    name: "Dr. Swisser",
    role: "Médecin Anesthésiste Réanimateur",
    image: "/swisser.jpeg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Sekkat",
    role: "Médecin Anesthésiste Réanimateur",
    image: "/sekkat.jpeg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Gallais",
    role: "Médecin Anesthésiste Réanimateur",
    image: "/gallais.jpeg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Vallée",
    role: "Médecin Anesthésiste Réanimateur",
    image: "/vallee.jpeg",
    objectPosition: "center 18%",
  },
];

const reviews = [
  {
    name: "Evelyne",
    text: "Prise en charge rapide (le jour même de l'appel) et efficace. Cela m’a évité un arrêt de travail et des douleurs inutiles. Merci.",
  },
  {
    name: "Isabel",
    text: "Une équipe à l'écoute et sympathique. Le soulagement a été immédiat. Inutile de souffrir pendant des semaines. Encore merci.",
  },
  {
    name: "Ber",
    text: "Un immense merci. Arrivé bloqué avec d’intenses douleurs, je suis reparti soulagé immédiatement. Prise en charge claire, humaine et efficace.",
  },
  {
    name: "Pierre",
    text: "Une équipe au top. Simple, rapide, efficace, avec un vrai suivi. C’est encore trop peu connu. Merci SOS Lumbago.",
  },
  {
    name: "Delphine",
    text: "Après plusieurs injections et une courte surveillance, retour à la maison sans douleur. Le matin j’étais pliée en deux, le soir je m’occupais de mes enfants.",
  },
];
const newsItems = [
  {
    title: "SOS Lumbago dans la presse",
    description:
    "Le journal La Montagne nous fait l’honneur d’une dédicace en ouverture d’article, mettant en lumière l’ouverture de SOS Lumbago à Beaumont et notre approche innovante de la prise en charge des lombalgies aiguës. Une belle reconnaissance pour notre équipe et pour cette nouvelle façon d’aborder le mal de dos : rapide, coordonnée et centrée sur le patient.",    image: "/article-seb-clermont.jpeg",
    link: "https://www.lamontagne.fr/clermont-ferrand-63000/actualites/c-est-vraiment-leve-toi-et-marche-un-service-sos-lumbago-a-ouvert-a-la-chataigneraie-a-beaumont_14784335/",
    buttonLabel: "Lire l’article",
  },
  {
    title: "Soirée interprofessionnelle : construire ensemble une filière lombalgie d’excellence",
    description:
      "Dans la continuité de notre démarche autour du parcours lombalgie, nous organisons une soirée d’échange dédiée aux professionnels de santé du bassin de Thau, avec le soutien de la CPTS. L’objectif est clair : présenter concrètement le circuit Dos-Remis / SOS Lumbago, favoriser les échanges interprofessionnels et co-construire une filière locale cohérente, exigeante et multidisciplinaire.",
    image: "/soiree-sos-lumbago-recto.png",
    link: "https://form.jotform.com/260643154511045",
    buttonLabel: "Cliquer pour s’inscrire",
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
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Notre équipe médicale
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Une équipe engagée, expérimentée et spécialisée dans la prise en
              charge du lumbago
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="group rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
<div className="mx-auto h-40 w-40 sm:h-44 sm:w-44 lg:h-48 lg:w-48 overflow-hidden rounded-full ring-2 ring-black">
  <img
    src={doctor.image}
    alt={doctor.name}
    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    style={{ objectPosition: doctor.objectPosition }}
  />
</div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {doctor.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {doctor.role}
                  </p>
                </div>
              </div>
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
      
      {/* Actualités */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Actualités
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border border-gray-200 shadow-sm"
              >
                <div className="w-full bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl leading-tight">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <div className="px-6 pb-6">
                  <Button
                    asChild
                    size="lg"
                    className={
                      item.buttonLabel === "Cliquer pour s’inscrire"
                        ? "bg-primary text-white hover:bg-primary/90"
                        : ""
                    }
                    variant={
                      item.buttonLabel === "Cliquer pour s’inscrire"
                        ? "default"
                        : "secondary"
                    }
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.buttonLabel}
                    </a>
                  </Button>
                </div>
              </Card>
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
