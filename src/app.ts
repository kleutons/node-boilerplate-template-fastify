import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import { router } from "./routers/router";

export function createApp(){
    const app = fastify();

    //Cors
    app.register(fastifyCors,{
        // origin: ["www.google.com", "site.com"]
        origin: "*", //All site, 
    })

    // Registre all routes
    router(app);
    
    return app;  
}