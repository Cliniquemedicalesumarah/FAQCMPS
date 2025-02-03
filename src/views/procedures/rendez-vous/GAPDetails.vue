<template>
  <div class="space-y-4">
    <div>
      <h4 class="text-base font-medium text-gray-900">Guichet d'accès à la première ligne (GAP)</h4>
      <div class="mt-2 prose prose-sm text-gray-600">
        <p class="font-medium text-red-600">AUCUN RV n'est donné par les secrétaires de CMPS.</p>
        <p class="mt-2">Le GAP permet aux personnes sans médecin de famille d'obtenir un rendez-vous médical ou un service de santé. Pour en bénéficier, il faut :</p>
        <ul class="list-disc pl-5">
          <li>être en attente d'un médecin de famille suite à une inscription au GAMF</li>
          <li>ou être pris en charge par un groupe de médecins</li>
        </ul>
      </div>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Accès au service</h4>
      <ul class="mt-2 list-disc pl-5 text-gray-600">
        <li>Par téléphone : 811, option 3</li>
        <li>Via le Guichet d'accès à la première ligne (GAP) numérique</li>
      </ul>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Demande de suivi au GAP par un médecin</h4>
      <div class="mt-2 space-y-4">
        <div>
          <p class="font-medium">Option 1 : Suivi avec le même médecin</p>
          <ol class="list-decimal pl-5 text-gray-600">
            <li>Le médecin place le patient dans une de ses plages GAP</li>
            <li>Envoie une communication externe à l'infirmière ou l'agente administrative du GAP</li>
            <li>Le GAP contactera le patient pour l'informer de l'heure du rendez-vous</li>
          </ol>
        </div>
        <div>
          <p class="font-medium">Option 2 : Suivi avec un autre médecin</p>
          <ol class="list-decimal pl-5 text-gray-600">
            <li>Envoyer une communication externe à l'agente administrative et/ou infirmière du GAP</li>
            <li>Demander un rendez-vous de suivi pour le patient</li>
            <li>Le GAP organisera le rendez-vous avec un médecin disponible</li>
          </ol>
        </div>
      </div>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Documentation</h4>
      <div class="mt-2 space-y-2">
        <ExternalLink 
          href="https://drive.google.com/file/d/1rmpyeovAu-WWTH5RgeGnd3uAzRsHhSvC/view"
          text="Procédure communication externe patient GAP"
        />
        <ExternalLink 
          href="https://docs.google.com/spreadsheets/d/1AbbmC_7FdY0op277SQIbqf2nBsfGqKgC/edit?gid=1975032381#gid=1975032381"
          text="Feuille de route des RVs GAP"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../../../components/ExternalLink.vue'
</script>