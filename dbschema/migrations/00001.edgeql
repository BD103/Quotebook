CREATE MIGRATION m1qfbp6673bb5x62syauxvuvjkhr3gc7hh64ccmjrwxj25bbra26pq
    ONTO initial
{
  CREATE TYPE default::Character {
      CREATE REQUIRED PROPERTY name: std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::max_len_value(30);
          CREATE CONSTRAINT std::min_len_value(1);
          CREATE CONSTRAINT std::regexp(r'^[\w -]+$');
      };
  };
  CREATE TYPE default::Quote {
      CREATE OPTIONAL SINGLE LINK character: default::Character {
          ON SOURCE DELETE ALLOW;
          ON TARGET DELETE DEFERRED RESTRICT;
      };
      CREATE REQUIRED PROPERTY content: std::str {
          CREATE CONSTRAINT std::max_len_value(500);
          CREATE CONSTRAINT std::min_len_value(1);
      };
      CREATE REQUIRED PROPERTY date: cal::local_date {
          SET default := (cal::to_local_date(std::datetime_of_transaction(), 'EST'));
      };
  };
  ALTER TYPE default::Character {
      CREATE MULTI LINK quotes := (.<character[IS default::Quote]);
  };
};
