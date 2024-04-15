import { BASE_URL } from "./environment";
import { localStorage } from "./token";

export const createRequestHeaders = () => {
    const token = localStorage.getToken();
    return {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    };
};

export const apiRequest = async (URL, options) => {
    const mandatoryHeaders = createRequestHeaders();

    const requestOptions = {
        method: options?.method || "GET",
        body: options?.body ? JSON.stringify(options?.body) : undefined,
        headers: mandatoryHeaders,
    };

    const response = await fetch(`${BASE_URL}${URL}`, requestOptions);
    return response;
};
