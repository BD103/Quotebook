module default {
    type Quote {
        required content: str {
            constraint min_len_value(1);
            constraint max_len_value(500);
        }

        optional single link character: Character {
            on source delete allow;
            on target delete deferred restrict;
        }

        required date: cal::local_date {
            default := cal::to_local_date(datetime_of_transaction(), "EST");
        }
    }

    type Character {
        required name: str {
            constraint exclusive;
            constraint min_len_value(1);
            constraint max_len_value(30);
            constraint regexp(r'^[\w -]+$');
        }

        multi link quotes := .<character[is Quote];
    }
}
