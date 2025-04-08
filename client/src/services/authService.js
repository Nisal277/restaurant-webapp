// src/services/authService.js

import axios from "axios";

const API_URL = "http://localhost:5001/api/auth";

const login = async (credentials) => {
  const res = await axios.post(`${API_URL}/login`, credentials);
  return res.data;
};

export default { login };
