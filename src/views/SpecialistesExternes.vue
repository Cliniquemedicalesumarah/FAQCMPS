<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Références de spécialistes hors CISSS</h1>
      <p class="mt-1 text-sm text-gray-500">
        Répertoire des spécialistes externes disponibles
      </p>
      <!-- Message de mise à jour -->
      <div class="mt-4 bg-blue-50 p-4 rounded-lg">
        <p class="text-sm text-blue-700">
          Ce répertoire est mis à jour régulièrement. Si vous constatez une erreur ou souhaitez suggérer un ajout, veuillez contacter la coordination.
        </p>
      </div>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <!-- Barre de recherche -->
        <div class="mb-6">
          <label for="search" class="block text-sm font-medium text-gray-700">Rechercher un spécialiste</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              name="search"
              id="search"
              v-model="searchQuery"
              class="focus:ring-primary-500 focus:border-primary-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Rechercher par spécialité ou nom..."
            >
          </div>
        </div>

        <!-- Tableau des spécialistes -->
        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Spécialité</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Nom</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Contact</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="specialiste in filteredSpecialistes" :key="specialiste.id" class="hover:bg-gray-50">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{{ specialiste.specialite }}</td>
                <td class="px-3 py-4 text-sm text-gray-500">{{ specialiste.nom }}</td>
                <td class="px-3 py-4 text-sm text-gray-500">
                  <div v-if="specialiste.telephone">Tél: {{ specialiste.telephone }}</div>
                  <div v-if="specialiste.fax">Fax: {{ specialiste.fax }}</div>
                  <div v-if="specialiste.courriel">
                    <a :href="'mailto:' + specialiste.courriel" class="text-blue-600 hover:text-blue-800">
                      {{ specialiste.courriel }}
                    </a>
                  </div>
                </td>
                <td class="px-3 py-4 text-sm text-gray-500">{{ specialiste.notes }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Sections détaillées -->
        <div class="mt-8 space-y-8">
          <!-- Chirurgie bariatrique -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Chirurgie bariatrique - Informations détaillées</h2>
            <div class="bg-gray-50 p-4 rounded-lg space-y-4">
              <div>
                <h3 class="text-base font-medium text-gray-900">Critères d'admissibilité</h3>
                <ul class="mt-2 list-disc pl-5 text-sm text-gray-600">
                  <li>IMC ≥35 kg/m2 avec comorbidité</li>
                  <li>IMC ≥40 kg/m2 avec ou sans comorbidité</li>
                </ul>
              </div>
              <div>
                <h3 class="text-base font-medium text-gray-900">Documents requis</h3>
                <div class="mt-2 space-y-2">
                  <p class="font-medium text-sm">Pour le patient :</p>
                  <ul class="list-disc pl-5 text-sm text-gray-600">
                    <li>Demande d'inscription à la liste d'attente</li>
                    <li>Questionnaire d'évaluation de l'état de santé</li>
                    <li>Engagement du participant</li>
                  </ul>
                  <p class="font-medium text-sm mt-4">Pour le médecin :</p>
                  <ul class="list-disc pl-5 text-sm text-gray-600">
                    <li>Demande de consultation médecine bariatrique</li>
                    <li>Questionnaire traitement médical de l'obésité</li>
                  </ul>
                </div>
              </div>
              <div class="mt-4">
                <ExternalLink 
                  href="https://www.iucpq.ca/zone-professionnelle/chirurgie-bariatrique/"
                  text="Plus d'informations sur la chirurgie bariatrique - IUCPQ"
                />
              </div>
            </div>
          </section>

          <!-- Ressources supplémentaires -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Ressources supplémentaires</h2>
            <div class="bg-gray-50 p-4 rounded-lg space-y-4">
              <div>
                <h3 class="text-base font-medium text-gray-900">Aide médicale à mourir</h3>
                <div class="mt-2">
                  <ExternalLink 
                    href="https://www.quebec.ca/sante/systeme-et-services-de-sante/soins-de-fin-de-vie/aide-medicale-a-mourir"
                    text="Ressources et informations sur l'aide médicale à mourir"
                  />
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
import { ref, computed } from 'vue'
import ExternalLink from '../components/ExternalLink.vue'

const searchQuery = ref('')

const specialistes = [
  {
    id: 1,
    specialite: 'Gérontopsy (en visio)',
    nom: 'Dre Marie-Andrée Bruneau',
    telephone: '1-833-888-1614',
    notes: 'Envoi d\'une demande de consultation par fax'
  },
  {
    id: 2,
    specialite: 'Clinique du sein',
    nom: 'Dre Christine Desbiens',
    notes: 'Chirurgienne oncologue - Demande de consultation'
  },
  {
    id: 3,
    specialite: 'Clinique de la mémoire',
    nom: 'Clinique interdisciplinaire de mémoire (CIME)',
    courriel: 'neurologie.chu@chudequebec.ca',
    notes: 'Évaluation et prise en charge des troubles cognitifs'
  },
  {
    id: 4,
    specialite: 'Chirurgie bariatrique',
    nom: 'Programme de chirurgie de l\'obésité',
    courriel: 'iucpq.chxbariatrique@ssss.gouv.qc.ca',
    notes: 'Inscription sur la liste d\'attente via référence médicale'
  },
  {
    id: 5,
    specialite: 'Orthopédie-Spine',
    nom: 'Dr Alexandre Denault et Dr Jean-Christophe Murray',
    telephone: '1-418-204-1104',
    fax: '418-210-1825',
    notes: 'Consultation 2x par année aux Îles'
  },
  {
    id: 6,
    specialite: 'Dermatologie',
    nom: 'Dr Joel Claveau',
    telephone: '418-650-1224',
    notes: 'En cas de diagnostic mélanome'
  },
  {
    id: 7,
    specialite: 'Dépendance-Toxicomanie',
    nom: 'Dr Benoit Dubuc',
    courriel: 'benoit.dubuc.med@ssss.gouv.qc.ca',
    notes: 'Écrire un courriel en mentionnant être un médecin des Îles'
  },
  {
    id: 8,
    specialite: 'Dépendance-Toxicomanie',
    nom: 'Dre Catherine Demontigny',
    telephone: '514-890-8321',
    notes: 'Supervision et accompagnement des médecins'
  },
  {
    id: 9,
    specialite: 'Médecin de garde 24/7',
    nom: 'Médecine des toxicomanies',
    telephone: '514-412-7401',
    notes: 'Appel pour consultation immédiate'
  },
  {
    id: 10,
    specialite: 'Endocrinologie',
    nom: 'Programme diabète Québec type 1',
    telephone: '514-259-9286',
    notes: 'Référer directement'
  },
  {
    id: 11,
    specialite: 'Hémato-onco',
    nom: 'Dre Stéphanie Cloutier',
    courriel: 'stephaniecloutier@videotron.ca',
    telephone: '1-418-640-6007',
    notes: 'Référer au CHU Enfant-Jésus'
  },
  {
    id: 12,
    specialite: 'Gynéco-oncologie',
    nom: 'Dr Jean Grégoire',
    telephone: '1-418-691-5720',
    notes: 'Hôpital de Québec'
  },
  {
    id: 13,
    specialite: 'Génétique',
    nom: 'Dr Sébastien Chénier',
    telephone: '418-986-7001',
    notes: 'Demande de consultation à Marie-Ève Hébert, infirmière'
  },
  {
    id: 14,
    specialite: 'Lipidologie',
    nom: 'Dr Patrick Couture',
    notes: 'Suivi en lipidologie'
  },
  {
    id: 15,
    specialite: 'Urologie',
    nom: 'Clinique d\'urologie Berger / Hôtel-Dieu de Québec',
    telephone: '1-418-266-2879',
    notes: 'Corridor de service avec les Îles'
  },
  {
    id: 16,
    specialite: 'Cardiologie',
    nom: 'IUCPQ',
    telephone: '418-656-8711',
    notes: 'Corridor de service avec les Îles'
  },
  {
    id: 17,
    specialite: 'Gastro-entérologie',
    nom: 'Lévis',
    telephone: '418-835-7121',
    notes: 'Corridor de service avec les Îles'
  },
  {
    id: 18,
    specialite: 'Neurologie',
    nom: 'Enfant-Jésus de Québec',
    telephone: '418-525-4444',
    notes: 'Corridor de service avec les Îles'
  },
  {
    id: 19,
    specialite: 'Radio-oncologie',
    nom: 'CHU de Québec',
    telephone: '1-418-691-3124',
    notes: 'Sans passer par le CRDS'
  },
  {
    id: 20,
    specialite: 'Chirurgie vasculaire',
    nom: 'St-François d\'Assise',
    telephone: '1-418-525-4155',
    notes: 'Priorité CRDS B (plaie, douleur repos)'
  },
  {
    id: 21,
    specialite: 'Chirurgie tunnels carpiens',
    nom: 'Dr Brutus',
    notes: 'Clinique privée spécialisée',
    url: 'https://www.drbrutus.com'
  },
  {
    id: 22,
    specialite: 'Neurochirurgie',
    nom: 'Dr Georges L\'Espérance',
    courriel: 'georges.lesperance@videotron.ca',
    telephone: '514-233-7237',
    notes: 'Expert en neurochirurgie'
  }
]

const filteredSpecialistes = computed(() => {
  if (!searchQuery.value) return specialistes
  const query = searchQuery.value.toLowerCase()
  return specialistes.filter(specialiste => 
    specialiste.specialite.toLowerCase().includes(query) ||
    specialiste.nom.toLowerCase().includes(query) ||
    (specialiste.notes && specialiste.notes.toLowerCase().includes(query))
  )
})
</script>