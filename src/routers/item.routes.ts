import { FastifyInstance } from "fastify";
import { ROUTERS } from "./routeDefinition";
import { ItemController } from "../controllers/items.controller";


export async function routesItem(fastify:FastifyInstance) {
    const controller = new ItemController();

    fastify.get(ROUTERS.ITEM, async(req, rep) =>{
       return await controller.list(req, rep);
    })

    fastify.post(ROUTERS.ITEM, async(req, rep) =>{
        return await controller.post(req, rep);
     })

    fastify.put(ROUTERS.ITEM+"/:id", async(req, rep) =>{
        return await controller.put(req, rep);
    })

    fastify.delete(ROUTERS.ITEM+"/:id", async(req, rep) =>{
        return await controller.delete(req, rep);
    })
    
}