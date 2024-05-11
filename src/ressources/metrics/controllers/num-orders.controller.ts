import { Request, Response } from 'express';
import { NumOrdersService } from '../services/num-orders.service';
import { DataService } from '~/utils';

export class NumOrdersController {
    private numOrdersService: NumOrdersService;

    /**
     * Constructs a new instance of the class.
     *
     * @param {DataService} dataService - The data service used to retrieve data.
     */
    constructor(private dataService: DataService) {
        this.numOrdersService = new NumOrdersService(dataService);
    }

    /**
     * Retrieves the total number of orders asynchronously.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {Promise<void>} A promise that resolves when the total number of orders is retrieved and the response is sent.
     */
    async getNumOrders(req: Request, res: Response): Promise<void> {
        try {
            const numOrders = await this.numOrdersService.getNumOrders();
            res.status(200).json({ numOrders });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
