<template>
  <form @submit.prevent="login" class="w-full max-w-md mx-auto">
    <div class="mb-4">
      <label for="email" class="block text-gray-700 font-bold mb-2">Email :</label>
      <input type="email" v-model="email" id="email" class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500" />
      <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
    </div>
    <div class="mb-4">
      <label for="password" class="block text-gray-700 font-bold mb-2">Mot de passe :</label>
      <input type="password" v-model="password" id="password" class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500" />
      <span v-if="errors.password" class="text-red-500">{{ errors.password }}</span>
    </div>
    <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
      Se connecter
    </button>
  </form>
</template>

<script setup>
import { ref, reactive, } from 'vue';
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


  if (isValidForm(errors)) {
    const credentials = {
      email: email.value,
      password: password.value,
    };

    axios.post('http://localhost:3001/api/auth/login', credentials)
      .then((response) => {
        if (response.data.token) {
          alert('ca marche')
          const token = response.data.token;
          localStorage.setItem("token", token)
          const router = useRouter();

          router.push({ path: "/home" });


        }
        else {
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
