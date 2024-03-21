
import axios from "axios";

const axiosClientInstance = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/',
    timeout: 1000,
  });

  export default axiosClientInstance ;