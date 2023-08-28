<template>
  <div class="mb-4 ml-20">
    <img src="../assets/placement-direct-logo.svg" alt="placement-direc" />
  </div>

  <form @submit.prevent="onSubmit" class="max-w-md mx-auto">
    <div class="mb-4">
      <label for="firstName" class="block">Prénom</label>
      <input type="text" id="firstName" v-model="firstName" class="w-full px-4 py-2 rounded border" />
      <p v-if="!isValidFirstName" class="text-red-500 mt-1">Le prénom ne doit pas contenir de caractères spéciaux.</p>
    </div>
    <div class="mb-4">
      <label for="lastName" class="block">Nom</label>
      <input type="text" id="lastName" v-model="lastName" class="w-full px-4 py-2 rounded border" />
      <p v-if="!isValidLastName" class="text-red-500 mt-1">Le nom ne doit pas contenir de caractères spéciaux.</p>
    </div>
    <div class="mb-4">
      <label for="email" class="block">Email</label>
      <input type="email" id="email" v-model="email" class="w-full px-4 py-2 rounded border" />
      <p v-if="!isValidEmail" class="text-red-500 mt-1">Veuillez entrer une adresse email valide.</p>
    </div>
    <div class="mb-4">
      <label for="phone" class="block">Téléphone</label>
      <input type="tel" id="phone" v-model="phone" class="w-full px-4 py-2 rounded border" />
      <p v-if="!isValidPhone" class="text-red-500 mt-1">Le numéro de téléphone doit contenir exactement 10 chiffres.</p>
    </div>
    <div class="mb-4">
      <label for="password" class="block">Mot de passe</label>
      <input type="password" id="password" v-model="password" class="w-full px-4 py-2 rounded border" />
      <p v-if="!isValidPassword" class="text-red-500 mt-1">Le mot de passe doit comporter au moins 8 caractères sans caractères spéciaux.</p>
    </div>
    <button type="submit" class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      S'inscrire
    </button>
    <p class="mt-4 text-center">
    </p>
  </form>
  <p v-if="successMessage" class="text-green-500 mt-4">{{ successMessage }}</p>
  <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {registerUser} from '../service/AuthService'

const firstName = ref<string>('');
const lastName = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const phone = ref<string>('');
const successMessage = ref<string>('');
const errorMessage = ref<string>('');
const isValidFirstName = ref<boolean>(true);
const isValidLastName = ref<boolean>(true);
const isValidEmail = ref<boolean>(true);
const isValidPhone = ref<boolean>(true);
const isValidPassword = ref<boolean>(true);

const onSubmit = async () => {
  // Réinitialisez les validations
  isValidFirstName.value = true;
  isValidLastName.value = true;
  isValidEmail.value = true;
  isValidPhone.value = true;
  isValidPassword.value = true;

  const userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    phone: phone.value
  };

  const authResult = await registerUser(userData);

  if (authResult.success) {
    successMessage.value = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
    location.reload()
  } else {
    errorMessage.value = authResult.message || 'Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer plus tard.';
  }
};
</script>
