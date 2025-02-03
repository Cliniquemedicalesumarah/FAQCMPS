<template>
  <div class="space-y-4">
    <div>
      <h4 class="text-base font-medium text-gray-900">Rendez-vous avec la physiothérapeute vestibulaire</h4>
      <ul class="mt-2 list-disc pl-5 text-gray-600">
        <li>Physiothérapeute : Judith Mayrand</li>
        <li>Service non couvert par la RAMQ</li>
        <li>Les patients du GMF n'ont pas priorité</li>
      </ul>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Procédure de prise de rendez-vous</h4>
      <ol class="mt-2 list-decimal pl-5 text-gray-600">
        <li>Remplir une demande de consultation</li>
        <li>Remettre la demande au patient avec le sommaire du dossier (si accord)</li>
        <li>Le patient doit prendre RV :
          <ul class="list-disc pl-5">
            <li>En ligne : <a href="https://www.gorendezvous.com/physiojudith" class="text-blue-600 hover:text-blue-800">www.gorendezvous.com/physiojudith</a></li>
            <li>OU par téléphone : 418-680-5676 (seulement si impossible en ligne)</li>
          </ul>
        </li>
      </ol>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Contact</h4>
      <ul class="mt-2 list-disc pl-5 text-gray-600">
        <li>Email : <a href="mailto:physio.judith@hotmail.com" class="text-blue-600 hover:text-blue-800">physio.judith@hotmail.com</a></li>
        <li>Téléphone : <a href="tel:1-418-680-5676" class="text-blue-600 hover:text-blue-800">1-418-680-5676</a></li>
      </ul>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Documentation</h4>
      <div class="mt-2">
        <ExternalLink 
          href="https://docs.google.com/document/d/1nAdEE2dzpG_GmVmEeWs9ld-jXXoKRYce/edit"
          text="Guide de référence vestibulaire"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../../../components/ExternalLink.vue'
</script>