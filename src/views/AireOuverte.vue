<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Aire Ouverte</h1>
      <p class="mt-1 text-sm text-gray-500">
        Services de santé globale pour les jeunes de 12 à 25 ans
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="space-y-8">
          <!-- Information générale -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Information générale</h2>
            <div class="mt-4 bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-600">Services de santé globale pour les jeunes de 12 à 25 ans (santé mentale, physique et sexuelle, identité de genre, orientation sexuelle, dépendance et autres)</p>
              <div class="mt-4 space-y-2">
                <p class="text-sm text-gray-600">
                  <span class="font-medium">Chargée de projet:</span> Nathalie Bourgeois
                </p>
                <p class="text-sm text-gray-600">
                  <span class="font-medium">Téléphone:</span> 1-367-995-0851
                </p>
                <p class="text-sm text-gray-600">
                  <span class="font-medium">Courriel:</span> 
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
          </section>

          <!-- Équipe -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Équipe</h2>
            <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div v-for="membre in equipe" :key="membre.role" class="bg-gray-50 p-4 rounded-lg">
                <h3 class="text-base font-medium text-gray-900">{{ membre.role }}</h3>
                <p class="mt-2 text-sm text-gray-600">{{ membre.nom }}</p>
                <p class="text-sm text-gray-600">Poste: {{ membre.poste }}</p>
                <div class="mt-2 text-sm text-gray-600" v-if="membre.services">
                  <p class="font-medium">Services:</p>
                  <ul class="mt-1 list-disc pl-5 space-y-1">
                    <li v-for="service in membre.services" :key="service">{{ service }}</li>
                  </ul>
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

const equipe = [
  {
    role: 'Chargée de projet',
    nom: 'Nathalie Bourgeois',
    poste: '4399'
  },
  {
    role: 'Travailleuse sociale',
    nom: 'Jessie Vigneault',
    poste: '4397'
  },
  {
    role: 'Agent de relations humaines',
    nom: 'Dominic Décoste',
    poste: '4395'
  },
  {
    role: 'Sexologue',
    nom: 'Alexandra Cyr Cormier',
    poste: '4396',
    services: [
      'Santé physique et santé sexuelle',
      'VIH, sida, ITSS',
      'Contraception',
      'Handicap physique',
      'Développement psychosexuel',
      'Image corporelle',
      'Attachement insécure',
      'Estime de soi',
      'Relations amoureuses et interpersonnelles',
      'Violences sexuelles',
      'Dépendance et compulsivité',
      'Identité de genre et orientation sexuelle',
      'Dysfonctions sexuelles',
      'Santé mentale et sexualité'
    ]
  },
  {
    role: 'Infirmière clinicienne',
    nom: 'Marie-Jeanne Labonté',
    poste: '4398'
  }
]
</script>