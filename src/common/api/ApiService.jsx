
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

// *************************************************  TOUR CATEGORY API  **********************************************

export const CreateTourCategory = async (payload) => {
    return await APIBaseUrl.post("/trip-categories/create", payload)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};


export const GetAllTourCategory = async () => {
    return await APIBaseUrl.get("/trip-categories/get_all")
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};





// ************************************************  SINGLE FILE UPLOAD API **********************************************

export const SingleFileUpload = async (payload) => {
    return await APIBaseUrl.post("/uploads/single-upload", payload)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};


export const MultipleFileUpload = async (payload) => {
    return await APIBaseUrl.post("/uploads/multiple-upload", payload)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};