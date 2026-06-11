import Script from 'next/script';

export default function SchemaMarkup() {
  const clinicName = "Dos-Remis - SOS lumbago";
  const websiteUrl = "https://dos-remis.com";
  const phone = "+33467800117";

  const mainAddress = {
    street: "Dos-Remis (cabinet anesthau 7), Pôle Santé Thau, 310 avenue du Maréchal Juin",
    city: "Sète",
    region: "Occitanie",
    postalCode: "34200",
    country: "FR"
  };

  const serviceAreas = [
    "Sète",
    "Frontignan",
    "Balaruc-les-Bains",
    "Balaruc-le-Vieux",
    "Mèze",
    "Bouzigues",
    "Loupian",
    "Montpellier",
    "Béziers",
    "Agde",
    "Pézenas",
    "Clermont-l'Hérault"
  ];

  const openingHours = "Mo,Tu,We,Th,Fr 10:00-12:00,13:30-16:00";
  const clinicDescription = "Centre spécialisé dans la prise en charge URGENTE des lombalgies aiguës (dos bloqué, lumbago) par infiltration myo-fasciale écho-guidée.";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": clinicName,
    "description": clinicDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": mainAddress.street,
      "addressLocality": mainAddress.city,
      "addressRegion": mainAddress.region,
      "postalCode": mainAddress.postalCode,
      "addressCountry": mainAddress.country
    },
    "telephone": phone,
    "url": websiteUrl,
    "openingHours": openingHours,
    "priceRange": "€€",
    "logo": "https://dos-remis.com/Logo-Dos-remis-transparent.png",
    "image": "https://dos-remis.com/ImageOpenGraph.jpeg",
    "hasMap": "https://www.google.com/maps/place/Dos-Remis+(cabinet+anesthau+7),+Pôle+Santé+Thau,+310+Av.+du+Maréchal+Juin,+34200+Sète",
    "areaServed": serviceAreas
  };

  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": clinicName,
    "description": clinicDescription,
    "medicalSpecialty": ["Pain Management", "Anesthesiology"],
    "hasMedicalSpecialty": [
      {
        "@type": "MedicalSpecialty",
        "name": "Traitement des dos bloqués et lombalgies",
        "description": "Infiltration myo-fasciale écho-guidée pour soulagement immédiat"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Urgences lombalgies",
        "description": "Prise en charge rapide des crises de lumbago"
      }
    ],
    "address": localBusinessSchema.address,
    "telephone": phone,
    "url": websiteUrl,
    "openingHours": openingHours,
    "areaServed": serviceAreas
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Infiltration myo-fasciale écho-guidée",
    "description": "Traitement innovant des lombalgies aiguës par infiltration ciblée du fascia thoraco-lombaire sous guidage échographique. Soulagement immédiat et durable.",
    "bodyLocation": "Fascia thoraco-lombaire",
    "howPerformed": "Injection guidée par échographie",
    "prepTime": "PT30M",
    "performer": {
      "@type": "MedicalOrganization",
      "name": clinicName,
      "description": clinicDescription
    },
    "indication": [
      "Lumbago",
      "Dos bloqué",
      "Lombalgie aiguë",
      "Tour de rein",
      "Douleur lombaire sévère",
      "Sciatique non compressive"
    ],
    "contraindication": [
      "Allergie aux anesthésiques locaux",
      "Infection locale au point d'injection",
      "Troubles de la coagulation non contrôlés"
    ],
    "expectedOutcome": [
      "Soulagement immédiat de la douleur",
      "Réduction de l'inflammation",
      "Amélioration de la mobilité",
      "Reprise rapide des activités quotidiennes"
    ],
    "areaServed": serviceAreas
  };

  const doctors = [
    { name: "Dr. Lemaitre", role: "Médecin Anesthésiste Réanimateur" },
    { name: "Dr. Swisser", role: "Médecin Anesthésiste Réanimateur" },
    { name: "Dr. Sekkat", role: "Médecin Anesthésiste Réanimateur" },
    { name: "Dr. Gallais", role: "Médecin Anesthésiste Réanimateur" },
    { name: "Dr. Vallée", role: "Médecin Anesthésiste Réanimateur" }
  ];

  const medicalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": clinicName,
    "description": clinicDescription,
    "address": localBusinessSchema.address,
    "telephone": phone,
    "url": websiteUrl,
    "openingHours": openingHours,
    "logo": "https://dos-remis.com/Logo-Dos-remis-transparent.png",
    "image": "https://dos-remis.com/ImageOpenGraph.jpeg",
    "hasMedicalSpecialty": medicalClinicSchema.hasMedicalSpecialty,
    "member": doctors.map(doctor => ({
      "@type": "Person",
      "name": doctor.name,
      "hasOccupation": {
        "@type": "Occupation",
        "name": doctor.role
      }
    })),
    "areaServed": serviceAreas
  };

  // Schema Review pour les 7 avis patients (5 étoiles chacun)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": clinicName,
    "address": localBusinessSchema.address,
    "telephone": phone,
    "url": websiteUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "7"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Cathy"
        },
        "datePublished": "2025-01-15",
        "reviewBody": "Prise en charge rapide et efficace de la douleur. Le Personnel a fait preuve d'une réelle empathie, et de beaucoup de professionnalisme, en passant par la secrétaire, le medecin et radiologie. C'est malheureusement tellement rare de constater autant de gentillesse. Merci infiniment et surtout j'espère que cela ne changera pas."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Cessy"
        },
        "datePublished": "2025-02-20",
        "reviewBody": "Je tiens à remercier toute l'équipe le site, les secrétaires les anesthésistes au bureau et au bloc les infirmières bref MERCI. Bloquée du dos la veille: 8 h aux urgences à Montpellier sorti avec 1 Doliprane. Ici une écoute, une compréhension et un soulagement immédiat bon pour moi en 2 fois mais un suivi exceptionnel! Bref vous êtes des MAGICIENS du lumbago !!!!!!!!!!!!! MERCI !"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Evelyne"
        },
        "datePublished": "2025-03-10",
        "reviewBody": "Prise en charge rapide (le jour même de l'appel) et efficace. Cela m’a évité un arrêt de travail et des douleurs inutiles. Merci."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Isabel"
        },
        "datePublished": "2025-04-05",
        "reviewBody": "Une équipe à l'écoute, et sympathique de surcroît. Le soulagement a été immédiat. C'est magique ! Inutile de souffrir pendant des semaines... Encore merci"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Ber"
        },
        "datePublished": "2025-05-12",
        "reviewBody": "Un énorme MERCI. La prise en charge rapide, les explications claires et la gentillesse de l'anesthésiste, Dr Alexandre Lemaitre, ont été au top, en tout point de vue. Arrivé bloqué avec d'intenses douleurs, incapable de trouver une posture de repos, je suis reparti souriant et soulagé, impressionné du résultat immédiat. N'hésitez surtout pas, en attendant inutilement de souffrir. Je ne peux que vous recommander et vous remercier"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Pierre"
        },
        "datePublished": "2025-05-25",
        "reviewBody": "Une équipe au TOP! Simple, rapide, efficace. Ils sont aux petits soin, dans l'accompagnement et l'écoute. Des soignants et des professionnels de santé (de la secrétaire aux anesth) où j'ai rien a redire. Le protocole est complet, avec suivi et recommandations. C'est encore peu connu et gagné a l'être. Merci sos lumbago d'exister et de prendre soin de notre dos. Car si on passe par la méthode traditionnel, c'est bien plus long"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Delphine"
        },
        "datePublished": "2025-06-01",
        "reviewBody": "Anesthésiste très efficace qui après une écho repère tout de suite le problème. Après plusieurs injections, une surveillance en salle de réveil avec des infirmières adorables. Retour chez moi et comme par magie plus aucune douleur. Alors que le matin j'étais pliée en 2 le soir je pouvais m'occuper de mes enfants"
      }
    ]
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="medical-clinic-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
      />
      <Script
        id="medical-procedure-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
      <Script
        id="medical-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalOrganizationSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  );
}
