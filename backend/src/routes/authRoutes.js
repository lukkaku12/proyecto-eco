const express = require('express');
const {
  register,
  login,
  verifyToken,
  updateProfile,
  deleteProfile,
  getUsers,
  getUserByIdPublic,
} = require('../controllers/users/authController');

const {
  register_product,
  getAllProducts,
  getProductsByIdCategory,
  getProductById,
} = require('../controllers/products/authControllers');
const { register_order } = require('../controllers/orders/authControllers');
const { listCategories } = require('../controllers/categories/categoryController');

const router = express.Router();

router.delete('/delete-profile/:id', deleteProfile);
router.patch('/update-profile/:id', updateProfile);
router.post('/login', login);
router.post('/register', register);
router.post('/verify-token', verifyToken);

router.get('/users', getUsers);
router.get('/users/:id', getUserByIdPublic);

router.post('/register-product', register_product);
router.get('/get-products', getAllProducts);
router.get('/get-products/:id', getProductById);
router.get('/get-product-by-id-category', getProductsByIdCategory);
router.get('/categories', listCategories);

router.post('/register-order', register_order);

module.exports = router;
