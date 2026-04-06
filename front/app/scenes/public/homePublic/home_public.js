import styles from './style.css';
import hill from '../../../assets/img/hill1.png';
import hill2 from '../../../assets/img/hill2.png';
import hill3 from '../../../assets/img/hill3.png';
import hill_4 from '../../../assets/img/hill4.png';
import hill_5 from '../../../assets/img/hill5.png';
import facebook from '../../../assets/img/facebook.png';
import casa from '../../../assets/img/casa.png';
import comida from '../../../assets/img/comida.png';
import hojaM from '../../../assets/img/hojaM.png';
import cepillo from '../../../assets/img/cepillo.png';
import papel from '../../../assets/img/papel.png';
import leaff from '../../../assets/img/leaf.png';
import logo from '../../../assets/img/logo.png';
import plant from '../../../assets/img/plant.png';
import tree from '../../../assets/img/tree.png';
import imagenAbout from '../../../assets/img/imagenAbout.png';
import whastp from '../../../assets/img/whastp.png';
import youtube from '../../../assets/img/youtube.png';
import vegetales from '../../../assets/img/vegetales.jpg';
import hogar from '../../../assets/img/hogar.png';
import graficas from '../../../assets/img/graficas.jpg';
import arrow_back_ios_24dp_FILL0_wght400_GRAD0_opsz24 from '../../../assets/img/arrow_back_ios_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import arrow_forward_ios_24dp_FILL0_wght400_GRAD0_opsz24 from '../../../assets/img/arrow_forward_ios_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import { navigateTo } from '../../../Router';

export function HomePagePublic(params) {
  const pageContent = `
    <div ${styles.cuerpo}> 
    <!-- fondo de montañas -->
    <section class="${styles.parallax}">
        <img src="${hill}" id="hill1" alt="">
        <img src="${hill2}" id="hill2" alt="">
        <img src="${hill3}" id="hill3" alt="">
        <img src="${hill_4}" id="hill4" alt="">
        <img src="${hill_5}" id="hill5" alt="">
        <img src="${tree}" id="tree" alt="">
        <h2 id="text" class="${styles.text}">Tienda Online Ecologica</h2>
        <img src="${leaff}" id="leaf" alt="">
        <img src="${plant}" id="plant" alt="">
        
    </section>
    <!-- main -->
    <main>
      <!-- diseño de separacion -->
      <svg class="${styles.separation}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320"><path fill="#003329" fill-opacity="1" d="M0,64L75.8,288L151.6,32L227.4,128L303.2,320L378.9,64L454.7,160L530.5,64L606.3,192L682.1,160L757.9,192L833.7,32L909.5,256L985.3,224L1061.1,192L1136.8,128L1212.6,224L1288.4,32L1364.2,288L1440,224L1440,0L1364.2,0L1288.4,0L1212.6,0L1136.8,0L1061.1,0L985.3,0L909.5,0L833.7,0L757.9,0L682.1,0L606.3,0L530.5,0L454.7,0L378.9,0L303.2,0L227.4,0L151.6,0L75.8,0L0,0Z"></path></svg>
        <!-- about us -->
        <section class="${styles.about} " id="about_secion">
          <div class="${styles.about_txt}">
            <h2 class="${styles.about_title}">About Us</h2>
            <div class="${styles.statistics}">
              <p>+5000 Sales</p>
              <p>+300 Clients</p>
              <p>50 Products</p>
              <p>+20 <br> Allies</p>
            </div>
            <p class="${styles.cont_txt}">En Eco store creemos que comprar mejor tambi\u00e9n es cuidar el planeta. Por eso reunimos productos ecol\u00f3gicos para el hogar, bienestar y alimentaci\u00f3n, seleccionados por su impacto positivo y calidad. Nuestro objetivo es ayudarte a llevar un estilo de vida m\u00e1s consciente, pr\u00e1ctico y sostenible en tu d\u00eda a d\u00eda.</p>
            <a href="" class="${styles.btn1}">See More</a>
          </div>
          <div class="${styles.about_img}">
            <img src="${imagenAbout}" alt="">
          </div>
        </section>
        <!-- seccion de productos -->
        <section class="${styles.products}">
          <h2 class="${styles.about_title}">Products</h2>
          <div class="${styles.category}">
            <button id="mari"><img src="${hojaM}" alt=""></button>
            <button id="casa"><img src="${casa}" alt=""></button>
            <button id="comid"><img src="${comida}" alt=""></button>
            <button id="papel"><img src="${papel}" alt=""></button>
            <div class="f"></div>
          </div>
          <p class="${styles.text_product_top}">Top select</p>
          <div class="${styles.top_product}">
            <div class="${styles.arrows} left" id="left">
              <img class="${styles.arrow}" src="${arrow_back_ios_24dp_FILL0_wght400_GRAD0_opsz24}" alt="">
            </div>
            <div class="${styles.cards}">
              <div class="${styles.slider} slider" id="lista_1"></div>
            </div>
            <div class="${styles.arrows} right" id="right">
              <img class="${styles.arrow}" src="${arrow_forward_ios_24dp_FILL0_wght400_GRAD0_opsz24}" alt="">
            </div> 
          </div>
        </section>
        <section class="${styles.artles}">
            <div class="${styles.algunos_comentarios}">
                <div class="${styles.perfil_comentario}">
                  <img src="${vegetales}" alt="Canasta de vegetales frescos">
                </div>
                <div class="${styles.comentarios_text}">
                    <p class="${styles.artles_ttitle}">Consumo responsable, resultados reales</p>
                    <p class="${styles.arles_txt}">Cada compra en ECO-ST est\u00e1 pensada para reducir residuos y apoyar alternativas m\u00e1s limpias. Desde alimentos de origen responsable hasta productos reutilizables, te ayudamos a reemplazar h\u00e1bitos cotidianos por opciones que suman al planeta.</p>
                    <a href="" class="${styles.btn3}">Read More</a>
                </div>
            </div>
            <div class="${styles.algunos_comentarios}">
                <div class="${styles.perfil_comentario}">
                  <img src="${hogar}" alt="Productos ecol\u00f3gicos para el hogar">
                </div>
                <div class="${styles.comentarios_text}">
                    <p class="${styles.artles_ttitle}">Tu hogar, m\u00e1s verde y funcional</p>
                    <p class="${styles.arles_txt}">Seleccionamos productos que cuidan tu salud y la de tu familia, sin perder dise\u00f1o ni funcionalidad. Detergentes biodegradables, utensilios durables y soluciones inteligentes para un hogar moderno con menor huella ambiental.</p>
                    <a href="" class="${styles.btn3}">Read More</a>
                </div>
            </div>
            <div class="${styles.algunos_comentarios}">
                <div class="${styles.perfil_comentario}">
                  <img src="${graficas}" alt="Crecimiento del impacto sostenible">
                </div>
                <div class="${styles.comentarios_text}">
                    <p class="${styles.artles_ttitle}">Impacto medible en cada decisi\u00f3n</p>
                    <p class="${styles.arles_txt}">Trabajamos con aliados y categor\u00edas que promueven econom\u00eda circular, materiales renovables y procesos de bajo impacto. As\u00ed, cada producto que eliges en la tienda aporta a una cadena de valor m\u00e1s justa y sostenible.</p>
                    <a href="" class="${styles.btn3}">Read More</a>
                </div>
            </div>
        </section>

    </main>
    <footer class="${styles.pie_pagina}" id="contact-section">
      <img class="${styles.logo}" src="${logo}" alt="img">
      <div class="${styles.contact}">
        <h2>Contacto</h2>
        <ul>
          <li>ATENCION AL CLIENTE</li>
          <li>Email:cliente.bioproteccion@gmail.com</li>
          <li>Cel: 30044</li>
        </ul>
      </div>

      <div class="${styles.Address}">
        <h2>Direccion</h2>
        <ul>
          <li>Zona Industrial Juanchito Torraza</li>
          <li>10 Bodega 03, Manizales- Caldas</li>
          <li>606 894 6604</li>
        </ul>
        <div class="${styles.Socials}">
          <h2>Redes Sociales</h2>
          <img src="${facebook}" alt="icon"><img src="${whastp}" alt="icon"><img src="${youtube}" alt="icon">
          <!-- en caso de tener que cambiar el color, se usa boxicons -->
        </div>
      </div>
    </footer>
    </div>
    `;

  const logic = () => {
    let text = document.getElementById('text');
    let leaf = document.getElementById('leaf');
    let hill1 = document.getElementById('hill1');
    let hill4 = document.getElementById('hill4');
    let hill5 = document.getElementById('hill5');
    let header = document.getElementById('head');
    let user = document.getElementById('user');
    let carrito = document.getElementById('carrito');
    let input = document.getElementById('input_1');
    let aboutSection = document.getElementById('about_secion');
    let about = document.getElementById('nav-about');
    let contactSection = document.getElementById('contact-section');

    if (about) {
      about.addEventListener('click', (evento) => {
        evento.preventDefault();
        navigateTo('/about-us');
      });
    }

    if (params && params.get('section') === 'contact' && contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }

    let arrowleft = document.getElementById('left');
    let arrowrigth = document.getElementById('right');

    mostrarProductos().then(() => {
      const slider = document.getElementById('lista_1');
      const products = slider ? slider.querySelectorAll('.product') : [];
      if (!slider || !products.length) {
        return;
      }

      const moveSlider = (direction) => {
        const firstProduct = slider.querySelector('.product');
        if (!firstProduct) {
          return;
        }

        const sliderStyles = window.getComputedStyle(slider);
        const gap = parseFloat(sliderStyles.columnGap || sliderStyles.gap) || 0;
        const step = firstProduct.offsetWidth + gap;
        slider.scrollBy({
          left: direction * step,
          behavior: 'smooth',
        });
      };

      arrowleft.addEventListener('click', () => {
        moveSlider(-1);
      });

      arrowrigth.addEventListener('click', () => {
        moveSlider(1);
      });
    });

    // Calcula la posición vertical de la sección "About Us"
    let aboutSectionPosition = aboutSection.offsetTop;

    window.addEventListener('scroll', () => {
      let value = window.scrollY;

      if (value < 114) {
        // Restaurar estilos cuando el usuario no ha alcanzado la sección "About Us"
        header.style.backgroundColor = 'transparent';
        carrito.style.backgroundColor = 'transparent';
        user.style.backgroundColor = 'transparent';
        input.style.border = 'none';
      } else {
        // Aplicar estilos cuando el usuario ha pasado cierta posición
        header.style.backgroundColor = '#f9f9f9';
        carrito.style.backgroundColor = '#298172';
        user.style.backgroundColor = '#298172';
        carrito.style.padding = '0';
        user.style.padding = '0';
        carrito.style.width = '60px';
        carrito.style.height = '60px';
        user.style.width = '60px';
        user.style.height = '60px';
        carrito.style.borderRadius = '50px';
        user.style.borderRadius = '50px';
        input.style.border = '2px solid #298172';
      }

      // Detener animaciones cuando el usuario alcanza la sección "About Us"
      if (value >= aboutSectionPosition) {
        return; // No hagas nada más si el usuario ha alcanzado la sección "About Us"
      }

      // Aplicar animaciones mientras el usuario no ha alcanzado la sección "About Us"
      text.style.marginTop = value * 2.5 + 'px';
      leaf.style.left = value * 1.5 + 'px';
      leaf.style.top = value * -1.5 + 'px';
      hill1.style.top = value * 1 + 'px';
      hill4.style.left = value * -1 + 'px';
      hill5.style.left = value * 1 + 'px';
    });
  };

  async function AllProduct() {
    try {
      const response = await fetch(
        'http://localhost:5000/api/auth/get-products'
      );
      if (!response.ok) {
        throw new Error('Error al obtener los productos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      return null;
    }
  }

  async function AllProductbyIdcategory(id_category) {
    try {
      const response = await fetch(
        'http://localhost:5000/api/auth/get-product-by-id-category',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id_category }),
        }
      );

      if (!response.ok) {
        throw new Error('Error al obtener los productos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      return null;
    }
  }

  async function mostrarProductos() {
    const productos = await AllProduct();
    const contenedorProductos = document.getElementById('lista_1');

    if (productos && Array.isArray(productos)) {
      productos.forEach((producto) => {
        const divProducto = document.createElement('div');
        divProducto.classList.add(styles.product, 'product');
        divProducto.innerHTML = `
          <div class="${styles.card}">
            <div class="${styles.card_prodct}">
              <img src="${producto.image}" alt="${producto.nombre}">
              <h3 class="${styles.title_product}">${producto.name}</h3>
              <div class="${styles.producct_info}">
                <p class="${styles.precio} precio">${producto.price}</p>
                <a class="${styles.btn2} agregar_carrito" data-id="${producto.id}">Add to cart</a>
              </div>
            </div>
          </div>
        `;
        contenedorProductos.appendChild(divProducto);
      });
    } else {
      console.error('No se pudieron cargar los productos o la respuesta no es un array');
    }
  }

  return {
    pageContent,
    logic,
  };
};
