import {instance} from "./api_instance";

export const bookApi = {
    addBook(bookData) {
        return instance.post("addBook", bookData)
    }
}