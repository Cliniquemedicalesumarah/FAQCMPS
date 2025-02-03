<template>
  <div class="prose prose-sm text-gray-600">
    <h3 class="text-base font-medium text-gray-900">Gestion des documents, formulaires</h3>
    
    <div class="space-y-8">
      <!-- Récupération des documents -->
      <section>
        <h4 class="text-base font-medium text-gray-900">Récupération des documents à la clinique</h4>
        <div class="bg-gray-50 p-4 rounded-lg space-y-4">
          <p>Les médecins impriment souvent des formulaires de prescriptions de laboratoires, des prescriptions, des formulaires d'assurances que l'on demande aux patients de récupérer à l'accueil.</p>
          
          <div class="space-y-2">
            <p class="text-green-600">✅ Merci de classer chaque document dans la fiche du médecin traitant du patient.</p>
            <p class="text-red-600">❌ IL NE DOIT Y AVOIR AUCUN DOCUMENT CONSERVÉ AU 2ÈME ÉTAGE POUR ÉVITER LA CONFUSION.</p>
          </div>

          <div>
            <p class="font-medium">📅 Chaque 1er du mois :</p>
            <ul class="list-disc pl-5">
              <li>La préposée à l'accueil du 1er étage fait le tour des fiches et remet les documents à Ariane Chiasson.</li>
              <li>Tous les documents datés de plus de 30 jours sont retirés de la fiche.</li>
              <li>Avec l'aide de la préposée à l'accueil du 2ème étage, elle prépare une enveloppe à poster et joint le document suivant (en prenant soin de changer la date).</li>
              <li>Les lettres sont timbrées et remises à Jean-François Lefebvre, qui passe chaque midi pour l'envoi au bureau de poste.</li>
            </ul>
          </div>

          <p class="font-medium">📌 Merci de remplir le document "Gestion des documents à l'accueil" afin de suivre qui fait quoi et quand.</p>
        </div>
      </section>

      <!-- Gestion des documents déposés -->
      <section>
        <h4 class="text-base font-medium text-gray-900">Gestion des documents déposés par les patients</h4>
        <div class="bg-gray-50 p-4 rounded-lg space-y-4">
          <div>
            <p class="font-medium">Q : Comment les patients peuvent-ils envoyer des documents à la clinique ?</p>
            <p>R : Les patients peuvent désormais déposer leurs documents directement via notre site web, ce qui permet de centraliser la réception et d'améliorer l'efficacité administrative.</p>
          </div>

          <div>
            <p class="font-medium">💻 Accédez au site web :</p>
            <p>Les patients doivent se rendre à www.cliniquemedicalesumarah.ca</p>
          </div>

          <div>
            <p class="font-medium">📄 Formulaire de dépôt de documents :</p>
            <p>Sur la page d'accueil, ils peuvent remplir le formulaire en indiquant :</p>
            <ul class="list-disc pl-5">
              <li>Nom complet</li>
              <li>Date de naissance</li>
              <li>Numéro de téléphone</li>
              <li>Fichier pertinent (max. 5 Mo, formats acceptés : jpg, jpeg, png, pdf, doc, docx)</li>
            </ul>
          </div>

          <div>
            <p class="font-medium">📌 Pour le personnel administratif :</p>
            <ul class="list-disc pl-5">
              <li>✅ Téléchargement et vérification : Assurez-vous que les fichiers respectent les critères de taille et de format.</li>
              <li>✅ Classement : Enregistrez chaque document dans le dossier électronique du patient dans Myle.</li>
              <li>✅ Transmission au professionnel de santé : Informez le médecin traitant de la réception de nouveaux documents.</li>
            </ul>
          </div>

          <div>
            <p class="font-medium">Q : Pourquoi cette méthode plutôt que le courriel ?</p>
            <ul class="list-disc pl-5">
              <li>Efficacité : Centralisation et réduction des risques de perte.</li>
              <li>Sécurité : Meilleure confidentialité et protection des données.</li>
              <li>Accès rapide : Disponibilité immédiate pour le personnel administratif.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Formulaires assurances -->
      <section>
        <h4 class="text-base font-medium text-gray-900">Formulaires assurances</h4>
        <div class="bg-gray-50 p-4 rounded-lg space-y-6">
          <div>
            <p class="font-medium">Procédure si demande du patient de compléter un formulaire (Admin)</p>
            
            <div class="mt-4 space-y-4">
              <div>
                <p class="font-medium">📝 Cas 1 : Formulaire d'un patient ayant été vu à l'urgence ou en hospitalisation au CISSS</p>
                <ul class="list-disc pl-5">
                  <li>Le patient doit déposer son formulaire au secrétariat des médecins du CISSS des Îles.</li>
                  <li class="text-red-600">Il NE DOIT PAS se présenter à la CMPS avec son formulaire.</li>
                  <li>La secrétaire du CISSS numérise le formulaire et envoie une tâche au médecin.</li>
                  <li>Si le patient se présente à l'accueil de la CMPS, la préposée l'oriente vers le secrétariat du CISSS.</li>
                </ul>
              </div>

              <div>
                <p class="font-medium">📝 Cas 2 : Formulaire d'un patient ayant été vu à CMPS dans la dernière semaine</p>
                <p>Avant d'accepter un formulaire, la préposée valide que :</p>
                <ol class="list-decimal pl-5">
                  <li>Le patient a eu un rendez-vous avec son médecin à CMPS ou au SRV dans la dernière semaine.</li>
                  <li>Le formulaire est en lien avec la raison de consultation récente.</li>
                  <li>Le patient est informé que le médecin a un délai de 30 jours pour le remplir.</li>
                  <li>Des frais de 40 $ seront facturés à la collecte du formulaire.</li>
                </ol>
              </div>

              <div>
                <p class="font-medium">📝 Cas 3 : Formulaire d'un patient n'ayant pas été vu pour un problème lié au formulaire</p>
                <ul class="list-disc pl-5">
                  <li>Le patient doit contacter la secrétaire médicale et prendre un rendez-vous.</li>
                  <li>Le médecin remplit le formulaire durant le rendez-vous.</li>
                  <li>Aucun formulaire n'est laissé à la clinique.</li>
                  <li>Des frais de 40 $ seront facturés à la collecte du formulaire.</li>
                </ul>
              </div>
            </div>

            <p class="mt-4 text-red-600">⚠️ Un médecin ne peut pas remplir un formulaire pour une consultation qu'il n'a pas réalisée.</p>
          </div>
        </div>
      </section>

      <!-- Facturation -->
      <section>
        <h4 class="text-base font-medium text-gray-900">Facturation d'un formulaire (Médecin)</h4>
        <div class="bg-gray-50 p-4 rounded-lg space-y-4">
          <div>
            <p class="font-medium">💰 Pour facturer un formulaire :</p>
            <ol class="list-decimal pl-5">
              <li>Le formulaire doit être lié à une note patient ou numérisé dans l'onglet Documents.</li>
              <li>Créer une note d'évolution ou ajouter la facture dans une note existante.</li>
              <li>Cliquer sur "Nouvelle facture" et compléter le formulaire de facturation.</li>
              <li>Une fois la facture complétée, l'imprimer via la fenêtre pop-up.</li>
            </ol>
          </div>

          <div>
            <p class="font-medium">📌 Prix et facturation :</p>
            <ul class="list-disc pl-5">
              <li>Prix fixé : 40 $ par formulaire</li>
              <li>Si un médecin facture plus de 40 $, il doit informer clairement le patient à l'avance</li>
            </ul>
          </div>

          <div>
            <p class="font-medium">📢 Mention obligatoire sur la facture (conformité RAMQ) :</p>
            <p class="text-sm italic">
              "Le patient qui estime que les sommes qui lui sont réclamées visent des services assurés au sens de la Loi sur l'assurance maladie ou des frais engagés aux fins de la dispensation de ceux-ci peut, par écrit dans les cinq ans suivant la date du paiement, en réclamer le remboursement à la Régie de l'assurance maladie du Québec, qui lui remboursera alors le montant, lorsqu'elle est d'avis que sa facturation n'était pas permise, et récupérera ce montant du professionnel ou du tiers en cause."
            </p>
          </div>

          <div>
            <p class="font-medium">📊 Gestion administrative :</p>
            <ul class="list-disc pl-5">
              <li>Rapport détaillé des transactions Square disponible sur demande</li>
              <li>Paiements effectués via Square</li>
              <li>Montants déduits de la facture mensuelle de location</li>
              <li>Envoi postal géré par Jean-François Lefebvre</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../../components/ExternalLink.vue'
</script>