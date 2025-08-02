// src/lib/apiFetch.js
const BASE_URL = 'http://localhost:8000';
const apiFetch = async (url, options = {}) => {
  const defaultOptions = {
    credentials: 'include', // Required for Sanctum cookies
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(options.headers || {}),
    },
  };

  const response = await fetch(`${BASE_URL}${url}`, {
    ...defaultOptions,
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'API error');
  }

  return data;
};


export default apiFetch;
