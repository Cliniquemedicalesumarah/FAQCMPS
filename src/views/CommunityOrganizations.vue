<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg max-w-5xl mx-auto">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Organismes communautaires</h1>
      <p class="mt-1 text-sm text-gray-500">
        Ressources communautaires disponibles pour les patients.
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- SEMO -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">SEMO</h2>
            <p class="text-sm text-gray-600">
              Le SEMO Gaspésie-Les Îles vise à favoriser l'accès, le maintien et l'intégration des personnes handicapées sur le marché du travail.
            </p>
            <div class="mt-4">
              <h3 class="text-base font-medium text-gray-900">Contact</h3>
              <p class="text-sm text-gray-600">
                Conseillère en main-d'œuvre<br>
                Téléphone: <a href="tel:367-994-5187" class="text-blue-600 hover:text-blue-800">367-994-5187</a><br>
                Email: <a href="mailto:cmo.idlm@semogim.org" class="text-blue-600 hover:text-blue-800">cmo.idlm@semogim.org</a>
              </p>
            </div>
            <div class="mt-2">
              <ExternalLink 
                href="https://www.semogim.org/fr"
                text="Site web SEMO"
              />
            </div>
          </div>

          <!-- Groupe d'entraide-allaitement -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Groupe d'entraide-allaitement Sein-Pathique</h2>
            <p class="text-sm text-gray-600">
              97, chemin Principal, local 5<br>
              Les Îles-de-la-Madeleine (Québec) G4T 1C3
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://www.seinpathique.com/"
                text="Site web Sein-Pathique"
              />
            </div>
          </div>

          <!-- Maison des jeunes -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Maison des jeunes des Îles</h2>
            <p class="text-sm text-gray-600">
              704, chemin du Grand-Ruisseau<br>
              Les Îles-de-la-Madeleine (Québec) G4T 2L6
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://sante.gouv.qc.ca/repertoire-ressources/ressource/?nofiche=32209"
                text="Plus d'informations"
              />
            </div>
          </div>

          <!-- Centre d'action bénévole -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Centre d'action bénévole des Îles</h2>
            <p class="text-sm text-gray-600">
              330, chemin Principal, bureau 207<br>
              Les Îles-de-la-Madeleine (Québec) G4T 1C9
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://sante.gouv.qc.ca/repertoire-ressources/ressource/?nofiche=28995"
                text="Plus d'informations"
              />
            </div>
          </div>

          <!-- Cuisines collectives -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Cuisines collectives Îles-de-la-Madeleine</h2>
            <p class="text-sm text-gray-600">
              330, chemin Principal, bureau 202<br>
              Les Îles-de-la-Madeleine (Québec) G4T 1C9
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://sante.gouv.qc.ca/repertoire-ressources/ressource/?nofiche=89816"
                text="Plus d'informations"
              />
            </div>
          </div>

          <!-- Centre communautaire L'Éclaircie -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Centre communautaire L'Éclaircie</h2>
            <p class="text-sm text-gray-600">
              330, chemin Principal, bureau 401<br>
              Les Îles-de-la-Madeleine (Québec) G4T 1C9
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://www.eclaircie.ca/"
                text="Site web L'Éclaircie"
              />
            </div>
          </div>

          <!-- L'Entraide communautaire -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">L'Entraide communautaire des Îles Inc.</h2>
            <p class="text-sm text-gray-600">
              500, chemin Principal, bureau 1<br>
              Les Îles-de-la-Madeleine (Québec) G4T 1E5
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://sante.gouv.qc.ca/repertoire-ressources/ressource/?nofiche=49075"
                text="Plus d'informations"
              />
            </div>
          </div>

          <!-- Alcooliques Anonymes -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Alcooliques Anonymes</h2>
            <p class="text-sm text-gray-600">
              390, chemin de l'Église-Saint-Luke<br>
              Les Îles-de-la-Madeleine (Québec) G4T 1M4
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://sante.gouv.qc.ca/repertoire-ressources/ressource/?nofiche=42265"
                text="Plus d'informations"
              />
            </div>
          </div>

          <!-- Hommes et Gars -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Hommes et Gars</h2>
            <p class="text-sm text-gray-600">
              Service d'aide aux conjoints ayant des comportements violents et aux hommes en difficulté<br>
              735, chemin Principal<br>
              Les Îles-de-la-Madeleine (Québec) G4T 1G8
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://www.hommesetgars.com/"
                text="Site web Hommes et Gars"
              />
            </div>
          </div>

          <!-- CALACS -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">CALACS L'Espoir des Îles</h2>
            <p class="text-sm text-gray-600">
              Centre d'aide et de lutte contre les agressions à caractère sexuel<br>
              735, chemin Principal, bureau 205<br>
              Les Îles-de-la-Madeleine (Québec) G4T 1G8
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://sante.gouv.qc.ca/repertoire-ressources/ressource/?nofiche=88816"
                text="Plus d'informations"
              />
            </div>
          </div>

          <!-- Regroupement des femmes -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Regroupement des femmes La Sentin'Elle Inc.</h2>
            <p class="text-sm text-gray-600">
              216, chemin de Gros-Cap (Cap-aux-Meules)<br>
              Les Îles-de-la-Madeleine (Québec) G4T 1K8
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://www.cdflasentinelle.com/"
                text="Site web La Sentin'Elle"
              />
            </div>
          </div>

          <!-- Association des personnes handicapées -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Association des personnes handicapées des Îles</h2>
            <p class="text-sm text-gray-600">
              1021, chemin du Grand-Ruisseau<br>
              Les Îles-de-la-Madeleine (Québec) G4T 2M1
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://sante.gouv.qc.ca/repertoire-ressources/ressource/?nofiche=48773"
                text="Plus d'informations"
              />
            </div>
          </div>

          <!-- La Maison à Damas -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">La Maison à Damas Inc.</h2>
            <p class="text-sm text-gray-600">
              1202, chemin de La Vernière<br>
              Les Îles-de-la-Madeleine (Québec) G4T 3E6
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://sante.gouv.qc.ca/repertoire-ressources/ressource/?nofiche=43297"
                text="Plus d'informations"
              />
            </div>
          </div>

          <!-- Maison de la famille -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Maison de la famille L'Embellie</h2>
            <p class="text-sm text-gray-600">
              239, chemin Chiasson<br>
              Les Îles-de-la-Madeleine (Québec) G4T 3K7
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://www.ocfembellie.org/"
                text="Site web L'Embellie"
              />
            </div>
          </div>

          <!-- Maison des jeunes Havre-Aubert -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Maison des jeunes des Îles du Havre-Aubert</h2>
            <p class="text-sm text-gray-600">
              419, chemin du Bassin<br>
              Les Îles-de-la-Madeleine (Québec) G4T 0B9
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://www.havnir.org/"
                text="Site web Havnir"
              />
            </div>
          </div>

          <!-- CAMI -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">CAMI</h2>
            <p class="text-sm text-gray-600">
              Council for Anglophone Magdalen Islanders<br>
              787, chemin Principal<br>
              Grosse-Île (Québec) G4T 6B5
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://sante.gouv.qc.ca/repertoire-ressources/ressource/?nofiche=1039264"
                text="Plus d'informations"
              />
            </div>
          </div>

          <!-- Maison des jeunes de l'Est -->
          <div class="bg-gray-50 p-4 rounded-lg space-y-4">
            <h2 class="text-lg font-medium text-gray-900">Maison des jeunes de l'Est des Îles</h2>
            <p class="text-sm text-gray-600">
              614, route 199 (Grande-Entrée)<br>
              Les Îles-de-la-Madeleine (Québec) G4T 7A8
            </p>
            <div class="mt-2">
              <ExternalLink 
                href="https://sante.gouv.qc.ca/repertoire-ressources/ressource/?nofiche=86753"
                text="Plus d'informations"
              />
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