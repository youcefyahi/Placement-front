<template>
  <form @submit.prevent="login">
    <div>
      <label for="email">Email :</label>
      <input type="email" v-model="email" id="email" />
      <span v-if="errors.email">{{ errors.email }}</span>
    </div>
    <div>
      <label for="password">Mot deqsdsq passe :</label>
      <input type="password" v-model="password" id="password" />
      <span v-if="errors.password">{{ errors.password }}</span>
    </div>
    <button type="submit">Se connecter</button>
    <button @click="showRegistrationForm">S'inscrire</button>
  </form>

</template>


  <Register/>



<script setup>
import { ref, reactive, computed } from 'vue';

const email = ref('');
const password = ref('');
const errors = reactive({
  email: null,
  password: null,
});

const showLoginForm = ref(true);

const showRegistrationForm = () => {
  showLoginForm.value = false;
};

const login = () => {
  // Ajoutez ici la logique de connexion avec vos erreurs de validation
  // Par exemple, vérifiez si l'e-mail est au bon format et si le mot de passe est valide.
  if (!emailIsValid(email.value)) {
    errors.email = 'L\'email n\'est pas valide.';
  } else {
    errors.email = null;
  }

  if (!passwordIsValid(password.value)) {
    errors.password = 'Le mot de passe doit avoir au moins 8 caractères.';
  } else {
    errors.password = null;
  }

  if (isValidForm(errors)) {
    // Si le formulaire est valide, effectuez la connexion ici
    // Vous pouvez appeler une méthode d'authentification, par exemple, AuthService.login()
  }
};


// Fonctions de validation
const emailIsValid = (email) => {
  // Ajoutez ici la logique de validation de l'e-mail
};

const passwordIsValid = (password) => {
  // Ajoutez ici la logique de validation du mot de passe
};

const isValidForm = (errors) => {
  return !Object.values(errors).some((error) => error !== null);
};
</script>
