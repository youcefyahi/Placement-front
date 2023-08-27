<template>
    <form @submit.prevent="updateUserPassword" class="w-full max-w-md mx-auto">
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
import axios from 'axios';

const email = ref('');
const password = ref('');
const errors = reactive({
    email: null,
    password: null,
});


const updateUserPassword = async () => {

    const userData = {

        email: email.value,
        password: password.value,

    };
    try {
        await axios.put('http://localhost:3001/api/user/password', userData, {

        }).then((response) => {
            alert('Profil mis à jour avec succès');
            console.log(response)
        })

    } catch (error) {
        console.error('Erreur lors de la mise à jour du profil:', error);
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
