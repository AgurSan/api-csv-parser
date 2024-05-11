import { DataService } from '~/utils';

export class TotalRevenueService {
    constructor(private dataService: DataService) {}

    /**
     * Calculates the total revenue by multiplying the sales and quantity of each item in the data.
     *
     * @return {Promise<number>} The total revenue.
     */
    async getTotalRevenue(): Promise<number> {
        const data = await this.dataService.getData();
        const totalRevenue = data.reduce((acc, item) => acc + item.Sales * item.Quantity, 0);
        return totalRevenue;
    }
}
