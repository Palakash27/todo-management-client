const ENVIRONMENTS = {
    PRODUCTION: "PRODUCTION",
    DEVELOPMENT: "DEVELOPMENT",
};
const hostname = window && window.location && window.location.hostname;

let currentEnvironment = ENVIRONMENTS.STAGING;
if (/localhost/i.test(hostname) || /192.168/i.test(hostname)) {
    currentEnvironment = ENVIRONMENTS.DEVELOPMENT;
}

const BASE_URL =
    currentEnvironment === ENVIRONMENTS.PRODUCTION
        ? "https://task-management.aakashpal.tech"
        : "http://localhost:3001";

export { currentEnvironment, BASE_URL };
