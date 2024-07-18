import { getUserByMail } from './storage.js';

// récup mail
const connectedUserMail = sessionStorage.getItem('connectedUserMail');


const connectedUser = connectedUserMail ? getUserByMail(connectedUserMail) : null;

if (connectedUser) {
  
  document.getElementById('username').textContent = connectedUser.username;
  document.getElementById('mail').textContent = connectedUser.mail;

  document.getElementById('disconnect').addEventListener('click', () => {
    
    sessionStorage.removeItem('connectedUserMail');

   
    window.location.href = 'connexion.html';
  });
} else {
  
  window.location.href = 'connexion.html';
}