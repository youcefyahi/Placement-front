<template>
  <header class="bg-blue-500 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="text-white text-2xl font-semibold">Placement-direct</h1>
      <!-- Bulle d'utilisateur -->
      <div class="relative cursor-pointer" @click="menuVisible = !menuVisible">
        <!-- Les deux premières lettres du nom -->
        <div class="bg-white text-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-xl font-semibold">
          {{ userInitials }}
        </div>
        <!-- Menu déroulant utilisateur -->
        <div v-if="menuVisible" class="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
          <!-- Ajoutez ici des éléments du menu déroulant -->
          <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            <nuxt-link to="/profil">Mon profil</nuxt-link>
          </div>
          <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            <button @click="deconnexion">Déconnexion</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const userName = ref('John Doe');

const userInitials = computed(() => {
  const initials = userName.value
    .split(' ')
    .map((name) => name.charAt(0))
    .join('');
  return initials;
});

const menuVisible = ref(false);

const deconnexion = async () => {
  localStorage.clear();

  window.location.href = "http://localhost:3000"; 

};
</script>