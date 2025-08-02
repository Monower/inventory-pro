import apiFetch from "./apiFetch";



export const getCsrfToken = async () => {
  await fetch('http://localhost:8000/sanctum/csrf-cookie', {
    credentials: 'include',
  });
};


export const login = async (email, password) => {
  const result = await getCsrfToken();

  console.log('csrf result: ',result);

  return apiFetch('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
};



export const register = async (name, email, password) => {
  await getCsrfToken();

  return apiFetch('/api/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });
};


export const getCurrentUser = async () => {
  return apiFetch('/api/user', {
    method: 'GET',
  });
};


export const logout = async () => {
  return apiFetch('/api/logout', {
    method: 'POST',
  });
};


