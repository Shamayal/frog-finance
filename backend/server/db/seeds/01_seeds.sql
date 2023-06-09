-- users
INSERT INTO users (nickname, email) VALUES ('user', 'test@email.com');

-- categories
INSERT INTO categories (category) VALUES ('Housing'); -- 1
INSERT INTO categories (category) VALUES ('Food'); -- 2
INSERT INTO categories (category) VALUES ('Transportation'); -- 3
INSERT INTO categories (category) VALUES ('Healthcare'); -- 4
INSERT INTO categories (category) VALUES ('Education'); -- 5
INSERT INTO categories (category) VALUES ('Shopping'); -- 6
INSERT INTO categories (category) VALUES ('Subscriptions'); -- 7
INSERT INTO categories (category) VALUES ('Communication'); -- 8
INSERT INTO categories (category) VALUES ('Entertainment'); -- 9
INSERT INTO categories (category) VALUES ('Hobbies'); -- 10
INSERT INTO categories (category) VALUES ('Travel'); -- 11
INSERT INTO categories (category) VALUES ('Pets'); -- 12
INSERT INTO categories (category) VALUES ('Other'); -- 13

-- sub_categories

-- Housing = 1
INSERT INTO sub_categories (category_id, sub_category) VALUES (1, 'Utilities'); -- 1
INSERT INTO sub_categories (category_id, sub_category) VALUES (1, 'Rent/Mortgage'); -- 2
INSERT INTO sub_categories (category_id, sub_category) VALUES (1, 'Insurance'); -- 3
INSERT INTO sub_categories (category_id, sub_category) VALUES (1, 'Renovations and Maintenance'); -- 4
INSERT INTO sub_categories (category_id, sub_category) VALUES (1, 'Household Products'); -- 5
INSERT INTO sub_categories (category_id, sub_category) VALUES (1, 'Other'); -- 6

-- Food = 2
INSERT INTO sub_categories (category_id, sub_category) VALUES (2, 'Groceries'); -- 7
INSERT INTO sub_categories (category_id, sub_category) VALUES (2, 'Dining Out'); -- 8
INSERT INTO sub_categories (category_id, sub_category) VALUES (2, 'Beverages'); -- 9
INSERT INTO sub_categories (category_id, sub_category) VALUES (2, 'Other'); -- 10

-- Transportation = 3
INSERT INTO sub_categories (category_id, sub_category) VALUES (3, 'Gas'); -- 11
INSERT INTO sub_categories (category_id, sub_category) VALUES (3, 'Car insurance'); -- 12
INSERT INTO sub_categories (category_id, sub_category) VALUES (3, 'Public Transit'); -- 13
INSERT INTO sub_categories (category_id, sub_category) VALUES (3, 'Maintenance'); -- 14
INSERT INTO sub_categories (category_id, sub_category) VALUES (3, 'Other'); -- 15

-- Healthcare = 4
INSERT INTO sub_categories (category_id, sub_category) VALUES (4, 'Prescriptions'); -- 16
INSERT INTO sub_categories (category_id, sub_category) VALUES (4, 'Vision Care'); -- 17
INSERT INTO sub_categories (category_id, sub_category) VALUES (4, 'Dental Care'); -- 18
INSERT INTO sub_categories (category_id, sub_category) VALUES (4, 'Other'); -- 19

-- Education = 5
INSERT INTO sub_categories (category_id, sub_category) VALUES (5, 'Tuition'); -- 20
INSERT INTO sub_categories (category_id, sub_category) VALUES (5, 'Books'); -- 21
INSERT INTO sub_categories (category_id, sub_category) VALUES (5, 'Supplies'); -- 22
INSERT INTO sub_categories (category_id, sub_category) VALUES (5, 'Other'); -- 23

-- Shopping = 6
INSERT INTO sub_categories (category_id, sub_category) VALUES (6, 'Shoes and Clothes'); -- 24
INSERT INTO sub_categories (category_id, sub_category) VALUES (6, 'Electronics'); -- 25
INSERT INTO sub_categories (category_id, sub_category) VALUES (6, 'Makeup and Skin Care'); -- 26
INSERT INTO sub_categories (category_id, sub_category) VALUES (6, 'Hygiene Products'); -- 27
INSERT INTO sub_categories (category_id, sub_category) VALUES (6, 'Other'); -- 28

-- Subscriptions = 7
INSERT INTO sub_categories (category_id, sub_category) VALUES (7, 'Gym'); -- 29
INSERT INTO sub_categories (category_id, sub_category) VALUES (7, 'Streaming Services'); -- 30
INSERT INTO sub_categories (category_id, sub_category) VALUES (7, 'Gaming'); -- 31
INSERT INTO sub_categories (category_id, sub_category) VALUES (7, 'Memberships'); -- 32
INSERT INTO sub_categories (category_id, sub_category) VALUES (7, 'Other'); -- 33

-- Communication = 8
INSERT INTO sub_categories (category_id, sub_category) VALUES (8, 'Phone Bill'); -- 34
INSERT INTO sub_categories (category_id, sub_category) VALUES (8, 'Internet'); -- 35
INSERT INTO sub_categories (category_id, sub_category) VALUES (8, 'Other'); -- 36

-- Entertainment = 9
INSERT INTO sub_categories (category_id, sub_category) VALUES (9, 'Movies'); -- 37
INSERT INTO sub_categories (category_id, sub_category) VALUES (9, 'Concerts'); -- 38
INSERT INTO sub_categories (category_id, sub_category) VALUES (9, 'Events'); -- 39
INSERT INTO sub_categories (category_id, sub_category) VALUES (9, 'Hobbies'); -- 40
INSERT INTO sub_categories (category_id, sub_category) VALUES (9, 'Other'); -- 41

-- Hobbies = 10
INSERT INTO sub_categories (category_id, sub_category) VALUES (10, 'Equipment and Supplies'); -- 42
INSERT INTO sub_categories (category_id, sub_category) VALUES (10, 'Lessons or Coaching'); -- 43
INSERT INTO sub_categories (category_id, sub_category) VALUES (10, 'Events and Tickets'); -- 44
INSERT INTO sub_categories (category_id, sub_category) VALUES (10, 'Uniforms or Apparel'); -- 45
INSERT INTO sub_categories (category_id, sub_category) VALUES (10, 'Other'); -- 46

-- Travel = 11
INSERT INTO sub_categories (category_id, sub_category) VALUES (11, 'Accomodations'); -- 47
INSERT INTO sub_categories (category_id, sub_category) VALUES (11, 'Transportation'); -- 48
INSERT INTO sub_categories (category_id, sub_category) VALUES (11, 'Food and Dining'); -- 49
INSERT INTO sub_categories (category_id, sub_category) VALUES (11, 'Activities'); -- 50
INSERT INTO sub_categories (category_id, sub_category) VALUES (11, 'Other'); -- 51

--Pets = 12
INSERT INTO sub_categories (category_id, sub_category) VALUES (12, 'Food'); -- 52
INSERT INTO sub_categories (category_id, sub_category) VALUES (12, 'Grooming'); -- 53
INSERT INTO sub_categories (category_id, sub_category) VALUES (12, 'Accessories'); -- 54
INSERT INTO sub_categories (category_id, sub_category) VALUES (12, 'Veterinary'); -- 55
INSERT INTO sub_categories (category_id, sub_category) VALUES (12, 'Other'); -- 56

--Other = 13
INSERT INTO sub_categories (category_id, sub_category) VALUES (13, 'Donations'); -- 57
INSERT INTO sub_categories (category_id, sub_category) VALUES (13, 'Other'); -- 58

-- income
INSERT INTO income (user_id, income_date, amount) VALUES (1, '2023-03-13', 2000);
INSERT INTO income (user_id, income_date, amount) VALUES (1, '2023-05-01', 1500);
INSERT INTO income (user_id, income_date, amount) VALUES (1, '2023-05-04', 1500);
INSERT INTO income (user_id, income_date, amount) VALUES (1, '2023-04-15', 2500);

-- budgets
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 2000, 1, 10, '2023-06-01'); -- housing
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 150, 2, 0, '2023-06-04'); -- food
-- INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 500, 3, 0, '2023-06-01'); -- transportation
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 60, 4, 0, '2023-06-10'); -- healthcare
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 700, 5, 0, '2023-06-03'); -- education
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 400, 6, 0, '2023-06-03'); -- shopping
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 100, 7, 0, '2023-06-10'); -- subscriptions
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 70, 8, 0, '2023-06-06'); -- communications
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 20, 9, 0, '2023-06-04'); -- entertainment
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 100, 10, 0, '2023-06-04'); -- hobbies
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 400, 11, 0, '2023-06-04'); -- travel
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 100, 12, 0, '2023-06-04'); -- pets
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 100, 13, 0, '2023-06-04'); -- other

INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 950, 1, 500, '2023-01-01'); -- housing
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 400, 2, 150, '2023-01-04'); -- food
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 500, 3, 100, '2023-02-01'); -- transportation
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 300, 4, 150, '2023-02-10'); -- healthcare
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 700, 5, 650, '2023-03-03'); -- education
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 400, 6, 50, '2023-03-03'); -- shopping
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 100, 7, 20, '2023-04-10'); -- subscriptions
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 200, 8, 150, '2023-04-06'); -- communications

-- match may expenses to budget categories
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 150, 2, 80, '2023-05-01'); -- food
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 100, 3, 12, '2023-05-01'); -- transportation
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 70, 8, 40, '2023-05-01'); -- communication
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 20, 9, 30, '2023-05-01'); -- entertainment
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 100, 10, 85, '2023-05-01'); -- hobbies
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 400, 11, 60, '2023-05-01'); -- travel
INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at) VALUES (1, 100, 12, 100, '2023-05-01'); -- pets

-- expenses
-- INSERT INTO expenses (user_id, expense_date, amount, category_id, sub_category_id) VALUES (1, '2023-02-17', 2000, 1, 1); -- housing, rent/mortgage
-- INSERT INTO expenses (user_id, expense_date, amount, category_id, sub_category_id) VALUES (1, '2023-02-13', 250, 1, 3); -- housing,Insurance
-- INSERT INTO expenses (user_id, expense_date, amount, category_id, sub_category_id) VALUES (1, '2023-03-13', 250, 1, 6); -- housing, household products

INSERT INTO expenses (user_id, expense_date, amount, category_id, sub_category_id) VALUES (1, '2023-05-25', 60, 2, 7); -- food, groceries
INSERT INTO expenses (user_id, expense_date, amount, category_id, sub_category_id) VALUES (1, '2023-05-25', 20, 2, 7); -- food, groceries
INSERT INTO expenses (user_id, expense_date, amount, category_id, sub_category_id) VALUES (1, '2023-05-25', 12, 3, 13); -- transportation, public transit
INSERT INTO expenses (user_id, expense_date, amount, category_id, sub_category_id) VALUES (1, '2023-05-23', 40, 8, 34); -- communications, phone bill
INSERT INTO expenses (user_id, expense_date, amount, category_id, sub_category_id) VALUES (1, '2023-05-15', 30, 9, 37); -- entertainment, Movies
INSERT INTO expenses (user_id, expense_date, amount, category_id, sub_category_id) VALUES (1, '2023-05-03', 85, 10, 42); -- hobbies, Equipment and Supplies
INSERT INTO expenses (user_id, expense_date, amount, category_id, sub_category_id) VALUES (1, '2023-05-11', 60, 11, 47); -- travel, Accomodations
INSERT INTO expenses (user_id, expense_date, amount, category_id, sub_category_id) VALUES (1, '2023-05-16', 100, 12, 52); -- pets, Food

-- savings
-- INSERT INTO savings (saving_name, goal_amount, current_amount, finished, date_created, date_finished, user_id) VALUES ('RRSP', 1000, 1000, TRUE, '2023-01-21', '2023-06-02', 1);
INSERT INTO savings (saving_name, goal_amount, current_amount, finished, date_created, date_finished, user_id) VALUES ('Desk', 100, 100, TRUE, '2023-05-21', '2023-05-30', 1);

-- debt_goals
INSERT INTO debt_goals (name, initial_amount, interest_rate, paid_off, user_id) VALUES ('Bank Loan', 6000, 10.00, FALSE, 1);
INSERT INTO debt_goals (name, initial_amount, interest_rate, paid_off, user_id) VALUES ('Personal Loan', 1000, 5, TRUE, 1);
INSERT INTO debt_goals (name, initial_amount, interest_rate, paid_off, user_id) VALUES ('Car Loan', 5000, 7, TRUE, 1);

-- debt_payments
INSERT INTO debt_payments (amount, debt_goal_id, user_id) VALUES (500, 1, 1);
INSERT INTO debt_payments (amount, debt_goal_id, user_id) VALUES (400, 1, 1);
INSERT INTO debt_payments (amount, debt_goal_id, user_id) VALUES (1000, 2, 1);
INSERT INTO debt_payments (amount, debt_goal_id, user_id) VALUES (1000, 2, 1);

SELECT SUM(total) FROM (
SELECT SUM(amount) AS total FROM income WHERE user_id = 1
UNION
SELECT SUM(amount) * -1 AS total  FROM debt_payments WHERE user_id = 1
UNION
SELECT SUM(amount) * -1 AS total  FROM expenses WHERE user_id = 1
UNION
SELECT SUM(goal_amount) * -1 AS total FROM savings WHERE user_id = 1
) AS totals;
