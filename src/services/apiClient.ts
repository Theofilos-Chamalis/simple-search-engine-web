import { create } from 'apisauce';

const API_BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const api = create({
  baseURL: `${API_BASE_URL}/api`,
  headers: { 'x-api-key': API_KEY },
  timeout: 5000,
});
