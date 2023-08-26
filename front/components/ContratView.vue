<!-- 
<template>
    <div>
      <h2 class="text-xl font-semibold mb-2">Liste des contrats</h2>
      <ul>
        <li v-for="contract in contracts" :key="contract.id" class="bg-white p-4 mb-2 border rounded">
          <h3 class="text-lg font-semibold">{{ user.firsName }}</h3>
          <p class="text-gray-600">{{ user.firsName }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  
  </script>
   -->

   <template>
    <div>
      <h2>Détails de l'utilisateur</h2>
      <p>Nom : {{ user.firstName }} {{ user.lastName }}</p>
      <p>Email : {{ user.email }}</p>
      <!-- Autres détails de l'utilisateur -->
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const { user } = defineProps(['user']);
  </script>
  
  
  