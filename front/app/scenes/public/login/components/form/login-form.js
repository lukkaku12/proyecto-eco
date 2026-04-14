import { navigateTo } from '../../../../../Router.js';
import { formValidator } from '../../../../../helpers/index.js';

export async function LoginFormComponent() {
  const root = document.getElementById('root');

  root.innerHTML = `
      <div class = "${style.backgroundOpacity}">
        <form id="loginForm" class="${style.form}">
          <h2 class ="${style.Login}">Iniciar sesion</h2>
          <label for="email" class="${style.label}">Correo:</label>
          <input type="text" id="email" name="email" autocomplete="email" class="${style['input-email']}">
          <label for="password" class="${style.label}">Contrasena:</label>
          <input type="password" id="password" name="password" autocomplete="current-password" class="${style['input-password']}">
          <button type="submit" class="${style['button-send']}">Entrar</button>
        </form>
        <div class="${style.divRight}">
          <h2>Aun no tienes una cuenta?</h2>
          <p>Registrate para ingresar</p>
          <button class= "${style.registerBtn}">Registrarme</button>
        </div>
      </div>
    `;
  
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // previene el comportamiento por default que es, recargar la pagina
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(!formValidator(email, password)){
      alert('Completa todos los campos');
      return;
    }
    const token = await login(email, password);
    if (token) {
      localStorage.setItem('token', token);
      navigateTo('/dashboard');
    } else {
      alert('Credenciales invalidas');
    }
  });
}

export async function login(email, password) {
  try {
    const response = await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const data = await response.json();
    console.log("hola",data);
    return data.token;
  } catch (error) {
    console.error('Error de inicio de sesion:', error);
    return null;
  }
}
