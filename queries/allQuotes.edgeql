select Quote {
    id,
    content,
    character: {
        id,
        name,
    },
    date,
}
order by .id
offset <optional int64>$offset
limit <optional int64>$limit;
