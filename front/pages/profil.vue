<template>
  <Header />
  <ProfilView v-if="user" :user="user" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { getUserProfile, } from '../service/UserService'; // Assurez-vous d'importer le service ici
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

export default defineComponent({
  
  setup() {
    const user = ref<UserData | null>(null);

    onMounted(async () => {
      try {
        const userProfile = await getUserProfile();
        if (userProfile) {
          user.value = userProfile;
        } else {
          console.error('Problème lors de la récupération du profil de l\'utilisateur.');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
      }
    });

    return { user };
  },
});
</script>
