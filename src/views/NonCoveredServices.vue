<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Services non couverts RAMQ</h1>
      <p class="mt-1 text-sm text-gray-500">
        Services spécialisés non couverts par l'assurance maladie.
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Emsculpt -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Emsculpt</h2>
            <div class="prose prose-sm text-gray-600">
              <p>Nadia Renaud, technologue en physiothérapie, administre les traitements les lundis et jeudis soirs.</p>
              <div class="space-y-2 mt-4">
                <ExternalLink 
                  href="https://emsculpt.cliniquemedicalesumarah.ca/"
                  text="Site web Emsculpt"
                />
                <ExternalLink 
                  href="https://book.squareup.com/appointments/oboo3kysjuk0g9/location/LQ0JF8HJH1W3E/services?buttonTextColor=ffffff&color=006aff&locale=fr-CA&referrer=so"
                  text="Prendre un rendez-vous"
                />
              </div>
              <div class="mt-4">
                <p class="font-medium">Forfaits :</p>
                <ul class="list-disc pl-5">
                  <li>1 zone : 999$ (6×30min)</li>
                  <li>2 zones : 1499$ (6×60min)</li>
                  <li>3 zones : 1999$ (6×90min)</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Injection de botox -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Injection de botox</h2>
            <div class="prose prose-sm text-gray-600">
              <p>Service offert par Dr Audrey Moreau.</p>
              <div class="space-y-2 mt-4">
                <ExternalLink 
                  href="https://www.facebook.com/profile.php?id=61555164582617"
                  text="Page Facebook"
                />
                <ExternalLink 
                  href="https://www.canva.com/design/DAF_95ukXxQ/uVpNGinc-7OiQbtghmCnBQ/view"
                  text="Présentation des services"
                />
                <ExternalLink 
                  href="https://gmfdesiles.portail.medfarsolutions.com/fr/login"
                  text="Portail santé pour rendez-vous"
                />
              </div>
              <div class="mt-4">
                <p class="font-medium">Tarifs :</p>
                <ul class="list-disc pl-5">
                  <li>Premier traitement : 8$/unité</li>
                  <li>Suivants : 12$/unité</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Podiatrie -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Podiatrie</h2>
            <div class="prose prose-sm text-gray-600">
              <p>Dre Sophie Roy fait des visites régulières à CMPS.</p>
              <div class="space-y-2 mt-4">
                <ExternalLink 
                  href="https://docs.google.com/document/d/1Pwg1aiMaGAoP_YpcoTd_kIQr167cj1hMq_kfq4Pa7Zk/edit?tab=t.0"
                  text="Liste des prix"
                />
                <ExternalLink 
                  href="https://docs.google.com/document/d/1XM-p0jmXlX6MLpVRaad6VFkAUMZnpsqe/edit"
                  text="Guide d'information"
                />
                <ExternalLink 
                  href="https://www.facebook.com/podiatreilesdelamadeleine"
                  text="Page Facebook"
                />
              </div>
              <div class="mt-4">
                <p class="font-medium">DME Medesync :</p>
                <div class="space-y-2">
                  <ExternalLink 
                    href="https://drive.google.com/file/d/1zXabSzVsW7cZYkonQ_WlXQRUE5efWeSg/view"
                    text="Guide d'utilisation Medesync"
                  />
                  <ExternalLink 
                    href="https://drive.google.com/file/d/1cSngvMN5cXLBEt66mKV2ZgQ_5Q5R_z80/view"
                    text="Comment contacter Medesync"
                  />
                  <ExternalLink 
                    href="https://drive.google.com/file/d/1kBExW4m6vURx_1go9eVjl4IkhKXh2JMe/view"
                    text="Guide de formation pour les rendez-vous"
                  />
                </div>
                <p class="mt-2">Dr Roy n'utilise pas notre service de secrétariat à la clinique et les RVs sont pris à sa clinique de Mirabel.</p>
              </div>
            </div>
          </div>

          <!-- Orthophonie -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Orthophonie</h2>
            <div class="prose prose-sm text-gray-600">
              <p>Services offerts par René-Pier Chevarie les mercredis et vendredis.</p>
              <div class="space-y-2 mt-4">
                <ExternalLink 
                  href="https://ocapitale.ca/"
                  text="Orthophonie de la Capitale"
                />
                <ExternalLink 
                  href="https://drive.google.com/file/d/12oEA5aAYYcQ1jqIC5rgoPcfzmBekbPE3/view"
                  text="Tarifs"
                />
              </div>
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