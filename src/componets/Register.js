import { onNavigate } from "../main.js";
import { firebaseConfig, app, database } from "../firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

const auth = getAuth();
/* Para verificar cuenta con vinculo al correo dependiendo del dispositivo
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://localhost:3000',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
};*/


export const Register = () => {
  const logoDivSmall = document.createElement('img');
  logoDivSmall.classList.add('logoDivSmall');
  logoDivSmall.src = 'https://i.imgur.com/RKPm1dL.png';
  const RegisterDiv = document.createElement('div');
  RegisterDiv.setAttribute('id', 'RegisterDiv');
  const labelUserName = document.createElement('h3');
  labelUserName.textContent = 'USUARIO';

  const nodoh2 = document.createElement('h2');
  const inputUserName = document.createElement('input');
  inputUserName.setAttribute('id', 'username');
  const labelEmail = document.createElement('h3');
  labelEmail.textContent = 'EMAIL';
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'mailregister');

  const emailMessage = document.createElement('h4');
  emailMessage.setAttribute('id', 'emailMessage');

  const labelPassword = document.createElement('h3');
  labelPassword.textContent = 'CONTRASEÑA';
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('id', 'password');
  inputPassword.setAttribute('type', 'password');

  const passwordMessage = document.createElement('h4');
  passwordMessage.setAttribute('id', 'passwordMessage');

  const errorMessage = document.createElement('h4');
  errorMessage.setAttribute('id', 'errorFirebase');

  const buttonHome = document.createElement('button');
  buttonHome.setAttribute('id', 'homeButton');
  const buttonSubmit = document.createElement('button');
  buttonSubmit.setAttribute('id', 'registerButton');
  buttonHome.textContent = 'Regresa a Home';
  buttonSubmit.textContent = 'Registrarse';
  inputUserName.placeholder = 'Crea tu Nombre de Usuario';
  inputEmail.placeholder = 'Ingresa tu Correo';
  inputPassword.placeholder = 'Ingresa tu Contraseña';

  // Registrar Usuario con Email
  buttonSubmit.addEventListener('click', (e) => {
    let email = document.getElementById('mailregister').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password, username)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('user created!');
        onNavigate('/feed');
      })
    /* Para verificar cuenta con vinculo al correo
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
        // ...
      })*/
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('error message');
        // ..
      })

});

//Regresa a Home
buttonHome.addEventListener('click', () => {
  onNavigate('/');
});


RegisterDiv.append(logoDivSmall, nodoh2, labelUserName, inputUserName, labelEmail, inputEmail, labelPassword, inputPassword, buttonSubmit, buttonHome);

return RegisterDiv;
};
