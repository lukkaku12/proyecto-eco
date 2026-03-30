import { navigateTo } from '../../../Router';
import styles from './users.css';
import { getUsers, getUserById } from '../../../api/api';

export function UserScene(params) {
  let pageContent = `
    <h2 class=${styles['page-title']}>Bienvenido a usuarios</h2>
    <p>Desde Usuarios</p>
    <div id="user-info" class="${styles['user-info']}"></div>
    <div class="${styles.loader}" id="loader"></div>
`;

  let logic = async () => {
    try {
      const users = await getUsers();
      const userInfo = document.getElementById('user-info');
      userInfo.innerHTML = `
        <table class="${styles['user-table']}">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${users
                  .map(
                    (user) => `
                <tr>
                    <td>${user.name} ${user.last_name}</td>
                    <td>${user.email}</td>
                    <td><button id="${user.id}" class="${styles['btn-see-more']}">Ver más</button></td>
                </tr>`
                  )
                  .join('')}
            </tbody>
        </table>
        `;

      document.querySelectorAll(`.${styles['btn-see-more']}`).forEach((btn) => {
        btn.addEventListener('click', (e) => {
          navigateTo(`/dashboard/users?id=${e.target.id}`);
        });
      });
    } catch (error) {
      document.getElementById('user-info').innerHTML = '<p>Error cargando usuarios locales.</p>';
    } finally {
      document.querySelector('#loader').classList.add(styles.hidden);
    }
  };

  if (params.get('id')) {
    const userId = params.get('id');
    pageContent = `
        <h2 class=${styles['page-title']}>Información del Usuario</h2>
        <div id="user-info" class="${styles['user-info']}"></div>
        <div class="${styles.loader}" id="loader"></div>
        `;

    logic = async () => {
      try {
        const user = await getUserById(userId);
        const userInfo = document.getElementById('user-info');
        userInfo.innerHTML = `
            <table class="${styles['user-details-table']}">
                <tr><th>ID</th><td>${user.id}</td></tr>
                <tr><th>Name</th><td>${user.name}</td></tr>
                <tr><th>Last name</th><td>${user.last_name}</td></tr>
                <tr><th>Email</th><td>${user.email}</td></tr>
                <tr><th>Address</th><td>${user.address}</td></tr>
                <tr><th>City</th><td>${user.city}</td></tr>
                <tr><th>Country</th><td>${user.country}</td></tr>
                <tr><th>Phone</th><td>${user.number}</td></tr>
            </table>
            `;
      } catch (error) {
        document.getElementById('user-info').innerHTML = '<p>No se pudo cargar el usuario.</p>';
      } finally {
        document.querySelector('#loader').classList.add(styles.hidden);
      }
    };
  }

  return {
    pageContent,
    logic,
  };
}
