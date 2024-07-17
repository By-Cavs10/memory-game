import {validateEmail,validateConfirmPassword,validateUsername} from "./modulesForm/validators.js";
import { getUsers, saveUser } from "./modulesForm/storage.js";


// Target
const $form = document.getElementById('signUpForm')

$form.addEventListener('submit', (event) => {
    // Variables de gestion
    const errors = []
    const user = {};
    // Block auto
    event.preventDefault()
    // Select inputs
    // console.log(event.target.querySelectorAll('input'));
    const $inputs = event.target.querySelectorAll('input')

    // Parcours
    $inputs.forEach(input => {
        switch (input.id) {
            case "mail":
                console.log("mail");
                if (!validateEmail(input.value)) errors.push([input.id, "L'email n'est pas valide"])
                else user.mail = input.value
                break;
            case "password":
                console.log("password");
                user.password = input.value
                break;
            case "confirmPassword":
                console.log("confirmPassword");
                 if (!validateConfirmPassword(user.password,input.value))  errors.push([input.id, "les mots de passe ne correspondent pas"])
                 else user.confirmPassword = input.value
                break;
            case "username":
                console.log("username");
                 if (!validateUsername(input.value)) errors.push([input.id, "pseudo non valide"])
                 else user.username = input.value
                break;
            default:
                break;
        }
    });

    // Check Final
    console.log('Errors', errors);
    if (errors.length > 0) {
        // Insertion des errors
        errors.forEach(error => {
            console.log('error', error);
            const $displayErrorTarget = document.getElementById(`mistake-${error[0]}`)
            $displayErrorTarget.innerHTML = "";
            $displayErrorTarget.innerHTML = error[1]
        })
    } else {
        // Sauvegarde
        saveUser(user)
        document.getElementById('message-succes').textContent = "User saved"
        window.location.href = 'connexion.html';
    }
})

validateUsername(username)

validateConfirmPassword(password, confirmPassword)





  // Rediriger l'utilisateur vers la page de connexion
 