DROP TABLE IF EXISTS debt CASCADE;
CREATE TABLE debt (
  id SERIAL PRIMARY KEY NOT NULL,
  initial_amount INTEGER NOT NULL,
  current_amount INTEGER NOT NULL,
  interest_rate INTEGER NOT NULL,
  paid_off BOOLEAN NOT NULL,
  payment_amount
  user_id INTEGER(255) REFERENCES users(id) ON DELETE CASCADE;
);

--  ask mentor about linking payment_amount 
-- ask about interest rate data type 