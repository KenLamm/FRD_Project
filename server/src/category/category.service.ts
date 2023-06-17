import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

type Completeness = {
  id: number;
  name: string;
  inc: number;
  tt: number;
  percent: number;
};

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllCategory(id: number): Promise<any[]> {

    // 

    const result: Completeness[] = await this.prismaService.$queryRaw`
      WITH incomplete AS (
  SELECT count(*) AS ct, c.id AS id
  FROM task t
  RIGHT OUTER JOIN category c ON t.category_id = c.id
  WHERE t.is_finished = FALSE
  GROUP BY c.id, c.name 
),
total AS (
  SELECT count(*) AS ct, c.id AS id
  FROM task t
  JOIN category c ON t.category_id = c.id
  WHERE c.project_id = ${id}
  GROUP BY c.id
)
SELECT
  p.id,
  p.name as project_name,
  c.id, 
  c.name,
  COALESCE(incomplete.ct::int, 0) AS inc,
  COALESCE(total.ct::int, 0) AS tt,
  COALESCE(incomplete.ct / total.ct::float, 0) AS percent
FROM
  incomplete
JOIN
  total ON total.id = incomplete.id
RIGHT JOIN
  category c ON total.id = c.id
JOIN
  project p ON p.id= c.project_id
WHERE
 p.id = ${id}
    `;
    console.log('category.service: result - ', result);
    return result;
  }
}
