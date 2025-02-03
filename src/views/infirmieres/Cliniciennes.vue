<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Infirmière clinicienne</h1>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="prose prose-sm text-gray-600">
          <h3 class="text-base font-medium text-gray-900">Rôle et documentation</h3>
          <div class="space-y-2">
            <ExternalLink 
              href="https://www.oiiq.org/documents/20147/237836/252_doc.pdf"
              text="Guide pratique à l'intention des infirmières cliniciennes en GMF"
            />
            <ExternalLink 
              href="https://docs.google.com/document/d/1XM-p0jmXlX6MLpVRaad6VFkAUMZnpsqe/edit"
              text="Description du poste de l'infirmière au GMF des îles"
            />
          </div>

          <h3 class="text-base font-medium text-gray-900 mt-4">Ordonnances collectives disponibles au GMF des îles dans Myle</h3>
          <ul class="space-y-2">
            <li><ExternalLink href="#" text="Ajustement de la Médication Hypolipémiante - 628005" /></li>
            <li><ExternalLink href="#" text="Ajustement Rx antidiabétique de type 2 - 628004" /></li>
            <li><ExternalLink href="#" text="Ajustement Rx antihypertensive - 628002" /></li>
            <li><ExternalLink href="#" text="Dépistage, prise en charge et Thérapie de l'ostéoporose - OC-02" /></li>
            <li><ExternalLink href="#" text="Initier le dépistage et traitement de la pharyngite à Streptocoque - OC-10" /></li>
            <li><ExternalLink href="#" text="Initier le Traitement d'une otite externe - OC-06" /></li>
            <li><ExternalLink href="#" text="Initier le Traitement d'une otite moyenne aigue - OC-05" /></li>
            <li><ExternalLink href="#" text="Initier mesures diagnostiques - pertes vaginales - OC-08" /></li>
            <li><ExternalLink href="#" text="Initier mesures diagnostiques - écoulement urétral - OC-09" /></li>
            <li><ExternalLink href="#" text="Initier mesures diagnostiques - infection urinaire - OC-07" /></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExternalLink from '../../components/ExternalLink.vue'
</script>