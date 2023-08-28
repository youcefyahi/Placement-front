import axios from 'axios';


interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}


export function updateUserProfile(userProfile:UserData) {
    const yourAuthToken = localStorage.getItem('token');

    return axios
      .put('http://localhost:3001/api/user/', userProfile, {
        headers: {
          Authorization: `Bearer ${yourAuthToken}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {

        throw error;
    
      });
  }



export const getUserProfile = (): Promise<UserData | null> => {
    const yourAuthToken = localStorage.getItem('token');
  
    if (!yourAuthToken) {
      return Promise.resolve(null);
    }
  
    return axios
      .get(`http://localhost:3001/api/user/profile`, {
        headers: {
          Authorization: `Bearer ${yourAuthToken}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
        return null;
      });
  };