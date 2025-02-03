<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Facturation des médecins</h1>
      <p class="mt-1 text-sm text-gray-500">
        Guide des forfaits et codes de facturation
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="space-y-8">
          <!-- Forfaits -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Forfaits à facturer en plus des actes</h2>
            <div class="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Forfait</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Code</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Fréquence/Conditions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="forfait in forfaits" :key="forfait.code">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900">{{ forfait.nom }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ forfait.code }}</td>
                    <td class="px-3 py-4 text-sm text-gray-500">{{ forfait.frequence }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- GAP -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Facturation GAP</h2>
            <div class="mt-4 bg-gray-50 p-4 rounded-lg space-y-4">
              <div>
                <h3 class="text-base font-medium text-gray-900">Inscription de groupe pour les patients en attente au GAMF</h3>
                <p class="mt-2 text-sm text-gray-600">
                  Code 42251: Nombre de forfaits qui vous ont été accordés par le médecin responsable pour l'année.
                  Vous devez indiquer comme date de service le dernier jour du trimestre d'application.
                </p>
                <ExternalLink 
                  href="https://docs.google.com/spreadsheets/d/1Gq8LTGDVO21_Qm47Yta_seZ8ldSs7MByv_GcW5a4cuc/edit?gid=267908121#gid=267908121"
                  text="Feuille de route des RVs GAP par les secrétaires médicales"
                />
              </div>

              <div>
                <h3 class="text-base font-medium text-gray-900">Forfait pour chaque visite de patient inscrit collectivement GAP</h3>
                <p class="mt-2 text-sm text-gray-600">
                  Code 42267: Vous devez facturer le nombre de visites qui ont été faites dans les rdvs GAP par des patients assignés au site où vous pratiquez.
                  Vous ne pouvez donc pas demander ce forfait pour les patients vus qui ne sont pas prise en charge collectivement ou les rdvs vides.
                </p>
              </div>

              <div>
                <h3 class="text-base font-medium text-gray-900">Vulnérabilité d'un patient inscrit collectivement</h3>
                <p class="mt-2 text-sm text-gray-600">
                  Codes 15823 ou 15824. La visite de suivi peut être facturée en SRV également en GMF.
                </p>
                <p class="mt-2 text-sm text-gray-600">
                  A noter que l'intervention clinique peut toujours être facturée en tout temps en autant qu'il y ait 25 minutes minimalement en plus du supplément pour patient vulnérable (15169)
                </p>
              </div>

              <div>
                <h3 class="text-base font-medium text-gray-900">Patient non inscrit collectivement</h3>
                <p class="mt-2 text-sm text-gray-600">
                  Il faut alors facturer une visite ponctuelle mineure ou complexe
                </p>
              </div>
            </div>
          </section>

          <!-- Heures GMF -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Heures GMF</h2>
            <div class="mt-4 bg-gray-50 p-4 rounded-lg space-y-4">
              <p class="text-sm text-gray-600">
                Code 72101: Heures médico-administratives<br>
                Merci de facturer les heures selon le tableau.
              </p>
              <ExternalLink 
                href="https://docs.google.com/spreadsheets/d/1XM-p0jmXlX6MLpVRaad6VFkAUMZnpsqe/edit"
                text="Tableau des heures GMF"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../components/ExternalLink.vue'

const forfaits = [
  {
    nom: 'Frais de cabinet',
    code: '19928',
    frequence: 'Au moins 6 patients inscrits dans la journée'
  },
  {
    nom: 'Frais de cabinet',
    code: '19929',
    frequence: 'Au moins 12 patients inscrits dans la journée'
  },
  {
    nom: 'Frais de cabinet liés à l\'utilisation d\'un dossier médical électronique (DME)',
    code: '19978',
    frequence: 'Frais d\'acquisition et d\'opération des licences (GMF ou hors GMF), chaque trimestre'
  },
  {
    nom: 'Inscription de groupe pour les patients en attente au GAMF (GAP)',
    code: '42251',
    frequence: 'Nombre de forfaits accordés par le médecin responsable pour l\'année'
  },
  {
    nom: 'Forfait pour chaque visite de patient inscrit collectivement GAP',
    code: '42267',
    frequence: 'Pour les visites de patients assignés au site de pratique'
  },
  {
    nom: 'Heures GMF',
    code: '72101',
    frequence: 'Heures médico-administratives selon le tableau'
  }
]
</script>