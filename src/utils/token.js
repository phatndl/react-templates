export default class TokenControl {
  static Token(token) {
    if (token) {
      return localStorage.setItem('token', token);
    }
    return localStorage.getItem('token');
  }
}
