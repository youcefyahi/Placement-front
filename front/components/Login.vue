<template>
  <div class="mb-4">
    <img src="../assets/placement-direct-logo.svg" alt="placement-direc" />
  </div>
  <form @submit.prevent="login" class="w-full max-w-md mx-auto">
    <div class="mb-4">
      <label for="email" class="block text-gray-700 font-bold mb-2">Email :</label>
      <input type="email" v-model="email" id="email"
        class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500" />
      <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
    </div>
    <div class="mb-4">
      <label for="password" class="block text-gray-700 font-bold mb-2">Mot de passe :</label>
      <input type="password" v-model="password" id="password"
        class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500" />
      <span v-if="errors.password" class="text-red-500">{{ errors.password }}</span>
    </div>
    <button type="submit"
      class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
      Se connecter
    </button>
  </form>
</template>

<script setup>
import { ref, reactive, } from 'vue';
import { loginUser } from '../service/AuthService'

const email = ref('');
const password = ref('');
const errors = reactive({
  email: null,
  password: null,
});

const login = async () => {
  const result = await loginUser(email.value, password.value);

  if (result.success) {
    // Connexion réussie, vous pouvez rediriger l'utilisateur
    const router = useRouter();
    router.push({ path: "/home" });
  } else {
    // Afficher des erreurs ici si nécessaire
    console.error('Erreur de connexion :', result.message);
  }
};

</script>
