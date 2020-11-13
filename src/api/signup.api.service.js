import * as api from './api'
import {API_URL} from '../Url'

class SignupApiService {
    signup(signup) {
        return api.httpPOST(`${API_URL}/signup`, signup, {});
    }
}

const signupApiService = new SignupApiService();
export default signupApiService;