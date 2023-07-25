

// Fungsi untuk mengatur cookie dengan waktu kadaluarsa 6 jam (6 * 60 * 60 * 1000 ms)
export function setCookieWithExpiration(name: string, value: string): void {
  const expirationTimeInMs = 6 * 60 * 60 * 1000; // 6 jam dalam milidetik
  const date = new Date();
  date.setTime(date.getTime() + expirationTimeInMs);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Fungsi untuk mendapatkan nilai cookie berdasarkan namanya
export function getCookie(name: string): string | null {
  const cookieName = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}