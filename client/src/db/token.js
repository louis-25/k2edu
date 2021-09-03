const TOKEN = 'token';
const ID = 'id';
// jwt토큰 저장공간
export default class TokenStorage {
  saveToken(token) {
    localStorage.setItem(TOKEN, token);
  }  

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  saveId(id) {
    localStorage.setItem(ID, id)
  }

  getId(){
    return localStorage.getItem(ID)
  }

  clearToken() {
    localStorage.clear(TOKEN);
  }
}
