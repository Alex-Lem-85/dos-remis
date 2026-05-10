import Script from 'next/script';

export default function SchemaMarkup() {
  const clinicName = "Dos-Remis - SOS lumbago";
  const websiteUrl = "https://dos-remis.com";
  const phone = "+33467800117";

  const mainAddress = {
    street: "Cabinet Anesthau7, Pôle Santé Thau, 310 avenue du Maréchal Juin",
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

  const openingHours = "Mo,Tu,We,Th,Fr 10:00-16:00";
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
    "hasMap": "https://www.google.com/maps/place/Cabinet+Anesthau7,+Pôle+Santé+Thau,+310+Av.+du+Maréchal+Juin,+34200+Sète",
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
    </>
  );
}
