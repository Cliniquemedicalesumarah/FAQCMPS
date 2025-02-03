<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Références Professionnels en Privé aux Îles</h1>
      <p class="mt-1 text-sm text-gray-500">
        Professionnels de santé privés exerçant aux Îles-de-la-Madeleine
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
          <!-- Physiothérapie -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Physiothérapie</h2>
            <div class="bg-gray-50 p-4 rounded-lg space-y-4">
              <div v-for="physio in physiotherapeutes" :key="physio.nom" class="space-y-2">
                <h3 class="text-base font-medium text-gray-900">{{ physio.nom }}</h3>
                <div class="space-y-1">
                  <div v-if="physio.rdv">
                    <ExternalLink 
                      :href="physio.rdv"
                      text="Prise de rendez-vous en ligne"
                    />
                  </div>
                  <div v-if="physio.telephone">
                    <p class="text-sm text-gray-600">Téléphone : {{ physio.telephone }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Massothérapie -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Massothérapie</h2>
            <div class="bg-gray-50 p-4 rounded-lg space-y-4">
              <div v-for="masso in massotherapeutes" :key="masso.nom" class="space-y-2">
                <h3 class="text-base font-medium text-gray-900">{{ masso.nom }}</h3>
                <div class="space-y-1">
                  <div v-if="masso.rdv">
                    <ExternalLink 
                      :href="masso.rdv"
                      text="Prise de rendez-vous en ligne"
                    />
                  </div>
                  <div v-if="masso.facebook">
                    <ExternalLink 
                      :href="masso.facebook"
                      text="Page Facebook"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Ostéopathie -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Ostéopathie</h2>
            <div class="bg-gray-50 p-4 rounded-lg space-y-4">
              <div v-for="osteo in osteopathes" :key="osteo.nom" class="space-y-2">
                <h3 class="text-base font-medium text-gray-900">{{ osteo.nom }}</h3>
                <div class="space-y-1">
                  <div v-if="osteo.rdv">
                    <ExternalLink 
                      :href="osteo.rdv"
                      text="Prise de rendez-vous en ligne"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Psychologie -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Psychologie</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Nom</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type de consultation</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Contact</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="psy in psychologues" :key="psy.nom">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{{ psy.nom }}</td>
                      <td class="px-3 py-4 text-sm text-gray-500">{{ psy.type }}</td>
                      <td class="px-3 py-4 text-sm text-gray-500">
                        <div v-if="psy.telephone">Tél: {{ psy.telephone }}</div>
                        <div v-if="psy.courriel">
                          <a :href="'mailto:' + psy.courriel" class="text-blue-600 hover:text-blue-800">
                            {{ psy.courriel }}
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

const physiotherapeutes = [
  {
    nom: 'Judith Mayrand',
    rdv: 'https://www.gorendezvous.com/en/physiojudith'
  },
  {
    nom: 'Alexandra Lepage',
    rdv: 'https://www.gorendezvous.com/alexandraphysio'
  },
  {
    nom: 'Clinique Physio Sport',
    telephone: '(418) 986-1325',
    notes: 'Physio Sport Loiseau Nadeau Richard inc. - Cap-aux-Meules, QC'
  },
  {
    nom: 'Physio de l\'Archipel',
    telephone: '(418) 986-4133'
  }
]

const massotherapeutes = [
  {
    nom: 'Éléonora Arseneau (Orthothérapeute)',
    rdv: 'https://www.gorendezvous.com/massoauxiles?fbclid=IwY2xjawIMxIJleHRuA2FlbQIxMAABHYMw0ZgdFSWmklR_Gp6D-69-ZxbwUk7HrdhD3fTc_vm4zg2MDF8R4q_yvQ_aem_yig3grHDxCl597OCksrR-A'
  },
  {
    nom: 'Caroline Lapierre',
    facebook: 'https://www.facebook.com/carolinelapierremasso/?locale=fr_CA'
  },
  {
    nom: 'Elisa Boudreau',
    facebook: 'https://www.facebook.com/profile.php?id=100063522104613&locale=fr_CA'
  }
]

const osteopathes = [
  {
    nom: 'Anne-Virginie Solomon',
    rdv: 'https://www.gorendezvous.com/fr/annevirginieosteo'
  }
]

const psychologues = [
  {
    nom: 'Isabelle Chaussée',
    type: 'À distance via Zoom',
    telephone: '1-514-207-4320',
    courriel: 'isabelle.chausse@hotmail.com'
  },
  {
    nom: 'Charles-Élie Bénard',
    type: 'À distance via Zoom',
    courriel: 'charlelie.benard@gmail.com'
  },
  {
    nom: 'Renée Landry',
    type: 'Thérapie de couple à distance via Zoom',
    telephone: '1-438-274-4506',
    courriel: 'renee.c.a.landry@gmail.com'
  },
  {
    nom: 'Mélanie Cormier',
    type: 'En présence aux Îles - CMPS',
    telephone: '450-516-1669'
  },
  {
    nom: 'Ulrich Klapper',
    type: 'En présence aux Îles - CMPS (vendredis)',
    telephone: '418-937-9337'
  }
]
</script>