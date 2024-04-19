import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "2474be8d39884dfbbdf35a160548d2c2"
    }
})