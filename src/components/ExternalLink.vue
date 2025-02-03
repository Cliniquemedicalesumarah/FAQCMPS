<template>
  <a 
    :href="href" 
    target="_blank" 
    rel="noopener noreferrer" 
    class="inline-flex items-center text-blue-600 hover:text-blue-800"
  >
    {{ text }}
    <ArrowTopRightOnSquareIcon class="ml-1 h-4 w-4" />
  </a>
</template>

<script setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

defineProps({
  href: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>