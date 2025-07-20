
import { APIBaseUrl } from "./ApiClient";

// *************************************************  TOUR DESTINATION API  **********************************************



export const CreateDestination = async (payload) => {
    return await APIBaseUrl.post("/destinations/create", payload)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};
export const GetAllDestination = async () => {
    return await APIBaseUrl.get("/destinations/get_all")
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};

export const GetSpecificDestination = async (_id) => {
    return await APIBaseUrl.get(`/destinations/get_specific?_id=${_id}`)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};

export const GetChildDestination = async (_id) => {
    return await APIBaseUrl.get(`/destinations/get_child_destination?_id=${_id}`)
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

export const GetSpecificTourCategory = async (_id) => {
    return await APIBaseUrl.get(`trip-categories/get_specific?_id=${_id}`)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};

export const updateTourCategory = async (payload) => {
    return await APIBaseUrl.put(`trip-categories/update`, payload)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};


export const deleteTourCategory = async (_id) => {
    console.log(_id, "deleteTourCategory");
    return await APIBaseUrl.delete(`trip-categories/delete`, {
        data: { _id }
    })
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};


// *************************************************  TOUR TYPE API  **********************************************

export const CreateTourType = async (payload) => {
    return await APIBaseUrl.post("/trip-types/create", payload)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};


export const GetAllTourType = async () => {
    return await APIBaseUrl.get("/trip-types/get_all")
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};

export const GetSpecificTourType = async (_id) => {
    return await APIBaseUrl.get(`trip-types/get_specific?_id=${_id}`)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};

export const updateTourType = async (payload) => {
    return await APIBaseUrl.put(`trip-types/update`, payload)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};


export const deleteTourType = async (_id) => {
    console.log(_id, "deleteTourCategory");
    return await APIBaseUrl.delete(`trip-types/delete`, {
        data: { _id }
    })
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};


// *************************************************  TOUR TYPE API  **********************************************

export const CreateActivity = async (payload) => {
    return await APIBaseUrl.post("/activities/create", payload)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};


export const GetAllActivity = async () => {
    return await APIBaseUrl.get("/activities/get_all")
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};

export const GetSpecificActivity = async (_id) => {
    return await APIBaseUrl.get(`activities/get_specific?_id=${_id}`)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};

export const updateActivity = async (payload) => {
    return await APIBaseUrl.put(`activities/update`, payload)
        .then((response) => response.data)
        .catch((err) => {
            return { err: err?.response?.data || err };
        });
};


export const deleteActivity = async (_id) => {
    return await APIBaseUrl.delete(`activities/delete`, {
        data: { _id }
    })
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