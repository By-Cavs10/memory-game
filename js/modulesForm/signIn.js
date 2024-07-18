
import { getUsers, saveUser } from "./storage.js";

function connectUser(mail, password) {
  // Récupérer tous les utilisateurs du local storage
  const users = getUsers();

  
  const user = users.find(user => user.mail === mail);

  if (user && user.password === password) {
    // Enregistrer l'ID de l'utilisateur connecté dans le local storage
    sessionStorage.setItem('connectedUserMail', user.mail);

    
    window.location.href = 'profil.html';
  } else {
    
    console.error('Le mail ou le mot de passe est incorrect');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const $form = document.getElementById('signInForm');

  
  // Ajouter un écouteur d'événements pour le formulaire de connexion
  $form.addEventListener('submit', (event) => {
    event.preventDefault();

    const mail = document.getElementById('mail').value;
    const password = document.getElementById('password').value;

    connectUser(mail, password);
  });
});

export {
  connectUser
};