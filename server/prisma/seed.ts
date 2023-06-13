import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
const SALT_ROUNDS = 10;

async function hashPassword(plainPassword: string) {
  const hash: string = await bcrypt.hash(plainPassword, SALT_ROUNDS);
  return hash;
}

// async function main() {
//   const prisma = new PrismaClient();
//   const insertUser = {
//     username: 'sam',
//     password: await hashPassword('1234'),
//   };

//   await prisma.user.upsert({
//     where: { username: insertUser.username },
//     update: {},
//     create: { ...insertUser },
//   });
// }

main()
  .then(() => console.log('seed done'))
  .catch((error) => console.error(error));

async function main() {
  const prisma = new PrismaClient();

  let hashed = await hashPassword('123456');
  try {
    // Seed users
    const users = [
      { username: 'Admin', password: hashed, isAdmin: true },
      { username: 'Admin1', password: hashed, isAdmin: true },
      { username: 'Sam', password: hashed, isAdmin: false },
      { username: 'Ken', password: hashed, isAdmin: false },
      { username: 'Mav', password: hashed, isAdmin: false },
    ];

    // const seededUsers =  await this.prisma.user(users.map((user) => prisma.user.create({
    //   data: user,
    // })))

    let seededUsers = [];

    for (let item of users) {
      let data = await prisma.user.create({
        data: {
          username: item.username,
          password: item.password,
          isAdmin: item.isAdmin,
        },
      });
      seededUsers.push(data);
    }

    console.log('hibye', seededUsers);

    // Seed projects
    const projects = [
      { name: '北區醫院擴建計劃', user_id: seededUsers[0].id },
      { name: '油麻地戲院第二期建造工程', user_id: seededUsers[1].id },
      { name: '瑪麗醫院第一期重建計劃', user_id: seededUsers[2].id },
      { name: '葵涌醫院重建工程(第二及三期)', user_id: seededUsers[3].id },
      { name: '啟德發展區興建新急症醫院', user_id: seededUsers[4].id },
    ];

    const seededProjects = await prisma.project.createMany({
      data: projects,
    });

    // Seed categories
    const categories = [
      { name: '地基工程', project_id: seededProjects[1].id },
      { name: '主體結構', project_id: seededProjects[1].id },
      { name: '建築安裝', project_id: seededProjects[1].id },
      { name: '內部裝修', project_id: seededProjects[1].id },
    ];

    const seededCategories = await prisma.category.createMany({
      data: categories,
    });

    // Seed teammates
    const teammates = [
      { user_id: seededUsers[0].id, project_id: seededProjects[0].id },
      { user_id: seededUsers[1].id, project_id: seededProjects[1].id },
    ];

    const seededTeammates = await prisma.teammate.createMany({
      data: teammates,
    });

    // Seed tasks
    const tasks = [
      {
        name: '降水控制',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[1].id,
      },
      {
        name: '地基檢測',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[1].id,
      },
      {
        name: '地基調平',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[1].id,
      },
      {
        name: '地基加強',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[1].id,
      },
      {
        name: '地基穩固',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[1].id,
      },
      {
        name: '結構支撐',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[1].id,
      },
      {
        name: '空隙填充',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[1].id,
      },
      {
        name: '沉降處理',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[1].id,
      },
      {
        name: '地基處理',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[1].id,
      },
      {
        name: '滲漏處理',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[1].id,
      },
      ///////////////////////categories 2
      {
        name: '基礎施工',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[2].id,
      },
      {
        name: '柱施工',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[2].id,
      },
      {
        name: '梁施工',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[2].id,
      },
      {
        name: '隔牆施工',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[2].id,
      },
      {
        name: '結構施工',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[2].id,
      },

      {
        name: '鋼結構安裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[2].id,
      },

      {
        name: '鋼筋綁扎',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[2].id,
      },

      {
        name: '樓板施工',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[2].id,
      },

      {
        name: '外牆施工',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[2].id,
      },

      ///////////////////categories 3

      {
        name: '管道安装',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[3].id,
      },

      {
        name: '排水安裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[3].id,
      },

      {
        name: '通風設備',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[3].id,
      },

      {
        name: '門窗安裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[3].id,
      },

      {
        name: '消防安裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[3].id,
      },

      {
        name: '電梯安裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[3].id,
      },

      {
        name: '系統安裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[3].id,
      },

      {
        name: '照明系統',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[3].id,
      },

      {
        name: '通訊系統',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[3].id,
      },

      {
        name: '鋁塑板安裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[3].id,
      },

      //////categories 4
      {
        name: '磚牆施工',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[4].id,
      },

      {
        name: '油漆工程',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[4].id,
      },
      {
        name: '木工製作',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[4].id,
      },
      {
        name: '地板安裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[4].id,
      },
      {
        name: '石材安裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[4].id,
      },
      {
        name: '吊頂安裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[4].id,
      },
      {
        name: '壁紙貼裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[4].id,
      },
      {
        name: '櫥櫃安裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[4].id,
      },
      {
        name: '電氣安裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[4].id,
      },
      {
        name: '燈具安裝',
        isFinished: false,
        user_id: seededUsers[1].id,
        category_id: seededCategories[4].id,
      },
    ];

    const seededTasks = await prisma.task.createMany({
      data: tasks,
    });

    // Seed records
    const records = [
      {
        name: '安裝排水設施',
        user_id: seededUsers[1].id,
        task_id: seededTasks[1].id,
      },
      {
        name: '地下水位測量',
        user_id: seededUsers[1].id,
        task_id: seededTasks[2].id,
      },
      {
        name: '填充或挖除土',
        user_id: seededUsers[1].id,
        task_id: seededTasks[3].id,
      },
      {
        name: '灌漿加固樁',
        user_id: seededUsers[1].id,
        task_id: seededTasks[4].id,
      },
      {
        name: '支撐桿件',
        user_id: seededUsers[1].id,
        task_id: seededTasks[5].id,
      },
      {
        name: '支撐臂',
        user_id: seededUsers[1].id,
        task_id: seededTasks[6].id,
      },
      {
        name: '填充地基',
        user_id: seededUsers[1].id,
        task_id: seededTasks[7].id,
      },
      {
        name: '加固處理',
        user_id: seededUsers[1].id,
        task_id: seededTasks[8].id,
      },
      {
        name: '土壤改良',
        user_id: seededUsers[1].id,
        task_id: seededTasks[9].id,
      },
      {
        name: '防水層修補',
        user_id: seededUsers[1].id,
        task_id: seededTasks[10].id,
      },

      {
        name: '基礎定位',
        user_id: seededUsers[1].id,
        task_id: seededTasks[1].id,
      },
      {
        name: '基坑支撐',
        user_id: seededUsers[1].id,
        task_id: seededTasks[2].id,
      },
      {
        name: '鋼筋綁扎',
        user_id: seededUsers[1].id,
        task_id: seededTasks[3].id,
      },
      {
        name: '混凝土澆灌',
        user_id: seededUsers[1].id,
        task_id: seededTasks[4].id,
      },
      {
        name: '垂直支撐',
        user_id: seededUsers[1].id,
        task_id: seededTasks[5].id,
      },
      {
        name: '隔音性能',
        user_id: seededUsers[1].id,
        task_id: seededTasks[6].id,
      },
      {
        name: '防水處理',
        user_id: seededUsers[1].id,
        task_id: seededTasks[7].id,
      },
      {
        name: '鋼柱鋼梁連接',
        user_id: seededUsers[1].id,
        task_id: seededTasks[8].id,
      },
      {
        name: '建造樓板結構',
        user_id: seededUsers[1].id,
        task_id: seededTasks[9].id,
      },
      {
        name: '防水層修補',
        user_id: seededUsers[1].id,
        task_id: seededTasks[10].id,
      },
      {
        name: '電線',
        user_id: seededUsers[1].id,
        task_id: seededTasks[1].id,
      },
      {
        name: '電纜',
        user_id: seededUsers[1].id,
        task_id: seededTasks[2].id,
      },
      {
        name: '插座',
        user_id: seededUsers[1].id,
        task_id: seededTasks[3].id,
      },
      {
        name: '排水管',
        user_id: seededUsers[1].id,
        task_id: seededTasks[4].id,
      },
      {
        name: '火災報警系統',
        user_id: seededUsers[1].id,
        task_id: seededTasks[5].id,
      },
      {
        name: '消防設備',
        user_id: seededUsers[1].id,
        task_id: seededTasks[6].id,
      },
      {
        name: '噴水滅火器',
        user_id: seededUsers[1].id,
        task_id: seededTasks[7].id,
      },
      {
        name: '電梯系統安裝',
        user_id: seededUsers[1].id,
        task_id: seededTasks[8].id,
      },
      {
        name: '電梯井道電梯廂',
        user_id: seededUsers[1].id,
        task_id: seededTasks[9].id,
      },
      {
        name: '控制系統',
        user_id: seededUsers[1].id,
        task_id: seededTasks[10].id,
      },
      {
        name: '磚瓦鋪設',
        user_id: seededUsers[1].id,
        task_id: seededTasks[1].id,
      },
      {
        name: '天花板油漆',
        user_id: seededUsers[1].id,
        task_id: seededTasks[2].id,
      },
      {
        name: '木製家具',
        user_id: seededUsers[1].id,
        task_id: seededTasks[3].id,
      },
      {
        name: '地板鋪設固定',
        user_id: seededUsers[1].id,
        task_id: seededTasks[4].id,
      },
      {
        name: '吊頂材料安裝',
        user_id: seededUsers[1].id,
        task_id: seededTasks[5].id,
      },
      {
        name: '浴室櫥櫃安裝',
        user_id: seededUsers[1].id,
        task_id: seededTasks[6].id,
      },
      {
        name: '廚房安裝',
        user_id: seededUsers[1].id,
        task_id: seededTasks[7].id,
      },
      {
        name: '設備佈置連接',
        user_id: seededUsers[1].id,
        task_id: seededTasks[8].id,
      },

      {
        name: '開關電氣',
        user_id: seededUsers[1].id,
        task_id: seededTasks[9].id,
      },
      {
        name: '壁紙貼裝工作',
        user_id: seededUsers[1].id,
        task_id: seededTasks[0].id,
      },
    ];

    const seededRecords = await prisma.record.createMany({
      data: records,
    });

    // Seed photos
    const photos = [
      {
        user_id: seededUsers[0].id,
        record_id: seededRecords[0].id,
        photo_name: 'Photo 1',
        s3_name: 'photo1.jpg',
      },
      {
        user_id: seededUsers[1].id,
        record_id: seededRecords[1].id,
        photo_name: 'Photo 2',
        s3_name: 'photo2.jpg',
      },
    ];

    const seededPhotos = await prisma.photo.createMany({
      data: photos,
    });

    // Seed syslogs
    const syslogs = [
      {
        user_id: seededUsers[0].id,
        task_id: seededTasks[0].id,
        record_id: seededRecords[0].id,
        photo_id: seededPhotos[0].id,
        action: 'Action 1',
      },
      {
        user_id: seededUsers[1].id,
        task_id: seededTasks[1].id,
        record_id: seededRecords[1].id,
        photo_id: seededPhotos[1].id,
        action: 'Action 2',
      },
    ];

    const seededSyslogs = await prisma.syslog.createMany({
      data: syslogs,
    });

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    await prisma.$disconnect();
  }
}
