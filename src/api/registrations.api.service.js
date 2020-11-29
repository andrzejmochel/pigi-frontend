import * as api from './api'
import {API_URL} from '../Url'

class RegistrationsApiService {
    registerOrder(request) {
        return api.httpPOST(`${API_URL}/registration`, request, {});
    }
}

const registrationsApiService = new RegistrationsApiService();
export default registrationsApiService;