<template>
  <div class="space-y-4">
    <div>
      <h4 class="text-base font-medium text-gray-900">Vaccination contre le zona</h4>
      <div class="mt-2 prose prose-sm text-gray-600">
        <p class="font-medium">Depuis le 1er mai 2023, le vaccin inactivé est offert gratuitement aux :</p>
        <ul class="list-disc pl-5">
          <li>Personnes âgées de 80 ans et plus</li>
          <li>Personnes immunodéprimées âgées de 18 ans et plus</li>
        </ul>
        <p class="font-medium text-red-600">IMPORTANT : Il faut absolument passer par le CLSC car les pharmacies n'ont pas de doses gratuites</p>
      </div>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Prise de rendez-vous</h4>
      <div class="mt-2 space-y-2">
        <p>Pour prendre rendez-vous : <span class="font-medium">Téléphone poste 4233</span></p>
        <ExternalLink 
          href="https://www.quebec.ca/sante/conseils-et-prevention/vaccination/programme-vaccination-contre-zona"
          text="Programme de vaccination contre le zona"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../../../components/ExternalLink.vue'
</script>