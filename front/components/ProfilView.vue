<template>
  <div>
    <h1 class="text-2xl font-semibold text-center">Votre Profil</h1>
    <nuxt-link to="/home" class="text-blue-500 hover:underline">
      <div class="bg-gray-100 px-2 py-2 rounded-lg shadow-md cursor-pointer w-40 truncate mx-10">
        Retour à l'accueil
      </div>
    </nuxt-link>
    <form @submit.prevent="updateUserProfileHandler" class="mt-4 space-y-4 mx-10">
      <div class="flex flex-col">
        <label for="firstName" class="text-sm font-semibold">Prénom : {{ user.firstName }}</label>
      </div>
      <div class="flex flex-col">
        <label for="lastName" class="text-sm font-semibold">Nom : {{ user.lastName }}</label>
      </div>
      <div class="flex flex-col">
        <label for="email" class="text-sm font-semibold">Email : {{ user.email }}</label>
        <input type="email" id="email" v-model="userProfile.email"
          class="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-500" />
      </div>
      <div class="flex flex-col">
        <label for="phone" class="text-sm font-semibold">Phone : {{ user.phone }}</label>
        <input type="text" id="phone" v-model="userProfile.phone"
          class="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-500" />
      </div>
      <div class="flex flex-col">
        <label for="password" class="text-sm font-semibold">Mot de passe</label>
        <input type="password" id="password" v-model="userProfile.password"
          class="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-500" />
      </div>
      <button type="submit" class="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
        Mettre à jour
      </button>
    </form>
    <div v-if="updateSuccess" class="text-green-500 font-semibold">
        Mise à jour réussie !
      </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { updateUserProfile } from '../service/UserService'; // Assurez-vous de spécifier le chemin correct vers votre service

const { user } = defineProps(['user']);

const userProfile = ref({
  email: user.email,
  password: user.password,
  phone: user.phone,
  firstName:user.firstName,
  lastName:user.lastName
});

const updateUserProfileHandler = async () => {
  try {
    const response = await updateUserProfile(userProfile.value);
    updateSuccess.value = true;

  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil:', error);
  }
};
</script>