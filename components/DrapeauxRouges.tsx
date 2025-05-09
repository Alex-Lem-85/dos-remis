"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Bone,
  Brain,
  Clock,
  Heart,
  HeartPulse,
  Pill,
  Scale,
  Thermometer,
  User,
} from "lucide-react";

const drapeauxRouges = [
  {
    icon: Clock,
    text: "Douleur de type non mécanique : douleur d'aggravation progressive, présente au repos et en particulier durant la nuit",
  },
  {
    icon: Brain,
    text: "Symptôme neurologique étendu (déficit dans le contrôle des sphincters vésicaux ou anaux, atteinte motrice au niveau des jambes, syndrome de la queue-de-cheval)",
  },
  {
    icon: Heart,
    text: "Paresthésie au niveau du pubis (ou périnée)",
  },
  {
    icon: Activity,
    text: "Traumatisme important (tel qu'une chute de hauteur)",
  },
  {
    icon: Scale,
    text: "Perte de poids inexpliquée",
  },
  {
    icon: AlertCircle,
    text: "Antécédent de cancer",
  },
  {
    icon: Pill,
    text: "Usage de drogue intraveineuse ou usage prolongé de corticoïdes",
  },
  {
    icon: Bone,
    text: "Déformation structurale importante de la colonne",
  },
  {
    icon: HeartPulse,
    text: "Douleur thoracique (rachialgies dorsales)",
  },
  {
    icon: User,
    text: "Âge d'apparition inférieur à 20 ans ou supérieur à 55 ans",
  },
  {
    icon: Thermometer,
    text: "Fièvre",
  },
  {
    icon: Activity,
    text: "Altération de l'état général",
  },
];

export default function DrapeauxRouges() {
  return (
    <p className="mb-2">
      Dans la majorité des cas de lumbago, il n'est pas nécessaire de réaliser
      une radio, un scanner ou une IRM. Ces examens ne sont recommandés que dans
      des situations particulières, que votre médecin saura identifier. En cas
      de présence de&nbsp;
      <Dialog>
        <DialogTrigger asChild>
          <span className="text-primary underline cursor-pointer hover:text-primary/80 transition-colors">
            drapeaux rouges
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader className="sticky top-0 bg-background z-10 pb-4">
            <DialogTitle className="flex items-center gap-2 text-primary">
              <AlertTriangle className="h-5 w-5" />
              Drapeaux Rouges
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <p className="text-sm text-gray-600">
              Les drapeaux rouges sont des signes d'alerte qui nécessitent une
              attention médicale immédiate. En cas de présence d'un ou plusieurs
              de ces signes, il est recommandé de consulter un service
              d'urgence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {drapeauxRouges.map((drapeau, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-primary/5 hover:shadow-md transition-all duration-200 border border-transparent hover:border-primary/20 min-h-[120px]"
                >
                  <drapeau.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <span className="text-sm">{drapeau.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      , il est préférable d'aller vers un service d'urgence.
    </p>
  );
}
