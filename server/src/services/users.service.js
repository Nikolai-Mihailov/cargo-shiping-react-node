import Prisma from "@prisma/client";
const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

export default class UsersService {
  async signup(params = {}) {
    let { username, email, password } = params;

    try {
      const userExists = await prisma.users.findFirst({
        where: {
          username,
          email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
