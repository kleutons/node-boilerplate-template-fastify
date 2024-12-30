import { createApp } from "./app";

const port = parseInt(String(process.env.PORT), 10) || 3000;

const start = async () => {
    try{
        const app = createApp();

        // HOME ROUTER
        app.get("/", (req, res) => {
            return {message: 'Server Started'};
        });

        app.listen({port}, (err, address) => {
            if(err){
                console.log(err);
                process.exit(1);
            }

            console.log("🔥 Server Started, http://localhost:" + port);
        });

    }catch(err){
        console.log(err);
        process.exit(1);

    }
}

start();
