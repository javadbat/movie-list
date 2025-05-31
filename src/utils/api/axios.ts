import axios from 'axios';
import {authManager} from '../auth/auth';
import { appConfig } from '@config/app-config';
const accessToken = authManager.accessToken;
const config ={
    baseURL: appConfig.address.serviceUrl,
    timeout: 200000,
};
const axiosWithAuth = axios.create({
    ...config,
    headers:{
        'Authorization':'Bearer '+ accessToken
    }
});
const axiosWithoutAuth = axios.create({
    ...config
});
function updateAxiosAuth(accessToken:string){
    axiosWithAuth.defaults.headers.Authorization = 'Bearer '+ accessToken;
}
authManager.addEventListener("tokenUpdate",updateAxiosAuth);
export {axiosWithoutAuth, axiosWithAuth};
