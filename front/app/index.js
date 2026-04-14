import loader from './assets/loader.svg'
import global from './styles/global.css';
import { App } from './App';
import logo from './assets/img/logo.png';

function setFavicon() {
  let link = document.querySelector("link[rel='icon']");
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    document.head.appendChild(link);
  }
  link.setAttribute('type', 'image/png');
  link.setAttribute('href', logo);
}

// Cuando cargue el archivo index.html, ejecuto lo que tiene por dentro App
document.addEventListener('DOMContentLoaded', () => {
  setFavicon();
  App();
});
// document.body.innerHTML += `<img 
//                             src="${loader}" 
//                             alt="loader" 
//                             class="loader" 
//                             style="
//                                 position: fixed; 
//                                 top: 80%; 
//                                 left: 50%; 
//                                 transform: translate(-50%, -50%);
//                                 width: 150px;
//                             ">`;

