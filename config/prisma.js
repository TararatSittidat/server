import {PrismaClient} from "@prisma/client";
import {PrismaMariaDb} from "@prisma/adapter-mariadb";

const addapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    user:"root",
    password:process.env.DB_PASSWORD,
    database:"endproject",
    connectionLimit: 5, 
});

const prisma = new PrismaClient({adapter: addapter});

export default prisma