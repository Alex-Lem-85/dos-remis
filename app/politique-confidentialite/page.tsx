export default function PolitiqueConfidentialite() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Politique de confidentialité
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg">
            <h2>Protection de vos données</h2>
            <p>
              Nous accordons une importance particulière à la protection de vos données personnelles et au respect de votre vie privée.
            </p>

            <h2>Données collectées</h2>
            <p>
              Les données personnelles collectées sur ce site sont uniquement destinées à un usage interne. En aucun cas ces données ne seront cédées ou vendues à des tiers.
            </p>

            <h2>Finalités du traitement</h2>
            <ul>
              <li>Gestion des rendez-vous</li>
              <li>Suivi médical</li>
              <li>Communication avec les patients</li>
            </ul>

            <h2>Vos droits</h2>
            <p>
              Conformément à la réglementation en vigueur, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul>
              <li>Droit d'accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}