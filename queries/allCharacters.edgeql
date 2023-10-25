select Character {
    id,
    name,
}
order by .name
offset <optional int64>$offset
limit <optional int64>$limit;
