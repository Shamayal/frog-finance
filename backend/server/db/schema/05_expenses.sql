DROP TABLE IF EXISTS expenses CASCADE;
CREATE TABLE expenses (
  id SERIAL PRIMARY KEY NOT NULL,
  expenses_date DATE NOT NULL,
  amount INTEGER NOT NULL,
  sub-category_id INTEGER(255) REFERENCES sub-categories(id) ON DELETE CASCADE;
);