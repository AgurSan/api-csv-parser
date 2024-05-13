import cors from "cors";
import express, { Express, Request, Response } from "express";
import { config } from "~/config";
import {
    AvgRevenuePerOrderController,
    DataByDateController,
    DataByStateController,
    NumOrdersController,
    TotalRevenueController,
    UniqueCustomersController,
    GetAllOrderDatesController
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
app.get('/total-revenue', (req: Request, res: Response) => {
    handleRequest(req, res, async (request: Request) => {
        const totalRevenue = await TotalRevenueController.getTotalRevenue();
        return { totalRevenue };
    });
});

app.get('/unique-customers', (req: Request, res: Response) => {
    handleRequest(req, res, async (request: Request) => {
        const uniqueCustomers = await UniqueCustomersController.getUniqueCustomers();
        return { uniqueCustomers };
    });
});

app.get('/num-orders', (req: Request, res: Response) => {
    handleRequest(req, res, async (request: Request) => {
        const numOrders = await NumOrdersController.getNumOrders();
        return { numOrders };
    });
});

app.get('/avg-revenue-per-order', (req: Request, res: Response) => {
    handleRequest(req, res, async (request: Request) => {
        const avgRevenuePerOrder = await AvgRevenuePerOrderController.getAvgRevenuePerOrder();
        return { avgRevenuePerOrder };
    });
});

app.get('/by-date/:date', (req: Request, res: Response) => {
    handleRequest(req, res, async (request: Request) => {
        const date = req.params.date;
        const dataByDate = await DataByDateController.getDataByDate(date);
        return { dataByDate };
    });
});

app.get('/by-state/:state', (req: Request, res: Response) => {
    handleRequest(req, res, async (request: Request) => {
        const state = req.params.state;
        const dataByState = await DataByStateController.getDataByState(state);
        return { dataByState };
    });
});

app.get('/order-dates', (req: Request, res: Response) => {
    handleRequest(req, res, async (request: Request) => {
        const orderDates = await GetAllOrderDatesController.getAllOrderDates();
        return orderDates;
    });
});

//Gestion des erreurs
app.use((err: any, req: Request, res: Response, next: Function) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});



app.listen(config.API_PORT, () => {
    console.log(`Server started on port ${config.API_PORT}`)
})
