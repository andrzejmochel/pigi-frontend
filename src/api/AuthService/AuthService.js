import jwt_decode from "jwt-decode";

const AUTH_USER_KEY = "user";

class AuthService {
    isAuthenticated() {
        return localStorage.getItem(AUTH_USER_KEY) != null;
    }

    getAuthHeader() {
        const val = JSON.parse(localStorage.getItem(AUTH_USER_KEY));
        const header = val ? { "Authorization":"Bearer " + val.authorization } : {};
        return header;
    }

    getUser() {
        const val = JSON.parse(localStorage.getItem(AUTH_USER_KEY));
        return JSON.parse(val.user.sub);
    }

    saveAuth(val) {
        console.log("saveAuth", val);
        const user = jwt_decode(val.authorization);
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify({
            user : user,
            authorization : val.authorization
        }));
    }

    logout() {
        localStorage.removeItem(AUTH_USER_KEY)
    }
}

const authService = new AuthService();
export default authService;