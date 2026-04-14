import style from './navbar-logic.css';
import styles from '../../../scenes/public/homePublic/style.css';
import { navigateTo } from '../../../Router';
import { verifyToken } from '../../../Router';
import { formValidator } from '../../../helpers/index';
import { login } from '../../../scenes/public/login/components/form';

export function logicNav() {
  const root = document.getElementById('root');
  const user = document.getElementById('user');
  const searchfrom = document.getElementById('from-search');
  const searchModal = document.getElementById('search_div');

  const carrito = document.getElementById('carrito');
  const elemetos1 = document.getElementById('lista_1');
  const lista = document.querySelector('#lista-carrito div');
  const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
  const total = document.getElementById('precio_total');

  let precio = 0;
  let isPopupOpen = false;
  let popUp = null;

  if (!root) {
    return;
  }

  function cargarEventListeners() {
    if (elemetos1) {
      elemetos1.addEventListener('click', comprarElemento);
    }

    if (carrito) {
      carrito.addEventListener('click', eliminarElemnto);
    }

    if (vaciarCarritoBtn) {
      vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    }
  }

  function comprarElemento(e) {
    if (e.target.classList.contains('agregar_carrito')) {
      const elemeto = e.target.parentElement.parentElement;
      leerDatosElemento(elemeto);
    }
  }

  function leerDatosElemento(elemento) {
    const infoElemnto = {
      imagen: elemento.querySelector('img').src,
      titulo: elemento.querySelector('h3').textContent,
      precio: elemento.querySelector('.precio').textContent,
      id: elemento.querySelector('a').getAttribute('data-id'),
    };
    insertarCarrito(infoElemnto);
  }

  function insertarCarrito(elemento) {
    if (!lista) {
      return;
    }

    const row = document.createElement('div');
    row.innerHTML = `
      <div class="${style.producto_carrito}" data-id="${elemento.id}">
        <div class="${style.producto_carrito_img_text}">
          <div class="${style.img_product_carrito}">
            <img src="${elemento.imagen}" width="100">
          </div>
          <div class="${style.info_product_carrito} info_product_carrito">
            <div class="${style.text_product_carrito}">
              <p>${elemento.titulo}</p>
              <p class="precio">Precio: $${elemento.precio}</p>
            </div>
            <div class="${styles.cantidad}">
              <p class="${styles.botones_cantidad}" id="sumar">+</p>
              <p id="cantidad">1</p>
              <p class="${styles.botones_cantidad}" id="restar">-</p>
            </div>
          </div>
        </div>
        <a href="#" class="borrar ${style.eliminados}" data-id="${elemento.id}">Eliminar</a>
      </div>
    `;

    const numpre = parseInt(elemento.precio, 10) || 0;
    precio += numpre;
    if (total) {
      total.textContent = String(precio);
    }
    lista.appendChild(row);
  }

  function eliminarElemnto(e) {
    if (!e.target.classList.contains('borrar')) {
      return;
    }

    const item = e.target.closest(`.${style.producto_carrito}`);
    if (!item) {
      return;
    }

    const preciores = item.querySelector('.precio');
    const preciorestart = preciores ? preciores.textContent : '';
    const soloNumeros = preciorestart.replace(/\D/g, '');
    const numpre = parseInt(soloNumeros, 10) || 0;

    precio -= numpre;
    if (precio < 0) {
      precio = 0;
    }
    if (total) {
      total.textContent = String(precio);
    }

    item.parentElement.remove();
  }

  function vaciarCarrito() {
    if (!lista) {
      return false;
    }

    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }

    precio = 0;
    if (total) {
      total.textContent = '0';
    }

    return false;
  }

  document.addEventListener('click', function (event) {
    if (searchModal && !event.target.closest('form')) {
      searchModal.style.display = 'none';
    }
  });

  if (searchfrom) {
    searchfrom.addEventListener('click', function searchs() {
      if (searchModal) {
        searchModal.style.display = 'block';
      }
    });
  }

  async function registerUser(name, email, password) {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Fallo en el registro');
      }

      return true;
    } catch (error) {
      console.error('Fallo en el registro:', error);
      return false;
    }
  }

  function renderLoginModal() {
    if (!popUp) {
      return;
    }

    popUp.className = style.modalOverlay;
    popUp.innerHTML = `
      <div class="${style.modalContent}">
        <button id="close-auth-modal" class="${style.modalClose}" type="button" aria-label="Cerrar">x</button>
        <form id="loginForm" class="${style.form}">
          <h2 class="${style.Login}">Iniciar sesion</h2>
          <label for="email" class="${style.label}">Correo:</label>
          <input type="text" id="email" name="email" autocomplete="email" class="${style['input-email']}">
          <label for="password" class="${style.label}">Contrasena:</label>
          <input type="password" id="password" name="password" autocomplete="current-password" class="${style['input-password']}">
          <button type="submit" class="${style['button-send']}">Entrar</button>
        </form>
        <div class="${style.divRight}">
          <h2>Aun no tienes cuenta?</h2>
          <p>Registrate para continuar</p>
          <button class="${style.registerBtn}" id="profile-register-btn" type="button">Registrarme</button>
        </div>
      </div>
    `;
    const closeAuthModal = document.getElementById('close-auth-modal');
    if (closeAuthModal) {
      closeAuthModal.addEventListener('click', function () {
        if (popUp) {
          popUp.remove();
        }
        popUp = null;
        isPopupOpen = false;
      });
    }

    const profileRegisterBtn = document.getElementById('profile-register-btn');
    if (profileRegisterBtn) {
      profileRegisterBtn.addEventListener('click', function (event) {
        event.preventDefault();
        renderRegisterModal();
      });
    }

    const form = document.getElementById('loginForm');
    if (form) {
      form.addEventListener('submit', async function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!formValidator(email, password)) {
          alert('Completa todos los campos');
          return;
        }

        const token = await login(email, password);
        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('holaaaa', 'hola');
          navigateTo('/home-page');
        } else {
          alert('Credenciales invalidas');
        }
      });
    }
  }

  function renderRegisterModal() {
    if (!popUp) {
      return;
    }

    popUp.className = style.modalOverlay;
    popUp.innerHTML = `
      <div class="${style.modalContent}">
        <button id="close-auth-modal" class="${style.modalClose}" type="button" aria-label="Cerrar">x</button>
        <form id="registerForm" class="${style.form}">
          <h2 class="${style.Login}">Registro</h2>
          <label for="register-name" class="${style.label}">Nombre:</label>
          <input type="text" id="register-name" autocomplete="name" class="${style['input-email']}">
          <label for="register-email" class="${style.label}">Correo:</label>
          <input type="text" id="register-email" autocomplete="email" class="${style['input-email']}">
          <label for="register-password" class="${style.label}">Contrasena:</label>
          <input type="password" id="register-password" autocomplete="new-password" class="${style['input-password']}">
          <label for="register-confirm" class="${style.label}">Confirmar contrasena:</label>
          <input type="password" id="register-confirm" autocomplete="new-password" class="${style['input-password']}">
          <button type="submit" class="${style['button-send']}">Crear cuenta</button>
        </form>
        <div class="${style.divRight}">
          <h2>Ya tienes una cuenta?</h2>
          <p>Vuelve al inicio de sesion</p>
          <button class="${style.registerBtn}" id="back-to-login-btn" type="button">Ir a entrar</button>
        </div>
      </div>
    `;
    const closeAuthModal = document.getElementById('close-auth-modal');
    if (closeAuthModal) {
      closeAuthModal.addEventListener('click', function () {
        if (popUp) {
          popUp.remove();
        }
        popUp = null;
        isPopupOpen = false;
      });
    }

    const backToLoginBtn = document.getElementById('back-to-login-btn');
    if (backToLoginBtn) {
      backToLoginBtn.addEventListener('click', function (event) {
        event.preventDefault();
        renderLoginModal();
      });
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const name = document.getElementById('register-name').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm').value;

        if (!name || !formValidator(email, password)) {
          alert('Completa todos los campos');
          return;
        }

        if (password !== confirmPassword) {
          alert('Las contrasenas no coinciden');
          return;
        }

        const registered = await registerUser(name, email, password);
        if (!registered) {
          alert('No se pudo registrar');
          return;
        }

        alert('Registro exitoso');
        renderLoginModal();
      });
    }
  }

  if (user) {
    user.addEventListener('click', async function () {
      const token = localStorage.getItem('token');
      let isValid = false;

      if (token) {
        [isValid] = await verifyToken(token);
      }

      if (isValid) {
        navigateTo('/about-us');
        return;
      }

      if (isPopupOpen) {
        if (popUp) {
          popUp.remove();
        }
        popUp = null;
        isPopupOpen = false;
        return;
      }

      popUp = document.createElement('div');
      popUp.style.display = 'flex';
      root.appendChild(popUp);
      popUp.addEventListener('click', function (event) {
        if (event.target === popUp) {
          popUp.remove();
          popUp = null;
          isPopupOpen = false;
        }
      });
      isPopupOpen = true;
      renderLoginModal();
    });
  }

  const homeLink = document.getElementById('nav-home');
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('/home-page');
    });
  }

  const aboutLink = document.getElementById('nav-about');
  if (aboutLink) {
    aboutLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('/about-us');
    });
  }

  const serviceLink = document.getElementById('nav-service');
  if (serviceLink) {
    serviceLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('/services');
    });
  }

  const contactLink = document.getElementById('nav-contact');
  if (contactLink) {
    contactLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('/home-page?section=contact');
    });
  }

  cargarEventListeners();
}
