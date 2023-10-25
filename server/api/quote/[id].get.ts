import { createClient } from "edgedb";
import { getQuote } from "~/queries/getQuote.query";

const client = createClient();

export default defineEventHandler(async (event) => {
    const res = await getQuote(client, {
        id: event.context.params!.id,
    });

    if (res === null) {
        throw createError({
            statusCode: 400,
            statusMessage: "Quote not found.",
        });
    }

    return res; 
});
