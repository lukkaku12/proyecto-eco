import { navigateTo } from '../../../../../Router.js';
import { formValidator } from '../../../../../helpers/index.js';
import { loginUser } from '../../../../../api/api.js';

export async function LoginFormComponent() {
  const root = document.getElementById('root');

  root.innerHTML = `
      <div class="login-wrapper">
        <form id="loginForm" class="login-form">
          <h2>Login</h2>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" autocomplete="email">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" autocomplete="current-password">
          <button type="submit">Login</button>
        </form>
        <div>
          <h2>Still do not have an account?</h2>
          <p>Register so you can login</p>
          <button id="go-register">Register</button>
        </div>
      </div>
    `;

  const form = document.getElementById('loginForm');
  const registerButton = document.getElementById('go-register');

  registerButton.addEventListener('click', (event) => {
    event.preventDefault();
    navigateTo('/register');
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!formValidator(email, password)) {
      alert('Please fill in all fields');
      return;
    }

    const token = await login(email, password);
    if (token) {
      localStorage.setItem('token', token);
      navigateTo('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  });
}

export async function login(email, password) {
  try {
    const data = await loginUser(email, password);
    return data.token;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
}
