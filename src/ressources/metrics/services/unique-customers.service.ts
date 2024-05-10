import { DataService } from './data.service';

export class UniqueCustomersService {
    constructor(private dataService: DataService) {}

    /**
     * Retrieves the number of unique customers.
     *
     * @return {Promise<number>} The number of unique customers.
     */
    async getUniqueCustomers(): Promise<number> {
        const data = await this.dataService.getData();
        const customerIds = data.map((item) => item['Customer ID']).filter((customerId) => customerId);
        const uniqueCustomers = new Set(customerIds).size;
        return uniqueCustomers;
    }
}
