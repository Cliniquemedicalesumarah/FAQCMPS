<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Ressources Infirmières</h1>
      <p class="mt-1 text-sm text-gray-500">
        Outils et ressources pour les infirmières.
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SectionCard
            v-for="section in sections"
            :key="section.id"
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
    id: 'ramq',
    title: 'Services en ligne RAMQ',
    description: 'Accès aux services RAMQ et codes utilisateurs',
    link: '/infirmieres/ramq'
  },
  {
    id: 'verifications',
    title: 'Vérifications mensuelles',
    description: 'Vérification du matériel d\'urgence',
    link: '/infirmieres/verifications'
  },
  {
    id: 'clinicienne',
    title: 'Infirmière clinicienne',
    description: 'Rôle et documentation',
    link: '/infirmieres/cliniciennes'
  },
  {
    id: 'exercice',
    title: 'Champs d\'exercice',
    description: 'Guides et protocoles par condition',
    link: '/infirmieres/exercice'
  },
  {
    id: 'technicienne',
    title: 'Infirmière technicienne',
    description: 'Procédures techniques et examens',
    link: '/infirmieres/techniciennes'
  },
  {
    id: 'formations',
    title: 'Formations',
    description: 'Formations recommandées et continues',
    link: '/infirmieres/formations'
  }
]
</script>