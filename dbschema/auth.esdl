module auth {
    type User {
        required username: str {
            constraint exclusive;
            constraint min_len_value(3);
        }

        required password: str;
    }
}
