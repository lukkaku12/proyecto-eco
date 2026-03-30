import { navigateTo } from '../../../Router';
import { registerUser } from '../../../api/api';

export async function RegisterPage() {
  const root = document.getElementById('root');
  root.innerHTML = `
      <section>
        <h2>Crear cuenta</h2>
        <form id="register-form">
          <input id="name" placeholder="Nombre" required>
          <input id="last_name" placeholder="Apellido" required>
          <input id="email" type="email" placeholder="Correo" required>
          <input id="password" type="password" placeholder="Contraseña" required>
          <input id="number" placeholder="Teléfono" required>
          <input id="address" placeholder="Dirección" required>
          <input id="city" placeholder="Ciudad" required>
          <input id="country" placeholder="País" required>
          <button type="submit">Registrarse</button>
        </form>
        <button id="go-login">Ir a login</button>
      </section>
    `;

  const form = document.getElementById('register-form');
  const loginButton = document.getElementById('go-login');

  loginButton.addEventListener('click', () => navigateTo('/login'));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const payload = {
      name: document.getElementById('name').value,
      last_name: document.getElementById('last_name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      number: document.getElementById('number').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      country: document.getElementById('country').value,
      rol_id: 2,
    };

    try {
      await registerUser(payload);
      alert('Registro exitoso. Ahora inicia sesión.');
      navigateTo('/login');
    } catch (error) {
      console.error(error);
      alert('No se pudo registrar. Revisa los datos y vuelve a intentar.');
    }
  });
}
