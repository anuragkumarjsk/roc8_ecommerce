import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";  // Import the global Prisma client

const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(z.object({ name: z.string().min(1), email: z.string().email(), password: z.string().min(6) }))
    .mutation(async ({ input }) => {
      const user = await db.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: input.password,
        },
      });
      return user;
    }),

  getUserById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const user = await db.user.findUnique({
        where: { id: input.id },
        include: { favourites: true },
      });
      return user;
    }),

  getAllUsers: publicProcedure.query(async () => {
    const users = await db.user.findMany({
      include: { favourites: true },
    });
    return users;
  }),

  updateUser: publicProcedure
    .input(z.object({ id: z.number(), name: z.string().optional(), email: z.string().email().optional() }))
    .mutation(async ({ input }) => {
      const user = await db.user.update({
        where: { id: input.id },
        data: {
          name: input.name,
          email: input.email,
        },
      });
      return user;
    }),

  deleteUser: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      await db.user.delete({
        where: { id: input.id },
      });
      return { message: "User deleted successfully" };
    }),
});


export {userRouter};