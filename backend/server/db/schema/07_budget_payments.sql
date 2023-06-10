DROP TABLE IF EXISTS budget_payments CASCADE;
CREATE TABLE budget_payments (
  id SERIAL PRIMARY KEY NOT NULL,
  payment_amount INTEGER NOT NULL,
  sub-category_id INTEGER REFERENCES sub-categories(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  expense_id INTEGER REFERENCES
);