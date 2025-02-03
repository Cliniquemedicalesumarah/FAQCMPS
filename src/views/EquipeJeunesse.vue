<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Équipe Jeunesse et Pédopsychiatrie</h1>
      <p class="mt-1 text-sm text-gray-500">
        Services pour les jeunes et le suivi en pédopsychiatrie
      </p>
      <!-- Message de mise à jour -->
      <div class="mt-4 bg-blue-50 p-4 rounded-lg">
        <p class="text-sm text-blue-700">
          Cette section est mise à jour régulièrement. Si vous constatez une erreur ou souhaitez suggérer un ajout, veuillez contacter la coordination.
        </p>
      </div>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Spécialiste en activités cliniques -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Spécialiste en activités cliniques</h3>
            <p class="mt-2 text-sm text-gray-600">
              Orientation et trajectoire de services pour les jeunes.
            </p>
            <div class="mt-4 space-y-2">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Contact principal :</span><br>
                Andrée-Anne Poirier (absente jusqu'à novembre 2024)<br>
                <a href="mailto:andree-anne.poirier.cisssdesiles@ssss.gouv.qc.ca" class="text-blue-600 hover:text-blue-800">
                  andree-anne.poirier.cisssdesiles@ssss.gouv.qc.ca
                </a>
              </p>
              <p class="text-sm text-gray-600">
                <span class="font-medium">Remplaçante :</span><br>
                Sara-Michèle Déraspe<br>
                Poste 4222
              </p>
            </div>
          </div>

          <!-- Équipe en pédopsychiatrie -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Équipe en pédopsychiatrie</h3>
            <p class="mt-2 text-sm text-gray-600">
              Évaluation et suivi pédopsychiatrique pour les jeunes.
            </p>
            <div class="mt-4 space-y-2">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Pédopsychiatres :</span>
                <ul class="list-disc pl-5 mt-1">
                  <li>Dre Marie-Josée Aiello</li>
                  <li>Dre Annick Petitpas</li>
                  <li>Dre Caroline Pilon</li>
                </ul>
              </p>
              <p class="text-sm text-gray-600">
                <span class="font-medium">Contact :</span><br>
                Fax CLSC : 418-986-4911<br>
                Consultation téléphonique : 450-375-8002
              </p>
            </div>
          </div>

          <!-- Services psychosociaux -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Services psychosociaux</h3>
            <p class="mt-2 text-sm text-gray-600">
              Suivi psychosocial et interventions spécialisées pour les jeunes.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Services disponibles :</span>
                <ul class="list-disc pl-5 mt-1">
                  <li>Psychologie</li>
                  <li>Psychoéducation</li>
                  <li>Travail social</li>
                  <li>Éducation spécialisée</li>
                </ul>
              </p>
              <p class="mt-2 text-sm text-gray-600">
                Fax : 418-986-4911
              </p>
            </div>
          </div>

          <!-- Orthophonie -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Orthophonie</h3>
            <p class="mt-2 text-sm text-gray-600">
              Services d'orthophonie pour les jeunes en difficulté.
            </p>
            <div class="mt-4 space-y-2">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Service public :</span><br>
                Manon Guertin et Alice Cochrane<br>
                Fax : 418-986-3770<br>
                Tél : 418-986-2121 poste 8334
              </p>
              <p class="text-sm text-gray-600">
                <span class="font-medium">Service privé :</span><br>
                Renée-Pier Chevarie<br>
                Orthophonie de la Capitale<br>
                Tél : 418-476-5768
              </p>
            </div>
          </div>

          <!-- Services de réadaptation -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Services de réadaptation</h3>
            <p class="mt-2 text-sm text-gray-600">
              Services de soutien et réadaptation pour les jeunes.
            </p>
            <div class="mt-4 space-y-2">
              <p class="text-sm text-gray-600">
                <span class="font-medium">CRDI-TSA :</span><br>
                Tél : 418-986-3590
              </p>
              <p class="text-sm text-gray-600">
                <span class="font-medium">CRDP :</span><br>
                Tél : 418-986-4870
              </p>
            </div>
          </div>

          <!-- Aire Ouverte -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Aire Ouverte</h3>
            <p class="mt-2 text-sm text-gray-600">
              Services de santé globale pour les jeunes de 12 à 25 ans.
            </p>
            <div class="mt-4 space-y-2">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Chargée de projet :</span><br>
                Nathalie Bourgeois<br>
                Tél : 1-367-995-0851<br>
                <a href="mailto:aire.ouverte.cisssdesiles@ssss.gouv.qc.ca" class="text-blue-600 hover:text-blue-800">
                  aire.ouverte.cisssdesiles@ssss.gouv.qc.ca
                </a>
              </p>
              <ExternalLink 
                href="https://www.cisssdesiles.com/aire-ouverte/"
                text="Site web Aire Ouverte"
              />
            </div>
          </div>

          <!-- Programme Agir Tôt -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Programme Agir Tôt</h3>
            <p class="mt-2 text-sm text-gray-600">
              Intervention précoce pour les jeunes en difficulté.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">APPR Agir tôt :</span><br>
                Karina Miousse<br>
                Tél : 418-986-2121 poste 8383<br>
                Cell : 514-755-2816
              </p>
            </div>
          </div>

          <!-- Équipe santé mentale et sexualité -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Équipe santé mentale et sexualité</h3>
            <p class="mt-2 text-sm text-gray-600">
              Services en santé mentale et sexualité pour les jeunes.
            </p>
            <div class="mt-4 space-y-2">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Équipe :</span>
                <ul class="list-disc pl-5 mt-1">
                  <li>Alexandra Cyr Cormier - Sexologue (Poste 4396)</li>
                  <li>Jessie Vigneault - Travailleuse sociale (Poste 4397)</li>
                  <li>Dominic Décoste - Agent de relations humaines (Poste 4395)</li>
                </ul>
              </p>
              <p class="text-sm text-gray-600">
                Tél : 418-986-2121
              </p>
            </div>
          </div>

          <!-- Infirmière clinicienne -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Infirmière clinicienne</h3>
            <p class="mt-2 text-sm text-gray-600">
              Suivi en santé physique et prévention pour les jeunes.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Contact :</span><br>
                Anne Jomphe Gaudet<br>
                Poste 4398<br>
                <a href="mailto:anne.jomphe-gaudet.cisssdesiles@ssss.gouv.qc.ca" class="text-blue-600 hover:text-blue-800">
                  anne.jomphe-gaudet.cisssdesiles@ssss.gouv.qc.ca
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../components/ExternalLink.vue'
</script>