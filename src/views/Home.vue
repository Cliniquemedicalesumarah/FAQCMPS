<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Accueil</h1>
      <p class="mt-1 text-sm text-gray-500">
        Bienvenue sur le portail interne de la Clinique médicale Place Sumarah
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Répertoire (première et plus grande section) -->
          <div class="col-span-1 sm:col-span-2 lg:col-span-3 bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Répertoire</h3>
            <p class="mt-2 text-sm text-gray-500">
              Bottin de fax, services généraux, services à domicile, ressources externes et contacts importants
            </p>
            <router-link 
              to="/repertoire"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Autres sections -->
          <SectionCard
            v-for="section in sections"
            :key="section.title"
            :title="section.title"
            :description="section.description"
            :link="section.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionCard from '../components/SectionCard.vue'

const sections = [
  {
    title: 'Admin',
    description: 'Administration et gestion de la clinique',
    link: '/admin'
  },
  {
    title: 'Infirmières',
    description: 'Ressources pour les infirmières',
    link: '/infirmieres'
  },
  {
    title: 'Horaires',
    description: 'Gestion des horaires',
    link: '/schedules'
  },
  {
    title: 'Contacts',
    description: 'Coordonnées et informations de contact',
    link: '/contacts'
  },
  {
    title: 'Myle',
    description: 'Guide d\'utilisation de Myle',
    link: '/myle'
  },
  {
    title: 'Organismes',
    description: 'Répertoire des organismes communautaires',
    link: '/community-organizations'
  },
  {
    title: 'Outils cliniques',
    description: 'Ressources et outils pour la pratique clinique',
    link: '/clinical-tools'
  },
  {
    title: 'Procédures',
    description: 'Procédures et protocoles de la clinique',
    link: '/procedures'
  },
  {
    title: 'Services non couverts',
    description: 'Services non couverts par la RAMQ',
    link: '/non-covered-services'
  },
  {
    title: 'Babillard',
    description: 'Communications importantes pour l\'équipe',
    link: '/babillard'
  },
  {
    title: 'Facturation des médecins',
    description: 'Guide des forfaits et codes de facturation',
    link: '/facturation-medecins'
  },
  {
    title: 'Gadgets/Technologies',
    description: 'Guide d\'utilisation des équipements de la clinique',
    link: '/gadgets'
  }
]
</script>