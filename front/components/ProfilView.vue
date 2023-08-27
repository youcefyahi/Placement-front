<template>
    <div>
      <h1 class="text-2xl font-semibold">Profil de l'utilisateur</h1>
      <nuxt-link to="/home"><div>retour a l'acceuill</div></nuxt-link> 
      <form @submit.prevent="updateUserProfile" class="mt-4 space-y-4">
        <div class="flex flex-col">
          <label for="firstName" class="text-sm font-semibold">Prénom : {{ user.firstName }}</label>
        </div>
        <div class="flex flex-col">
          <label for="lastName" class="text-sm font-semibold">Nom : {{ user.lastName }}</label>
        </div>
        <div class="flex flex-col">
          <label for="email" class="text-sm font-semibold">Email : {{ user.email }}</label>
          <input
            type="email"
            id="email"
            v-model="userProfile.email"
            class="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div class="flex flex-col">
          <label for="phone" class="text-sm font-semibold">Phone : {{ user.phone }}</label>
          <input
            type="text"
            id="phone"
            v-model="userProfile.phone"
            class="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div class="flex flex-col">
          <label for="password" class="text-sm font-semibold">Mot de passe : {{ user.password }}</label>
          <input
            type="password"
            id="password"
            v-model="userProfile.password"
            class="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <button type="submit" class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
          Mettre à jour
        </button>
      </form>
    </div>
  </template>
  
  
<script setup>
import { ref, defineProps } from 'vue';
import axios from 'axios';

const { user } = defineProps(['user']);

const userProfile = ref({
    email: user.email,
    password: user.password,
    phone:user.phone,
});

const updateUserProfile = async () => {

    const yourAuthToken = localStorage.getItem('token')
    console.log(userProfile.value)
    try {
        await axios.put('http://localhost:3001/api/user/', userProfile.value,  {
            
            headers: {
                Authorization: `Bearer ${yourAuthToken}`,
            },
        });
        alert('Profil mis à jour avec succès');
    } catch (error) {
        console.error('Erreur lors de la mise à jour du profil:', error);
    }
};



</script>
  