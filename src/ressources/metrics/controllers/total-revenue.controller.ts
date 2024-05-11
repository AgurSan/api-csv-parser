import { Request, Response } from 'express';
import { TotalRevenueService } from '../services/total-revenue.service';
import { DataService } from '~/utils';

export class TotalRevenueController {
    private static totalRevenueService: TotalRevenueService;

    /**
     * Constructs a new instance of the TotalRevenueController class.
     *
     * @param {DataService} dataService - The data service used to retrieve data.
     */
    constructor(private dataService: DataService) {
        TotalRevenueController.totalRevenueService = new TotalRevenueService(dataService);
    }

    /**
     * Retrieves the total revenue by multiplying the sales and quantity of each item in the data.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {Promise<void>} - A promise that resolves when the total revenue is retrieved and the response is sent.
     */
    static async getTotalRevenue(req: Request, res: Response): Promise<void> {
        try {
            const totalRevenue = await TotalRevenueController.totalRevenueService.getTotalRevenue();
            res.status(200).json({ totalRevenue });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
