with module auth
select User {
    id,
    username,
    password,
}
filter .username = <str>$username;
