import { createClient } from "edgedb";
import { getCharacter } from "~/queries/getCharacter.query";

const client = createClient();

export default defineEventHandler(async (event) => {
    const res = await getCharacter(client, {
        id: event.context.params!.id,
    });

    if (res === null) {
        throw createError({
            statusCode: 400,
            statusMessage: "Character not found.",
        });
    }

    return res; 
});
