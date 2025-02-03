<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Procédures</h1>
      <p class="mt-1 text-sm text-gray-500">
        Procédures et protocoles de la clinique
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Dossiers médicaux -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Dossiers médicaux</h3>
            <p class="mt-2 text-sm text-gray-500">Gestion des dossiers patients</p>
            <router-link 
              to="/procedures/dossiers-medicaux"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Renouvellement -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Renouvellement</h3>
            <p class="mt-2 text-sm text-gray-500">Renouvellement des prescriptions</p>
            <router-link 
              to="/procedures/renouvellement"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Rendez-vous -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Rendez-vous</h3>
            <p class="mt-2 text-sm text-gray-500">Gestion des rendez-vous</p>
            <router-link 
              to="/procedures/rendez-vous"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Formulaires -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Formulaires</h3>
            <p class="mt-2 text-sm text-gray-500">Gestion des formulaires</p>
            <router-link 
              to="/procedures/formulaires"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Matériel -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Matériel</h3>
            <p class="mt-2 text-sm text-gray-500">Gestion du matériel</p>
            <router-link 
              to="/procedures/materiel"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Tempête -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Tempête</h3>
            <p class="mt-2 text-sm text-gray-500">Procédures en cas de tempête</p>
            <router-link 
              to="/procedures/tempete"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Communication -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Communication</h3>
            <p class="mt-2 text-sm text-gray-500">Procédures de communication entre professionnels</p>
            <router-link 
              to="/procedures/communication"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Valeurs critiques -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Valeurs critiques</h3>
            <p class="mt-2 text-sm text-gray-500">Transmission des valeurs critiques du CISSS</p>
            <router-link 
              to="/procedures/valeurs-critiques"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Problèmes techniques -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Problèmes techniques</h3>
            <p class="mt-2 text-sm text-gray-500">Résolution des problèmes techniques</p>
            <router-link 
              to="/procedures/problemes-techniques"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Gadgets -->
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Gadgets</h3>
            <p class="mt-2 text-sm text-gray-500">Guide d'utilisation des équipements</p>
            <router-link 
              to="/gadgets"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>