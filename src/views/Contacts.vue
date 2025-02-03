<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">CMPS coordonnées</h1>
      <p class="mt-1 text-sm text-gray-500">
        Coordonnées de la clinique et du personnel
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="space-y-8">
          <!-- Coordonnées de la clinique -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Coordonnées de la clinique</h2>
            <div class="bg-gray-50 p-4 rounded-lg space-y-4">
              <div>
                <p class="text-sm text-gray-600">
                  Clinique Médicale Place Sumarah<br>
                  350 chemin principal<br>
                  Cap-aux-Meules<br>
                  G4T 1C9
                </p>
                <div class="mt-2">
                  <ExternalLink 
                    href="https://www.cliniquemedicalesumarah.ca/"
                    text="Site web de la clinique"
                  />
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-600">
                    Tél : 418-969-9111<br>
                    Téléc : (581) 705-6717 vers Élisa Boudreau<br>
                    Téléc : (581) 705-5289 vers Mariko Fortier
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Personnes ressources -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Personnes ressources</h2>
            <p class="mt-1 text-sm text-gray-500">Si une personne est joignable sur Teams, un astérisque suit son nom.</p>
            <div class="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Fonction</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Nom</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Contact</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="personne in personnesRessources" :key="personne.nom">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{{ personne.fonction }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {{ personne.nom }}{{ personne.teams ? '*' : '' }}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <a v-if="personne.contact.includes('@')" :href="'mailto:' + personne.contact" class="text-blue-600 hover:text-blue-800">
                        {{ personne.contact }}
                      </a>
                      <span v-else>{{ personne.contact }}</span>
                    </td>
                    <td class="px-3 py-4 text-sm text-gray-500">{{ personne.notes }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- Section médecins -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Médecins</h2>
            <div class="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Nom</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Courriel</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Note</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="medecin in medecins" :key="medecin.nom">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{{ medecin.nom }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <a :href="'mailto:' + medecin.courriel" class="text-blue-600 hover:text-blue-800">
                        {{ medecin.courriel }}
                      </a>
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ medecin.note }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../components/ExternalLink.vue'

const personnesRessources = [
  {
    fonction: 'Coordonnatrice clinique médicale Place Sumarah',
    nom: 'Mariko Fortier',
    contact: 'mariko.fortier@cliniquemedicalesumarah.ca',
    notes: 'Responsable de: Dre Ychelle Fortier poste 1, Dr Luc Dansereau, RV en pédopsy'
  },
  {
    fonction: 'Secrétaire médicale',
    nom: 'Elisa Boudreau',
    contact: 'elisa.boudreau@cliniquemedicalesumarah.ca',
    notes: 'Responsable de : Dr Rosalie Moreau, Dr Steve Lessard, Dr Audrey Moreau, Dr Christina Gravel'
  },
  {
    fonction: 'Préposée à l\'accueil 1er étage',
    nom: 'Annick Leblanc',
    contact: 'anick.leblanc@cliniquemedicalesumarah.ca',
    notes: ''
  },
  {
    fonction: 'Préposée à l\'accueil 2ème étage',
    nom: 'Audrée Cossette',
    contact: 'audree.cossette@cliniquemedicalesumarah.ca',
    notes: ''
  },
  {
    fonction: 'Préposée à l\'accueil 2ème étage',
    nom: 'Bérénice Vaillancourt',
    contact: 'berenice.vaillancourt@cliniquemedicalesumarah.ca',
    notes: ''
  },
  {
    fonction: 'Infirmière clinicienne',
    nom: 'Ariane Chiasson',
    contact: 'ariane.chiasson@cliniquemedicalesumarah.ca',
    notes: 'Travail en collaboration avec Ychelle Fortier et Rosalie Moreau'
  },
  {
    fonction: 'Infirmière clinicienne en pédopsy',
    nom: 'Anne Jomphe Gaudet',
    contact: 'anne.jomphe-gaudet.cisssdesiles@ssss.gouv.qc.ca',
    teams: true,
    notes: 'Travail en podopédiatrie pour l\'équipe pédopsy du GMF les vendredi'
  },
  {
    fonction: 'Infirmières cliniciennes GMF',
    nom: 'Anne-Marie Poirier, Vanessa Harvie',
    contact: 'anne-marie.poirier.cisssdesiles@ssss.gouv.qc.ca, vanessa.harvie.cisssdesiles@ssss.gouv.qc.ca',
    teams: true,
    notes: 'Anne-Marie: Travail pour les membres GMF CMPS du lundi au vendredi incluant le mercredi soir, Club de marche les lundis à 10h30\nVanessa: CSI lundi, mardi et jeudi et CMPS vendredi'
  },
  {
    fonction: 'Infirmière technicienne',
    nom: 'Dorine Chevarie',
    contact: 'PAS DE COURRIEL',
    notes: 'Appuie aux mds les mardis et jeudis'
  },
  {
    fonction: 'Assistante administrative',
    nom: 'Alyssia Bourgeois',
    contact: 'gestion@cliniquemedicalesumarah.ca',
    notes: 'Tenue de livre'
  },
  {
    fonction: 'Physiothérapeute en GMF',
    nom: 'Edith Turbide',
    contact: 'edith.turbide.cisssdesiles@ssss.gouvqc.ca',
    notes: 'Travail pour les membres GMF à clinique Physio-Sport: le GMF lui loue un local ! Les lundis, jeudis et vendredis'
  },
  {
    fonction: 'Kinésiologue en GMF',
    nom: 'Véronique Dufour',
    contact: 'veronique.dufour@gmfdesiles.ca',
    notes: 'Travail pour les membres GMF à CMPS les lundis et mardis, Club de marche les lundis à 10h30'
  },
  {
    fonction: 'Travailleur social en GMF',
    nom: 'Dave Garneau',
    contact: 'dave.garneau@gmfdesiles.ca',
    notes: 'Travail pour les membres du GMF à CMPS les lundis, mardis, mercredis et jeudis. RV sur place à CMPS mais en visio-conférence (Dave est à Montréal sauf en décembre, juin, juillet et août aux îles)'
  }
]

const medecins = [
  {
    nom: 'Dre Jade Longuépée',
    courriel: 'jade.longuepee.med@ssss.gouv.qc.ca',
    note: 'Fax: 1-581-705-5289'
  },
  {
    nom: 'Dre Clothilde Trudeau',
    courriel: 'clothilde.trudeau.med@ssss.gouv.qc.ca',
    note: 'Fax: 1-581-705-5289'
  },
  {
    nom: 'Dre Audrey Moreau',
    courriel: 'audrey.moreau.med@ssss.gouv.qc.ca',
    note: 'Fax: 1-581-705-5289'
  },
  {
    nom: 'Dre Rosalie Moreau',
    courriel: 'rosalie.moreau.med@ssss.gouv.qc.ca',
    note: 'Fax: 1-581-705-5289'
  },
  {
    nom: 'Dr Steve Lessard',
    courriel: 'steve.lessard.med@ssss.gouv.qc.ca',
    note: 'Fax: 1-581-705-5289'
  },
  {
    nom: 'Dr Luc Dansereau',
    courriel: 'luc.dansereau.med@ssss.gouv.qc.ca',
    note: 'Fax: 1-581-705-5289'
  },
  {
    nom: 'Dre Joanie Hubert',
    courriel: 'joanie.hubert.med@ssss.gouv.qc.ca',
    note: 'Fax: 1-581-705-5289'
  },
  {
    nom: 'Dre Amélie Hubert',
    courriel: 'amelie.hubert.med@ssss.gouv.qc.ca',
    note: 'Fax: 1-581-705-5289'
  },
  {
    nom: 'Dre Ychelle Fortier',
    courriel: 'ychelle.fortier.med@ssss.gouv.qc.ca',
    note: 'Fax: 1-581-705-5289'
  },
  {
    nom: 'Dre Christina Gravel',
    courriel: 'christina.gravel.med@ssss.gouv.qc.ca',
    note: 'Fax: 1-581-705-5289'
  }
]
</script>