import * as argon2 from "@node-rs/argon2";

const ARGON2_OPTIONS: argon2.Options = {
    // Parameters taken from OWASP cheatsheet
    // https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#argon2id
    memoryCost: 12288,
    timeCost: 3,
    parallelism: 1,

    // Peppering, currently unimplemented
    // secret: undefined,
};

export function authHash(password: string): Promise<string> {
    return argon2.hash(password, ARGON2_OPTIONS);
}

export async function authVerify(hashed: string, password: string): Promise<boolean> {
    return argon2.verify(hashed, password, ARGON2_OPTIONS);
}
