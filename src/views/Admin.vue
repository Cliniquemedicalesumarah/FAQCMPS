<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Administration</h1>
      <p class="mt-1 text-sm text-gray-500">
        Ressources et outils administratifs pour la gestion de la clinique.
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Outils administratifs -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Outils pour les Admin</h3>
            <p class="mt-2 text-sm text-gray-600">
              Accès aux outils essentiels pour la gestion administrative quotidienne.
            </p>
            <div class="mt-4 space-y-2">
              <ExternalLink 
                href="https://www.msdmanuals.com/fr/accueil"
                text="Manuel Merck"
              />
              <ExternalLink 
                href="https://fr.wikipedia.org/wiki/Liste_d'abr%C3%A9viations_en_m%C3%A9decine"
                text="Liste des abréviations en médecine"
              />
              <ExternalLink 
                href="https://docs.google.com/spreadsheets/d/1zPNaGbbnrXuoN9SJArMW5I2FiFcoTkpE5La1zHm6Yns/edit?gid=0#gid=0"
                text="Calculateur de moyenne TA"
              />
              <ExternalLink 
                href="https://docs.google.com/document/d/1UQOzr-ldt4D2PBErGysq4JEy1wvlhGos/edit"
                text="Guide de numérisation"
              />
              <ExternalLink 
                href="https://docs.google.com/document/d/1vYqhmddd74JpevaKnNJ_HivDNZ7s2I7NBM19iFYKI44/edit?usp=drive_link"
                text="Coupons signes vitaux"
              />
            </div>
          </div>

          <!-- Horaire et absences -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Horaire et absences</h3>
            <p class="mt-2 text-sm text-gray-600">
              Gestion des horaires, absences et congés du personnel.
            </p>
            <div class="mt-4 space-y-4">
              <div>
                <h4 class="text-base font-medium text-gray-900">Jours fériés</h4>
                <a href="#" class="text-blue-600 hover:text-blue-800">Consulter la liste</a>
              </div>
              <div>
                <h4 class="text-base font-medium text-gray-900">Procédure d'absence</h4>
                <p class="text-sm text-gray-600">
                  En cas d'absence non prévue, informer le groupe Gmail "Préposés à l'accueil" avec :
                </p>
                <ul class="mt-2 list-disc pl-5 text-sm text-gray-600">
                  <li>Nom complet</li>
                  <li>Raison de l'absence</li>
                  <li>Durée estimée</li>
                  <li>Informations pertinentes</li>
                </ul>
              </div>
              <div>
                <h4 class="text-base font-medium text-gray-900">Congés personnels</h4>
                <p class="text-sm text-gray-600">
                  2 jours de congé payés par année (16 heures) pour maladie, tempête, etc.
                </p>
              </div>
            </div>
          </div>

          <!-- Paie -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Paie</h3>
            <p class="mt-2 text-sm text-gray-600">
              Gestion de la paie via le système Nethris.
            </p>
            <div class="mt-4 space-y-2">
              <a href="#" class="text-blue-600 hover:text-blue-800 block">Accéder à Nethris</a>
              <a href="#" class="text-blue-600 hover:text-blue-800 block">Calendrier des paies</a>
            </div>
          </div>

          <!-- Documents requis -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Documents requis</h3>
            <p class="mt-2 text-sm text-gray-600">
              Documents administratifs essentiels pour le personnel.
            </p>
            <div class="mt-4 space-y-2">
              <a href="#" class="text-blue-600 hover:text-blue-800 block">Obligation au secret professionnel</a>
              <a href="#" class="text-blue-600 hover:text-blue-800 block">Demande d'accès Myle</a>
              <a href="#" class="text-blue-600 hover:text-blue-800 block">Fiche de paie Nethris</a>
            </div>
          </div>

          <!-- Formations obligatoires -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Formations obligatoires</h3>
            <p class="mt-2 text-sm text-gray-600">
              Formations requises pour le personnel administratif.
            </p>
            <div class="mt-4 space-y-2">
              <a href="#" class="text-blue-600 hover:text-blue-800 block">Formation DME (Myle)</a>
              <a href="#" class="text-blue-600 hover:text-blue-800 block">Formations accès adapté</a>
              <a href="#" class="text-blue-600 hover:text-blue-800 block">Formation Gmail</a>
            </div>
          </div>

          <!-- Numérisation -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Numérisation</h3>
            <p class="mt-2 text-sm text-gray-600">
              Procédures et guides pour la numérisation des documents.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="https://docs.google.com/document/d/1UQOzr-ldt4D2PBErGysq4JEy1wvlhGos/edit?tab=t.0"
                text="Guide de référence pour la numérisation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../components/ExternalLink.vue'
</script>