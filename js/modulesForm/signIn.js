
import { getUsers, saveUser } from "./storage.js";




function connectUser(mail, password) {
  // Récupérer tous les utilisateurs du local storage
  const users = getUsers();

  // Trouver l'utilisateur correspondant au mail saisi
  const userMail = users.find(user => user.mail === mail);
  const userName = users.find(user => user.username === username);

  // Vérifier si l'utilisateur existe et si le mot de passe correspond
  if (user && user.password === password) {
    // Rediriger l'utilisateur vers la page d'accueil
   localStorage.setItem('connectedUserMail', userMail.mail);
   localStorage.setItem('connectedUserId', userName.username);
    window.location.href = 'profil.html';
  } else {
    // Afficher un message d'erreur
    console.error('Le mail ou le mot de passe est incorrect');
  }
}

document.addEventListener('DOMContentLoaded', () => {
   const connectedUserId = localStorage.getItem('connectedUserId');
  

   if (connectedUserId) {
    // L'utilisateur est déjà connecté, ne rien faire
    return;
  }

  const $form = document.getElementById('signInForm');

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
