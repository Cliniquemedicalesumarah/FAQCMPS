<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Vérifications mensuelles du matériel d'urgence</h1>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="prose prose-sm text-gray-600">
          <div class="space-y-2">
            <ExternalLink 
              href="https://docs.google.com/spreadsheets/d/1XM-p0jmXlX6MLpVRaad6VFkAUMZnpsqe/edit"
              text="Tableau des vérifications mensuelles"
            />
            <ExternalLink 
              href="https://www.zoll.com/-/media/public-site/products/aed-plus/9650-0301-24-sf_a.ashx"
              text="Manuel AED Plus"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../../components/ExternalLink.vue'
</script>