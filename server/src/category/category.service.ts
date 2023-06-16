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
    const result: Completeness[] = await this.prismaService.$queryRaw`
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
  WHERE c.project_id = ${id}
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
    `;
    console.log('category.service: result - ', result);
    return result;
  }
}

