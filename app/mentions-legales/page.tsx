export default function MentionsLegales() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Mentions légales
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg">
            <h2>Éditeur du site</h2>
            <p>
              Cabinet Anesthau7<br />
              3ème étage du Pôle Santé Thau<br />
              310 avenue du Maréchal Juin<br />
              34200 Sète
            </p>

            <h2>Responsable de la publication</h2>
            <p>Dr. Lemaitre</p>

            <h2>Hébergeur</h2>
            <p>[Informations de l'hébergeur]</p>

            <h2>Protection des données personnelles</h2>
            <p>
              Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}