<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Répertoire</h1>
      <p class="mt-1 text-sm text-gray-500">
        Bottin des ressources et contacts importants
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="space-y-8">
          <!-- Guide des ressources et contacts -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Guide des ressources et contacts au CISSS des Îles</h2>
            <div class="mt-4 space-y-4">
              <ExternalLink 
                href="https://drive.google.com/file/d/1_GRe_EKAFCkAccCIZWylUNwFU1wDHLRk/view"
                text="Accéder au guide complet"
              />
            </div>
          </section>

          <!-- Bottin de fax -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Bottin de fax</h2>
            <div class="mt-4 space-y-4">
              <ExternalLink 
                href="https://docs.google.com/spreadsheets/d/1UOuj0buzVt6HKpRArNje392yBUKGnusNmBy4prpf5U0/edit?gid=0#gid=0"
                text="Accéder au bottin de fax"
              />
            </div>
          </section>

          <!-- CMPS coordonnées -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">CMPS coordonnées</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-600">
                Coordonnées de la clinique et du personnel
              </p>
              <router-link 
                to="/cmps-contacts"
                class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                En savoir plus
                <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </section>

          <!-- Équipe Jeunesse et Pédopsychiatrie -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Équipe Jeunesse et Pédopsychiatrie</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-600">
                Services jeunesse au CLSC et services de pédopsychiatrie
              </p>
              <router-link 
                to="/equipe-jeunesse"
                class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                En savoir plus
                <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </section>

          <!-- Services généraux -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Services généraux au CISSS</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-600">
                Répertoire des services généraux disponibles au CISSS des Îles.
              </p>
              <router-link 
                to="/services-generaux"
                class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                En savoir plus
                <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </section>

          <!-- Services à domicile -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Services à domicile (SAD)</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-600">
                Services de soins à domicile du CLSC.
              </p>
              <router-link 
                to="/services-domicile"
                class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                En savoir plus
                <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </section>

          <!-- Spécialistes externes -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Références de spécialistes hors CISSS</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-600">
                Répertoire des spécialistes externes disponibles.
              </p>
              <router-link 
                to="/specialistes-externes"
                class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                En savoir plus
                <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </section>

          <!-- Références Professionnels en Privé aux Îles -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Références Professionnels en Privé aux Îles</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-600">
                Professionnels de santé privés exerçant aux Îles-de-la-Madeleine
              </p>
              <router-link 
                to="/professionnels-prives"
                class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                En savoir plus
                <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </section>

          <!-- Consultation Spécialisée Privée -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Consultation Spécialisée Privée</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-600">
                Spécialistes offrant des consultations en dehors des Îles et cliniques privées
              </p>
              <router-link 
                to="/consultation-privee"
                class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                En savoir plus
                <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../components/ExternalLink.vue'
</script>