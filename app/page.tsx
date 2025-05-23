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
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Lemaitre",
    role: "Médecin Anesthésiste Réanimateur",
  },
  {
    name: "Dr. Swisser",
    role: "Médecin Anesthésiste Réanimateur",
  },
  {
    name: "Dr. Sekkat",
    role: "Médecin Anesthésiste Réanimateur",
  },
  {
    name: "Dr. Gallais",
    role: "Médecin Anesthésiste Réanimateur",
  },
  {
    name: "Dr. Vallée",
    role: "Médecin Anesthésiste Réanimateur",
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
              Une équipe pluridisciplinaire spécialisée dans le traitement de la
              lombalgie aiguë
            </p>
            <div className="mt-8 flex justify-center gap-4">
              {/* Bouton 1 : Découvrir SOS Lumbago */}
              <a
                href="/sos-lumbago"
                className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90"
              >
                Découvrir SOS Lumbago
              </a>

              {/* Bouton 2 : Prendre rendez-vous */}
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

      {/* Features Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary" />
                <CardTitle>Équipe expérimentée</CardTitle>
                <CardDescription>
                  Des spécialistes reconnus dans leur domaine
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <AlarmClockCheck className="h-8 w-8 text-primary" />
                <CardTitle>Traitement rapide</CardTitle>
                <CardDescription>
                  Prise en charge immédiate de votre douleur
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <ClipboardCheck className="h-8 w-8 text-primary" />
                <CardTitle>Suivi personnalisé</CardTitle>
                <CardDescription>
                  Un accompagnement adapté à vos besoins
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Ear className="h-8 w-8 text-primary" />
                <CardTitle>Disponibilité</CardTitle>
                <CardDescription>Une équipe à votre écoute</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Notre équipe médicale
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Des médecins anesthésistes réanimateurs spécialisés dans le
              traitement du lumbago
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {doctors.map((doctor) => (
              <Card
                key={doctor.name}
                className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:rotate-1 hover:bg-primary/5 group"
              >
                <CardHeader>
                  <Stethoscope className="h-8 w-8 text-primary mx-auto mb-4 transition-colors duration-300 group-hover:text-primary/80" />
                  <CardTitle className="transition-colors duration-300 group-hover:text-primary">
                    {doctor.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                    {doctor.role}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Besoin d'une consultation ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Notre équipe est disponible pour vous accompagner
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
        </div>
      </section>
    </div>
  );
}
