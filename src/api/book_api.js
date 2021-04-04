import {instance} from "./api_instance";

export const bookApi = {
    addBook(loginData) {
        return instance.post("addBook", loginData)
    }
}