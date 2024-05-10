import cors from "cors";
import express, { Express } from "express";
import { config } from "~/config";

//TODO: import des controllers

const app: Express = express();
app.use(cors());

//TODO: routes

//TODO: Gestion des erreurs

app.listen(config.API_PORT, () => {
    console.log(`Server started on port ${config.API_PORT}`)
})
