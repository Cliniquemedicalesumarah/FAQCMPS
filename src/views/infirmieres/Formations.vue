<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Formations recommandées</h1>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="prose prose-sm text-gray-600">
          <p>Vous pouvez vous inscrire et le GMF ou CMPS vous remboursera. Merci de présenter votre reçu par courriel à ychelle.fortier.med@ssss.gouv.qc.ca ainsi qu'un spécimen de chèque pour le remboursement.</p>
          
          <h3 class="text-base font-medium text-gray-900 mt-6">Formations OIIQ</h3>
          <ul class="space-y-2">
            <li>Développer la motivation et la capacité d'agit de la personne atteinte d'une maladie chronique</li>
            <li>Hypertension artérielle : la contribution infirmière pour la prévention et le traitement</li>
            <li>Démences : comprendre, évaluer et intervenir</li>
            <li>Prévention et règlement des conflits en milieu de travail : comprendre, analyser et agir efficacement</li>
            <li>Généralités et traitement pratique du diabète de type 2 en soutien aux infirmières de première ligne</li>
          </ul>

          <h3 class="text-base font-medium text-gray-900 mt-6">Formations ENA</h3>
          <p>Pour les travailleurs hors réseau, accédez à : <ExternalLink href="#" text="ENA partenaire hors réseaux" /></p>
          <p>Procédure de création d'identifiant pour accéder aux formations travailleurs hors réseau</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../../components/ExternalLink.vue'
</script>