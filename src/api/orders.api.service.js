import * as api from './api'
import {API_URL} from '../Url'

class OrdersApiService {
    getOrder(id) {
        return api.httpGET(`${API_URL}/orders/${id}`, {}, {});
    }
}

const ordersApiService = new OrdersApiService();
export default ordersApiService;