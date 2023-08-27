<template>
    <header class="bg-blue-500 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <h1 class="text-white text-2xl font-semibold">Mon Application</h1>
  
        <!-- Menu d'en-tête responsive -->
        <div class="flex items-center space-x-4">
          <!-- Bulle d'utilisateur -->
          <div class="relative group">
            <!-- Les deux premières lettres du nom -->
            <div class="bg-white text-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-xl font-semibold">
              {{ userInitials }}
            </div>
  
            <!-- Menu déroulant utilisateur (ajoutez votre logique pour le rendre cliquable) -->
            <div class="hidden group-hover:block absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
              <!-- Ajoutez ici des éléments du menu déroulant -->
              <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer"> <nuxt-link to="/profil">mon profil</nuxt-link></div>
              <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer">Déconnexion</div>
            </div>
          </div>
  
          <!-- Vous pouvez ajouter d'autres éléments de menu ici -->
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Remplacez "John Doe" par le nom de l'utilisateur actuel
  const userName = ref('John Doe');
  
  // Obtenez les deux premières lettres du nom de l'utilisateur
  const userInitials = computed(() => {
    const initials = userName.value
      .split(' ')
      .map((name) => name.charAt(0))
      .join('');
    return initials;
  });
  </script>
  
  <style scoped>
  /* Ajoutez vos styles Tailwind personnalisés ici si nécessaire */
  </style>
  