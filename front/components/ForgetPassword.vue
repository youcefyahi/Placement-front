<template>
  <img src="../assets/placement-direct-logo.svg" alt="placement-direc" class="mb-4" />
  <form @submit.prevent="submitForm" class="w-full max-w-md mx-auto">
    <div class="mb-4">
      <label for="email" class="block text-gray-700 font-bold mb-2">Email :</label>
      <input type="email" v-model="email" id="email" @input="validateEmail"
        class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500" />
      <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
    </div>
    <div class="mb-4">
      <label for="password" class="block text-gray-700 font-bold mb-2">Nouveau Mot de passe :</label>
      <input type="password" v-model="password" id="password" @input="validatePassword"
        class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500" />
      <span v-if="errors.password" class="text-red-500">{{ errors.password }}</span>
    </div>
    <button type="submit" :disabled="!isValidForm(errors)"
      class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
      Se connecter
    </button>
  </form>
</template>
  
<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';

const email = ref('');
const password = ref('');
const errors = reactive({
  email: null,
  password: null,
});

// Vérification et soumission du formulaire
const submitForm = async () => {
  // Vérifiez d'abord si le formulaire est valide
  if (!isValidForm(errors)) {
    return; // Sortez de la fonction si le formulaire n'est pas valide
  }

  const userData = {
    email: email.value,
    password: password.value,
  };
  try {
    await axios.put('http://localhost:3001/api/user/password', userData);
    location.reload()

    // Réinitialisez les champs et les erreurs ici si nécessaire
  } catch (error) {
    console.error('Erreur lors de la mise à jour du mot de passe :', error);
  }
};

const validateEmail = () => {
  if (!emailIsValid(email.value)) {
    errors.email = 'L\'adresse email n\'est pas valide';
  } else {
    errors.email = null;
  }
};

const validatePassword = () => {
  if (password.value.length < 8) {
    errors.password = 'Le mot de passe doit contenir au moins 8 caractères';
  } else {
    errors.password = null;
  }
};
const isValidForm = (errors) => {
  return !errors.email && !errors.password;
};
</script>
  