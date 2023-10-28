import { jwtVerify } from "jose";

export default defineEventHandler(async (event) => {
    // Default auth to null, meaning not logged in
    event.context.auth = null;

    const token = getCookie(event, "token");

    // If no token, keep auth null
    if (token === undefined) {
        return;
    }

    try {
        // Try to verify token
        const { payload } = await jwtVerify(token, authTokenSecret(), {
            algorithms: [AUTH_TOKEN_ALG],
            maxTokenAge: "2h",
        });

        // Set auth to token payload
        event.context.auth = payload;
    } catch {
        // Token is invalid, remove it
        deleteCookie(event, "token");
    }
});
