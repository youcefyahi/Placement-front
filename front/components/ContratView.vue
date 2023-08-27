<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Liste des Contrats</h1>
    <ul class="space-y-2">
      <li v-for="(contract, index) in contracts" :key="index" class="bg-white rounded-lg shadow-md p-4">
        {{ contract.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contracts: [
        { name: 'Contrat 1' },
        { name: 'Contrat 2' },
        { name: 'Contrat 3' },
        // Ajoutez ici vos contrats réels depuis une API ou une source de données
      ],
    };
  },
};
</script>
