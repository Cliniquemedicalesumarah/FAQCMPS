<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Gestion des rendez-vous</h1>
      <p class="mt-1 text-sm text-gray-500">
        Procédures pour la prise de rendez-vous
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Infirmière clinicienne -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Infirmière clinicienne</h3>
            <p class="mt-2 text-sm text-gray-500">Rendez-vous avec une infirmière clinicienne</p>
            <router-link 
              to="/procedures/rendez-vous/infirmiere-clinicienne"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Infirmière technicienne -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Infirmière technicienne</h3>
            <p class="mt-2 text-sm text-gray-500">Rendez-vous avec une infirmière technicienne</p>
            <router-link 
              to="/procedures/rendez-vous/infirmiere-technicienne"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Travailleur social -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Travailleur social</h3>
            <p class="mt-2 text-sm text-gray-500">Rendez-vous avec le travailleur social</p>
            <router-link 
              to="/procedures/rendez-vous/social"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Pédopsychiatrie -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Pédopsychiatrie</h3>
            <p class="mt-2 text-sm text-gray-500">Rendez-vous en pédopsychiatrie</p>
            <router-link 
              to="/procedures/rendez-vous/pedopsy"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Kinésiologue -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Kinésiologue</h3>
            <p class="mt-2 text-sm text-gray-500">Rendez-vous avec le kinésiologue</p>
            <router-link 
              to="/procedures/rendez-vous/kinesiologue"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Nexplanon -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Nexplanon</h3>
            <p class="mt-2 text-sm text-gray-500">Implant contraceptif</p>
            <router-link 
              to="/procedures/rendez-vous/nexplanon"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Rendez-vous urgent -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Rendez-vous urgent</h3>
            <p class="mt-2 text-sm text-gray-500">Gestion des cas urgents</p>
            <router-link 
              to="/procedures/rendez-vous/urgent"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Visioconférence -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Visioconférence</h3>
            <p class="mt-2 text-sm text-gray-500">Rendez-vous en visioconférence</p>
            <router-link 
              to="/procedures/rendez-vous/visioconference"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- IPS -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">IPS</h3>
            <p class="mt-2 text-sm text-gray-500">Infirmière praticienne spécialisée</p>
            <router-link 
              to="/procedures/rendez-vous/ips"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- GAP -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">GAP</h3>
            <p class="mt-2 text-sm text-gray-500">Guichet d'accès à la première ligne</p>
            <router-link 
              to="/procedures/rendez-vous/gap"
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              En savoir plus
              <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>

          <!-- Aire Ouverte -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Aire Ouverte</h3>
            <p class="mt-2 text-sm text-gray-500">Services pour les jeunes</p>
            <router-link 
              to="/procedures/rendez-vous/aire-ouverte"
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