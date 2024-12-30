import { FastifyInstance } from "fastify";
import { routesItem } from "./item.routes";

export async function router(fastify: FastifyInstance) {
    await fastify.register(routesItem);
}