<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Services à domicile (SAD)</h1>
      <p class="mt-1 text-sm text-gray-500">
        Services de soins à domicile du CLSC
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="space-y-8">
          <!-- Accueil psychosocial et infirmière de liaison -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Accueil psychosocial et infirmière de liaison au CLSC</h2>
            <div class="bg-gray-50 p-4 rounded-lg space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 class="text-base font-medium text-gray-900">Accueil psychosocial SAD</h3>
                  <div class="mt-2 space-y-2">
                    <p>Poste 4238</p>
                    <p>Fax : 418-986-2546</p>
                    <p class="text-sm">Demandes à envoyer par :</p>
                    <ul class="list-disc pl-5 text-sm">
                      <li>Fax</li>
                      <li>Courrier interne avec :
                        <ul class="list-disc pl-5">
                          <li>Formulaire de demandes SAD</li>
                          <li>Formulaire de requête professionnelle copie carbone</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 class="text-base font-medium text-gray-900">Accueil infirmière de liaison</h3>
                  <div class="mt-2 space-y-2">
                    <p>Poste 4240</p>
                    <p>Fax : 418-986-2546</p>
                    <p class="text-sm">Utiliser les mêmes formulaires</p>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <p class="text-sm">Pour toute question clinique (mais pas pour les nouvelles demandes) : contacter l'ASI du SAD au Poste 4211</p>
              </div>
            </div>
          </section>

          <!-- Hébergement -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Demandes d'hébergement en CHSLD ou RI</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="font-medium mb-2">Procédure :</p>
              <ul class="list-disc pl-5 text-sm text-gray-600">
                <li>Si le patient a une travailleuse sociale (TS) SAD : Communiquer directement avec elle</li>
                <li>Si le patient n'a PAS de TS SAD : Contacter l'Accueil psychosocial SAD au Poste 4238</li>
              </ul>
            </div>
          </section>

          <!-- Réadaptation -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Demandes de services de réadaptation</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="font-medium mb-2">Procédure :</p>
              <ul class="list-disc pl-5 text-sm text-gray-600">
                <li>Les demandes doivent être envoyées à l'Accueil réadaptation (3ᵉ étage du CH)</li>
                <li>Le comité d'accès à la réadaptation traite la demande et l'achemine au SAD sans qu'il soit nécessaire de la renvoyer en double</li>
              </ul>
            </div>
          </section>

          <!-- Contacts et professionnels -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Contacts et professionnels en SAD</h2>
            <div class="bg-gray-50 p-4 rounded-lg space-y-6">
              <div>
                <h3 class="text-base font-medium text-gray-900">Accueil infirmière de liaison au CLSC</h3>
                <div class="mt-2">
                  <p>Marie-Michèle Cyr, infirmière de liaison</p>
                  <p>Téléphone : 418-986-2546</p>
                </div>
              </div>

              <div>
                <h3 class="text-base font-medium text-gray-900">ASI au SAD</h3>
                <div class="mt-2">
                  <p>Marie-Christine Déraspe et Rosalie Boudreau, infirmières cliniciennes</p>
                  <p>Poste 4211</p>
                </div>
              </div>

              <div>
                <h3 class="text-base font-medium text-gray-900">Accueil psychosocial SAD au CLSC</h3>
                <div class="mt-2">
                  <p>Manon Cyr, éducatrice spécialisée</p>
                  <p>Poste 4238</p>
                </div>
              </div>

              <div>
                <h3 class="text-base font-medium text-gray-900">Médecins SAD</h3>
                <ul class="mt-2 list-disc pl-5">
                  <li>Dr Steve Lessard</li>
                  <li>Dre Rosalie Moreau</li>
                  <li>Dre Audrey Moreau</li>
                  <li>Dre Camille Delaney</li>
                </ul>
              </div>

              <div class="bg-yellow-50 p-4 rounded-lg">
                <p class="text-sm font-medium text-yellow-800">Important :</p>
                <p class="mt-1 text-sm text-yellow-700">Les demandes sont analysées par le comité d'accès du SAD. Il n'est pas garanti que toutes les demandes seront acceptées. Il ne faut pas promettre de services à un patient avant validation.</p>
              </div>
            </div>
          </section>

          <!-- Services spécifiques -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Services spécifiques liés au SAD</h2>
            <div class="bg-gray-50 p-4 rounded-lg space-y-6">
              <div>
                <h3 class="text-base font-medium text-gray-900">Inhalothérapie et oxygène à domicile</h3>
                <div class="mt-2">
                  <p>Valérie Thériault, inhalothérapeute</p>
                  <p>Téléphone : 418-986-2546</p>
                  <p>Poste 3117</p>
                  <ExternalLink 
                    href="#"
                    text="Formulaire - Service de soins respiratoires à domicile"
                  />
                </div>
              </div>

              <div>
                <h3 class="text-base font-medium text-gray-900">Prêt d'équipements (CHSLD)</h3>
                <div class="mt-2">
                  <p>Nadia Renaud et Camille Bénard, technologues en physiothérapie</p>
                  <p>Téléphone : 418-986-2746</p>
                  <p>Poste 8502 (entre 13h et 14h30)</p>
                  <p>Lieu : Pavillon Eudore Labrie, local A-003</p>
                  <ExternalLink 
                    href="https://docs.google.com/document/d/1myPXN9J5fQcypsQMbbDLDYdZYY_4ipvQ/edit"
                    text="Formulaire - Recommandations pour prêt d'équipements"
                  />
                </div>
              </div>
            </div>
          </section>

          <!-- Références en réadaptation -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Références en réadaptation et services spécialisés</h2>
            <div class="bg-gray-50 p-4 rounded-lg space-y-6">
              <div>
                <h3 class="text-base font-medium text-gray-900">Physiothérapie - Hôpital</h3>
                <div class="mt-2">
                  <ExternalLink 
                    href="#"
                    text="Formulaire - Consultation en Physiothérapie"
                  />
                  <p class="mt-1 text-sm italic">Ne pas utiliser EXTERNE</p>
                  <p class="mt-1">Fax : 418-986-3770 (CISSS DES ÎLES - RÉADAPTATION - CLINIQUE EXTERNE DE PSYCHIATRIE)</p>
                </div>
              </div>

              <div>
                <h3 class="text-base font-medium text-gray-900">Ergothérapie - Hôpital</h3>
                <div class="mt-2">
                  <ExternalLink 
                    href="#"
                    text="Formulaire - Réquisition médicale - Ergothérapie"
                  />
                </div>
              </div>

              <div>
                <h3 class="text-base font-medium text-gray-900">Audiologie</h3>
                <div class="mt-2">
                  <ExternalLink 
                    href="#"
                    text="Formulaire - Requête de services professionnels"
                  />
                  <p class="mt-1 text-sm italic">Ne pas oublier de cocher audiologie au bas du formulaire !</p>
                </div>
              </div>
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