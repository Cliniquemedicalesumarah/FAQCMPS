<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Consultation Spécialisée Privée</h1>
      <p class="mt-1 text-sm text-gray-500">
        Spécialistes offrant des consultations en dehors des Îles et cliniques privées
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
        <div class="space-y-8">
          <!-- Montréal et environs -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Montréal et environs</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Nom</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Spécialité</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Site Web</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="specialiste in specialistesMontreal" :key="specialiste.nom">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{{ specialiste.nom }}</td>
                      <td class="px-3 py-4 text-sm text-gray-500">{{ specialiste.specialite }}</td>
                      <td class="px-3 py-4 text-sm text-gray-500">
                        <a v-if="specialiste.siteWeb" :href="specialiste.siteWeb" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">
                          {{ specialiste.siteWebNom }}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- Ville de Québec -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Ville de Québec</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Nom</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Spécialité</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Site Web</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Contact</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="specialiste in specialistesQuebec" :key="specialiste.nom">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{{ specialiste.nom }}</td>
                      <td class="px-3 py-4 text-sm text-gray-500">{{ specialiste.specialite }}</td>
                      <td class="px-3 py-4 text-sm text-gray-500">
                        <a v-if="specialiste.siteWeb" :href="specialiste.siteWeb" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">
                          {{ specialiste.siteWebNom }}
                        </a>
                      </td>
                      <td class="px-3 py-4 text-sm text-gray-500">{{ specialiste.telephone || '-' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- Cliniques spécialisées -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Cliniques spécialisées</h2>
            <div class="bg-gray-50 p-4 rounded-lg space-y-6">
              <!-- Clinique Coattitude -->
              <div>
                <h3 class="text-base font-medium text-gray-900">Clinique spécialisée en obésité</h3>
                <div class="mt-2">
                  <ExternalLink 
                    href="https://www.coattitude.com"
                    text="Coattitude - Clinique spécialisée en obésité"
                  />
                </div>
              </div>

              <!-- Clinique Dr Déry -->
              <div>
                <h3 class="text-base font-medium text-gray-900">Clinique Dr Déry (traitements esthétiques aux Îles)</h3>
                <div class="mt-2 space-y-1">
                  <p class="text-sm text-gray-600">68 chemin des Échoueries, Havre-aux-Maisons</p>
                  <p class="text-sm text-gray-600">Téléphone : 418-969-1328</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../components/ExternalLink.vue'

const specialistesMontreal = [
  {
    nom: 'Dr Sandra McGill',
    specialite: 'Chirurgie plastique et esthétique',
    siteWeb: 'https://www.sandramcgill.ca',
    siteWebNom: 'sandramcgill.ca'
  },
  {
    nom: 'Dr Stéphanie Olivier',
    specialite: 'Chirurgie plastique et esthétique',
    siteWeb: 'https://www.drstephanieolivier.com',
    siteWebNom: 'drstephanieolivier.com'
  },
  {
    nom: 'Dr Perry Gdalevitch',
    specialite: 'Chirurgie plastique et esthétique',
    siteWeb: 'https://www.phisurgery.ca/fr/home/',
    siteWebNom: 'phisurgery.ca'
  }
]

const specialistesQuebec = [
  {
    nom: 'Dr Benoit Thériault',
    specialite: 'Chirurgie plastique et esthétique',
    siteWeb: 'https://www.cliniquedechirurgieplastiquedequebec.com/les-chirurgiens',
    siteWebNom: 'Clinique de Chirurgie Plastique de Québec'
  },
  {
    nom: 'Dr Catherine Lecours',
    specialite: 'Chirurgie plastique et esthétique',
    siteWeb: 'https://www.cliniquedechirurgieplastiquedequebec.com/les-chirurgiens',
    siteWebNom: 'Clinique de Chirurgie Plastique de Québec'
  },
  {
    nom: 'Dr Frédéric Arsenault',
    specialite: 'Chirurgie plastique et esthétique',
    siteWeb: 'https://www.cliniquedechirurgieplastiquedequebec.com/les-chirurgiens',
    siteWebNom: 'Clinique de Chirurgie Plastique de Québec',
    telephone: '418-622-7000'
  }
]
</script>