import styles from './about-us.css';
import { navigateTo } from '../../../Router';
import imagenAbout from '../../../assets/img/imagenAbout.png';
import vegetales from '../../../assets/img/vegetales.jpg';
import graficas from '../../../assets/img/graficas.jpg';

export function AboutUsPage() {
  const pageContent = `
    <main class="${styles.aboutPage}">
      <section class="${styles.hero}">
        <div class="${styles.heroText}">
          <p class="${styles.badge}">Sobre Eco Store</p>
          <h1>Creamos una tienda para consumir con conciencia</h1>
          <p>
            En Eco Store reunimos productos ecologicos para hogar, bienestar y alimentacion.
            Priorizamos calidad, funcionalidad e impacto positivo para que comprar mejor sea facil.
          </p>
          <div class="${styles.actions}">
            <button id="about-go-services" class="${styles.primaryBtn}">Ver servicios</button>
            <button id="about-go-home" class="${styles.secondaryBtn}">Volver al inicio</button>
          </div>
        </div>
        <div class="${styles.heroImageWrap}">
          <img src="${imagenAbout}" alt="Equipo y productos Eco Store" class="${styles.heroImage}">
        </div>
      </section>

      <section class="${styles.gridSection}">
        <article class="${styles.card}">
          <h2>Mision</h2>
          <p>
            Facilitar el acceso a productos sostenibles que reduzcan el impacto ambiental
            sin sacrificar diseno, rendimiento ni precio justo.
          </p>
        </article>
        <article class="${styles.card}">
          <h2>Vision</h2>
          <p>
            Ser una referencia en comercio responsable en Colombia, conectando personas
            y marcas que impulsan una economia circular.
          </p>
        </article>
        <article class="${styles.card}">
          <h2>Valores</h2>
          <ul>
            <li>Transparencia en seleccion de productos.</li>
            <li>Compromiso real con sostenibilidad.</li>
            <li>Experiencia simple para el cliente.</li>
          </ul>
        </article>
      </section>

      <section class="${styles.impact}">
        <div class="${styles.impactImage}">
          <img src="${vegetales}" alt="Canasta con alimentos ecologicos">
        </div>
        <div class="${styles.impactText}">
          <h2>Impacto que buscamos</h2>
          <p>
            Cada categoria de la tienda esta pensada para ayudar a reemplazar habitos de alto impacto
            por opciones responsables: menos residuos, mejores materiales y consumo mas informado.
          </p>
          <p>
            Trabajamos con aliados que promueven procesos limpios y uso eficiente de recursos,
            fortaleciendo una cadena de valor mas justa y sostenible.
          </p>
        </div>
      </section>

      <section class="${styles.stats}">
        <article><p class="${styles.value}">+5000</p><p>ventas responsables</p></article>
        <article><p class="${styles.value}">+300</p><p>clientes activos</p></article>
        <article><p class="${styles.value}">50+</p><p>productos ecologicos</p></article>
        <article><p class="${styles.value}">20+</p><p>aliados estrategicos</p></article>
      </section>

      <section class="${styles.closing}">
        <div>
          <h2>Sigamos construyendo un consumo mas inteligente</h2>
          <p>
            Si quieres conocer como elegir mejor para tu hogar, revisa nuestros servicios y
            categorias destacadas.
          </p>
        </div>
        <img src="${graficas}" alt="Crecimiento del consumo sostenible">
      </section>
    </main>
  `;

  const logic = () => {
    const servicesBtn = document.getElementById('about-go-services');
    const homeBtn = document.getElementById('about-go-home');

    if (servicesBtn) {
      servicesBtn.addEventListener('click', () => navigateTo('/services'));
    }

    if (homeBtn) {
      homeBtn.addEventListener('click', () => navigateTo('/home-page'));
    }
  };

  return {
    pageContent,
    logic,
  };
}
