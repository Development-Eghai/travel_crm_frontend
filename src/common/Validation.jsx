export const EmailRegex = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const StringRegex = /^[A-Za-z ]+$/;
export const CompanyStringRegex = /^[A-Za-z\s@.'\-_,&()!?]+$/;



export function StringValidation(value) {
    if (value === undefined || value === null || value === "" || value?.length === 0) {
        return { status: false, message: "is required" };
    } else if (!isNaN(value)) {
        return { status: false, message: "is invalid" };
    }
    else if (typeof value !== "string") {
        return { status: false, message: "must be a string" };
    }
    else if (value.length < 3) {
        return { status: false, message: "must be maximum 3 letters" };
    }

    return !StringRegex.test(value)
        ? { status: false, message: "is only Alphabets" }
        : { status: true, message: "" };
}

export function NonEmptyValidation(value) {
    if (value === null || value === undefined || value === "") {
        return { status: false, message: "is required" };
    }
    return { status: true, message: "" };
}

export function normalizeEmptyFields(obj) {
    const cleaned = {};
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === "string" && value.trim() === "") {
            cleaned[key] = undefined;
        } else {
            cleaned[key] = value;
        }
    }
    return cleaned;
};

