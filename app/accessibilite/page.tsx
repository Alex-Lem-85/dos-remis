export default function Accessibilite() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Déclaration d'accessibilité
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg">
            <h2>Notre engagement</h2>
            <p>
              Dos-remis s'engage à rendre son site web accessible conformément à l'article 47 de la loi n° 2005-102 du 11 février 2005.
            </p>

            <h2>Niveau d'accessibilité</h2>
            <p>
              Nous travaillons continuellement à améliorer l'accessibilité de notre site pour offrir une expérience optimale à tous nos utilisateurs.
            </p>

            <h2>Aide et contact</h2>
            <p>
              Si vous rencontrez des difficultés d'accès à notre site, n'hésitez pas à nous contacter :
            </p>
            <ul>
              <li>Par téléphone : 04 67 80 01 17</li>
              <li>Par email : anesthau7@gmail.com</li>
            </ul>

            <h2>Amélioration continue</h2>
            <p>
              Nous mettons régulièrement à jour cette déclaration d'accessibilité. La dernière mise à jour date du {new Date().toLocaleDateString()}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}