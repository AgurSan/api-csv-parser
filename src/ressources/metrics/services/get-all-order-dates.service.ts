import { DataService } from "~/utils";

export class GetAllOrderDatesService {
    constructor(private dataService: DataService) {}

    /**
     * Retrieves all unique order dates from the data service and returns them in ascending order.
     *
     * @return {Promise<Date[]>} An array of unique order dates sorted in ascending order.
     */
    async getAllOrderDates(): Promise<Date[]> {
        const data = await this.dataService.getData();
        const orderDates = new Set<Date>(data.map(item => new Date(item['Order Date'])));
        const sortedOrderDates = Array.from(orderDates).sort((a,b) => a.getTime() - b.getTime());
        return sortedOrderDates
    }
}