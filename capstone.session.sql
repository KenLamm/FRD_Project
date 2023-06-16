SELECT * from project;

SELECT * from category;

SELECT * from task;
UPDATE task set is_finished = true where task.id = 12;


-- total task by project
WITH incomplete AS (
        SELECT count(*) AS ct, c.id AS id, c.name as name 
        FROM task t
        RIGHT OUTER JOIN category c ON t.category_id = c.id
        WHERE t.is_finished = FALSE
        GROUP BY c.id ,c.name 
      ),
      total AS (
        SELECT count(*) AS ct, c.id AS id
        FROM task t
        JOIN category c ON t.category_id = c.id
        WHERE c.project_id = 1
        GROUP BY c.id
      )
      SELECT
        incomplete.id, 
        incomplete.name,
        incomplete.ct AS inc,
        total.ct AS tt,
        incomplete.ct / total.ct ::float AS percent
      FROM
        incomplete
      JOIN
        total ON total.id = incomplete.id;