<template>
    <form @submit.prevent="registerUser">
      <h2>Inscription</h2>
      <div>
        <label for="firstName">Prénom</label>
        <input type="text" id="firstName" v-model="firstName" />
      </div>
      <div>
        <label for="lastName">Nom</label>
        <input type="text" id="lastName" v-model="lastName" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <label for="phone">Téléphone</label>
        <input type="tel" id="phone" v-model="phone" />
      </div>
      <button type="submit">S'inscrire</button>
      <p>Déjà un compte? <router-link to="/login">Se connecter</router-link></p>
    </form>
  </template>
  
  <script setup>
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const password = ref('');
  const phone = ref('');
  
  const registerUser = () => {
    // Logique d'inscription ici
  };
  </script>
  