<template>
  <div class="prose prose-sm text-gray-600">
    <h3 class="text-base font-medium text-gray-900">Gestion du matériel</h3>
    <div class="space-y-4">
      <div>
        <h4 class="text-sm font-medium text-gray-900">Liens importants</h4>
        <div class="space-y-2">
          <ExternalLink 
            href="https://docs.google.com/document/d/1PYNEJ79Ws3XXkV0rbCgU1eHwJLd6xDqc/edit"
            text="Matériel/Inventaire - CMPS"
          />
          <ExternalLink 
            href="https://docs.google.com/spreadsheets/d/1dzK7EEuZAHIJnfxaN2SebUDYHqjX2ZUO/edit?gid=1700544201#gid=1700544201"
            text="Catalogue matériel CISSS des îles"
          />
          <ExternalLink 
            href="https://accesclient.dufortlavigne.com/AccesClient"
            text="Commande Medline"
          />
        </div>
      </div>

      <div>
        <h4 class="text-sm font-medium text-gray-900">Responsable des commandes</h4>
        <p>Ariane Chiasson est en charge des commandes de matériel et gestion des inventaires.</p>
        <p class="mt-2">Merci de lui envoyer une tâche dans Myle si vous avez besoin de quelque chose ou si vous notez qu'il manque quelque chose.</p>
      </div>

      <div>
        <h4 class="text-sm font-medium text-gray-900">Commandes CISSS et médicaments</h4>
        <ul class="list-disc pl-5">
          <li>Commandes CISSS : envoyer un courriel à <a href="mailto:magasin.cisssdesiles@ssss.gouv.qc.ca" class="text-blue-600 hover:text-blue-800">magasin.cisssdesiles@ssss.gouv.qc.ca</a></li>
          <li>Commandes de médicaments : faxer directement à la pharmacie du CISSS au 418 986-5625</li>
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-medium text-gray-900">Gestion des commandes de matériel non médical</h4>
        <div class="space-y-4">
          <div>
            <p class="font-medium">Responsable :</p>
            <p>La préposée à l'Accueil du premier étage</p>
          </div>

          <div>
            <p class="font-medium">Fournisseurs et contacts :</p>
            <ul class="list-disc pl-5">
              <li><span class="font-medium">Breuvages :</span> Breuvage Deraspe (418-986-2084)</li>
              <li><span class="font-medium">Produits de nettoyage :</span> Nettoyeur Arseneau (418-986-2516)</li>
              <li><span class="font-medium">Fournitures d'hygiène :</span> OptiMax (418-986-6655)
                <ul class="list-disc pl-5">
                  <li>Papier toilette</li>
                  <li>Pantoufles bleues</li>
                  <li>Papier à main (brun et blanc)</li>
                  <li>Papier mouchoir</li>
                </ul>
              </li>
              <li><span class="font-medium">Matériel de bureau :</span> Buro + (418-986-3302)</li>
              <li><span class="font-medium">Articles divers :</span> Jean Coutu (à récupérer directement en magasin)
                <ul class="list-disc pl-5">
                  <li>Tylenol</li>
                  <li>Advil</li>
                  <li>Sirop pour enfants</li>
                  <li>Vaseline</li>
                  <li>Savon vaisselle</li>
                  <li>Assouplisseur</li>
                  <li>Savon pour lessive</li>
                  <li>Savon à main</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-medium">Procédure de commande :</p>
            <ol class="list-decimal pl-5">
              <li>Identifier les besoins en matériel non médical</li>
              <li>Contacter le fournisseur approprié</li>
              <li>Mentionner que la commande est pour Immeubles du Village</li>
              <li>Passer la commande en précisant les quantités</li>
              <li>Vérifier et réceptionner le matériel à son arrivée</li>
              <li>Ranger les articles dans les lieux de stockage appropriés</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../../components/ExternalLink.vue'
</script>