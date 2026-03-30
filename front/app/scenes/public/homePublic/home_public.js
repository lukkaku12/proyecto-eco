import styles from './style.css';
import hill from '../../../assets/img/hill1.png';
import hill2 from '../../../assets/img/hill2.png';
import hill3 from '../../../assets/img/hill3.png';
import hill_4 from '../../../assets/img/hill4.png';
import hill_5 from '../../../assets/img/hill5.png';
import facebook from '../../../assets/img/facebook.png';
import leaff from '../../../assets/img/leaf.png';
import logo from '../../../assets/img/logo.png';
import plant from '../../../assets/img/plant.png';
import tree from '../../../assets/img/tree.png';
import imagenAbout from '../../../assets/img/imagenAbout.png';
import whastp from '../../../assets/img/whastp.png';
import youtube from '../../../assets/img/youtube.png';
import {
  getCategories,
  getProductById,
  getProducts,
  getProductsByCategory,
} from '../../../api/api';

export function HomePagePublic() {
  const pageContent = /* html */ `
    <div class="${styles.cuerpo}">
      <section class="${styles.parallax}">
        <img src="${hill}" id="hill1" alt="">
        <img src="${hill2}" id="hill2" alt="">
        <img src="${hill3}" id="hill3" alt="">
        <img src="${hill_4}" id="hill4" alt="">
        <img src="${hill_5}" id="hill5" alt="">
        <img src="${tree}" id="tree" alt="">
        <h2 id="text" class="${styles.text}">Tienda Online Ecológica</h2>
        <img src="${leaff}" id="leaf" alt="">
        <img src="${plant}" id="plant" alt="">
      </section>

      <main>
        <section class="${styles.about}" id="about_secion">
          <div class="${styles.about_txt}">
            <h2 class="${styles.about_title}">About Us</h2>
            <p class="${styles.cont_txt}">Somos una tienda enfocada en productos ecológicos para el hogar y el cuidado personal.</p>
          </div>
          <div class="${styles.about_img}">
            <img src="${imagenAbout}" alt="about us">
          </div>
        </section>

        <section class="${styles.products}">
          <h2 class="${styles.about_title}">Products</h2>
          <select id="category-filter">
            <option value="">Todas las categorías</option>
          </select>
          <div id="lista_1" class="${styles.slider}"></div>
          <article id="product-detail"></article>
        </section>
      </main>

      <footer class="${styles.pie_pagina}">
        <img class="${styles.logo}" src="${logo}" alt="logo">
        <div class="${styles.Socials}">
          <h2>Redes Sociales</h2>
          <img src="${facebook}" alt="facebook">
          <img src="${whastp}" alt="whatsapp">
          <img src="${youtube}" alt="youtube">
        </div>
      </footer>
    </div>
  `;

  const logic = () => {
    cargarCategorias();
    mostrarProductos();

    const text = document.getElementById('text');
    const leaf = document.getElementById('leaf');
    const hill1 = document.getElementById('hill1');
    const hill4 = document.getElementById('hill4');
    const hill5 = document.getElementById('hill5');

    window.addEventListener('scroll', () => {
      const value = window.scrollY;
      text.style.marginTop = `${value * 2.5}px`;
      leaf.style.left = `${value * 1.5}px`;
      leaf.style.top = `${value * -1.5}px`;
      hill1.style.top = `${value}px`;
      hill4.style.left = `${value * -1}px`;
      hill5.style.left = `${value}px`;
    });

    const categoryFilter = document.getElementById('category-filter');
    categoryFilter.addEventListener('change', async (event) => {
      const categoryId = event.target.value;
      if (!categoryId) {
        mostrarProductos();
        return;
      }

      const filtered = await getProductsByCategory(categoryId);
      renderProductos(filtered);
    });
  };

  async function cargarCategorias() {
    const categoryFilter = document.getElementById('category-filter');
    try {
      const categories = await getCategories();
      categoryFilter.innerHTML = `
        <option value="">Todas las categorías</option>
        ${categories
          .map((category) => `<option value="${category.id}">${category.name}</option>`)
          .join('')}
      `;
    } catch (error) {
      categoryFilter.innerHTML = '<option value="">No se pudieron cargar categorías</option>';
    }
  }

  async function mostrarProductos() {
    try {
      const productos = await getProducts();
      renderProductos(productos);
    } catch (error) {
      const contenedorProductos = document.getElementById('lista_1');
      contenedorProductos.innerHTML = '<p>Error cargando productos desde el backend.</p>';
    }
  }

  function renderProductos(productos) {
    const contenedorProductos = document.getElementById('lista_1');

    if (!Array.isArray(productos) || productos.length === 0) {
      contenedorProductos.innerHTML = '<p>No hay productos disponibles.</p>';
      return;
    }

    contenedorProductos.innerHTML = productos
      .map(
        (producto) => `
          <div class="${styles.card} product" data-id="${producto.id}">
            <div class="${styles.card_prodct}">
              <img src="${producto.image || ''}" alt="${producto.name}">
              <h3 class="${styles.title_product}">${producto.name}</h3>
              <div class="${styles.producct_info}">
                <p class="${styles.precio} precio">$${producto.price}</p>
              </div>
            </div>
          </div>
      `
      )
      .join('');

    document.querySelectorAll('.product').forEach((card) => {
      card.addEventListener('click', async () => {
        const productId = card.dataset.id;
        const product = await getProductById(productId);
        const detail = document.getElementById('product-detail');
        detail.innerHTML = `
          <h3>Detalle de producto</h3>
          <p><strong>Nombre:</strong> ${product.name}</p>
          <p><strong>Precio:</strong> $${product.price}</p>
          <p><strong>Cantidad disponible:</strong> ${product.quantity}</p>
          <p><strong>Categoría:</strong> ${product.id_category}</p>
        `;
      });
    });
  }

  return {
    pageContent,
    logic,
  };
}
