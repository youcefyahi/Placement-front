<template>
    <div class="bg-gray-200 p-4">
      <h1 class="text-2xl font-semibold mb-4">Contrats</h1>
      <ContratView :contracts="contracts" />
    </div>
  </template>
  
  <script setup>
  import ContratView from '@/components/ContratView.vue';
  
  const contracts = ref([
    { id: 1, title: 'Contrat 1', content: 'Contenu du contrat 1' },
    { id: 2, title: 'Contrat 2', content: 'Contenu du contrat 2' },
    { id: 3, title: 'Contrat 3', content: 'Contenu du contrat 3' },
  ]);
  </script>
  