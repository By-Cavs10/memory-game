import {validateEmail,validateConfirmPassword,validateUsername} from "./modulesForm/validators.js";
import { saveUser } from "./modulesForm/storage.js";

// Target
const $form = document.getElementById('contactForm')
// Listener
// $form.addEventListener('submit', function (event) {
//     // Block auto
//     event.preventDefault()
//     // Select inputs
//     console.log('form (event)', event);
//     console.log('form (this)', this);
//     console.log('form-inputs (event)', event.target.querySelectorAll('input'));
//     console.log('form-inputs (this)', this.querySelectorAll('input'));
// })
$form.addEventListener('submit', (event) => {
    // Variables de gestion
    const errors = []
    const user = {}
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
            case "motdepasse":
                console.log("motdepasse");
                 if (!validatePassword(input.value)) errors.push([input.id, "motdepasse n'est pas valide"])
                 else user.motdepasse = input.value
                break;
            case "confirmPassword":
                console.log("confirmPassword");
                 if (!validateConfirmPassword(input.value)) errors.push([input.id, "les mots de passe ne correspondent pas"])
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
    }
})

validateUsername(username)

validateConfirmPassword(password, confirmPassword)