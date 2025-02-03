<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg max-w-5xl mx-auto">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Gadgets et Technologies</h1>
      <p class="mt-1 text-sm text-gray-500">
        Guide d'utilisation des équipements de la clinique
      </p>
      <!-- Message de mise à jour -->
      <div class="mt-4 bg-blue-50 p-4 rounded-lg">
        <p class="text-sm text-blue-700">
          Cette section est mise à jour régulièrement. Si vous constatez une erreur ou souhaitez suggérer un ajout, veuillez contacter la coordination.
        </p>
      </div>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Machine à café -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Machine à café Rancilio (2e étage)</h2>
            <p class="text-sm text-gray-600">
              Machine à café professionnelle pour le personnel.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Configuration actuelle :</span><br>
                Mouture réglée à 10 (Café St-Henri)
              </p>
              <div class="mt-2">
                <p class="text-sm text-red-600 font-medium">⚠️ Pour éviter d'endommager l'élément chauffant (réparation en 2025) :</p>
                <ul class="list-disc pl-5 text-sm text-gray-600">
                  <li class="text-green-600">✅ Toujours éteindre la machine après usage</li>
                  <li class="text-green-600">✅ S'assurer que le réservoir d'eau est plein avant d'allumer</li>
                </ul>
              </div>
              <p class="mt-2 text-sm text-gray-600">
                Nettoyez la buse à vapeur après chaque utilisation.
              </p>
            </div>
          </div>

          <!-- Système Sonos -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Système Sonos</h2>
            <p class="text-sm text-gray-600">
              Système audio multiroom pour la clinique.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Installation :</span>
              </p>
              <div class="space-y-2">
                <ExternalLink 
                  href="https://www.sonos.com/apps"
                  text="Télécharger sur mobile"
                />
                <ExternalLink 
                  href="https://www.sonos.com/apps"
                  text="Télécharger sur ordinateur"
                />
              </div>
            </div>
          </div>

          <!-- Sonde Butterfly IQ -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Sonde Butterfly IQ</h2>
            <p class="text-sm text-gray-600">
              Échographe portable connecté à votre iPhone.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Application :</span>
              </p>
              <div class="space-y-2">
                <ExternalLink 
                  href="https://apps.apple.com/us/app/butterfly-iq-ultrasound/id1183035589"
                  text="iOS"
                />
                <ExternalLink 
                  href="https://play.google.com/store/apps/details?id=com.butterflynetwork.iq"
                  text="Android"
                />
              </div>
              <div class="mt-2">
                <p class="text-sm text-gray-600">
                  <span class="font-medium">Connexion :</span><br>
                  Email : ychelle_why@hotmail.com<br>
                  Mot de passe : Valider avec Dr Fortier
                </p>
              </div>
              <div class="mt-2">
                <p class="text-sm text-gray-600">
                  <span class="font-medium">Emplacement :</span><br>
                  Face aux lavabos du rez-de-chaussée, sur la tablette du haut
                </p>
              </div>
              <div class="mt-2">
                <ExternalLink 
                  href="https://manual.butterflynetwork.com/butterfly-iq-user-manual_rev-ba-fr.pdf"
                  text="Manuel de l'utilisateur"
                />
              </div>
            </div>
          </div>

          <!-- Imprimante Xerox -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Imprimante Xerox</h2>
            <p class="text-sm text-gray-600">
              Imprimante multifonction de la clinique.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Support technique :</span><br>
                David Bourgeois : 418-969-1638
              </p>
            </div>
          </div>

          <!-- Serrure WiFi -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Serrure WiFi</h2>
            <p class="text-sm text-gray-600">
              Serrure intelligente Hornbill pour l'accès au 2e étage.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Fonctionnalités :</span>
              </p>
              <ul class="list-disc pl-5 text-sm text-gray-600">
                <li>Déverrouillage via empreinte digitale, code PIN, application mobile ou clé physique</li>
                <li>Compatible avec Alexa et Bluetooth</li>
                <li>Historique des accès consultable via l'application</li>
              </ul>
              <div class="mt-2">
                <ExternalLink 
                  href="https://m.media-amazon.com/images/I/B1HbeL4ccjL.pdf"
                  text="Guide utilisateur complet"
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
import ExternalLink from '../../components/ExternalLink.vue'
</script>