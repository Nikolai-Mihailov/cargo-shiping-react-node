import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;

export default class UsersService extends PrismaClient {


    constructor() {
    
    }

    async signup(params = {}) {

        let { username, email, password } = params;

        try {
            PrismaClient.users.ge
            const userExists = await prisma.users.findFirst({
                where: {
                    username,
                    email
                }
            })

            let stop = true;
        } catch (error) {

            console.log(error)
        }

    }
}