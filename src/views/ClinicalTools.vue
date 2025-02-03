<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Outils cliniques</h1>
      <p class="mt-1 text-sm text-gray-500">
        Ressources et outils pour la pratique clinique
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
          <!-- Aide à la décision -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Aide à la décision partagée</h3>
            <p class="mt-2 text-sm text-gray-600">
              Outils pour faciliter la prise de décision avec les patients.
            </p>
            <div class="mt-4 space-y-2">
              <ExternalLink 
                href="https://www.pain-calculator.com"
                text="Calculatrice pour médicaments antidouleur"
              />
              <ExternalLink 
                href="https://decisionaid.ohri.ca/francais/gpdo.html"
                text="Outil d'aide à la décision personnalisable"
              />
              <ExternalLink 
                href="https://www.gpevidence.org"
                text="GP Evidence - Aide à la décision"
              />
              <ExternalLink 
                href="https://choisiravecsoin.org/wp-content/uploads/2017/06/Four-questions-FR.pdf"
                text="4 questions de Choisir avec soin"
              />
            </div>
          </div>

          <!-- Trajectoires et dépistage -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Trajectoires et dépistage</h3>
            <p class="mt-2 text-sm text-gray-600">
              Guides pour le dépistage et le suivi des cancers.
            </p>
            <div class="mt-4 space-y-2">
              <ExternalLink 
                href="#"
                text="Trajectoire dépistage des cancers"
              />
              <ExternalLink 
                href="#"
                text="Trajectoire dépistage du cancer du sein"
              />
            </div>
          </div>

          <!-- Guides INESSS -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Guides INESSS</h3>
            <p class="mt-2 text-sm text-gray-600">
              Guides de pratique clinique de l'INESSS.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="https://www.inesss.qc.ca/publications/repertoire-des-publications/publication/dyslipidemie.html"
                text="Guide de l'INESSS - Dyslipidémie"
              />
            </div>
          </div>

          <!-- Outils cliniques spécifiques -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Outils cliniques spécifiques</h3>
            <p class="mt-2 text-sm text-gray-600">
              Outils d'évaluation et de suivi clinique.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="https://cep.health/clinical-products/low-back-pain/"
                text="CORE Back Tool - Douleur lombaire"
              />
            </div>
          </div>

          <!-- Déprescription -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Déprescription</h3>
            <p class="mt-2 text-sm text-gray-600">
              Ressources pour la déprescription sécuritaire.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="https://www.reseaudeprescription.ca/ressources-patients"
                text="Brochures EMPOWER"
              />
            </div>
          </div>

          <!-- Choisir avec soin -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Choisir avec soin</h3>
            <p class="mt-2 text-sm text-gray-600">
              Recommandations pour des soins appropriés.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="https://choisiravecsoinquebec.ca/"
                text="Choisir avec soin Québec"
              />
            </div>
          </div>

          <!-- Recettes de médecins -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Recettes de médecins</h3>
            <p class="mt-2 text-sm text-gray-600">
              Recettes cliniques compilées par les médecins de la CMPS.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="https://docs.google.com/document/d/1_eIr19RswWESVrVQBa9Kjl524AobyR4L-ujVFz_0ijA/edit?tab=t.0#heading=h.fh5glr4cm4gh"
                text="Consulter les recettes"
              />
            </div>
          </div>

          <!-- Fiches physio -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Fiches physiothérapie</h3>
            <p class="mt-2 text-sm text-gray-600">
              Fiches d'information pour les patients.
            </p>
            <div class="mt-4 space-y-2">
              <ExternalLink 
                href="#"
                text="Syndrome facettaire"
              />
              <ExternalLink 
                href="#"
                text="Syndrome discal"
              />
            </div>
          </div>

          <!-- Douleur -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Douleur</h3>
            <p class="mt-2 text-sm text-gray-600">
              Ressources pour la gestion de la douleur.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="#"
                text="Magistrales pour la douleur - Dre Anne-Marie Pinard"
              />
            </div>
          </div>

          <!-- Pneumologie -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Pneumologie</h3>
            <p class="mt-2 text-sm text-gray-600">
              Ressources en pneumologie.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="#"
                text="Références asthme et MPOC"
              />
            </div>
          </div>

          <!-- Suicide -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Suicide</h3>
            <p class="mt-2 text-sm text-gray-600">
              Outils d'évaluation du risque suicidaire.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="#"
                text="Grille GERIS"
              />
            </div>
          </div>

          <!-- Arrêt de travail -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Arrêt de travail</h3>
            <p class="mt-2 text-sm text-gray-600">
              Approche STAT-C en santé mentale.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="#"
                text="Guide STAT-C"
              />
            </div>
          </div>

          <!-- Communication non violente -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Communication non violente</h3>
            <p class="mt-2 text-sm text-gray-600">
              Outils pour une communication efficace.
            </p>
            <div class="mt-4 space-y-2">
              <ExternalLink 
                href="#"
                text="Grilles des sentiments et besoins"
              />
              <ExternalLink 
                href="#"
                text="Guide dialogue authentique"
              />
            </div>
          </div>

          <!-- Plans d'action -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Plans d'action</h3>
            <p class="mt-2 text-sm text-gray-600">
              Plans d'action pour conditions spécifiques.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="#"
                text="Plan d'action - Eczéma"
              />
            </div>
          </div>

          <!-- TDAH -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">TDAH</h3>
            <p class="mt-2 text-sm text-gray-600">
              Ressources pour le TDAH.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="#"
                text="Recommandations milieu scolaire"
              />
            </div>
          </div>

          <!-- Guides Ste-Justine -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Guides Ste-Justine</h3>
            <p class="mt-2 text-sm text-gray-600">
              Guides cliniques de l'Hôpital Ste-Justine.
            </p>
            <div class="mt-4 space-y-2">
              <ExternalLink 
                href="#"
                text="Guide des fractures"
              />
              <ExternalLink 
                href="#"
                text="Guide des lacérations"
              />
              <ExternalLink 
                href="#"
                text="Corticostéroides intra-nasaux"
              />
              <ExternalLink 
                href="#"
                text="Traitement des sinusites"
              />
              <ExternalLink 
                href="#"
                text="Guide de l'asthme"
              />
            </div>
          </div>

          <!-- Agir tôt -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Agir tôt</h3>
            <p class="mt-2 text-sm text-gray-600">
              Programme d'intervention précoce.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="#"
                text="Agir tôt - CISSS des îles"
              />
            </div>
          </div>

          <!-- Chirurgie bariatrique -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Chirurgie bariatrique</h3>
            <p class="mt-2 text-sm text-gray-600">
              Ressources pour la chirurgie bariatrique.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="#"
                text="Guide chirurgie bariatrique"
              />
            </div>
          </div>

          <!-- Midis cliniques -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Midis cliniques</h3>
            <p class="mt-2 text-sm text-gray-600">
              Présentations des midis cliniques.
            </p>
            <div class="mt-4 space-y-2">
              <ExternalLink 
                href="#"
                text="MGUS par Dr Dansereau"
              />
              <ExternalLink 
                href="#"
                text="Ostéoporose par V.Laporte"
              />
            </div>
          </div>

          <!-- Mandat en cas d'inaptitude -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Mandat en cas d'inaptitude</h3>
            <p class="mt-2 text-sm text-gray-600">
              Documentation sur les mandats d'inaptitude.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="#"
                text="Tableau synthèse des mesures"
              />
            </div>
          </div>

          <!-- Conduite automobile -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Conduite automobile</h3>
            <p class="mt-2 text-sm text-gray-600">
              Guide d'évaluation de la conduite automobile.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="#"
                text="Guide CMA - 10e édition"
              />
            </div>
          </div>

          <!-- Aide médicale à mourir -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Aide médicale à mourir</h3>
            <p class="mt-2 text-sm text-gray-600">
              Documentation sur l'AMM.
            </p>
            <div class="mt-4 space-y-2">
              <ExternalLink 
                href="https://www.msss.gouv.qc.ca/professionnels/soins-et-services/demandes-anticipees-aide-medicale-mourir/demarche-pour-formuler-demande-anticipee-aide-medicale-mourir/"
                text="Démarche pour demande anticipée"
              />
              <ExternalLink 
                href="https://www.msss.gouv.qc.ca/professionnels/documents/demandes-anticipees-aide-medicale-mourir/exemple-formulaire_AH-896.pdf"
                text="Formulaire DAAMM (exemple)"
              />
              <ExternalLink 
                href="https://publications.msss.gouv.qc.ca/msss/fichiers/2024/24-828-04W.pdf"
                text="Guide pour professionnels"
              />
              <ExternalLink 
                href="https://publications.msss.gouv.qc.ca/msss/fichiers/2024/24-828-06W.pdf"
                text="Guide pour patients"
              />
            </div>
          </div>

          <!-- Trousse cancer -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-gray-900">Trousse cancer</h3>
            <p class="mt-2 text-sm text-gray-600">
              Outils pour le suivi post-cancer.
            </p>
            <div class="mt-4">
              <ExternalLink 
                href="#"
                text="Trousse de transition post-cancer"
              />
              <p class="mt-2 text-sm italic text-gray-600">
                Document présenté par Aline Landry le 29 novembre 2024
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