<template>
  <div class="space-y-4">
    <div>
      <h4 class="text-base font-medium text-gray-900">Patient vu à l'urgence ou à l'hospitalisation du CISSS</h4>
      <div class="mt-2 bg-gray-50 p-4 rounded-lg">
        <ul class="list-disc pl-5">
          <li>Le patient doit déposer son formulaire au secrétariat des médecins du CISSS des îles</li>
          <li class="font-bold text-red-600">Le Patient NE DOIT PAS SE PRÉSENTER À CMPS AVEC SON FORMULAIRE</li>
          <li>La secrétaire numérise le formulaire et envoie une tâche au médecin</li>
          <li>La préposée à l'accueil CMPS redirige le patient vers le secrétariat du CISSS si nécessaire</li>
        </ul>
      </div>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Patient vu à CMPS dans la dernière semaine</h4>
      <div class="mt-2 bg-gray-50 p-4 rounded-lg">
        <p class="font-medium">La préposée à l'accueil doit valider :</p>
        <ol class="list-decimal pl-5">
          <li>RV avec médecin à CMPS ou SRV dans la dernière semaine</li>
          <li>Lien entre le formulaire et la raison de consultation</li>
          <li>Informer du délai de 30 jours pour le remplissage</li>
          <li>Mentionner les frais de 40$ à la collecte</li>
        </ol>
      </div>
    </div>

    <div>
      <h4 class="text-base font-medium text-gray-900">Patient sans consultation récente</h4>
      <div class="mt-2 bg-gray-50 p-4 rounded-lg">
        <ul class="list-disc pl-5">
          <li>Contacter la secrétaire médicale pour prendre RV</li>
          <li>Le formulaire sera rempli lors du RV</li>
          <li>Aucun formulaire n'est laissé à la clinique</li>
          <li>Frais de 40$ à la collecte</li>
        </ul>
        <p class="mt-2 text-sm font-medium text-red-600">Note : Le médecin traitant ne peut pas remplir un formulaire pour une consultation qu'il n'a pas réalisée</p>
      </div>
    </div>
  </div>
</template>