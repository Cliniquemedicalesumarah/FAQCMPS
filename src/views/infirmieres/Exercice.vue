<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Champs d'exercice et outils</h1>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="prose prose-sm text-gray-600">
          <!-- Alzheimer -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Usager atteint de la maladie d'Alzheimer et troubles neurocognitifs</h2>
            <div class="space-y-2">
              <ExternalLink 
                href="https://www.inesss.qc.ca/fileadmin/doc/INESSS/Rapports/Geriatrie/INESSS_DocumentSynthese_Reperage_diagnostic_MA_TNC.pdf"
                text="Repérage et processus menant au diagnostic (INESSS)"
              />
              <ExternalLink 
                href="https://publications.msss.gouv.qc.ca/msss/fichiers/2014/14-829-05W.pdf"
                text="Processus clinique - Volet diagnostic (MSSS)"
              />
              <ExternalLink 
                href="https://publications.msss.gouv.qc.ca/msss/fichiers/2014/14-829-06W.pdf"
                text="Processus clinique - Volet suivi (MSSS)"
              />
              <ExternalLink 
                href="https://publications.msss.gouv.qc.ca/msss/fichiers/2014/14-829-07W.pdf"
                text="Processus clinique - Références"
              />
              <ExternalLink 
                href="https://www.inesss.qc.ca/fileadmin/doc/INESSS/Rapports/Geriatrie/INESSS_OutilAidememoire_Reperage_diagnostic_MA_TNC.pdf"
                text="Aide mémoire Outils de repérage"
              />
            </div>
          </section>

          <!-- Anticoagulothérapie -->
          <section class="mt-6">
            <h2 class="text-lg font-medium text-gray-900">Usager sous anticoagulothérapie</h2>
            <div class="space-y-2">
              <ExternalLink 
                href="https://www.mdcalc.com/calc/3986/cha2ds2-vasc-score-atrial-fibrillation-stroke-risk"
                text="Score CHA2DS2-VASc"
              />
              <ExternalLink 
                href="https://www.mdcalc.com/calc/3988/has-bled-score-major-bleeding-risk"
                text="Score HAS-BLED"
              />
            </div>
          </section>

          <!-- Diabète -->
          <section class="mt-6">
            <h2 class="text-lg font-medium text-gray-900">Usager diabétique</h2>
            <div class="space-y-2">
              <ExternalLink 
                href="https://coeurpoumons.ca/diabete/"
                text="Coeur Poumons Métabolisme - Diabète"
              />
              <ExternalLink 
                href="https://www.diabete.qc.ca/fr/comprendre-le-diabete/ressources/formations-en-ligne/"
                text="Diabète Québec : Formations en ligne pour les professionnels de la santé"
              />
              <ExternalLink 
                href="https://www.diabete.qc.ca/fr/comprendre-le-diabete/ressources/documentation/"
                text="Diabète Québec - Enseignement au patient"
              />
              <ExternalLink 
                href="https://guidelines.diabetes.ca/docs/patient-resources/hypoglycemia-low-blood-sugar-in-adults.pdf"
                text="Brochure - Hypoglycémie"
              />
              <ExternalLink 
                href="https://www.diabete.qc.ca/wp-content/uploads/2020/10/Guide-alimentation.pdf"
                text="Brochure - Alimentation"
              />
              <ExternalLink 
                href="https://www.inesss.qc.ca/fileadmin/doc/INESSS/Ordonnances_collectives/Diabete/INESSS_Protocole_medical_Antidiabetiques.pdf"
                text="INESSS Protocole médical national – Antidiabétiques"
              />
              <ExternalLink 
                href="https://guidelines.diabetes.ca/cpg"
                text="Guide de référence sur les Lignes directrice Asso. Canadienne du Diabète"
              />
            </div>
          </section>

          <!-- Dyslipidémie -->
          <section class="mt-6">
            <h2 class="text-lg font-medium text-gray-900">Usager atteint de dyslipidémie</h2>
            <div class="space-y-2">
              <ExternalLink 
                href="https://www.cvdcalculator.com/"
                text="Calculatrice des bénéfices et des risques absolus de maladies cardiovasculaires"
              />
              <ExternalLink 
                href="https://coeurpoumons.ca/dyslipidemie/"
                text="Coeur Poumons Métabolisme - Dyslipidémie"
              />
              <ExternalLink 
                href="https://www.inesss.qc.ca/publications/repertoire-des-publications/publication/dyslipidemie.html"
                text="INESS dyslipidémie"
              />
              <ExternalLink 
                href="https://www.cisssdesiles.com/soins-et-services/ordonnances-collectives/"
                text="OIA CISSS des Îles: hypolipémiants"
              />
            </div>
          </section>

          <!-- HTA -->
          <section class="mt-6">
            <h2 class="text-lg font-medium text-gray-900">Usager atteint d'hypertension artérielle</h2>
            <div class="space-y-2">
              <ExternalLink 
                href="https://coeurpoumons.ca/hta/"
                text="Coeur Poumons Métabolisme - HTA"
              />
              <ExternalLink 
                href="https://www.inesss.qc.ca/fileadmin/doc/INESSS/Ordonnances_collectives/Hypertension/INESSS_Protocole_medical_HTA.pdf"
                text="INESSS Protocole médical national – Médication antihypertensive"
              />
              <ExternalLink 
                href="https://hypertension.ca/wp-content/uploads/2020/10/2020-22-HT-Guidelines-E-WEB_v3.pdf"
                text="2020-22 HT Guidelines"
              />
            </div>
          </section>

          <!-- MPOC -->
          <section class="mt-6">
            <h2 class="text-lg font-medium text-gray-900">Usager atteint de MPOC</h2>
            <div class="space-y-2">
              <ExternalLink 
                href="https://pnmw.ca/wp-content/uploads/2019/04/algorithme_abandon_tabagique.pdf"
                text="Algorithme abandon tabagique"
              />
              <ExternalLink 
                href="https://coeurpoumons.ca/mpoc/"
                text="Coeur Poumons Métabolisme - MPOC"
              />
              <ExternalLink 
                href="https://www.oiiq.org/documents/20147/1516102/mpoc-mise-a-jour-traitement-2017.pdf"
                text="Mise à jour du traitement de la MPOC (congrès OIIQ 2017)"
              />
            </div>
          </section>

          <!-- TDAH -->
          <section class="mt-6">
            <h2 class="text-lg font-medium text-gray-900">Usager atteint de TDA/H</h2>
            <div class="space-y-2">
              <ExternalLink 
                href="https://www.caddra.ca/fr/etoolkit-forms/"
                text="CADDRA - Formulaires de la eTrousse TDAH"
              />
              <ExternalLink 
                href="https://www.caddra.ca/wp-content/uploads/CADDRA-Guidelines-2022-French.pdf"
                text="Guide CADDRA pour les traitements pharmacologiques du TDAH au Canada - 2022"
              />
              <ExternalLink 
                href="https://www.caddra.ca/fr/public-information/adults/"
                text="L'évaluation des adultes"
              />
              <ExternalLink 
                href="https://www.caddra.ca/fr/public-information/children/"
                text="L'évaluation des enfants"
              />
              <ExternalLink 
                href="https://www.caddra.ca/fr/guidelines/"
                text="Lignes directrices canadiennes sur le TDAH"
              />
            </div>
          </section>

          <!-- Anxio-dépressif -->
          <section class="mt-6">
            <h2 class="text-lg font-medium text-gray-900">Usager souffrant d'un trouble anxio-dépressif</h2>
            <div class="space-y-2">
              <ExternalLink 
                href="https://www.quebec.ca/sante/conseils-et-prevention/sante-mentale/programme-quebecois-pour-les-troubles-mentaux/fiches-d-auto-soins"
                text="PQPTM Fiches d'éducation aux patients"
              />
              <ExternalLink 
                href="https://www.quebec.ca/sante/conseils-et-prevention/sante-mentale/programme-quebecois-pour-les-troubles-mentaux/guides"
                text="PQPTM Ensemble des guides publiés par le MSSS"
              />
              <ExternalLink 
                href="https://www.mdcalc.com/calc/1725/gad-7-general-anxiety-disorder-7"
                text="GAD-7"
              />
              <ExternalLink 
                href="https://www.mdcalc.com/calc/1728/phq-9-patient-health-questionnaire-9"
                text="QSP-9"
              />
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