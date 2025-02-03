<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Communication</h1>
      <p class="mt-1 text-sm text-gray-500">
        Procédures de communication entre professionnels
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="space-y-8">
          <!-- Pharmaciens -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Pharmaciens - Communication aux médecins</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <ExternalLink 
                href="https://docs.google.com/document/d/1RADzwzq5iTRRqvsx8FbAcfx7MFpGmhAlHbaFUt1URw0/edit?usp=sharing"
                text="Consulter la procédure"
              />
            </div>
          </section>

          <!-- Infirmières -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Infirmières - Communication aux médecins du GMF</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <ExternalLink 
                href="https://docs.google.com/document/d/1e8rFm1F4WACqSedi3ZPB-YzHFi3m9co4daMX0vDSAxo/edit?tab=t.0#heading=h.htunplwhvstn"
                text="Consulter la procédure"
              />
            </div>
          </section>

          <!-- Communication interne -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Communication interne entre employés CMPS</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Outil principal :</span> Gmail
              </p>
              <p class="mt-2 text-sm text-gray-600">
                Chaque employé reçoit une adresse professionnelle au format : prenom.nom@cliniquemedicalesumarah.ca
              </p>
              <div class="mt-4">
                <p class="text-sm font-medium text-gray-900">Formation obligatoire :</p>
                <div class="mt-2">
                  <ExternalLink 
                    href="https://support.google.com/a/users/answer/9389764?visit_id=638110546647091284-1286312914&hl=fr&rd=1"
                    text="Formation Gmail"
                  />
                </div>
              </div>
            </div>
          </section>

          <!-- Communication entre médecins -->
          <section>
            <h2 class="text-lg font-medium text-gray-900">Communication entre médecins CMPS</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-600">
                Transmission des valeurs critiques par le laboratoire du CISSS des Îles
              </p>
              <div class="mt-4">
                <p class="text-sm text-gray-600">
                  <span class="font-medium">Contact :</span><br>
                  CMPS : 418-969-9111, poste 1 ou 7<br>
                  CSI : Lundi au jeudi, 8h00 - 16h00
                </p>
              </div>
              <div class="mt-4">
                <p class="text-sm font-medium text-gray-900">Procédure :</p>
                <ol class="list-decimal pl-5 text-sm text-gray-600">
                  <li>La secrétaire reçoit l'appel du laboratoire et inscrit les infos dans l'horaire Myle du médecin</li>
                  <li>Si le médecin est absent, la transmission est faite au médecin du SRV</li>
                </ol>
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