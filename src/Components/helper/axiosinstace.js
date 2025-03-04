import axios from "axios";
import { BASE_URL, Django_url } from "../../../constants";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

axiosInstance.defaults.djangoURL = Django_url;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;