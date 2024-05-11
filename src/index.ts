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
type ControllerMethod = (req: Request, res: Response) => Promise<void>;

const endpointMap: Record<string, ControllerMethod> = {
    "avg-revenue-per-order": AvgRevenuePerOrderController.getAvgRevenuePerOrder,
    "data-by-date": DataByDateController.getDataByDate,
    "data-by-state": DataByStateController.getDataByState,
    "num-orders": NumOrdersController.getNumOrders,
    "total-revenue": TotalRevenueController.getTotalRevenue,
    "unique-customers": UniqueCustomersController.getUniqueCustomers
};

app.get("/:endpoint", async (req: Request, res: Response) => {
    const controllerMethod = endpointMap[req.params.endpoint];
    if (controllerMethod) {
        return controllerMethod(req, res);
    } else {
        res.status(404).json({ error: "Not found" });
    }
});


//TODO: Gestion des erreurs

app.listen(config.API_PORT, () => {
    console.log(`Server started on port ${config.API_PORT}`)
})
