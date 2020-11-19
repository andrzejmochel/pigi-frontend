const AUTH_USER_KEY = "user";

class AuthService {
    isAuthenticated() {
        return localStorage.getItem(AUTH_USER_KEY) != null;
    }

    getAuthHeader() {
        const val = JSON.parse(localStorage.getItem(AUTH_USER_KEY));
        return val ? { "Authorization": val.authorization } : {};
    }

    saveAuth(val) {
        localStorage.setItem(AUTH_USER_KEY, val);
    }
}

const authService = new AuthService();
export default authService;