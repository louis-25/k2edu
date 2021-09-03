const TOKEN = 'token';

// jwt토큰 저장공간
export default class TokenStorage {
  saveToken(token) {
    localStorage.setItem(TOKEN, token);
  }  

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  clearToken() {
    localStorage.clear(TOKEN);
  }
}
