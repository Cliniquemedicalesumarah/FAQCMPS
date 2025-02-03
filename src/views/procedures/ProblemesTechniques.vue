<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Problèmes techniques</h1>
      <p class="mt-1 text-sm text-gray-500">
        Guide de résolution des problèmes techniques courants
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Myle -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Myle</h3>
            <div class="mt-2 space-y-2">
              <p class="text-sm text-gray-600">
                Merci de communiquer directement avec <span class="font-medium">Myle</span> en cas de problème :
                <span class="font-medium">1 (855) 633-3271</span>
              </p>
              <p class="text-sm text-gray-600">
                Si l'intervention peut aider d'autres utilisateurs, communiquez :
              </p>
              <ul class="list-disc pl-5 text-sm text-gray-600">
                <li>Via <span class="font-medium">Teams</span> (pour les médecins)</li>
                <li>Via <span class="font-medium">Gmail</span> (pour l'administratif)</li>
              </ul>
            </div>
          </div>

          <!-- Clé DSQ -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Clé DSQ</h3>
            <div class="mt-2 space-y-2">
              <p class="text-sm text-gray-600">
                Contactez <span class="font-medium">Véronique Vigneau</span> au <span class="font-medium">CISSS des Îles</span> pour tout problème avec la clé physique.
              </p>
              <p class="text-sm text-gray-600">
                Pour les problématiques de connexion ou autres : <span class="font-medium">1-877-826-2433</span>
              </p>
              <p class="text-sm text-gray-600">
                En cas de blocage de la clé, utilisez le <span class="font-medium">Portail libre-service (PLS)</span> pour la débloquer.
              </p>
            </div>
          </div>

          <!-- Système téléphonique -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Système téléphonique</h3>
            <div class="mt-2 space-y-2">
              <p class="text-sm text-gray-600">
                Contactez <span class="font-medium">Mariko Fortier</span> :
              </p>
              <ul class="list-disc pl-5 text-sm text-gray-600">
                <li><span class="font-medium">Lundi</span> : Sur son cellulaire</li>
                <li><span class="font-medium">Mardi à vendredi</span> : Via Gmail-Chat</li>
              </ul>
            </div>
          </div>

          <!-- Internet CMPS -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Internet CMPS</h3>
            <div class="mt-2 space-y-4">
              <div>
                <ExternalLink 
                  href="https://docs.google.com/document/d/1NlbV2qZFzQc1U6pQD4XkFSgtNRXzfEUQBQrp1B7Mrko/edit"
                  text="Redémarrer le modem internet"
                />
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">Partage de connexion cellulaire :</p>
                <div class="mt-1 space-y-1">
                  <ExternalLink 
                    href="https://docs.google.com/document/d/1dn_Jwt9Bvumq9XHLPOmWc0nzHRtAZHnyji8dHty5yhU/edit"
                    text="iPhone - Procédure"
                  />
                  <ExternalLink 
                    href="https://docs.google.com/document/d/1DWBLsoInwStjorgOSJJs19y7luIIXqyRx9zbby9xCR0/edit"
                    text="Android - Procédure"
                  />
                </div>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">En cas de panne :</p>
                <ol class="list-decimal pl-5 text-sm text-gray-600">
                  <li>La première personne qui constate la panne avise <span class="font-medium">Anne-Marie Poirier</span></li>
                  <li>Anne-Marie redémarre le modem et prend en charge la situation</li>
                  <li>Communication de la panne aux professionnels et distribution des documents nécessaires</li>
                  <li>Si la panne persiste, <span class="font-medium">Anne-Marie contacte Déry</span> : <span class="font-medium">1-833-356-2442, poste 4</span></li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Système incendie -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Système incendie</h3>
            <div class="mt-2">
              <ExternalLink 
                href="https://drive.google.com/file/d/1_SHahnJ_3yiXOdYBsBvUWQQs71b5-8mC/view"
                text="Document explicatif du tableau de bord"
              />
            </div>
          </div>

          <!-- Climatisation / Chauffage -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Climatisation / Chauffage</h3>
            <div class="mt-2 space-y-2">
              <p class="text-sm text-gray-600">
                Contactez <span class="font-medium">Jean-Marie Cyr (PPE)</span> : <span class="font-medium">418-937-6688</span>
              </p>
              <p class="text-sm text-gray-600">
                Partagez les détails du problème sur Gmail dans le groupe <span class="font-medium">"Préposés à l'accueil"</span>
              </p>
            </div>
          </div>

          <!-- Imprimante XEROX -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Imprimante XEROX</h3>
            <div class="mt-2 space-y-4">
              <div>
                <p class="text-sm font-medium text-gray-900">Commande de fournitures / Toner :</p>
                <ul class="list-disc pl-5 text-sm text-gray-600">
                  <li>Téléphone : <span class="font-medium">1-800-275-9376</span></li>
                  <li>Numéro de série : <span class="font-medium">9HB195244</span></li>
                  <li>Adresse : <span class="font-medium">17 chemin des Montants, HAM</span></li>
                </ul>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">Remplacement :</p>
                <ul class="list-disc pl-5 text-sm text-gray-600">
                  <li>Toner : uniquement lorsque l'imprimante indique "fin de vie"</li>
                  <li>Cartouches : uniquement lorsque l'imprimante indique "cartouche vide"</li>
                </ul>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">Suivi des impressions :</p>
                <ol class="list-decimal pl-5 text-sm text-gray-600">
                  <li>Accédez à <span class="font-medium">Périphérique > Facturation/Utilisation > Total d'impressions</span></li>
                  <li>Répondez au courriel de <span class="font-medium">Xerox</span> avec le nombre d'impressions</li>
                </ol>
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