import {instance} from "./api_instance";

export const appApi = {
    loadBooks(pageNumber) {
        return instance.get("getBook?pageNumber=" + pageNumber)
    }
}