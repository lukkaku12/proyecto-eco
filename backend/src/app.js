require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const { normalizeEncoding } = require('./utils/encoding');

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  const originalJson = res.json.bind(res);
  res.json = (payload) => originalJson(normalizeEncoding(payload));
  next();
});

// Rutas
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    console.log("getting here");
    res.send("root is working")
})

module.exports = app;
