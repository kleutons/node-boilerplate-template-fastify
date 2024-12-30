import { FastifyReply, FastifyRequest } from "fastify";
import { ItemService } from "../services/items.service";
import { ItemCreateModel, ItemIdModel, ItemModel } from "../models/items.model"
import { HttpError } from "../errors/http-error";


export class ItemController {

    private service: ItemService;

    constructor(){
        this.service = new ItemService();
    }

    public async list(req: FastifyRequest, rep: FastifyReply){
        const {search} = req.query as {search?: string};

        try{
            const result = await this.service.list(search); 
            return rep.status(200).send(result);
        }catch (err){
            rep.status(500).send({error:'Failed to list items' })
        }
    }

    public async post(req:FastifyRequest, rep:FastifyReply){
        try{
            const item = req.body as ItemCreateModel;
            const result = await this.service.post(item); 
            return rep.status(201).send(result);
        }catch(err){
            rep.status(500).send({error:'Failed to create item' })
        }
    }

    public async put(req:FastifyRequest, rep:FastifyReply){
        try{
            const { id } = req.params as ItemIdModel;
            const item = req.body as ItemCreateModel;
            const itemUpdate: ItemModel = { id, ...item}
            
            const result = await this.service.put(itemUpdate); 
            return rep.status(204).send(result);
        }catch(err: any){
            if(err instanceof HttpError)
                return rep.status(err.statusCode).send({error: err.message})
            rep.status(500).send({error:'Failed to update item' })
        }
    }

    public async delete(req:FastifyRequest, rep:FastifyReply){
        try{
            const { id } = req.params as ItemIdModel;
            await this.service.delete(id);
            rep.status(204).send();
        }catch(err: any){
            if(err instanceof HttpError)
                return rep.status(err.statusCode).send({error: err.message})
            rep.status(500).send({error:'Failed to delete item' })
        }
    }

}