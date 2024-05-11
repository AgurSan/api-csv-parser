import { DataService } from '~/utils';

export class AvgRevenuePerOrderService {
    constructor(private dataService: DataService) {}
    /**
     * Calculates the average revenue per order by dividing the total revenue by the total quantity of items.
     *
     * @return {Promise<number>} The average revenue per order.
     */
    async getAvgRevenuePerOrder(): Promise<number> {
        const data = await this.dataService.getData();
        const totalRevenue = data.reduce((acc, item) => acc + item.Sales * item.Quantity, 0);
        const totalQuantity = data.reduce((acc, item) => acc + item.Quantity, 0);
        const avgRevenuePerOrder = totalRevenue / totalQuantity;
        return avgRevenuePerOrder;
    }
}
