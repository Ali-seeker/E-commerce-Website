const BASE_URL = 'http://127.0.0.1:8000';

export async function googleLogin(token) {
  const res = await fetch(`${BASE_URL}/auth/auth/google`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  });
  return await res.json();
}

export async function getProducts() {
  const res = await fetch('http://localhost:8000/store/products/')
;
  return await res.json();
}
