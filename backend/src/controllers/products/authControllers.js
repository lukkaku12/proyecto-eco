const { createProduct, getProductByName, getProductByIdCategory } = require('../../models/products/productModel');
const { pool: poolmysql } = require('../../config/database');

const getAllProducts = async (req, res) => {
  try {
    const [rows] = await poolmysql.query('SELECT * FROM products');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).send('Error interno del servidor');
  }
};


const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await poolmysql.query('SELECT * FROM products WHERE id = ?', [id]);

    if (!rows.length) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    res.status(500).send('Error interno del servidor');
  }
};

const getProductsByIdCategory = async (req, res) => {
  try {
    const { id_category } = req.query;

    if (!id_category) {
      return res.status(400).json({ message: 'id_category es requerido' });
    }

    const products = await getProductByIdCategory(id_category);
    res.json(products);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).send('Error interno del servidor');
  }
};

const register_product = async (req, res) => {
  try {
    const { name, price, quantity, image, id_category } = req.body;

    const product = await getProductByName(name);
    if (product) {
      return res.status(400).json({ message: 'Product already exists' });
    }

    const newProductId = await createProduct({
      name,
      price,
      quantity,
      image,
      id_category,
    });

    res.status(201).json({
      message: `Product registered successfully with id: ${newProductId}`,
    });
  } catch (error) {
    console.error('Error en register_product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllProducts,
  register_product,
  getProductsByIdCategory,
  getProductById,
};
