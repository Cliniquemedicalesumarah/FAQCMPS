<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Services en ligne RAMQ</h1>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="prose prose-sm text-gray-600">
          <div class="space-y-4">
            <ExternalLink 
              href="https://www.ramq.gouv.qc.ca/fr/professionnels/infirmieres/medicaments/medicaments-patient-exception/Pages/sel-formulaires.aspx"
              text="Accéder aux services en ligne RAMQ"
            />
            
            <div>
              <p>Ce service en ligne vous sert à saisir une demande d'autorisation de paiement dans le cadre de :</p>
              <div class="ml-4 space-y-2 mt-2">
                <ExternalLink 
                  href="https://www.ramq.gouv.qc.ca/fr/professionnels/infirmieres/medicaments/medicaments-patient-exception/Pages/medicaments-exception.aspx"
                  text="La mesure des médicaments d'exception"
                />
                <ExternalLink 
                  href="https://www.ramq.gouv.qc.ca/fr/professionnels/infirmieres/medicaments/medicaments-patient-exception/Pages/patient-exception.aspx"
                  text="La mesure du patient d'exception"
                />
              </div>
            </div>

            <div class="mt-4">
              <h3 class="text-base font-medium text-gray-900">Codes utilisateurs</h3>
              <ExternalLink 
                href="https://docs.google.com/document/d/1eJFThyvkl4lLbHEvQrJF_YGb1Fm-cWavGJi41eRATLU/edit?tab=t.0"
                text="Codes utilisateurs des infirmières et pharmacienne de la clinique CMPS"
              />
              <p class="mt-2">Si vous avez perdu votre mot de passe:</p>
              <p>Appeler pour réactiver le mot de passe (1 888 330-3023) et leur code CE en main.</p>
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