import { DataService } from './data.service';

export class NumOrdersService {
    constructor(private dataService: DataService) {}

    /**
     * Retrieves the total number of orders.
     *
     * @return {Promise<number>} The total number of orders.
     */
    async getNumOrders(): Promise<number> {
        const data = await this.dataService.getData();
        const numOrders = data.length;
        return numOrders;
    }
}
