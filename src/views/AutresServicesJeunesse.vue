<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Autres références en jeunesse</h1>
      <p class="mt-1 text-sm text-gray-500">
        Services additionnels pour la jeunesse
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Service</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Contact</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="service in services" :key="service.service">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{{ service.service }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div v-if="service.telephone">Tél: {{ service.telephone }}</div>
                  <div v-if="service.courriel">
                    <a :href="'mailto:' + service.courriel" class="text-blue-600 hover:text-blue-800">
                      {{ service.courriel }}
                    </a>
                  </div>
                </td>
                <td class="px-3 py-4 text-sm text-gray-500" v-html="service.notes"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    service: 'Orthophonie',
    notes: 'Programme Jeune en difficulté ou pédiatrie<br>Manon Guertin et Alice Cochrane<br>Faxer la demande au Service de réadaptation au (418) 986-3770<br>Tél : 418-986-2121 p 8334'
  },
  {
    service: 'Orthophonie en privé',
    nom: 'Renée-Pier Chevarie',
    telephone: '418-476-5768',
    notes: 'Appeler Orthophonie de la Capitale<br>Requête orthophonie - CISSS des Îles pour demande d\'évaluation<br>Les services sont non couverts par la RAMQ et offerts à la CMPS'
  },
  {
    service: 'CRDI-TSA',
    telephone: '418-986-3590'
  },
  {
    service: 'CRDP',
    telephone: '418-986-4870'
  },
  {
    service: 'Institut des troubles apprentissages',
    notes: '<a href="https://www.institutta.com/?fbclid=IwAR29JcV7b6SyQlJyr5p5Qhz8wp109zb-qigwxmdKBJ6jXqfolMyx-BHrJQQ" class="text-blue-600 hover:text-blue-800" target="_blank">Site web de l\'Institut</a>'
  },
  {
    service: 'Psychologue en privé pour les 18 à 25 ans',
    nom: 'Charélie Bénard',
    courriel: 'charlelie.benard@gmail.com',
    notes: 'Remettre le courriel au patient<br>Tarif= 125$ par séance de 50 minutes'
  },
  {
    service: 'Programme Agir Tôt',
    nom: 'Karina Miousse*<br>APPR Agir tôt',
    telephone: '418 986-2121 #8383<br>cell: 514 755-2816',
    notes: 'Formulaire de référence Agir tôt'
  }
]
</script>