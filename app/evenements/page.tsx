import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

// Métadonnées pour le SEO
export const metadata: Metadata = {
  title: "Événements | Dos-Remis - Soirée interprofessionnelle",
  description: "Retrouvez les photos et présentations de la soirée interprofessionnelle Dos-Remis. Une symphonie pour la lombalgie !",
  alternates: {
    canonical: "https://dos-remis.com/evenements",
  },
  openGraph: {
    title: "Événements Dos-Remis - Soirée interprofessionnelle",
    description: "Photos et présentations de la soirée interprofessionnelle Dos-Remis. Découvrez les moments forts et les interventions.",
    url: "https://dos-remis.com/evenements",
    siteName: "Dos-Remis",
    images: [
      {
        url: "https://dos-remis.com/photo-soiree/soiree-sos-lumbago-19-juin-public.jpg",
        width: 1200,
        height: 630,
        alt: "Soirée interprofessionnelle Dos-Remis",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

// Liste des photos de la soirée avec leurs descriptions
const soireePhotos = [
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-buffet.jpg",
    alt: "Buffet de la soirée interprofessionnelle Dos-Remis",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-amar.jpg",
    alt: "Intervention du Dr Amar lors de la soirée",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-bonomo-virginie-dieteticienne.jpg",
    alt: "Virginie Bonomo, diététicienne, lors de la soirée",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-daniele-ranoux-neurologue.jpg",
    alt: "Dr Danièle Ranoux, neurologue, lors de la soirée",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-daniel-ranoux-aphp.jpg",
    alt: "Dr Daniel Ranoux, AP-HP, lors de la soirée",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-daniel-ranoux-fascias.jpg",
    alt: "Dr Daniel Ranoux discutant des fascias",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-drcoste-chirurgien-obesite.jpg",
    alt: "Dr Coste, chirurgien de l'obésité, lors de la soirée",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-gallais.jpg",
    alt: "Dr Gallais lors de la soirée interprofessionnelle",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-lemaitre.jpg",
    alt: "Dr Lemaître lors de la soirée Dos-Remis",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-lemaitre2.jpg",
    alt: "Dr Lemaître présentant le parcours Dos-Remis",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-lemaitre3.jpg",
    alt: "Dr Lemaître avec des participants à la soirée",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-lemaitre4.jpg",
    alt: "Dr Lemaître lors d'une intervention",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-lemaitre-takehomemessages.jpg",
    alt: "Messages clés de la soirée avec Dr Lemaître",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-public.jpg",
    alt: "Public attentif lors de la soirée interprofessionnelle",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-public2.jpg",
    alt: "Participants à la soirée Dos-Remis",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-swisser.jpg",
    alt: "Dr Swisser lors de la soirée",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-swisser2.jpg",
    alt: "Dr Swisser avec des participants",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-swisser3.jpg",
    alt: "Dr Swisser présentant lors de la soirée",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-alizee-lebeau-apa.jpg",
    alt: "Alizée Lebeau, APA, lors de la soirée",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/soiree-sos-lumbago-19-juin-alizee-lebeau-apa2.jpg",
    alt: "Alizée Lebeau, APA, présentant son intervention",
    width: 800,
    height: 600,
  },
  {
    src: "/photo-soiree/swisser-lemaitre-paula.jpg",
    alt: "Dr Swisser, Dr Lemaître et Paula lors de la soirée",
    width: 800,
    height: 600,
  },
];

// Type pour les présentations PDF (avec miniature)
type Presentation = {
  title: string;
  file: string;
  image: string;
  description: React.ReactNode;
};

// Liste des présentations PDF
const presentations: Presentation[] = [
  {
    title: "Introduction de la soirée",
    file: "/presentations/1. Soiree-Dos-Remis intro-compressé.pdf",
    image: "/photo-presentations/Presentation-1-lemaitre.png",
    description: (
      <>
        <strong>Le Dr. Lemaitre</strong> introduit la soirée par une belle analogie : le tissu conjonctif vient du latin <em>conjunctivus</em> (qui lie, qui rassemble) ... comme cette soirée
      </>
    ),
  },
  {
    title: "Première partie du parcours Dos-Remis",
    file: "/presentations/2. Parcours Dos-Remis-etape-1-compressé.pdf",
    image: "/photo-presentations/presentation-2-etape1-lemaitre.png",
    description: (
      <>
        <strong>Le Dr. Lemaitre</strong> présente la première étape du parcours : de la prise de RDV à l&apos;infiltration
      </>
    ),
  },
  {
    title: "Technique d'infiltration",
    file: "/presentations/3. Technique infiltration SOS lumbago-Swisser_compressed.pdf",
    image: "/photo-presentations/presentation-3-swisser.png",
    description: (
      <>
        <strong>Le Dr. Swisser</strong> explique la technique d&apos;infiltration, ses origines, ses résultats et les risques (rarissimes et bénins). La balance bénéfice/risque penche largement du bon coté
      </>
    ),
  },
  {
    title: "Rôle du mouvement dans la prise en charge",
    file: "/presentations/4. KINE SOS LUMBAGO.pdf",
    image: "/photo-presentations/presentation-4-kine-dilhan.png",
    description: (
      <>
        <strong>Jean-Christophe Dilhan</strong>, kinésithérapeute, explique la place centrale du mouvement et les options pour s&apos;adapter à chaque patient
      </>
    ),
  },
  {
    title: "Seconde partie du parcours Dos-Remis",
    file: "/presentations/5. Parcours Dos-Remis-etape-2_compressed.pdf",
    image: "/photo-presentations/presentation-5-etape2-lemaitre.png",
    description: (
      <>
        <strong>Le Dr. Lemaitre</strong> présente la seconde étape du parcours, qui comprend l&apos;analyse. Objectif : orienter chaque patient vers les bons professionnels, de manière personnalisée et dans un respect total des recommandations de la HAS
      </>
    ),
  },
  {
    title: "Activité physique adaptée",
    file: "/presentations/6. APA Lumbago_compressed.pdf",
    image: "/photo-presentations/presentation-6-APA-lebeau.png",
    description: (
      <>
        <strong>Alizée Lebeau</strong>, enseignante en activité physique adaptée, nous présente son approche innovante pour que le patient retrouve son équilibre
      </>
    ),
  },
  {
    title: "Importance de l'alimentation",
    file: "/presentations/7. Diet SOS lumbago_compressed.pdf",
    image: "/photo-presentations/presentation-7-diet-bonomo.png",
    description: (
      <>
        <strong>Virginie Bonomo</strong>, diététicienne, rappelle l&apos;importance de bien manger pour lutter contre l&apos;inflammation de bas grade et s&apos;engager vers une perte de poids durable
      </>
    ),
  },
  {
    title: "Lombalgie et obésité",
    file: "/presentations/8. Obesité et lombalgie-Coste_compressed.pdf",
    image: "/photo-presentations/presentation-8-coste-obesite.png",
    description: (
      <>
        <strong>Le Dr. Coste</strong>, spécialiste de l&apos;obésité, démontre le lien clair entre lombalgie et obésité et nous présente les parcours de soins en place ainsi que les solutions (non médicamenteuses, médicamenteuses et chirurgicales) qu&apos;il propose aux patients
      </>
    ),
  },
  {
    title: "Les fascias",
    file: "/presentations/9. Fascias Daniele Ranoux_compressed.pdf",
    image: "/photo-presentations/presentation-9-ranoux.png",
    description: (
      <>
        <strong>Dr. Ranoux</strong> cloture ces présentations en nous transmettant sa passion pour cet organe oublié qu&apos;elle connait parfaitement
      </>
    ),
  },
];

export default function EvenementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent drop-shadow-sm">
                Nos Événements
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Retrouvez les moments forts de la construction de ce parcours centré sur le patient
            </p>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="flex-1">
        {/* Soirée interprofessionnelle */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Titre au dessus des photos */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
                Soirée interprofessionnelle du 19 juin 2026
              </h2>
            </div>

            {/* Galerie de photos */}
            <div className="mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {soireePhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Texte de la soirée */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Et si nous avions ensemble composé les premières mesures d&apos;une symphonie qui s&apos;annonce formidable ?
                  Avec plus de <strong>60 choristes</strong> réunis pour la soirée Dos-Remis, l&apos;enthousiasme a été palpable : nos échanges ont vibré, et les harmonies trouvées autour de la prise en charge de la lombalgie dessinent déjà une mélodie entraînante !
                </p>
                <p className="mb-4">
                  Grâce à vous, la partition est posée, le premier accord est joué, et notre orchestre bat la mesure : <strong>soigner plus vite, soigner mieux et soigner durablement la lombalgie</strong>.
                </p>
                <p className="mb-4">
                  Dos-Remis (Do-Ré-Mi) n&apos;est pas un nom anodin. Comme en musique, accorder les pratiques, harmoniser les discours et orchestrer chaque acteur demande justesse et sensibilité, mais c&apos;est la clé pour atteindre l&apos;harmonie thérapeutique 🎶
                </p>
                <p className="mb-4">
                  Un merci spécial :
                  <br />
                  - À nos solistes, nos orateurs : les <strong className="text-red-600">Dr. Lemaitre</strong> et <strong className="text-red-600">Swisser</strong> (anesthésistes), le <strong className="text-red-600">Dr Coste</strong> (chirurgien spécialiste de l&apos;obésité), le <strong className="text-red-600">Dr. Ranoux</strong> (neurologue à Limoges et à l&apos;APHP, spécialiste des fascias), <strong className="text-red-600">Alizée Lebeau</strong> (APA : activité physique adaptée), <strong className="text-red-600">Jean Christophe Dilhan</strong> (kiné) et <strong className="text-red-600">Virginie Bonomo</strong> (diététicienne)
                  <br />
                  - À la CPTS, pour son soutien logistique et financier.
                </p>
                <p className="mb-4">
                  La musique ne fait que commencer ! Nous sommes impatients de continuer à composer ensemble, d&apos;écrire les prochaines notes de ce projet et de laisser résonner cette initiative bien au-delà de notre scène actuelle.
                </p>
              </div>
            </div>

            {/* Section pour les présentations PDF */}
            {presentations.length > 0 && (
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Les 9 partitions de la soirée
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {presentations.map((presentation, index) => (
                    <div
                      key={index}
                      className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                    >
                      {/* Miniature cliquable de la 1ère page du PDF - sans cadre */}
                      <Link
                        href={presentation.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative aspect-[4/3] bg-gray-50 cursor-pointer"
                      >
                        <Image
                          src={presentation.image}
                          alt={`Miniature de ${presentation.title}`}
                          fill
                          className="object-contain p-2"
                          loading="lazy"
                        />
                        {/* Texte de survol */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <span className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Cliquez pour voir la présentation
                          </span>
                        </div>
                      </Link>
                      
                      {/* Description sous l'image */}
                      <div className="p-4">
                        <p className="text-sm text-gray-600">{presentation.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Message pour ajouter des PDF */}
            {presentations.length === 0 && (
              <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-600">
                  Les présentations seront ajoutées prochainement.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  (Miniatures à placer dans /public/photo-presentations/)
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
