<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Guide d'utilisation Myle</h1>
      <p class="mt-1 text-sm text-gray-500">
        Tout ce que vous devez savoir sur l'utilisation de Myle.
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Guide d'utilisation -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Guide d'utilisation</h3>
            <p class="mt-2 text-sm text-gray-600">
              Accédez à l'aide complète produite par MedFar Solutions.
            </p>
            <div class="mt-4 space-y-2">
              <ExternalLink 
                href="https://medfar.my.site.com/s/?language=fr"
                text="Guide d'utilisation Myle"
              />
              <ExternalLink 
                href="https://medfar.my.site.com/s/article/Formation-compl%C3%A8te-utilisateur-MYLE-cl%C3%A9rical?language=fr"
                text="Formation vidéo complète"
              />
            </div>
          </div>

          <!-- Connexion externe -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Connexion externe</h3>
            <p class="mt-2 text-sm text-gray-600">
              Accédez à Myle depuis l'extérieur de la clinique.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="https://gmfdesiles.medfarsolutions.com/html5"
                text="Connection au DME hors CMPS"
              />
            </div>
          </div>

          <!-- Installation MSA -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Installation MSA</h3>
            <p class="mt-2 text-sm text-gray-600">
              Installation du programme MSA pour accéder au DSQ à partir de votre poste de travail.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="https://medfar.my.site.com/s/article/Installer-MSA-sur-poste?language=fr"
                text="Guide d'installation MSA"
              />
            </div>
          </div>

          <!-- Désinstallation MSA -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Désinstallation MSA</h3>
            <p class="mt-2 text-sm text-gray-600">
              Désinstallation du programme MSA pour mettre à jour vers une nouvelle version.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="https://medfar.my.site.com/s/article/Desinstaller-MSA?language=fr"
                text="Guide de désinstallation MSA"
              />
            </div>
          </div>

          <!-- Communications internes -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Communications internes</h3>
            <p class="mt-2 text-sm text-gray-600">
              Utilisez les Tâches dans MYLE pour communiquer avec les autres professionnels.
            </p>
            <div class="mt-4 space-y-2">
              <ExternalLink 
                href="https://medfar.my.site.com/s/article/Cr%C3%A9er-t%C3%A2che?language=fr"
                text="Tâches dans MYLE"
              />
              <ExternalLink 
                href="https://medfar.my.site.com/s/article/Cr%C3%A9er-rappel?language=fr"
                text="Rappels"
              />
            </div>
          </div>

          <!-- Communications externes -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Communications externes</h3>
            <p class="mt-2 text-sm text-gray-600">
              Communiquez avec les utilisateurs MYLE hors de votre interface GMF.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="https://medfar.my.site.com/s/article/communication-externe?language=fr"
                text="Communications externes"
              />
            </div>
          </div>

          <!-- Gestion des documents -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Gestion des documents</h3>
            <p class="mt-2 text-sm text-gray-600">
              Tous les documents sont numérisés et acheminés dans la section Documents de MYLE.
            </p>
            <div class="mt-4">
              <p class="text-sm text-red-600 font-medium">
                ATTENTION : Une fois qu'un document est approuvé, il disparaît de toutes les boîtes de Documents. Pour partager un document approuvé, envoyez une tâche.
              </p>
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