import axios from 'axios';

const api = axios.create({
    baseURL: 'http://http://192.168.2.14:3000/'
})


export default api;






/*
Como Rodar com IPV4: json-server --watch -d -180 --host (meu ip) 192.168.0.12 db.jason
*/