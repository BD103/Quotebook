import { createClient } from "edgedb";
import { allCharacters } from "~/queries/allCharacters.query";

const client = createClient();

export default defineEventHandler(async (event) => {
    const args = getQuery(event);

    let offset, limit;

    if (typeof args.offset === "string") {
        offset = parseInt(args.offset);
    }

    if (typeof args.limit === "string") {
        offset = parseInt(args.limit);
    }

    return await allCharacters(client, {
        offset,
        limit,
    });
});
