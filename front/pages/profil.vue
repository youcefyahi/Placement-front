<template>
    <Header/>
    <ProfilView v-if="user" :user="user" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const user = ref(null);

    onMounted(async () => {
      try {
        const yourAuthToken = localStorage.getItem('token') // Récupérer le token JWT depuis les cookies
        if(!yourAuthToken){
            return
        }
        if (yourAuthToken) {
          // Si le token JWT est présent, effectuez la requête avec le header d'autorisation
          const response = await axios.get(`http://localhost:3001/api/user/profile`, {
            headers: {
              Authorization: `Bearer ${yourAuthToken}`,
            },
          });
          user.value = response.data

        } else {
          console.error('Token JWT introuvable dans les cookies.');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
      }
    });

    return { user };
  },
});
</script>