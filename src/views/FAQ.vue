<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">FAQ</h1>
      <p class="mt-1 text-sm text-gray-500">
        Foire aux questions
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="space-y-4">
          <div>
            <h3 class="text-base font-medium text-gray-900">Liens utiles</h3>
            <div class="mt-2 space-y-2">
              <ExternalLink 
                href="https://aide.medfarsolutions.com"
                text="Guide d'utilisation Myle"
              />
              <ExternalLink 
                href="https://formation.medfarsolutions.com"
                text="Formation vidéo Myle"
              />
              <ExternalLink 
                href="https://dme.cmps.com"
                text="Connection au DME hors CMPS"
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