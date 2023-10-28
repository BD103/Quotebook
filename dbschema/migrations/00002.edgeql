CREATE MIGRATION m1z6e6cl4co6q2e2itx4zc2oban46wiyjupstd5sy5exx2c563hqpa
    ONTO m1qfbp6673bb5x62syauxvuvjkhr3gc7hh64ccmjrwxj25bbra26pq
{
  CREATE MODULE auth IF NOT EXISTS;
  CREATE TYPE auth::User {
      CREATE REQUIRED PROPERTY password: std::str;
      CREATE REQUIRED PROPERTY username: std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(3);
      };
  };
};
