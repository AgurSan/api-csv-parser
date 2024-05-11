import { Request, Response } from 'express';
import { AvgRevenuePerOrderService } from '../services/avg-revenue-per-order.service';
import { DataService } from '~/utils';

export class AvgRevenuePerOrderController {
    private static avgRevenuePerOrderService: AvgRevenuePerOrderService;

    /**
     * Constructs a new instance of the AvgRevenuePerOrderController class.
     *
     * @param {DataService} dataService - The data service used to retrieve data.
     * @return {void}
     */
    constructor(private dataService: DataService) {
        AvgRevenuePerOrderController.avgRevenuePerOrderService = new AvgRevenuePerOrderService(dataService);
    }


    /**
     * Retrieves the average revenue per order.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {Promise<void>} - A promise that resolves when the average revenue per order is retrieved and the response is sent.
     */
    static async getAvgRevenuePerOrder(req: Request, res: Response) {
        try {
            const avgRevenuePerOrder = await AvgRevenuePerOrderController.avgRevenuePerOrderService.getAvgRevenuePerOrder();
            res.status(200).json({ avgRevenuePerOrder });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}

