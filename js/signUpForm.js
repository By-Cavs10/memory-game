import {validateEmail,validatePassword,validateConfirmPassword,validateUsername} from "./modulesForm/validators.js";
import { saveUser } from "./modulesForm/storage.js";



const $form = document.getElementById('signUpForm')

$form.addEventListener('submit', (event) => {
   
    const errors = []
    const user = {};
   
    event.preventDefault()
    
    
    const $inputs = event.target.querySelectorAll('input')

    
    $inputs.forEach(input => {
        switch (input.id) {
            case "mail":
                console.log("mail");
                if (!validateEmail(input.value)) errors.push([input.id, "L'email n'est pas valide"])
                else user.mail = input.value
                break;
            case "password":
                console.log("password");
                 if (!validatePassword(user.password,input.value))  errors.push([input.id, "Vérifiez si le mot de passe a au moins 8 caractères, 1 majuscule, 1 minuscule et 1 caractère spécial"])
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
        
        errors.forEach(error => {
            console.log('error', error);
            const $displayErrorTarget = document.getElementById(`mistake-${error[0]}`)
            $displayErrorTarget.innerHTML = "";
            $displayErrorTarget.innerHTML = error[1]
        })
    } else {
        
        saveUser(user)
        document.getElementById('message-succes').textContent = "User saved"
        window.location.href = 'connexion.html';
    }
})

validateUsername(username)

validateConfirmPassword(password, confirmPassword)





  
 