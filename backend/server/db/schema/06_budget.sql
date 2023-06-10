DROP TABLE IF EXISTS budget CASCADE;
CREATE TABLE budget (
  id SERIAL PRIMARY KEY NOT NULL,
  budget_amount INTEGER NOT NULL, 
  sub-category_id INTEGER(255) REFERENCES sub-categories(id) ON DELETE CASCADE,
  user_id INTEGER(255) REFERENCES users(id) ON DELETE CASCADE,
  total_spent INTEGER NOT NULL 
);

--  ask mentor about total_spent