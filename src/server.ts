import fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

//Back-End API RESTful


const app = fastify();

const prisma = new PrismaClient();

app.register(cors);

/**
 * Método HTTP: GET, POST, PUT, DELETE
 */

app.get('/hello', async () => {

  const habits = await prisma.habit.findMany();

  return habits;
});

app.listen({
  port: 3333
}).then(() => {
  console.log('Server is running!');
});