SELECT * from project;

SELECT * from category;

SELECT * from task;
UPDATE task set is_finished = true where task.id = 12;

-- seed data
insert into task (name, user_id, category_id, is_finished, updated_at)
SELECT name, user_id, category_id, is_finished, now() from task
;
UPDATE task set category_id = category_id + 4
where EXTRACT(hour from created_at) = 18;


-- total task by project
WITH incomplete AS (
  SELECT count(*) AS ct, c.id AS id, c.name AS name 
  FROM task t
  RIGHT OUTER JOIN category c ON t.category_id = c.id
  WHERE t.is_finished = FALSE
  GROUP BY c.id, c.name 
),
total AS (
  SELECT count(*) AS ct, c.id AS id
  FROM task t
  JOIN category c ON t.category_id = c.id
  WHERE c.project_id = 
  GROUP BY c.id
)
SELECT
  incomplete.id, 
  p.name AS project_name,
  incomplete.name,
  incomplete.ct::int AS inc,
  total.ct::int AS tt,
  incomplete.ct / total.ct::float AS percent
FROM
  incomplete
JOIN
  total ON total.id = incomplete.id
JOIN
  category c ON incomplete.id = c.id
  JOIN
  project p ON p.id= c.project_id;
 

  