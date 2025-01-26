"use client";

export default function DrapeauxRouges() {
  return (
    <p className="mb-2">
      Dans la majorité des cas de lumbago, il n'est pas nécessaire de réaliser une radio, un scanner ou une IRM. Ces examens ne sont recommandés que dans des situations particulières, que votre médecin saura identifier. En cas de présence de 
      <span
        className="text-primary underline cursor-pointer"
        onClick={() =>
          alert(`Drapeaux rouges :
1. Douleur de type non mécanique : douleur d'aggravation progressive, présente au repos et en particulier durant la nuit
2. Symptôme neurologique étendu (déficit dans le contrôle des sphincters vésicaux ou anaux, atteinte motrice au niveau des jambes, syndrome de la queue-de-cheval)
3. Paresthésie au niveau du pubis (ou périnée)
4. Traumatisme important (tel qu'une chute de hauteur)
5. Perte de poids inexpliquée
6. Antécédent de cancer
7. Usage de drogue intraveineuse ou usage prolongé de corticoïdes
8. Déformation structurale importante de la colonne
9. Douleur thoracique (rachialgies dorsales)
10. Âge d'apparition inférieur à 20 ans ou supérieur à 55 ans
11. Fièvre
12. Altération de l'état général`)}
      >
        drapeaux rouges
      </span>
      , il est préférable d'aller vers un service d'urgence.
    </p>
  );
}
