
<template>
    <div>
      <h2 class="text-xl font-semibold mb-2">Liste des contrats</h2>
      <ul>
        <li v-for="contract in contracts" :key="contract.id" class="bg-white p-4 mb-2 border rounded">
          <h3 class="text-lg font-semibold">{{ contract.title }}</h3>
          <p class="text-gray-600">{{ contract.content }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      contracts: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  