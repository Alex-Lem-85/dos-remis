import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, BookOpen, Stethoscope } from "lucide-react";

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
              Des médecins anesthésistes réanimateurs spécialisés dans le traitement du lumbago
            </p>
          </div>
        </div>
      </section>

      {/* Équipe Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {doctors.map((doctor) => (
              <Card key={doctor.name} className="overflow-hidden">
                <CardHeader>
                  <Stethoscope className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>{doctor.name}</CardTitle>
                  <p className="text-sm text-gray-600">{doctor.role}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {doctor.specialties.map((specialty, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Une équipe de médecins spécialisés dans le traitement du lumbago
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Un engagement constant vers les meilleurs résultats pour nos patients
                </p>
              </CardContent>
            </Card>
            <Card>
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