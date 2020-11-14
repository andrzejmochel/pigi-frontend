import * as api from './api'
import {API_URL} from '../Url'

class SignupApiService {
    signup(signup) {
        return api.httpPOST(`${API_URL}/signup`, signup, {});
    }

    signupGoogle(signupGoogle) {
        return api.httpPOST(`${API_URL}/signupGoogle`, signupGoogle, {});
    }

    signupFacebook(signupFacebook) {
        return api.httpPOST(`${API_URL}/signupFacebook`, signupFacebook, {});
    }
}

const signupApiService = new SignupApiService();
export default signupApiService;