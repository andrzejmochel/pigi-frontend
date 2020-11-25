import * as api from "./api";
import {API_URL} from "../Url";


class SignInApiService {
    signIn(signup) {
        return api.httpPOST(`${API_URL}/signin`, signup, {});
    }

    changePassword(payload) {
        return api.httpPOST(`${API_URL}/changepassword`, payload, {});
    }
}

const signInApiService = new SignInApiService();
export default signInApiService;