import axios from 'axios';
import { ref } from 'vue';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

interface AuthResult {
  success: boolean;
  message?: string;
  token?: string;
}

interface ValidationResult {
    isValid: boolean;
    message?: string;
  }
  

  interface Errors {
    email: string | null;
    password: string | null;
  }
  

function validateEmail(email: string): ValidationResult {
    const isValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email);
    return { isValid, message: isValid ? undefined : 'Veuillez entrer une adresse email valide.' };
  }
  
  function validatePassword(password: string): ValidationResult {
    const isValid = /^[A-Za-z\d]{8,}$/.test(password);
    return { isValid, message: isValid ? undefined : 'Le mot de passe doit comporter au moins 8 caractères sans caractères spéciaux.' };
  }
  
  function validateName(name: string): ValidationResult {
    const isValid = /^[A-Za-z\s]+$/.test(name);
    return { isValid, message: isValid ? undefined : 'Le nom/prénom ne doit pas contenir de caractères spéciaux.' };
  }
  
  function validatePhone(phone: string): ValidationResult {
    const isValid = /^\d{10}$/.test(phone);
    return { isValid, message: isValid ? undefined : 'Le numéro de téléphone doit contenir exactement 10 chiffres.' };
  }
  

export async function registerUser(userData: UserData): Promise<AuthResult> {
  // Validez les champs
  const isValidEmail = validateEmail(userData.email);
  const isValidPassword = validatePassword(userData.password);
  const isValidFirstName = validateName(userData.firstName);
  const isValidLastName = validateName(userData.lastName);
  const isValidPhone = validatePhone(userData.phone);

  // Vérifiez si tous les champs sont valides
  if (isValidEmail.isValid && isValidPassword.isValid && isValidFirstName.isValid && isValidLastName.isValid && isValidPhone.isValid) {
    // Envoyez une requête HTTP POST pour créer l'utilisateur
    return axios.post('http://localhost:3001/api/auth/register', userData)
      .then(response => {
        if (response) {
    
          return { success: true,};
          
        } else {
          return { success: false, message: 'Erreur lors de l insciption' };
        }
      })
      .catch(error => {
        // Gérez les erreurs ici si nécessaire
        return { success: false, message: 'Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer plus tard.' };
      });
  } else {
    // Si les champs ne sont pas valides, renvoyez un message d'erreur
    return Promise.resolve({ success: false, message: 'Veuillez remplir correctement tous les champs.' });
  }
}



export function loginUser(email: string, password: string): Promise<{ success: boolean, message?: string, errors: Errors }> {
  const errors: Errors = {
    email: null,
    password: null,
  };

  // Validation de l'e-mail
  const emailValidation = validateEmail(email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message || null; // Assurez-vous que c'est null si le message est undefined
    return Promise.resolve({ success: false, message: emailValidation.message, errors });
  }

  // Validation du mot de passe
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    errors.password = passwordValidation.message || null; // Assurez-vous que c'est null si le message est undefined
    return Promise.resolve({ success: false, message: passwordValidation.message, errors });
  }

  // Si les validations sont réussies, procédez à la connexion
  const credentials = {
    email,
    password,
  };

  return axios.post('http://localhost:3001/api/auth/login', credentials)
    .then((response) => {
      if (response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        
        return { success: true, errors };
      } else {
        return { success: false, message: 'Token non reçu du serveur', errors };
      }
    })
    .catch((error) => {
      // Gérer les erreurs de réseau ici
      console.error('Erreur de réseau :', error);
      return { success: false, message: 'Une erreur de réseau s\'est produite. Veuillez réessayer plus tard.', errors };
    });
}

