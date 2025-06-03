/**
 * Custom signIn that proxies credentials to external auth server
 */
export async function customSignIn(email: string, password: string) {
  const res = await fetch('http://localhost:3001/callback/credentials', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      email,
      password,
      csrfToken: '', // Optional: pass CSRF token from auth page
    }),
    credentials: 'include', // Needed for cookies
  });

  return res;
}
