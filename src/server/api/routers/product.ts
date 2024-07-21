import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";  // Import the global Prisma client

const productRouter = createTRPCRouter({
  createProduct: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      const product = await db.product.create({
        data: {
          name: input.name,
        },
      });
      return product;
    }),

  getProductById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const product = await db.product.findUnique({
        where: { id: input.id },
        include: { users: true },
      });
      return product;
    }),

  getAllProducts: publicProcedure.query(async () => {
    const products = await db.product.findMany({
      include: { users: true },
    });
    return products;
  }),

  updateProduct: publicProcedure
    .input(z.object({ id: z.number(), name: z.string().optional() }))
    .mutation(async ({ input }) => {
      const product = await db.product.update({
        where: { id: input.id },
        data: {
          name: input.name,
        },
      });
      return product;
    }),

  deleteProduct: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      await db.product.delete({
        where: { id: input.id },
      });
      return { message: "Product deleted successfully" };
    }),
});


export {productRouter}