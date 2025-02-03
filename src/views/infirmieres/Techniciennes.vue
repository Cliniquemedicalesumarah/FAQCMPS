<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Infirmière technicienne</h1>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="prose prose-sm text-gray-600">
          <!-- Prise de rendez-vous -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Prise de rendez-vous</h2>
            <div class="bg-gray-50 p-4 rounded-lg space-y-4">
              <p class="font-medium text-red-600">
                VOUS DEVEZ VOUS-MÊME mettre le RV pour le patient dans l'horaire si le patient est avec vous en personne ou au téléphone au moment où vous discutez de l'indication de l'examen avec le patient.
              </p>

              <div>
                <h3 class="text-base font-medium text-gray-900">Service</h3>
                <p>Les RVs s'appellent: Service: CMPS - INFIRMIÈRE - 20 - 20min</p>
              </div>

              <div>
                <h3 class="text-base font-medium text-gray-900">Types de rendez-vous disponibles</h3>
                <ul class="list-disc pl-5">
                  <li>20 minutes: ECG</li>
                  <li>20 minutes: MMSE</li>
                  <li>20 minutes: MOCA (si MMSE 24-30 et scolarité équivalent à > 12 ans)</li>
                  <li>20 minutes: Trail test</li>
                  <li>20 minutes: Bladder scan</li>
                  <li>20 minutes: bptru</li>
                  <li>20 minutes: changement de pansement</li>
                  <li>20 minutes: cryothérapie: uniquement verrue plantaire ou vulgaire pour le moment</li>
                  <li>20 minutes: lavage oreilles</li>
                </ul>
              </div>

              <div>
                <h3 class="text-base font-medium text-gray-900">Points importants</h3>
                <ul class="list-disc pl-5">
                  <li>Pour plusieurs examens, rentrer le nom du patient plusieurs fois (ex: MMSE, MOCA et ECG = 3 plages)</li>
                  <li>Si le patient n'est pas avec vous, envoyez une tâche à Dorine Chevarie qui donnera le RV au patient</li>
                  <li>LES SECRÉTAIRES MÉDICALES NE DONNERONT PAS CES RVS</li>
                  <li>Si vous voulez que Dorine ait du temps pour faire les techniques et moins à tenter de rejoindre les gens, il est important que vous donniez vous-mêmes le RV dans l'horaire</li>
                </ul>
              </div>

              <div>
                <ExternalLink 
                  href="https://medfar.my.site.com/s/article/Cr%C3%A9er-rendez-vous?language=fr"
                  text="Guide: Comment donner un RV à partir du dossier du patient"
                />
              </div>
            </div>
          </section>

          <!-- Outils de formation -->
          <section class="mt-6">
            <h2 class="text-lg font-medium text-gray-900">Outils de formation/référence</h2>
            <div class="bg-gray-50 p-4 rounded-lg space-y-6">
              <!-- Index tibio-brachial -->
              <div>
                <h3 class="text-base font-medium text-gray-900">Index tibio-brachial</h3>
                <div class="space-y-2">
                  <ExternalLink 
                    href="https://www.oiiq.org/documents/20147/237836/252_doc.pdf"
                    text="Index tibio-brachial: guide OIIQ"
                  />
                  <ExternalLink 
                    href="https://www.youtube.com/watch?v=ZFe1nWUW_Nk"
                    text="Vidéo: comment mesurer index tibio-brachial"
                  />
                </div>
              </div>

              <!-- MAPA -->
              <div>
                <h3 class="text-base font-medium text-gray-900">MAPA</h3>
                <div class="prose prose-sm text-gray-600">
                  <p class="font-medium">Installation:</p>
                  <ul class="list-disc pl-5">
                    <li>Vérification des batteries</li>
                    <li>Ouvrir le logiciel Welsh Allyn</li>
                    <li>Brancher l'appareil avec le fil gris</li>
                    <li>Configuration et prise de mesures</li>
                  </ul>
                  <p class="font-medium mt-2">Instructions au patient:</p>
                  <ul class="list-disc pl-5">
                    <li>Informer de l'intervalle des prises</li>
                    <li>Garder l'appareil 24 heures</li>
                    <li>Rester immobile lors du gonflage</li>
                  </ul>
                </div>
              </div>

              <!-- ECG -->
              <div>
                <h3 class="text-base font-medium text-gray-900">ECG</h3>
                <div class="prose prose-sm text-gray-600">
                  <p>Appareil CP-150 de Welch-Allyn</p>
                  <p>Support technique: 1-800-561-8797 poste 2</p>
                  <p class="font-medium">Configuration spéciale Dr Dansereau:</p>
                  <ul class="list-disc pl-5">
                    <li>Paramètres > Rapport Auto</li>
                    <li>Page 2: décocher Interprétation</li>
                  </ul>
                </div>
              </div>

              <!-- Autres procédures -->
              <div>
                <h3 class="text-base font-medium text-gray-900">Autres procédures</h3>
                <div class="space-y-2">
                  <ExternalLink 
                    href="https://docs.google.com/document/d/1XM-p0jmXlX6MLpVRaad6VFkAUMZnpsqe/edit"
                    text="Lavage d'oreilles (Otoclear)"
                  />
                  <ExternalLink 
                    href="https://docs.google.com/document/d/1XM-p0jmXlX6MLpVRaad6VFkAUMZnpsqe/edit"
                    text="Bladder scan (Butterfly IQ)"
                  />
                  <ExternalLink 
                    href="https://docs.google.com/document/d/1XM-p0jmXlX6MLpVRaad6VFkAUMZnpsqe/edit"
                    text="Évaluation neuropathie diabétique"
                  />
                  <ExternalLink 
                    href="https://docs.google.com/document/d/1XM-p0jmXlX6MLpVRaad6VFkAUMZnpsqe/edit"
                    text="Guide MMSE"
                  />
                  <ExternalLink 
                    href="https://docs.google.com/document/d/1XM-p0jmXlX6MLpVRaad6VFkAUMZnpsqe/edit"
                    text="Guide MOCA"
                  />
                  <ExternalLink 
                    href="https://docs.google.com/document/d/1XM-p0jmXlX6MLpVRaad6VFkAUMZnpsqe/edit"
                    text="Trail test"
                  />
                </div>
              </div>

              <!-- Plaies -->
              <div>
                <h3 class="text-base font-medium text-gray-900">Gestion des plaies</h3>
                <div class="prose prose-sm text-gray-600">
                  <p>Pansements situés dans le bac turquoise sous le lavabo au rez-de-chaussée</p>
                  <div class="space-y-2">
                    <ExternalLink 
                      href="https://www.inesss.qc.ca/fileadmin/doc/INESSS/Rapports/Traitement/INESSS_Evaluation_plaies.pdf"
                      text="Évaluation plaies INESS"
                    />
                    <ExternalLink 
                      href="https://docs.google.com/document/d/1XM-p0jmXlX6MLpVRaad6VFkAUMZnpsqe/edit"
                      text="Plan de traitement"
                    />
                    <ExternalLink 
                      href="https://docs.google.com/document/d/1XM-p0jmXlX6MLpVRaad6VFkAUMZnpsqe/edit"
                      text="Aide-mémoire pansement"
                    />
                  </div>
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
import ExternalLink from '../../components/ExternalLink.vue'
</script>