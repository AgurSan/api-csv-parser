import { Request, Response } from 'express';
import { UniqueCustomersService } from '../services/unique-customers.service';
import { DataService } from '~/utils';

export class UniqueCustomersController {
    private uniqueCustomersService: UniqueCustomersService;

    constructor(private dataService: DataService) {
        this.uniqueCustomersService = new UniqueCustomersService(dataService);
    }

    async getUniqueCustomers(req: Request, res: Response): Promise<void> {
        try {
            const uniqueCustomers = await this.uniqueCustomersService.getUniqueCustomers();
            res.status(200).json({ uniqueCustomers });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
