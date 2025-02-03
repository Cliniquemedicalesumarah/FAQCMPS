<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Transmission des valeurs critiques</h1>
      <p class="mt-1 text-sm text-gray-500">
        Procédure du CISSS des Îles pour la transmission des valeurs critiques
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="space-y-8">
          <section>
            <h2 class="text-lg font-medium text-gray-900">Procédure complète</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <ExternalLink 
                href="https://docs.google.com/document/d/1e8rFm1F4WACqSedi3ZPB-YzHFi3m9co4daMX0vDSAxo/edit?tab=t.0#heading=h.htunplwhvstn"
                text="Consulter la procédure complète"
              />
            </div>
          </section>

          <section>
            <h2 class="text-lg font-medium text-gray-900">Description</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-600">
                Cette procédure détaille les étapes pour transmettre les valeurs critiques entre le laboratoire du CISSS et les médecins.
              </p>
              <p class="mt-2 text-sm text-gray-600">
                Elle s'applique aux employés impliqués dans le suivi des résultats critiques en laboratoire.
              </p>
            </div>
          </section>

          <section>
            <h2 class="text-lg font-medium text-gray-900">Résumé de la procédure</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <ol class="list-decimal pl-5 text-sm text-gray-600">
                <li>Le laboratoire contacte la clinique selon les directives</li>
                <li>La secrétaire ou le médecin en fonction prend en charge l'information</li>
                <li>Une tâche est créée immédiatement pour assurer un suivi rapide</li>
              </ol>
              <p class="mt-4 text-sm text-gray-600">
                Pour plus de détails, consultez le document complet.
              </p>
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