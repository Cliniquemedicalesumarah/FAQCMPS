<template>
  <div class="space-y-4">
    <div>
      <h4 class="text-base font-medium text-gray-900">Procédure de facturation</h4>
      <div class="mt-2 bg-gray-50 p-4 rounded-lg">
        <ol class="list-decimal pl-5">
          <li>Le formulaire doit être lié à une note patient ou numérisé dans l'onglet Documents</li>
          <li>Ouvrir une note d'évolution ou cliquer sur "nouvelle facture" au bas de la note</li>
          <li>Compléter la facture</li>
          <li>Fermer et imprimer via la fenêtre pop-up</li>
        </ol>
      </div>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Tarification</h4>
      <div class="mt-2 bg-gray-50 p-4 rounded-lg">
        <ul class="list-disc pl-5">
          <li>Prix standard : 40$ par formulaire</li>
          <li>Possibilité de charger moins</li>
          <li>Si montant supérieur : en aviser clairement le patient</li>
        </ul>
        <div class="mt-4">
          <ExternalLink 
            href="https://www.fmoq.org/pratique/facturation/frais-accessoires/grille-tarifaire-et-affichage-des-frais-admissibles/"
            text="Grille tarifaire FMOQ"
          />
        </div>
      </div>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Mention légale obligatoire</h4>
      <div class="mt-2 bg-gray-50 p-4 rounded-lg">
        <p class="text-sm text-gray-600">Le patient qui estime que les sommes qui lui sont réclamées visent des services assurés au sens de la Loi sur l'assurance maladie ou des frais engagés aux fins de la dispensation de ceux-ci peut, par écrit dans les cinq ans suivant la date du paiement, en réclamer le remboursement à la RAMQ, qui lui remboursera alors le montant, lorsqu'elle est d'avis que sa facturation n'était pas permise, et récupérera ce montant du professionnel ou du tiers en cause.</p>
      </div>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Paiement et comptabilité</h4>
      <div class="mt-2 bg-gray-50 p-4 rounded-lg">
        <ul class="list-disc pl-5">
          <li>Paiement via interface Square</li>
          <li>Déduction sur la facture mensuelle de location</li>
          <li>Rapport disponible sur demande pour fins d'impôts</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../../../components/ExternalLink.vue'
</script>