import cors from "cors";
import express, { Express, Request, Response } from "express";
import { config } from "~/config";
import {
    AvgRevenuePerOrderController,
    DataByDateController,
    DataByStateController,
    NumOrdersController,
    TotalRevenueController,
    UniqueCustomersController
} from './ressources/metrics/controllers';

const app: Express = express();
app.use(cors());

//handler
export async function handleRequest(
    request: Request,
    response: Response,
    action: (request: Request) => Promise<any>
): Promise<void> {
    try {
        const result = await action(request);
        response.status(200).json(result);
    } catch (error: any) {
        response.status(500).json({ error: error.message });
    }
}

//routes
app.get('/total-revenue', async (req: Request, res: Response) => {
    const totalRevenue = await TotalRevenueController.getTotalRevenue();
    res.json( { totalRevenue});
});

//Gestion des erreurs
app.use((err: any, req: Request, res: Response, next: Function) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});



app.listen(config.API_PORT, () => {
    console.log(`Server started on port ${config.API_PORT}`)
})
