<template>
  <form @submit.prevent="registerUser" class="max-w-md mx-auto">
    <div class="mb-4">
      <label for="firstName" class="block">Prénom</label>
      <input type="text" id="firstName" v-model="firstName" class="w-full px-4 py-2 rounded border" />
    </div>
    <div class="mb-4">
      <label for="lastName" class="block">Nom</label>
      <input type="text" id="lastName" v-model="lastName" class="w-full px-4 py-2 rounded border" />
    </div>
    <div class="mb-4">
      <label for="email" class="block">Email</label>
      <input type="email" id="email" v-model="email" class="w-full px-4 py-2 rounded border" />
    </div>
    <div class="mb-4">
      <label for="phone" class="block">Téléphone</label>
      <input type="tel" id="phone" v-model="phone" class="w-full px-4 py-2 rounded border" />
    </div>
    <div class="mb-4">
      <label for="password" class="block">Mot de passe</label>
      <input type="password" id="password" v-model="password" class="w-full px-4 py-2 rounded border" />
    </div>
    <button type="submit" class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      S'inscrire
    </button>
    <p class="mt-4 text-center">
      Déjà un compte? <router-link to="/login" class="text-blue-500 hover:underline">Se connecter</router-link>
    </p>
  </form>
  <p v-if="successMessage" class="text-green-500 mt-4">{{ successMessage }}</p>
  <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const phone = ref('');
const successMessage = ref('');
const errorMessage = ref('');

const registerUser = async () => {
  // Créez un objet avec les données du formulaire
  const userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    phone:phone.value
  };

  try {
    // Envoyez une requête HTTP POST pour créer l'utilisateur
    const response = await axios.post('http://localhost:3001/api/auth/register', userData);

    // Si la requête est réussie, affichez un message de succès
    if (response.status === 201) {
      successMessage.value = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
      // Réinitialisez les champs du formulaire
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      password.value = '';
      phone.value = '';
      alert("ca marche ")
    }
  } catch (error) {
    alert("ca marche pas  ")
    // Si la requête échoue, affichez un message d'erreur
    errorMessage.value = 'Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer plus tard.';
  }
};
</script>
