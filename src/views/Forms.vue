<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Formulaires</h1>
      <p class="mt-1 text-sm text-gray-500">
        Répertoire des formulaires médicaux et administratifs
      </p>
      <div class="mt-4 bg-blue-50 p-4 rounded-lg">
        <p class="text-sm text-blue-700">
          Pour trouver rapidement un formulaire dans Myle, assurez-vous que tous les mots-clés pour la recherche des PDF dynamiques sont activés dans l'onglet Configuration. Fermez et rouvrez la session après activation.
        </p>
      </div>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Première colonne -->
          <div class="space-y-6">
            <!-- Laboratoires -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Laboratoires</h2>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">
                  <span class="font-medium">Formulaire - Requête laboratoire - CISSS des Îles</span>
                </p>
                <p class="mt-2 text-sm text-gray-600">
                  À remettre au patient ou faxer selon l'urgence.
                </p>
              </div>
            </section>

            <!-- Imagerie médicale -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Imagerie médicale</h2>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">
                  <span class="font-medium">Requête - Imagerie médicale - radiologie - CISSS des Îles</span>
                </p>
                <p class="mt-2 text-sm text-gray-600">
                  Fax : 418-986-7002
                </p>
              </div>
            </section>

            <!-- Endoscopie -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Colonoscopie & OGD</h2>
              <div class="bg-gray-50 p-4 rounded-lg space-y-4">
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Colonoscopie :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Requête - Demande de coloscopie longue - DT9241 - SSSQ_FR<br>
                    Fax : 418-986-1559
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">OGD :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Demande consultation endoscopie digestive - CISSS des Îles
                  </p>
                </div>
              </div>
            </section>

            <!-- Transfusion et phlébotomie -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Transfusion & Phlébotomie</h2>
              <div class="bg-gray-50 p-4 rounded-lg space-y-4">
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Transfusion sanguine :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Ordonnance (OMISP) - Produits sanguins - CISSS des Îles
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Injection Venofer :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Ordonnance - Administration extrahospitalière de Fer Parentéral Saccharose (Venofer) - CHUS
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Saignée/Phlébotomie :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Ordonnance (OMISP) - Phlébotomie thérapeutique - Examens et surveillance - CISSS des Îles
                  </p>
                </div>
              </div>
            </section>

            <!-- Tests génétiques -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Tests génétiques</h2>
              <div class="bg-gray-50 p-4 rounded-lg space-y-4">
                <div>
                  <p class="text-sm text-gray-600">
                    Requête de tests génétiques - Liste des gènes rapportables
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">
                    2023-09-20 Communiqué lancement panel oncogénétique
                  </p>
                </div>
              </div>
            </section>

            <!-- Professionnels de la santé -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Professionnels de la santé</h2>
              <div class="bg-gray-50 p-4 rounded-lg space-y-4">
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Physiothérapie :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Consultation en Physiothérapie - CISSS Des Îles (ne pas utiliser EXTERNE)<br>
                    Fax : 418-986-3770
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Ergothérapie :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Réquisition médicale - Ergothérapie - CSSS_Des_Îles
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Orthophonie :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Requête orthophonie - CISSS des Îles
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Audiologie :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Requête services professionnels - Audiologie - DT9055 - MSSS
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Nutrition :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Consultation en nutrition au CLSC - CISSS des Îles<br>
                    Téléphone : 418-986-4911
                  </p>
                </div>
              </div>
            </section>
          </div>

          <!-- Deuxième colonne -->
          <div class="space-y-6">
            <!-- Examens spécialisés -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Examens spécialisés</h2>
              <div class="bg-gray-50 p-4 rounded-lg space-y-4">
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Examens cardiaques :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Requête ECG/MAPA/HOLTER - CISSS des Îles<br>
                    Formulaire - Épreuve Effort (Tapis roulant) - CSSS des Îles
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Neurophysiologie :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Neurophysiologie clinique - AH-230 DT9096 - MSSS
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Apnée du sommeil :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Demande inhalothérapie - CISSS des Îles<br>
                    Formulaire - Ordonnance inhalo Clinique sommeil Lessard - CISSS des Îles<br>
                    Formulaire - Consultation Clinique APNÉE du Sommeil - IUCPQ<br>
                    Fax : 418-656-4871
                  </p>
                  <p class="mt-2 text-sm italic text-gray-600">
                    Remettre directement au patient pour qu'il effectue lui-même les démarches.
                  </p>
                </div>
              </div>
            </section>

            <!-- Vaccination -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Vaccination</h2>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">
                  Envoi d'une demande de consultation avec la vaccination souhaitée au CLSC ou d'une prescription à la pharmacie si le vaccin n'est pas gratuit.
                </p>
                <p class="mt-2 text-sm text-gray-600">
                  Téléphone : 418-986-4911, poste 4233
                </p>
                <p class="mt-2 text-sm text-gray-600">
                  <span class="font-medium">Note :</span> Le vaccin contre le zona est offert gratuitement aux 80 ans et + et aux personnes immunodéprimées de 18 ans et plus.
                </p>
              </div>
            </section>

            <!-- Kinésiologue -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Kinésiologue-GMF</h2>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">
                  Formulaire à remplir par le patient
                </p>
                <p class="mt-2 text-sm text-gray-600">
                  Le patient doit contacter la secrétaire de son médecin pour un rendez-vous les lundis ou mardis entre 8h30 et 13h.
                </p>
              </div>
            </section>

            <!-- Psychologie & Santé mentale -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Psychologie & Santé mentale</h2>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">
                  Formulaire - Demande d'accès - Programme en santé mentale et dépendance - PSYA01 - CISSS des Îles
                </p>
                <p class="mt-2 text-sm text-gray-600">
                  Fax : 418-986-4911
                </p>
              </div>
            </section>

            <!-- Soins aigus & Hospitalisation -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Soins aigus & Hospitalisation</h2>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">
                  Formulaire - Ordonnance pharmaceutique - IL00008 - CISSS des Îles
                </p>
                <p class="mt-2 text-sm text-gray-600">
                  Fax Unité d'un jour : 418-986-1559<br>
                  Fax Urgence : 418-986-7004
                </p>
              </div>
            </section>

            <!-- Médecine nucléaire & Imagerie avancée -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Médecine nucléaire & Imagerie avancée</h2>
              <div class="bg-gray-50 p-4 rounded-lg space-y-4">
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Médecine nucléaire :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Consultation Médecine Nucléaire - DT4112 - IUCPQ - CISSS des Îles<br>
                    Fax : 418-656-4857
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">TEP :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Examens en Tomographie par émission de positrons (TEP) - DT6943 - CHUQ<br>
                    Fax : 418-656-4728
                  </p>
                </div>
              </div>
            </section>

            <!-- Transport & Accompagnement -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Transport & Accompagnement médical</h2>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">
                  Formulaire - Demande Accompagnement Critères - Transport - CISSS des Îles
                </p>
                <p class="mt-2 text-sm text-gray-600">
                  Fax : 418-986-1831
                </p>
                <p class="mt-2 text-sm text-gray-600">
                  <span class="font-medium">Note :</span> Chaque professionnel doit créer son propre compte EVAQ après le 15 mai 2024.<br>
                  Responsable EVAQ : Johanne Lapierre – Disponible sur Myle
                </p>
              </div>
            </section>

            <!-- Niveaux de soins & Palliatifs -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Niveaux de soins & Palliatifs</h2>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">
                  Formulaire - Niveaux De Soins Et Réanimation Cardiorespiratoire - DT9261 - SSSQ<br>
                  Formulaire - Ordonnance (OMISP) - Gestion des symptômes en fin de vie - CISSS des Îles
                </p>
                <p class="mt-2 text-sm text-gray-600">
                  Fax pharmacie du patient ET SAD : 418-986-2546
                </p>
              </div>
            </section>

            <!-- Formulaires administratifs -->
            <section>
              <h2 class="text-lg font-medium text-gray-900">Formulaires administratifs</h2>
              <div class="bg-gray-50 p-4 rounded-lg space-y-4">
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Formulaires généraux :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - Consentement au partage d'informations - DT9000 - SSSQ<br>
                    Formulaire - Attestation de déficience - TP-752.0.14 - Revenu Québec
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">
                    <span class="font-medium">Arrêt de travail et Assurances :</span>
                  </p>
                  <p class="text-sm text-gray-600">
                    Formulaire - CSI Assurance salaire - Commission scolaire des Îles<br>
                    Formulaire - Déclaration initiale médecin - Assurances Desjardins
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../components/ExternalLink.vue'
</script>