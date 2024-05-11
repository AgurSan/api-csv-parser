import { Request, Response } from 'express';
import { UniqueCustomersService } from '../services/unique-customers.service';
import { DataService } from '~/utils';

export class UniqueCustomersController {
    private static uniqueCustomersService: UniqueCustomersService;

    /**
     * Constructs a new instance of the UniqueCustomersController class.
     *
     * @param {DataService} dataService - The data service used to retrieve data.
     */
    constructor(private dataService: DataService) {
        UniqueCustomersController.uniqueCustomersService = new UniqueCustomersService(dataService);
    }

    /**
     * Retrieves the number of unique customers asynchronously.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {Promise<void>} A promise that resolves when the number of unique customers is retrieved and the response is sent.
     */
    static async getUniqueCustomers(req: Request, res: Response): Promise<void> {
        try {
            const uniqueCustomers = await UniqueCustomersController.uniqueCustomersService.getUniqueCustomers();
            res.status(200).json({ uniqueCustomers });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
