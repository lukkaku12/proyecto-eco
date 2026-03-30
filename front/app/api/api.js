const API_BASE_URL = 'http://localhost:4000/api/auth';

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Request failed with status ${response.status}`);
  }

  if (response.status === 204) return null;

  return response.json();
}

export async function loginUser(email, password) {
  return request('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function registerUser(payload) {
  return request('/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function verifyUserToken(token) {
  return request('/verify-token', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getProducts() {
  return request('/get-products', { method: 'GET' });
}

export async function getProductById(id) {
  return request(`/get-products/${id}`, { method: 'GET' });
}

export async function getProductsByCategory(idCategory) {
  const query = new URLSearchParams({ id_category: String(idCategory) });
  return request(`/get-product-by-id-category?${query.toString()}`, {
    method: 'GET',
  });
}

export async function getCategories() {
  return request('/categories', { method: 'GET' });
}

export async function getUsers() {
  return request('/users', { method: 'GET' });
}

export async function getUserById(id) {
  return request(`/users/${id}`, { method: 'GET' });
}
