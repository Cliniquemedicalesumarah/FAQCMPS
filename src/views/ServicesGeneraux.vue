<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Services généraux au CISSS</h1>
      <p class="mt-1 text-sm text-gray-500">
        Répertoire des services généraux disponibles au CISSS des Îles
      </p>
      <div class="mt-4 bg-blue-50 p-4 rounded-lg">
        <p class="text-sm text-blue-700">
          Cette section est mise à jour régulièrement. Si vous constatez une erreur ou souhaitez suggérer un ajout, veuillez contacter la coordination.
        </p>
      </div>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Suivi obstétrique et pédiatrique -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Suivi obstétrique et pédiatrique</h3>
            <p class="mt-2 text-sm text-gray-600">
              Accompagnement des femmes enceintes et soins aux enfants.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Responsables :</span><br>
                Mélissa Bourgeois et Marie-Pascale Bourgeois, infirmières<br>
                Téléphone : 418-986-4911, poste 4231
              </p>
            </div>
          </div>

          <!-- IVG -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">IVG</h3>
            <p class="mt-2 text-sm text-gray-600">
              Clinique de santé de première ligne pour IVG et accompagnement médical.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Responsable :</span><br>
                Dominique Vigneau, infirmière<br>
                Téléphone : 418-986-7010, poste 8168
              </p>
            </div>
          </div>

          <!-- Vaccination générale -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Vaccination générale</h3>
            <p class="mt-2 text-sm text-gray-600">
              Vaccination pour toutes les tranches d'âge, incluant le vaccin contre le zona.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Responsable :</span><br>
                Marie-Pascale Bourgeois, infirmière<br>
                Téléphone : 418-986-4911, poste 4233
              </p>
              <p class="mt-2 text-sm text-gray-600">
                Le vaccin contre le zona est offert gratuitement aux 80 ans et + et aux personnes immunodéprimées.
              </p>
              <div class="mt-2">
                <ExternalLink 
                  href="https://www.quebec.ca/sante/conseils-et-prevention/vaccination/vaccin-zona"
                  text="Plus d'informations sur le vaccin zona"
                />
              </div>
            </div>
          </div>

          <!-- Accueil clinique -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Accueil clinique</h3>
            <p class="mt-2 text-sm text-gray-600">
              Coordination et prise en charge des soins de première ligne.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Responsable :</span><br>
                Alexandra Turbide, infirmière<br>
                Téléphone : 418-986-7010, poste 8435
              </p>
            </div>
          </div>

          <!-- Suivi diabète -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Suivi diabète</h3>
            <p class="mt-2 text-sm text-gray-600">
              Accompagnement et ajustement de médication pour le diabète.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Responsable :</span><br>
                Alexandra Turbide, infirmière<br>
                Téléphone : 418-986-7010, poste 8435
              </p>
            </div>
          </div>

          <!-- Soins courants -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Soins courants</h3>
            <p class="mt-2 text-sm text-gray-600">
              Services offerts : lavage des oreilles, pansements, injections SC ou IM, bladder scan.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                Téléphone : 418-986-7010, poste 8100<br>
                <span class="italic">Envoyer une demande de consultation avec le geste à faire.</span>
              </p>
            </div>
          </div>

          <!-- Clinique de la douleur -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Clinique de la douleur</h3>
            <p class="mt-2 text-sm text-gray-600">
              Gestion des patients souffrant de douleur chronique.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Responsable :</span><br>
                Alexandra Turbide<br>
                <span class="italic">Service en développement, sans prise en charge interdisciplinaire pour l'instant.</span>
              </p>
            </div>
          </div>

          <!-- GAP -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">GAP</h3>
            <p class="mt-2 text-sm text-gray-600">
              Guichet d'accès en première ligne pour les patients sans médecin de famille.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Responsables :</span>
                <ul class="list-disc pl-5 mt-1">
                  <li>Marie-Claude Boulais, infirmière</li>
                  <li>Marie-Pier Déraspe, infirmière</li>
                  <li>Collen Rankin, administrative</li>
                </ul>
                <span class="italic mt-2 block">Communications via Communications externes dans Myle</span>
              </p>
            </div>
          </div>

          <!-- Consultations spécialisées -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Consultations spécialisées</h3>
            <p class="mt-2 text-sm text-gray-600">
              Gestion des rendez-vous avec les médecins spécialistes.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Responsable :</span><br>
                Line Jomphe<br>
                Téléphone : 418-986-7010, poste 8148<br>
                Fax : 418-986-7001
              </p>
            </div>
          </div>

          <!-- Chirurgie bariatrique -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Chirurgie bariatrique</h3>
            <p class="mt-2 text-sm text-gray-600">
              Ajustement des suppléments de fer et suivi post-opératoire.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Responsable :</span><br>
                Nathalie Turgeon, IUCPQ<br>
                Téléphone : 418-656-8711, poste 5173
              </p>
              <div class="mt-2">
                <ExternalLink 
                  href="https://www.iucpq.ca"
                  text="Accéder aux protocoles IUCPQ"
                />
              </div>
              <p class="mt-2 text-sm font-medium text-red-600">
                PAS DE SERVICE AUX ÎLES
              </p>
            </div>
          </div>

          <!-- Électrophysiologie médicale -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Électrophysiologie médicale</h3>
            <p class="mt-2 text-sm text-gray-600">
              Tests diagnostiques spécialisés en électrophysiologie médicale.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Responsable :</span><br>
                France Boucher<br>
                Téléphone : 418-986-7010, poste 8148<br>
                Pagette : 418-937-3152
              </p>
            </div>
          </div>

          <!-- Orthophonie -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Orthophonie</h3>
            <p class="mt-2 text-sm text-gray-600">
              Services pour les enfants et les adultes.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Responsables :</span>
                <ul class="list-disc pl-5 mt-1">
                  <li>Manon Guertin (pédiatrie)<br>Téléphone : 418-986-7010, poste 8334</li>
                  <li>Brigitte Leblanc (adulte)<br>Téléphone : 418-986-7010, poste 8373</li>
                </ul>
              </p>
            </div>
          </div>

          <!-- Guichet de réadaptation -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Guichet de réadaptation</h3>
            <p class="mt-2 text-sm text-gray-600">
              Services spécialisés en réadaptation pour les patients des Îles.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                Téléphone : 1-844-GUICHET<br>
                Fax : 418-763-2438<br>
                <a href="mailto:guichet.readapt.cisssgaspesie@ssss.gouv.qc.ca" class="text-blue-600 hover:text-blue-800">
                  guichet.readapt.cisssgaspesie@ssss.gouv.qc.ca
                </a>
              </p>
              <div class="mt-2">
                <ExternalLink 
                  href="https://drive.google.com/file/d/1H_CYvd05P03sGTWjE3ZQOd1wisOk21Tt/view?usp=sharing"
                  text="Formulaire de référence"
                />
              </div>
            </div>
          </div>

          <!-- Clinique d'Insuffisance Rénale -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Clinique d'Insuffisance Rénale (CIR)</h3>
            <p class="mt-2 text-sm text-gray-600">
              Prise en charge des patients atteints d'insuffisance rénale chronique (stade 3B à 5).
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Référence :</span><br>
                Obligatoire par un médecin ou une IPS<br>
                Fax : 418-986-1763
              </p>
              <div class="mt-2">
                <ExternalLink 
                  href="https://drive.google.com/file/d/1LWjuTXRCizsVbu78gm4JoMgKfaLCo5Up/view?usp=sharing"
                  text="Document de référence"
                />
              </div>
            </div>
          </div>

          <!-- Centre d'abandon du tabac -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Centre d'abandon du tabac (CAT)</h3>
            <p class="mt-2 text-sm text-gray-600">
              Service gratuit et accessible à tous pour l'arrêt du tabac et du vapotage.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                Téléphone : 418-986-2121, poste 4282
              </p>
              <div class="mt-2">
                <ExternalLink 
                  href="https://www.quebecsanstabac.ca/jarrete/inscription"
                  text="Je veux arrêter de fumer"
                />
              </div>
            </div>
          </div>

          <!-- Clinique voyage -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Clinique voyage</h3>
            <p class="mt-2 text-sm text-gray-600">
              Vaccination et conseils santé pour voyageurs.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                Téléphone : 418-986-2121, poste 8484<br>
                <a href="mailto:cliniquevoyage.cisssdesiles@ssss.gouv.qc.ca" class="text-blue-600 hover:text-blue-800">
                  cliniquevoyage.cisssdesiles@ssss.gouv.qc.ca
                </a>
              </p>
              <div class="mt-2">
                <ExternalLink 
                  href="https://drive.google.com/file/d/1pHg8ZLuRNclEjnTMq-MLgEeMtr6MC20i/view"
                  text="Formulaire de demande"
                />
              </div>
            </div>
          </div>

          <!-- Programme de supplément au loyer -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Programme de supplément au loyer</h3>
            <p class="mt-2 text-sm text-gray-600">
              Aide au logement et accompagnement psychosocial.
            </p>
            <div class="mt-4">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Contacts :</span><br>
                Jeunesse : <a href="mailto:marie-claude.bourdages.cisssgaspesie@ssss.gouv.qc.ca" class="text-blue-600 hover:text-blue-800">
                  marie-claude.bourdages.cisssgaspesie@ssss.gouv.qc.ca
                </a><br>
                Information générale : <a href="mailto:anne-julie.gough.cisssgaspesie@ssss.gouv.qc.ca" class="text-blue-600 hover:text-blue-800">
                  anne-julie.gough.cisssgaspesie@ssss.gouv.qc.ca
                </a>
              </p>
              <div class="mt-2">
                <ExternalLink 
                  href="https://drive.google.com/file/d/1qdCcLGfMwm8aQViohCOeSU7CKvQ3XUYy/view"
                  text="Mécanisme d'accès"
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