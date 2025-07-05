
import { APIBaseUrl } from "./ApiClient";

export const CreateDestination = async (payload) => {
    return await APIBaseUrl.post("/destination/create_destination", payload)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};
export const GetAllDestination = async () => {
    return await APIBaseUrl.get("/destination/getAll")
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};