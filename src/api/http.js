import axios from "axios";
import qs from 'qs';
import { Message } from "element-ui";

const http = axios.create({
    baseURL:'',
    timeout:6000
});

http.defaults.transformRequest = data => {
    data = qs.stringify(data);
    return data;
}

http.interceptors.reponse.use(response =>{
    return response.data;
}, reason=>{
    Message.error('当前网络繁忙，请稍后再试')
    return Promise.reject(reason)
});

export default http;