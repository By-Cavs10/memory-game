import { getUserById } from './storage.js';

const connectedUserId = localStorage.getItem('connectedUserId');
const connectedUser = getUserById(connectedUserId);

if (connectedUser) {
  localStorage.setItem('connectedUserMail', connectedUser.mail);

  // Afficher les données de l'utilisateur
  document.getElementById('username').textContent = connectedUser.username;
  document.getElementById('mail').textContent = connectedUser.mail;
  // ...

  document.getElementById('disconnect').addEventListener('click', () => {
    localStorage.removeItem('connectedUserId');
    localStorage.removeItem('connectedUserMail');
    window.location.href = 'connexion.html';
  });
} else {
  // Rediriger l'utilisateur vers la page de connexion s'il n'est pas connecté
  window.location.href = 'connexion.html';
}