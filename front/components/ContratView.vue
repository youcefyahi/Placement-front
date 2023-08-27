<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Liste des Contrats</h1>
    <ul class="space-y-4"> <!-- Augmentation de l'espacement vertical -->
      <li v-for="(contract, index) in contracts" :key="index" class="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
        <div class="flex items-center"> <!-- Flexbox pour aligner les éléments horizontalement -->
          <img src="../assets/1691530224.webp" alt="Image du contrat" class="w-32 h-32 rounded-full mr-4" /> <!-- Ajout de styles pour l'image -->
          <span class="text-xl font-semibold">{{ contract.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  data() {
    return {
      contracts: [
        { name: 'Assurance Courtage' },
        { name: 'Assurance Courtage' },
        { name: 'Assurance Courtage' },
        { name: 'Assurance Courtage' },
        // Ajoutez ici vos contrats réels depuis une API ou une source de données
      ],
    };
  },
  methods: {
    pdfPath(filename) {
      // Utilisez l'alias pour construire le chemin complet du PDF
      return `@contrats/${filename}`;
    },
  },
};
</script>