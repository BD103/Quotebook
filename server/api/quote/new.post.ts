import { createClient } from "edgedb";
import { newQuote } from "~/queries/newQuote.query";
import type { NewQuoteArgs } from "~/queries/newQuote.query";

const client = createClient();

export default defineEventHandler(async (event) => {
    const body = await readBody<NewQuoteArgs>(event);

    const res = await newQuote(client, body);

    return {
        status: "OK",
        id: res.id,
    };
});
