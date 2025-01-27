import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer>
      {/* Carte Google Maps */}
      <div className="w-full h-[500px] grayscale">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.5106713688247!2d3.701276376289802!3d43.40815607111469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b135eafdb0e8cf%3A0xed77ac88d495f41d!2sDos-remis%20-%20SOS%20Lumbago!5e0!3m2!1sfr!2sfr!4v1737991445088!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale contrast-125"
        ></iframe>
      </div>

      {/* Informations de contact et horaires */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-3 text-primary" />
                  <span>04 67 80 01 17</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-3 text-primary" />
                  <span>anesthau7@gmail.com</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-3 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Cabinet Anesthau7</p>
                    <p>3ème étage du Pôle Santé Thau</p>
                    <p>310 avenue du Maréchal Juin</p>
                    <p>34200 Sète</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Horaires */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Horaires d'ouverture</h3>
              <div className="space-y-4">
                <div className="flex items-start text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-3 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Lundi - Vendredi</p>
                    <p>9h00 - 16h00</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">
                    Pour les urgences lumbago, utilisez notre formulaire de prise de rendez-vous en ligne, même en dehors des horaires d'ouverture, et nous vous rappellerons au plus vite.
                  </p>
                  <Button asChild size="sm">
                    <a href="https://form.jotform.com/242954146506055" target="_blank" rel="noopener noreferrer">
                      Prendre rendez-vous
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              © {new Date().getFullYear()} Dos-remis. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
