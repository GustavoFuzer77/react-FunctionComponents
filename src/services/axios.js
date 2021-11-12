import api from "axios";

const axios = api.create({
    baseURL: "http://localhost:3001/"
})

export default axios;