<template>
  <form @submit.prevent="registerUser" class="max-w-md mx-auto">
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
      <p v-if="!isValidPassword" class="text-red-500 mt-1">Le mot de passe doit comporter au moins 8 caractères sans
        caractères spéciaux.</p>
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

const isValidEmail = ref(true);
const isValidPassword = ref(true);
const isValidFirstName = ref(true);
const isValidLastName = ref(true);
const isValidPhone = ref(true);

const registerUser = async () => {
  // Valider les champs
  isValidEmail.value = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email.value);
  isValidPassword.value = /^[A-Za-z\d]{8,}$/.test(password.value);
  isValidFirstName.value = /^[A-Za-z\s]+$/.test(firstName.value);
  isValidLastName.value = /^[A-Za-z\s]+$/.test(lastName.value);
  isValidPhone.value = /^\d{10}$/.test(phone.value);

  // Vérifier si tous les champs sont valides
  if (isValidEmail.value && isValidPassword.value && isValidFirstName.value && isValidLastName.value && isValidPhone.value) {
    // Créez un objet avec les données du formulaire
    const userData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      phone: phone.value
    };

    try {
      // Envoyez une requête HTTP POST pour créer l'utilisateur
      await axios.post('http://localhost:3001/api/auth/register', userData)
        .then((response) => {
          if (response) {
            successMessage.value = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
            const credentials = {
              email: email.value,
              password: password.value,
            };

            axios.post('http://localhost:3001/api/auth/login',credentials)
            .then((response) => {
              if (response.data.token) {
                alert('rediriger y as le token')
                const token = response.data.token;
                localStorage.setItem("token", token)
                const router = useRouter();

                router.push({ path: "/home" });


              }
              else {
                alert("ca marche pas")
              }
            })

          }
        })
      // Si la requête est réussie, affichez un message de succès

    } catch (error) {
      // Si la requête échoue, affichez un message d'erreur
      errorMessage.value = 'Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer plus tard.';
    }
  }
};
</script>
