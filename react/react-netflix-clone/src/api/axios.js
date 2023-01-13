import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key:'b268ce0f8fc587e47d91259618387058',
        language: 'ko-KR'
    }
});

export default instance;