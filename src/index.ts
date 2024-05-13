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

app.get('/unique-customers', async (req: Request, res: Response) => {
    const uniqueCustomers = await UniqueCustomersController.getUniqueCustomers();
    res.json({ uniqueCustomers });
});

app.get('/num-orders', async (req: Request, res: Response) => {
    const numOrders = await NumOrdersController.getNumOrders();
    res.json({ numOrders });
});

app.get('/avg-revenue-per-order', async (req: Request, res: Response) => {
    const avgRevenuePerOrder = await AvgRevenuePerOrderController.getAvgRevenuePerOrder();
    res.json({ avgRevenuePerOrder });
});

//Gestion des erreurs
app.use((err: any, req: Request, res: Response, next: Function) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});



app.listen(config.API_PORT, () => {
    console.log(`Server started on port ${config.API_PORT}`)
})
