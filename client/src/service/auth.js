export default class AuthService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
    this.id ="sample"
  }

  async signup(id, email, password, passwordRe, name) {
    const data = await this.http.fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        id,
        email,
        password,
        passwordRe,        
        name,
      }),
    });
    this.tokenStorage.saveToken(data.token);    
    return data;
  }

  async login(id, password) {
    console.log(this.http)
    const data = await this.http.fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ id, password }),
    });
    this.tokenStorage.saveToken(data.token);   
    this.tokenStorage.saveId(data.id)
    return data;
  }

  async me() {
    const token = this.tokenStorage.getToken();    
    return await this.http.fetch('/auth/me', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async logout() {
    this.tokenStorage.clearToken();
  }
}
