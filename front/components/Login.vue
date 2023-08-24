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

  </form>
</template>


  <Register/>



<script setup>
import { ref, reactive, computed } from 'vue';
import axios from 'axios';

const email = ref('');
const password = ref('');
const errors = reactive({
  email: null,
  password: null,
});



const login = () => {
  // Validation de l'e-mail
  if (!emailIsValid(email.value)) {
    errors.email = "L'e-mail n'est pas valide.";
  } else {
    errors.email = null;
  }

  // Validation du mot de passe
  // if (!passwordIsValid(password.value)) {
  //   errors.password = 'Le mot de passe doit avoir au moins 8 caractères.';
  // } else {
  //   errors.password = null;
  // }

  // Vérification du formulaire

  if (isValidForm(errors)) {
    const credentials = {
      email: email.value,
      password: password.value,
    };

    axios.post('http://localhost:3001/api/auth/login', credentials)
      .then((response) => {
        if(response.data.token){
          alert('ca marche')
        }
        else{
          alert("ca marche pas")
        }
      })
      .catch((error) => {
        // Gérer les erreurs de réseau ici
        console.error('Erreur de réseau :', error);
      });
  }
};



// Fonctions de validation
const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// const passwordIsValid = (password) => {
//   return password.length >= 8;

// };

const isValidForm = (errors) => {
  return !errors.email && !errors.password;
};
</script>
