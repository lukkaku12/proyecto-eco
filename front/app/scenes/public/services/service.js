import styles from './style.css';
import { navigateTo } from '../../../Router';
import vegetales from '../../../assets/img/vegetales.jpg';
import graficas from '../../../assets/img/graficas.jpg';
import belleza from '../../../assets/img/belleza.png';
import cuidado from '../../../assets/img/cuidado.png';
import hogar from '../../../assets/img/hogar.png';

export function Service() {
  const pageContent = `
    <main class="${styles.services}">
      <section class="${styles.hero}">
        <div class="${styles.heroText}">
          <h1>Soluciones sostenibles para tu estilo de vida</h1>
          <p class="${styles.subtitle}">
            Te acompa&ntilde;amos con productos, recomendaciones y asesor&iacute;a para que cada compra
            tenga impacto positivo en tu hogar y en el planeta.
          </p>
          <div class="${styles.actions}">
            <button class="${styles.primaryBtn}" id="go-home">Ir al inicio</button>
            <button class="${styles.secondaryBtn}" id="go-about">Conocer m&aacute;s</button>
          </div>
        </div>
        <div class="${styles.heroImageWrap}">
          <img src="${vegetales}" alt="Canasta de productos ecologicos" class="${styles.heroImage}">
        </div>
      </section>

      <section class="${styles.kpis}">
        <article class="${styles.kpiCard}">
          <p class="${styles.kpiValue}">+5.000</p>
          <p class="${styles.kpiLabel}">ventas responsables</p>
        </article>
        <article class="${styles.kpiCard}">
          <p class="${styles.kpiValue}">+300</p>
          <p class="${styles.kpiLabel}">clientes activos</p>
        </article>
        <article class="${styles.kpiCard}">
          <p class="${styles.kpiValue}">50+</p>
          <p class="${styles.kpiLabel}">productos eco</p>
        </article>
        <article class="${styles.kpiCard}">
          <p class="${styles.kpiValue}">20+</p>
          <p class="${styles.kpiLabel}">aliados sostenibles</p>
        </article>
      </section>

      <section class="${styles.insights}">
        <div class="${styles.insightImage}">
          <img src="${graficas}" alt="Crecimiento del mercado organico">
        </div>
        <div class="${styles.insightText}">
          <h2>Por que elegir nuestros servicios</h2>
          <p>
            El mercado organico sigue creciendo porque las personas buscan calidad, trazabilidad y
            menor impacto ambiental. En Eco Store filtramos opciones que realmente cumplen esos criterios.
          </p>
          <ul class="${styles.list}">
            <li>Seleccion curada por categorias de uso real.</li>
            <li>Productos orientados a reducir residuos y consumo innecesario.</li>
            <li>Acompanamiento para comprar mejor, sin complicaciones.</li>
          </ul>
        </div>
      </section>

      <section class="${styles.catalog}">
        <h2>Categorias destacadas</h2>
        <p>Explora lineas disenadas para el bienestar personal y del hogar.</p>
        <div class="${styles.cards}">
          <article class="${styles.card}">
            <div class="${styles.cardImageWrap}">
              <img src="${belleza}" alt="Productos de belleza ecologica" class="${styles.cardImage}">
            </div>
            <h3>Belleza natural</h3>
            <button class="${styles.cardBtn}">Ver categoria</button>
          </article>
          <article class="${styles.card}">
            <div class="${styles.cardImageWrap}">
              <img src="${cuidado}" alt="Productos de cuidado personal" class="${styles.cardImage}">
            </div>
            <h3>Cuidado personal</h3>
            <button class="${styles.cardBtn}">Ver categoria</button>
          </article>
          <article class="${styles.card}">
            <div class="${styles.cardImageWrap}">
              <img src="${hogar}" alt="Productos ecologicos para el hogar" class="${styles.cardImage}">
            </div>
            <h3>Hogar sostenible</h3>
            <button class="${styles.cardBtn}">Ver categoria</button>
          </article>
        </div>
      </section>
    </main>
  `;

  const logic = () => {
    const homeBtn = document.getElementById('go-home');
    const aboutBtn = document.getElementById('go-about');

    if (homeBtn) {
      homeBtn.addEventListener('click', () => navigateTo('/home-page'));
    }

    if (aboutBtn) {
      aboutBtn.addEventListener('click', () => navigateTo('/about-us'));
    }
  };

  return {
    pageContent,
    logic,
  };
}
