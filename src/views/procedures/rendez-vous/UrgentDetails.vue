<template>
  <div class="space-y-4">
    <div>
      <h4 class="text-base font-medium text-gray-900">Comment gérer une demande de rendez-vous urgent</h4>
      <div class="mt-2 prose prose-sm text-gray-600">
        <p>Voici la procédure à suivre lorsque la secrétaire médicale juge qu'un patient nécessite une évaluation urgente le jour même.</p>
      </div>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Étapes à suivre pour donner un rendez-vous urgent</h4>
      <ol class="mt-2 list-decimal pl-5 text-gray-600">
        <li>Avec le médecin du patient</li>
        <li>Avec un médecin de la clinique du patient</li>
        <li>Clinique des RVs urgents</li>
      </ol>
      <div class="mt-2">
        <ExternalLink 
          href="https://docs.google.com/document/d/1XM-p0jmXlX6MLpVRaad6VFkAUMZnpsqe/edit"
          text="RV urgent procédure juin 2024"
        />
      </div>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">En cas d'incertitude sur l'urgence</h4>
      <ul class="mt-2 list-disc pl-5 text-gray-600">
        <li>Planifiez un rendez-vous téléphonique avec une infirmière disponible dans un délai maximal de 2 heures</li>
        <li>Notez dans le rendez-vous téléphonique :
          <ul class="list-disc pl-5">
            <li>Le numéro de téléphone où le patient peut être joint</li>
            <li>La raison de l'appel</li>
          </ul>
        </li>
      </ul>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Cas spécifique : Infection urinaire chez une femme</h4>
      <ul class="mt-2 list-disc pl-5 text-gray-600">
        <li>Un rendez-vous peut être placé directement dans l'horaire de l'infirmière clinicienne</li>
        <li>Le rendez-vous doit avoir lieu le jour même de l'appel</li>
        <li>Il n'est pas nécessaire de faire une demande d'analyse avant, car l'infirmière fera un test d'urine sur place</li>
      </ul>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900 text-red-600">Situations nécessitant un transfert immédiat à l'urgence</h4>
      <ul class="mt-2 list-disc pl-5 text-gray-600">
        <li>Douleur dans la poitrine inquiétant le patient d'un infarctus</li>
        <li>Paralysie d'un membre ou du visage</li>
        <li>Inconscience</li>
        <li>Perte de connaissance</li>
        <li>Fièvre avec atteinte de l'état général :
          <ul class="list-disc pl-5">
            <li>Difficulté à marcher</li>
            <li>Difficulté à boire</li>
            <li>Faiblesse générale</li>
          </ul>
        </li>
        <li>Difficulté subite à respirer</li>
      </ul>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Réservation de plages horaires pour urgences</h4>
      <div class="mt-2 prose prose-sm text-gray-600">
        <p>Idéalement, gardez toujours une ou deux plages en fin de journée dans l'horaire du médecin pour répondre à ces demandes urgentes.</p>
      </div>
    </div>

    <div class="bg-yellow-50 p-4 rounded-lg">
      <h4 class="text-base font-medium text-yellow-800">Note importante</h4>
      <p class="mt-2 text-sm text-yellow-700">
        Les formulaires administratifs ne sont JAMAIS considérés comme une urgence. Cela inclut :
      </p>
      <ul class="mt-2 list-disc pl-5 text-sm text-yellow-700">
        <li>Feuilles de transport</li>
        <li>Ordonnances collectives</li>
        <li>Papiers d'arrêt de travail</li>
        <li>Formulaires d'assurance</li>
      </ul>
      <p class="mt-2 text-sm text-yellow-700">
        Aucun médecin ne répondra de manière urgente via le mécanisme décrit ci-dessus pour ces documents.
      </p>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../../../components/ExternalLink.vue'
</script>