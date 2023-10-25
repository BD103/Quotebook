import { createClient } from "edgedb";
import { allQuotes } from "~/queries/allQuotes.query";

const client = createClient();

export default defineEventHandler(async (event) => {
    const args = getQuery(event);

    let offset, limit;

    if (typeof args.offset === "string") {
        offset = parseInt(args.offset);
    }

    if (typeof args.limit === "string") {
        limit = parseInt(args.limit);
    }

    return await allQuotes(client, {
        offset,
        limit,
    });
});
