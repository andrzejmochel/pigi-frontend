const AUTH_USER_KEY = "user";

class AuthService {
    isAuthenticated() {
        return localStorage.getItem(AUTH_USER_KEY) != null;
    }

    getAuthHeader() {
        const val = JSON.parse(localStorage.getItem(AUTH_USER_KEY));
        return val ? { "Authorization": val.authHeader } : {};
    }
}

const authService = new AuthService();
export default authService;