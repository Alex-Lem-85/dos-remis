import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contactez-nous
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Notre équipe est à votre écoute pour vous accompagner
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Nos coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">anesthau7@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Adresse</h3>
                    <p className="text-gray-600">Cabinet Anesthau7</p>
                    <p className="text-gray-600">3ème étage du Pôle Santé Thau</p>
                    <p className="text-gray-600">310 avenue du Maréchal Juin</p>
                    <p className="text-gray-600">34200 Sète</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Horaires</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>Lundi - Vendredi : 9h00 - 16h00</li>
                      <li>Samedi : Fermé</li>
                      <li>Dimanche : Fermé</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] bg-gray-100 rounded-lg relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.0458343392584!2d3.7038097!3d43.4080619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b13598a83c3699%3A0x5f9561153467f77d!2sPolyclinique%20Sainte%20Th%C3%A9r%C3%A8se!5e0!3m2!1sfr!2sfr!4v1710835200000!5m2!1sfr!2sfr"
                className="absolute inset-0 w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Prise de rendez-vous */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Mal de dos brutal ?</h2>
            <Card className="max-w-2xl mx-auto p-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Utilisez notre formulaire de prise de rendez-vous en ligne
                </p>
                <div className="flex justify-center">
                  <Button asChild size="lg">
                    <a href="https://form.jotform.com/242954146506055" target="_blank" rel="noopener noreferrer">
                      Prendre rendez-vous
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}