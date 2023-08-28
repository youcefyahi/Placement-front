<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full">
      <Login v-if="showLoginForm" />
      <Register v-if="showResgisterForm" />
      <ForgetPassword v-if="showPasswordForm" />
      <button v-if="!showResgisterForm" @click="toggleRegisterForm"
        class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
        Basculer vers le formulaire d'inscription
      </button>
      <button v-if="!showLoginForm" @click="toggleLoginForm"
        class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
        Basculer vers le formulaire de connexion
      </button>
      <button v-if="!showPasswordForm" @click="togglePasswordForm"
        class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
        Mot de passe oublier ?
      </button>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

// Variable pour suivre l'état d'affichage des formulaires
const showLoginForm = ref(true);
const showResgisterForm = ref(false)
const showPasswordForm = ref(false)

const toggleRegisterForm = () => {
  showLoginForm.value = false;
  showResgisterForm.value = true
  showPasswordForm.value = false;
};

const toggleLoginForm = () => {
  showLoginForm.value = true
  showResgisterForm.value = false
  showPasswordForm.value = false;
};

const togglePasswordForm = () => {
  showLoginForm.value = false;
  showResgisterForm.value = false
  showPasswordForm.value = true;
};



</script>