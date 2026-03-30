import styles from './home.css';
import { getUsers } from '../../../api/api';

export function HomeScene() {
  const footer = `
  <footer><p>All rights reserved.</p></footer>
  `;

  const pageContent = `
  <div class="${styles.hidden}" id="home_container">
    <h2>Home</h2>
    <p>Welcome to the home view.</p>
    <div id="user-info"></div>
    ${footer}
  </div>
  <div class="${styles.loader}" id="loader"></div>
  `;

  const logic = async () => {
    try {
      const users = await getUsers();
      const featured = users[0];

      const userInfo = document.getElementById('user-info');
      if (!featured) {
        userInfo.innerHTML = '<p>No hay usuarios disponibles.</p>';
      } else {
        userInfo.innerHTML = `
          <p>User: ${featured.id}</p>
          <p>Name: ${featured.name} ${featured.last_name}</p>
          <p>Email: ${featured.email}</p>
          <p>Address: ${featured.address}, ${featured.city}, ${featured.country}</p>
          <p>Phone: ${featured.number}</p>
        `;
      }
    } catch (error) {
      const userInfo = document.getElementById('user-info');
      userInfo.innerHTML = '<p>Error cargando datos desde la API local.</p>';
    } finally {
      document.querySelector('#loader').classList.add(styles.hidden);
      document.getElementById('home_container').classList.remove(styles.hidden);
    }
  };

  return {
    pageContent,
    logic,
  };
}
