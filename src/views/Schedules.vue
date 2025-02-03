<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Horaires</h1>
      <p class="mt-1 text-sm text-gray-500">
        Consultez les horaires des professionnels et les périodes de service.
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Horaire SRV Urgents -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">SRV Urgents</h3>
            <p class="mt-2 text-sm text-gray-600">
              Calendrier des sans rendez-vous urgents au GMF des îles.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="https://docs.google.com/spreadsheets/d/1Gq8LTGDVO21_Qm47Yta_seZ8ldSs7MByv_GcW5a4cuc/edit?gid=267908121#gid=267908121"
                text="Accéder au calendrier SRV Urgents"
              />
            </div>
          </div>

          <!-- Horaire CMPS -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Horaire CMPS</h3>
            <p class="mt-2 text-sm text-gray-600">
              Horaires des médecins et professionnels de la clinique.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="https://docs.google.com/spreadsheets/d/1_mCNarMtn8vO67rJxO6U9fYu2rBiFoeN0mWlvie_R2Q/edit"
                text="Accéder au calendrier CMPS"
              />
            </div>
          </div>

          <!-- Périodes de personnel réduit -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Périodes de personnel réduit</h3>
            <p class="mt-2 text-sm text-gray-600">
              Périodes où le personnel est réduit (sans fermeture complète).
            </p>
            <div class="mt-4">
              <ul class="list-disc pl-5 text-sm text-gray-600">
                <li>Entre le 24 décembre et le 4 janvier</li>
                <li>Semaine de relâche scolaire</li>
                <li>2 premières semaines d'août</li>
              </ul>
            </div>
          </div>

          <!-- Horaire radiologistes -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Radiologistes</h3>
            <p class="mt-2 text-sm text-gray-600">
              Horaire des radiologistes au CISSS des îles pour 2025.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="https://docs.google.com/spreadsheets/d/1FqiuoP6xUeBLWc3HmygptIU0cjJhx5udDibnoPxgX38/edit?gid=1321566681#gid=1321566681"
                text="Consulter l'horaire des radiologistes 2025"
              />
            </div>
          </div>

          <!-- Cours employés -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Cours pour employés</h3>
            <p class="mt-2 text-sm text-gray-600">
              Cours gratuits offerts par Véronique Dufour pour les employés et médecins.
            </p>
            <div class="mt-4">
              <p class="text-sm font-medium text-gray-900">MARDIS: de 12h10 à 12h55 Eldoa</p>
              <div class="mt-2">
                <ExternalLink 
                  href="https://www.institutsomatraining.com/les-eldoa"
                  text="En savoir plus sur Eldoa"
                />
              </div>
              <p class="mt-2 text-sm text-gray-600">
                Participation libre sans inscription requise.
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