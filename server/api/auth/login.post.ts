import { createClient } from "edgedb";
import { SignJWT } from "jose";
import { authGetUser } from "~/queries/authGetUser.query";
import type { AuthJwtBody } from "~/server/utils/auth";

interface LoginArgs {
    username: string,
    password: string,
}

const client = createClient();

export default defineEventHandler(async (event) => {
    const body = await readBody<LoginArgs>(event);

    // If username or password is empty / missing.
    if (!body.username || !body.password) {
        throw createError({
            statusCode: 400,
            statusMessage: "Username or password cannot be empty.",
        });
    }

    const user = await authGetUser(client, {
        username: body.username,
    });

    // If user does not exist or password is wrong.
    if (user === null || !(await authVerify(user.password, body.password))) {
        throw createError({
            statusCode: 403,
            statusMessage: "Username or password is incorrect.",
        });
    }

    // Generate new token
    const jwt = await new SignJWT(<AuthJwtBody>{
        uid: user.id,
        usn: user.username,
    })
        .setProtectedHeader({ alg: AUTH_TOKEN_ALG })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(authTokenSecret());

    setCookie(event, "token", jwt, {
        // 2 hours
        maxAge: 60 * 60 * 2,
        // only send cookie when on website or navigating to website
        // this may be changed in the future
        sameSite: "lax",
        // https connection required
        secure: true,
    });

    return "OK";
});
