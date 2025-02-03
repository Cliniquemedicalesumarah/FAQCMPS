<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <span class="text-xl font-bold text-gray-900">CMPS</span>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link 
                v-for="item in navigation" 
                :key="item.name"
                :to="item.href"
                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="py-10">
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Admin', href: '/admin' },
  { name: 'Infirmières', href: '/infirmieres' },
  { name: 'Formulaires', href: '/forms' },
  { name: 'Horaires', href: '/schedules' },
  { name: 'Contacts', href: '/contacts' },
  { name: 'Myle', href: '/myle' },
  { name: 'Organismes', href: '/community-organizations' },
  { name: 'Outils cliniques', href: '/clinical-tools' },
  { name: 'Procédures', href: '/procedures' },
  { name: 'Services non couverts', href: '/non-covered-services' },
  { name: 'Babillard', href: '/babillard' },
  { name: 'Facturation des médecins', href: '/facturation-medecins' },
  { name: 'Problèmes techniques', href: '/problemes-techniques' },
  { name: 'Gadgets/Technologies', href: '/gadgets' }
]
</script>