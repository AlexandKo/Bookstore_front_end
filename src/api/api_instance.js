import axios from "axios";
import {API_SERVER} from "./base_url";

export const instance = axios.create({
    withCredentials: true,
    baseURL: API_SERVER
});