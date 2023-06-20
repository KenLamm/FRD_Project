import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
const SALT_ROUNDS = 10;

async function hashPassword(plainPassword: string) {
  const hash: string = await bcrypt.hash(plainPassword, SALT_ROUNDS);
  return hash;
}
main()
  .then(() => console.log('seed done'))
  .catch((error) => console.error(error));

async function main() {
  const prisma = new PrismaClient();

  let hashed = await hashPassword('123456');
  try {
    // Seed users
    const users = [
      { username: 'Admin', password: hashed, is_admin: true, role: "manager" },
      { username: 'Admin1', password: hashed, is_admin: true,role: "manager" },
      { username: 'Sam', password: hashed, is_admin: false, role: "contractor" },
      { username: 'Ken', password: hashed, is_admin: false, role: "contractor"},
      { username: 'Mav', password: hashed, is_admin: false, role: "contractor"},
    ];

    let seededUsers = [];

    for (let item of users) {
      let data = await prisma.user.create({
        data: {
          username: item.username,
          password: item.password,
          is_admin: item.is_admin,
          role: item.role,
        },
      });
      seededUsers.push(data);
    }

    console.log('Seeded users', seededUsers);

    // Seed projects
    const projects = [
      { name: '北區醫院擴建計劃', user_id: seededUsers[0].id },
      { name: '油麻地戲院第二期建造工程', user_id: seededUsers[0].id },
      { name: '瑪麗醫院第一期重建計劃', user_id: seededUsers[0].id },
      { name: '葵涌醫院重建工程(第二及三期)', user_id: seededUsers[0].id },
      { name: '啟德發展區興建新急症醫院', user_id: seededUsers[0].id },
    ];

    let seededProjects = [];

    for (let item of projects) {
      let data = await prisma.project.create({
        data: {
          name: item.name,
          user_id: item.user_id,
        },
      });
      seededProjects.push(data);
    }

    console.log('Seeded projects:', seededProjects);

    // const seededProjects = await prisma.project.createMany({
    //   data: projects,
    // });

    // Seed categories
    const categories = [
      { name: '地基工程', project_id: seededProjects[0].id },
      { name: '主體結構', project_id: seededProjects[0].id },
      { name: '建築安裝', project_id: seededProjects[0].id },
      { name: '內部裝修', project_id: seededProjects[0].id },

      { name: '地基工程', project_id: seededProjects[1].id },
      { name: '主體結構', project_id: seededProjects[1].id },
      { name: '建築安裝', project_id: seededProjects[1].id },
      { name: '內部裝修', project_id: seededProjects[1].id },

      { name: '地基工程', project_id: seededProjects[2].id },
      { name: '主體結構', project_id: seededProjects[2].id },
      { name: '建築安裝', project_id: seededProjects[2].id },
      { name: '內部裝修', project_id: seededProjects[2].id },

      { name: '地基工程', project_id: seededProjects[3].id },
      { name: '主體結構', project_id: seededProjects[3].id },
      { name: '建築安裝', project_id: seededProjects[3].id },
      { name: '內部裝修', project_id: seededProjects[3].id },

      { name: '地基工程', project_id: seededProjects[4].id },
      { name: '主體結構', project_id: seededProjects[4].id },
      { name: '建築安裝', project_id: seededProjects[4].id },
      { name: '內部裝修', project_id: seededProjects[4].id },
    ];

    let seededCategories = [];

    for (let item of categories) {
      let data = await prisma.category.create({
        data: {
          name: item.name,
          project_id: item.project_id,
        },
      });
      seededCategories.push(data);
    }

    console.log('Seeded categories:', seededCategories);

    // seed user project
    const userprojects = [
      {
        user_id: seededUsers[0].id,
        project_id: seededProjects[0].id,
        role: 'admin',
        is_valid: true,
      },
      {
        user_id: seededUsers[1].id,
        project_id: seededProjects[0].id,
        role: 'member',
        is_valid: true,
      },

      {
        user_id: seededUsers[2].id,
        project_id: seededProjects[0].id,
        role: 'manger',
        is_valid: true,
      },
    ];

    let seededUserProjects = [];

    for (let item of userprojects) {
      let data = await prisma.userProject.create({
        data: {
          user_id: item.user_id,
          project_id: item.project_id,
          role: item.role,
          is_valid: item.is_valid,
        },
      });
      seededUserProjects.push(data);
    }

    console.log('Seeded user_projects:', seededUserProjects);

    // Seed tasks
    const tasks = [
      {
        name: '降水控制',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[0].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '地基檢測',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[0].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '地基調平',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[0].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '地基加強',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[0].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '地基穩固',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[0].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '結構支撐',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[0].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '空隙填充',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[0].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '沉降處理',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[0].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '地基處理',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[0].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '滲漏處理',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[0].id,
        project_id: seededProjects[0].id,
      },
      ///////////////////////categories 2
      {
        name: '基礎施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[1].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '柱施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[1].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '梁施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[1].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '隔牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[1].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '結構施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[1].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '鋼結構安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[1].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '鋼筋綁扎',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[1].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '樓板施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[1].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '外牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[1].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '內牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[1].id,
        project_id: seededProjects[0].id,
      },

      ///////////////////categories 3

      {
        name: '管道安装',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[2].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '排水安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[2].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '通風設備',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[2].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '門窗安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[2].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '消防安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[2].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '電梯安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[2].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '系統安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[2].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '照明系統',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[2].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '通訊系統',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[2].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '鋁塑板安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[2].id,
        project_id: seededProjects[0].id,
      },

      //////categories 4
      {
        name: '磚牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[3].id,
        project_id: seededProjects[0].id,
      },

      {
        name: '油漆工程',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[3].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '木工製作',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[3].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '地板安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[3].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '石材安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[3].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '吊頂安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[3].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '壁紙貼裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[3].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '櫥櫃安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[3].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '電氣安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[3].id,
        project_id: seededProjects[0].id,
      },
      {
        name: '燈具安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[3].id,
        project_id: seededProjects[0].id,
      },


      ///////////////////2 (4-7)
      {
        name: '降水控制',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[4].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '地基檢測',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[4].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '地基調平',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[4].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '地基加強',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[4].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '地基穩固',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[4].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '結構支撐',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[4].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '空隙填充',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[4].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '沉降處理',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[4].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '地基處理',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[4].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '滲漏處理',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[4].id,
        project_id: seededProjects[1].id,
      },
      ///////////////////////categories 2
      {
        name: '基礎施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[5].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '柱施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[5].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '梁施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[5].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '隔牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[5].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '結構施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[5].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '鋼結構安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[5].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '鋼筋綁扎',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[5].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '樓板施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[5].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '外牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[5].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '內牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[5].id,
        project_id: seededProjects[1].id,
      },

      ///////////////////categories 3

      {
        name: '管道安装',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[6].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '排水安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[6].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '通風設備',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[6].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '門窗安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[6].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '消防安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[6].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '電梯安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[6].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '系統安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[6].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '照明系統',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[6].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '通訊系統',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[6].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '鋁塑板安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[6].id,
        project_id: seededProjects[1].id,
      },

      //////categories 4
      {
        name: '磚牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[7].id,
        project_id: seededProjects[1].id,
      },

      {
        name: '油漆工程',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[7].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '木工製作',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[7].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '地板安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[7].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '石材安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[7].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '吊頂安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[7].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '壁紙貼裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[7].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '櫥櫃安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[7].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '電氣安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[7].id,
        project_id: seededProjects[1].id,
      },
      {
        name: '燈具安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[7].id,
        project_id: seededProjects[1].id,
      },
//////////////8-11
{
  name: '降水控制',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[8].id,
  project_id: seededProjects[2].id,
},
{
  name: '地基檢測',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[8].id,
  project_id: seededProjects[2].id,
},
{
  name: '地基調平',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[8].id,
  project_id: seededProjects[2].id,
},
{
  name: '地基加強',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[8].id,
  project_id: seededProjects[2].id,
},
{
  name: '地基穩固',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[8].id,
  project_id: seededProjects[2].id,
},
{
  name: '結構支撐',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[8].id,
  project_id: seededProjects[2].id,
},
{
  name: '空隙填充',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[8].id,
  project_id: seededProjects[2].id,
},
{
  name: '沉降處理',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[8].id,
  project_id: seededProjects[2].id,
},
{
  name: '地基處理',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[8].id,
  project_id: seededProjects[2].id,
},
{
  name: '滲漏處理',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[8].id,
  project_id: seededProjects[2].id,
},
///////////////////////categories 2
{
  name: '基礎施工',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[9].id,
  project_id: seededProjects[2].id,
},
{
  name: '柱施工',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[9].id,
  project_id: seededProjects[2].id,
},
{
  name: '梁施工',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[9].id,
  project_id: seededProjects[2].id,
},
{
  name: '隔牆施工',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[9].id,
  project_id: seededProjects[2].id,
},
{
  name: '結構施工',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[9].id,
  project_id: seededProjects[2].id,
},

{
  name: '鋼結構安裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[9].id,
  project_id: seededProjects[2].id,
},


{
  name: '鋼筋綁扎',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[9].id,
  project_id: seededProjects[2].id,
},

{
  name: '樓板施工',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[9].id,
  project_id: seededProjects[2].id,
},

{
  name: '外牆施工',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[9].id,
  project_id: seededProjects[2].id,
},

{
  name: '內牆施工',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[9].id,
  project_id: seededProjects[2].id,
},

///////////////////categories 3

{
  name: '管道安装',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[10].id,
  project_id: seededProjects[2].id,
},

{
  name: '排水安裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[10].id,
  project_id: seededProjects[2].id,
},

{
  name: '通風設備',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[10].id,
  project_id: seededProjects[2].id,
},

{
  name: '門窗安裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[10].id,
  project_id: seededProjects[2].id,
},

{
  name: '消防安裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[10].id,
  project_id: seededProjects[2].id,
},

{
  name: '電梯安裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[10].id,
  project_id: seededProjects[2].id,
},

{
  name: '系統安裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[10].id,
  project_id: seededProjects[2].id,
},

{
  name: '照明系統',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[10].id,
  project_id: seededProjects[2].id,
},

{
  name: '通訊系統',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[10].id,
  project_id: seededProjects[2].id,
},

{
  name: '鋁塑板安裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[10].id,
  project_id: seededProjects[2].id,
},

//////categories 4
{
  name: '磚牆施工',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[11].id,
  project_id: seededProjects[2].id,
},

{
  name: '油漆工程',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[11].id,
  project_id: seededProjects[2].id,
},
{
  name: '木工製作',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[11].id,
  project_id: seededProjects[2].id,
},
{
  name: '地板安裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[11].id,
  project_id: seededProjects[2].id,
},
{
  name: '石材安裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[11].id,
  project_id: seededProjects[2].id,
},
{
  name: '吊頂安裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[11].id,
  project_id: seededProjects[2].id,
},
{
  name: '壁紙貼裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[11].id,
  project_id: seededProjects[2].id,
},
{
  name: '櫥櫃安裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[11].id,
  project_id: seededProjects[2].id,
},
{
  name: '電氣安裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[11].id,
  project_id: seededProjects[2].id,
},
{
  name: '燈具安裝',
  is_finished: false,
  user_id: seededUsers[0].id,
  category_id: seededCategories[11].id,
  project_id: seededProjects[2].id,
},
      /////12-15

      {
        name: '降水控制',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[12].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '地基檢測',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[12].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '地基調平',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[12].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '地基加強',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[12].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '地基穩固',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[12].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '結構支撐',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[12].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '空隙填充',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[12].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '沉降處理',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[12].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '地基處理',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[12].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '滲漏處理',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[12].id,
        project_id: seededProjects[3].id,
      },
      ///////////////////////categories 2
      {
        name: '基礎施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[13].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '柱施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[13].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '梁施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[13].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '隔牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[13].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '結構施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[13].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '鋼結構安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[13].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '鋼筋綁扎',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[13].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '樓板施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[13].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '外牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[13].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '內牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[13].id,
        project_id: seededProjects[3].id,
      },
      
      ///////////////////categories 3
      
      {
        name: '管道安装',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[14].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '排水安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[14].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '通風設備',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[14].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '門窗安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[14].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '消防安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[14].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '電梯安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[14].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '系統安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[14].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '照明系統',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[14].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '通訊系統',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[14].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '鋁塑板安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[14].id,
        project_id: seededProjects[3].id,
      },
      
      //////categories 4
      {
        name: '磚牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[15].id,
        project_id: seededProjects[3].id,
      },
      
      {
        name: '油漆工程',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[15].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '木工製作',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[15].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '地板安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[15].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '石材安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[15].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '吊頂安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[15].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '壁紙貼裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[15].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '櫥櫃安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[15].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '電氣安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[15].id,
        project_id: seededProjects[3].id,
      },
      {
        name: '燈具安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[15].id,
        project_id: seededProjects[3].id,
      },

      ///////////16-19
      {
        name: '降水控制',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[16].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '地基檢測',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[16].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '地基調平',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[16].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '地基加強',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[16].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '地基穩固',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[16].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '結構支撐',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[16].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '空隙填充',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[16].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '沉降處理',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[16].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '地基處理',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[16].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '滲漏處理',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[16].id,
        project_id: seededProjects[4].id,
      },
      ///////////////////////categories 2
      {
        name: '基礎施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[17].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '柱施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[17].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '梁施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[17].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '隔牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[17].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '結構施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[17].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '鋼結構安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[17].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '鋼筋綁扎',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[17].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '樓板施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[17].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '外牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[17].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '內牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[17].id,
        project_id: seededProjects[4].id,
      },
      
      ///////////////////categories 3
      
      {
        name: '管道安装',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[18].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '排水安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[18].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '通風設備',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[18].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '門窗安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[18].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '消防安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[18].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '電梯安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[18].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '系統安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[18].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '照明系統',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[18].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '通訊系統',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[18].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '鋁塑板安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[18].id,
        project_id: seededProjects[4].id,
      },
      
      //////categories 4
      {
        name: '磚牆施工',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[19].id,
        project_id: seededProjects[4].id,
      },
      
      {
        name: '油漆工程',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[19].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '木工製作',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[19].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '地板安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[19].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '石材安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[19].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '吊頂安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[19].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '壁紙貼裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[19].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '櫥櫃安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[19].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '電氣安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[19].id,
        project_id: seededProjects[4].id,
      },
      {
        name: '燈具安裝',
        is_finished: false,
        user_id: seededUsers[0].id,
        category_id: seededCategories[19].id,
        project_id: seededProjects[4].id,
      },

//////////////// 20-23
// {
//   name: '降水控制',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[20].id,
// },
// {
//   name: '地基檢測',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[20].id,
// },
// {
//   name: '地基調平',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[20].id,
// },
// {
//   name: '地基加強',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[20].id,
// },
// {
//   name: '地基穩固',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[20].id,
// },
// {
//   name: '結構支撐',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[20].id,
// },
// {
//   name: '空隙填充',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[20].id,
// },
// {
//   name: '沉降處理',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[20].id,
// },
// {
//   name: '地基處理',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[20].id,
// },
// {
//   name: '滲漏處理',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[20].id,
// },
// ///////////////////////categories 2
// {
//   name: '基礎施工',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[21].id,
// },
// {
//   name: '柱施工',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[21].id,
// },
// {
//   name: '梁施工',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[21].id,
// },
// {
//   name: '隔牆施工',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[21].id,
// },
// {
//   name: '結構施工',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[21].id,
// },

// {
//   name: '鋼結構安裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[21].id,
// },

// {
//   name: '鋼筋綁扎',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[21].id,
// },

// {
//   name: '樓板施工',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[21].id,
// },

// {
//   name: '外牆施工',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[21].id,
// },

// {
//   name: '內牆施工',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[21].id,
// },

// ///////////////////categories 3

// {
//   name: '管道安装',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[22].id,
// },

// {
//   name: '排水安裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[22].id,
// },

// {
//   name: '通風設備',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[22].id,
// },

// {
//   name: '門窗安裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[22].id,
// },

// {
//   name: '消防安裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[22].id,
// },

// {
//   name: '電梯安裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[22].id,
// },

// {
//   name: '系統安裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[22].id,
// },

// {
//   name: '照明系統',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[22].id,
// },

// {
//   name: '通訊系統',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[22].id,
// },

// {
//   name: '鋁塑板安裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[22].id,
// },

// //////categories 4
// {
//   name: '磚牆施工',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[23].id,
// },

// {
//   name: '油漆工程',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[23].id,
// },
// {
//   name: '木工製作',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[23].id,
// },
// {
//   name: '地板安裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[23].id,
// },
// {
//   name: '石材安裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[23].id,
// },
// {
//   name: '吊頂安裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[23].id,
// },
// {
//   name: '壁紙貼裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[23].id,
// },
// {
//   name: '櫥櫃安裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[23].id,
// },
// {
//   name: '電氣安裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[23].id,
// },
// {
//   name: '燈具安裝',
//   is_finished: false,
//   user_id: seededUsers[0].id,
//   category_id: seededCategories[23].id,
// },

    ];


    let seededTasks = [];

    for (let item of tasks) {
      let data = await prisma.task.create({
        data: {
          name: item.name,
          is_finished: false,
          user_id: item.user_id,
          category_id: item.category_id,
          project_id: item.project_id,
        },
      });
      seededTasks.push(data);
    }

    console.log('Seeded tasks:', seededTasks);

    // Seed records
    const records = [
      {
        name: '安裝排水設施',
        user_id: seededUsers[0].id,
        task_id: seededTasks[0].id,
      },
      {
        name: '地下水位測量',
        user_id: seededUsers[0].id,
        task_id: seededTasks[1].id,
      },
      {
        name: '填充或挖除土',
        user_id: seededUsers[0].id,
        task_id: seededTasks[2].id,
      },
      {
        name: '灌漿加固樁',
        user_id: seededUsers[0].id,
        task_id: seededTasks[3].id,
      },
      {
        name: '支撐桿件',
        user_id: seededUsers[0].id,
        task_id: seededTasks[4].id,
      },
      {
        name: '支撐臂',
        user_id: seededUsers[0].id,
        task_id: seededTasks[5].id,
      },
      {
        name: '填充地基',
        user_id: seededUsers[0].id,
        task_id: seededTasks[6].id,
      },
      {
        name: '加固處理',
        user_id: seededUsers[0].id,
        task_id: seededTasks[7].id,
      },
      {
        name: '土壤改良',
        user_id: seededUsers[0].id,
        task_id: seededTasks[8].id,
      },
      {
        name: '防水層修補',
        user_id: seededUsers[0].id,
        task_id: seededTasks[9].id,
      },

      {
        name: '基礎定位',
        user_id: seededUsers[0].id,
        task_id: seededTasks[0].id,
      },
      {
        name: '基坑支撐',
        user_id: seededUsers[0].id,
        task_id: seededTasks[1].id,
      },
      {
        name: '鋼筋綁扎',
        user_id: seededUsers[0].id,
        task_id: seededTasks[2].id,
      },
      {
        name: '混凝土澆灌',
        user_id: seededUsers[0].id,
        task_id: seededTasks[3].id,
      },
      {
        name: '垂直支撐',
        user_id: seededUsers[0].id,
        task_id: seededTasks[4].id,
      },
      {
        name: '隔音性能',
        user_id: seededUsers[0].id,
        task_id: seededTasks[5].id,
      },
      {
        name: '防水處理',
        user_id: seededUsers[0].id,
        task_id: seededTasks[6].id,
      },
      {
        name: '鋼柱鋼梁連接',
        user_id: seededUsers[0].id,
        task_id: seededTasks[7].id,
      },
      {
        name: '建造樓板結構',
        user_id: seededUsers[0].id,
        task_id: seededTasks[8].id,
      },
      {
        name: '防水層修補',
        user_id: seededUsers[0].id,
        task_id: seededTasks[9].id,
      },
      {
        name: '電線',
        user_id: seededUsers[0].id,
        task_id: seededTasks[0].id,
      },
      {
        name: '電纜',
        user_id: seededUsers[0].id,
        task_id: seededTasks[1].id,
      },
      {
        name: '插座',
        user_id: seededUsers[0].id,
        task_id: seededTasks[2].id,
      },
      {
        name: '排水管',
        user_id: seededUsers[0].id,
        task_id: seededTasks[3].id,
      },
      {
        name: '火災報警系統',
        user_id: seededUsers[0].id,
        task_id: seededTasks[4].id,
      },
      {
        name: '消防設備',
        user_id: seededUsers[0].id,
        task_id: seededTasks[5].id,
      },
      {
        name: '噴水滅火器',
        user_id: seededUsers[0].id,
        task_id: seededTasks[6].id,
      },
      {
        name: '電梯系統安裝',
        user_id: seededUsers[0].id,
        task_id: seededTasks[7].id,
      },
      {
        name: '電梯井道電梯廂',
        user_id: seededUsers[0].id,
        task_id: seededTasks[8].id,
      },
      {
        name: '控制系統',
        user_id: seededUsers[0].id,
        task_id: seededTasks[9].id,
      },
      {
        name: '磚瓦鋪設',
        user_id: seededUsers[0].id,
        task_id: seededTasks[0].id,
      },
      {
        name: '天花板油漆',
        user_id: seededUsers[0].id,
        task_id: seededTasks[1].id,
      },
      {
        name: '木製家具',
        user_id: seededUsers[0].id,
        task_id: seededTasks[2].id,
      },
      {
        name: '地板鋪設固定',
        user_id: seededUsers[0].id,
        task_id: seededTasks[3].id,
      },
      {
        name: '吊頂材料安裝',
        user_id: seededUsers[0].id,
        task_id: seededTasks[4].id,
      },
      {
        name: '浴室櫥櫃安裝',
        user_id: seededUsers[0].id,
        task_id: seededTasks[5].id,
      },
      {
        name: '廚房安裝',
        user_id: seededUsers[0].id,
        task_id: seededTasks[6].id,
      },
      {
        name: '設備佈置連接',
        user_id: seededUsers[0].id,
        task_id: seededTasks[7].id,
      },

      {
        name: '開關電氣',
        user_id: seededUsers[0].id,
        task_id: seededTasks[8].id,
      },
      {
        name: '壁紙貼裝工作',
        user_id: seededUsers[0].id,
        task_id: seededTasks[9].id,
      },
    ];

    let seededRecords = [];

    for (let item of records) {
      let data = await prisma.record.create({
        data: {
          name: item.name,
          user_id: item.user_id,
          task_id: item.task_id,
        },
      });
      seededRecords.push(data);
    }

    console.log('Seeded Records:', seededRecords);

    // Seed photos
    const photos = [
      {
        user_id: seededUsers[0].id,
        record_id: seededRecords[0].id,
        name: 'Photo 1',
        s3_name: 'photo1.jpg',
      },
      {
        user_id: seededUsers[1].id,
        record_id: seededRecords[1].id,
        name: 'Photo 2',
        s3_name: 'photo2.jpg',
      },
    ];

    let seededPhotos = [];

    for (let item of photos) {
      let data = await prisma.photo.create({
        data: {
          user_id: item.user_id,
          record_id: item.record_id,
          name: item.name,
          s3_name: item.s3_name,
        },
      });
      seededPhotos.push(data);
    }

    console.log('Seeded photos:', seededPhotos);

    // Seed syslogs
    //   const syslogs = [
    //     {
    //       user_id: seededUsers[0].id,
    //       task_id: seededTasks[0].id,
    //       record_id: seededRecords[0].id,
    //       photo_id: seededPhotos[0].id,
    //       action: 'Action 1',
    //     },
    //     {
    //       user_id: seededUsers[1].id,
    //       task_id: seededTasks[1].id,
    //       record_id: seededRecords[1].id,
    //       photo_id: seededPhotos[1].id,
    //       action: 'Action 2',
    //     },
    //   ];

    //   console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    await prisma.$disconnect();
  }
}
