<template>
    <div class="bg-gray-200 p-4">
      <h1 class="text-2xl font-semibold mb-4">Contrats</h1>
      <ContratView :user="user" />
    </div>
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
          console.log(yourAuthToken)

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
      
            alert('ca marche bien')

            user.value = response.data
            console.log(user.value)

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
 