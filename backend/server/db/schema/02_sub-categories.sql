DROP TABLE IF EXISTS sub-categories CASCADE;
CREATE TABLE sub-categories (
  id SERIAL PRIMARY KEY NOT NULL,
  sub-category VARCHAR(255) NOT NULL,
  category_id VARCHAR(255) REFERENCES categories(id) ON DELETE CASCADE;
);
