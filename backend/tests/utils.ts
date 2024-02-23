import prisma from "@/config/db.config";

export async function databaseCleanup() {
  await prisma.user.deleteMany();
}
