<template>
  <div class="space-y-4">
    <div>
      <h4 class="text-base font-medium text-gray-900">Procédure pour infiltrations</h4>
      <ul class="mt-2 list-disc pl-5 text-gray-600">
        <li>La secrétaire vérifie si le médecin réalise l'infiltration demandée</li>
        <li>Informer le patient que l'infiltration sera réalisée uniquement si médicalement indiquée</li>
        <li>
          <ExternalLink 
            href="https://docs.google.com/spreadsheets/d/1SOvKI_UmcHZTBdGHHM-vLUhK4S0kHxij/edit?gid=1993916419#gid=1993916419"
            text="Consulter le tableau des procédures et infiltrations par médecin"
          />
        </li>
      </ul>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Implant contraceptif (Nexplanon)</h4>
      <div class="mt-2 space-y-4">
        <div>
          <p class="font-medium">Option 1 : Consultation avec médecin GMF</p>
          <ol class="list-decimal pl-5 text-gray-600">
            <li>Évaluation médicale complète</li>
            <li>Discussion des avantages et risques</li>
            <li>Prescription de l'implant</li>
            <li>Tâche à l'infirmière pour la pose</li>
          </ol>
        </div>
        <div>
          <p class="font-medium">Option 2 : Consultation directe avec infirmière</p>
          <ol class="list-decimal pl-5 text-gray-600">
            <li>Évaluation préliminaire par l'infirmière</li>
            <li>Référence au médecin si contre-indications</li>
            <li>Planification de la pose avec supervision d'Eloise</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../../../components/ExternalLink.vue'
</script>