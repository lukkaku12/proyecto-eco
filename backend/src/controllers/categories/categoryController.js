const { getAllCategories } = require('../../models/categories/categoryModel');

const listCategories = async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    console.error('Error en listCategories:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = {
  listCategories,
};
