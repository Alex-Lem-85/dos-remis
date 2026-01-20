import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  { name: "Dr. Suisse", role: "Médecin Anesthésiste Réanimateur" },
  { name: "Dr. Sekkat", role: "Médecin Anesthésiste Réanimateur" },
  { name: "Dr. Gallais", role: "Médecin Anesthésiste Réanimateur" },
  { name: "Dr. Vallée", role: "Médecin Anesthésiste Réanimateur" },
];

const reviews = [
  {
    name: "Evelyne",
    text: "Prise en charge rapide (le jour même de l'appel) et efficace. Cela m'a évité un arrêt de travail et des douleurs inutiles. Merci.",
  },
  {
    name: "Isabel",
    text: "Une équipe à l'écoute, et sympathique de surcroît. Le soulagement a été immédiat. C'est magique ! Inutile de souffrir pendant des semaines... Encore merci.",
  },
  {
    name: "Ber",
    text: "Un énorme MERCI. La prise en charge rapide, les explications claires et la gentillesse de l'anesthésiste, Dr Alexandre Lemaitre, ont été au top, en tout point de vue. Arrivé bloqué avec d'intenses douleurs, incapable de trouver une posture de repos, je suis reparti soutenant et soulagé, impressionné du résultat immédiat. N'hésitez surtout pas.",
  },
  {
    name: "Pierre",
    text: "Une équipe au TOP! Simple, rapide, efficace. Ils sont aux petits soin, dans l'accompagnement et l'écoute. Des soignants et des professionnels de santé (de la secrétaire aux anesth) où j'ai rien à redire. Le protocole est complet, avec suivi et recommandations. C'est encore peu connu et gagne à l'être. Merci SOS Lumbago d'exister et de prendre soin de notre dos. Car si on passe par la méthode traditionnelle, c'est bien plus long.",
  },
  {
    name: "Delphine",
    text: "Anesthésiste très efficace qui après une écho repère tout de suite le problème. Après plusieurs injections, une surveillance en salle de réveil avec des infirmières adorables. Retour chez moi et comme par magie plus aucune douleur. Alors que le matin j'étais pliée en 2 le soir je pouvais m'occuper de mes enfants.",
  },
  {
    name: "Soleil",
    text: "Un grand merci au Dr Lemaitre Alexandre pour son efficacité. Grâce à son intervention j'ai été soulagé de la douleur immédiatement et pu me rendre rapidement chez mon osthéo pour régler mon souci de dos. Je le recommande à 100%.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-pri
