import prisma from "@/config/db.config";
import type { Prisma } from "@prisma/client";

export async function createUser(data: Prisma.UserCreateInput) {
  return prisma.user.create({ data });
}

export async function getUser(where: Prisma.UserWhereInput) {
  return prisma.user.findFirst({ where });
}
