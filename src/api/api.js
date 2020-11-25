import axios from 'axios';
import AuthService from "./AuthService";


export const httpGET = (url, headers = {}, params = {}) => (
    axios.get(`${url}`, {
        "headers": addSecurityHeaders(headers),
        params
    })
        .then(mapResponse)
);


export const httpPOST = (url, data = {}, headers = {},/*URLSearchParams*/params = undefined) => (
    axios.post(`${url}`, data, {
        "headers": addSecurityHeaders(headers),
        "params": params
    })
        .then(mapResponse)
);

const mapResponse = response => {
    return response.data;
};



const addSecurityHeaders = (headers = {}) => (
    AuthService.isAuthenticated() ?
        {
            ...headers,
            ...AuthService.getAuthHeader()
        } : headers
);
