import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create some products
  const product1 = await prisma.product.upsert({
    where: { name: 'Product 1',id : 1},
    update: {},
    create: { name: 'Product 1', id : 1 },
  });

  const product2 = await prisma.product.upsert({
    where: { name: 'Product 2',id:2 },
    update: {},
    create: { name: 'Product 2',id:2 },
  });

  // Create a user and associate products as favourites
  const upsertUser = await prisma.user.upsert({
    where: {
      email: 'test@test.io',
    },
    update: {},
    create: {
      name: 'test',
      email: 'test@test.io',
      password: 'password',
      favourites: {
        create: [
          { product: { connect: { id: product1.id } } },
          { product: { connect: { id: product2.id } } },
        ],
      },
    },
  });

  console.log(upsertUser);
}

main()
  .then(() => {
    console.log('Seeding successful');
    prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Seeding failed', e);
    await prisma.$disconnect();
    process.exit(1);
  });
