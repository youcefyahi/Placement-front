<template>
    <Login v-if="showLoginForm"/>
     <Register v-else="showLoginForm"/>
     <button @click="toggleRegisterForm">Basculer vers le formulaire d'inscription</button>
</template>

<script setup>

import { ref } from 'vue';

// Variable pour suivre l'état d'affichage des formulaires
const showLoginForm = ref(true);

const toggleRegisterForm = () => {
  showLoginForm.value = false;
  alert('ca marche')
};

</script>