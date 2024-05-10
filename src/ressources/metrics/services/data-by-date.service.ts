import { DataService } from './data.service';

export class DataByDateService {
    constructor(private dataService: DataService) {}

    /**
     * Retrieves metrics by order date.
     *
     * @param {Date} date The date to filter by.
     * @return {Promise<{ [key: string]: any[] }>} Metrics grouped by order date.
     */
    async getDataByDateService(date: Date): Promise<{ [key: string]: any[] }> {
        const data = await this.dataService.getData();
        const filteredData = data.filter((item: any) => {
            const orderDate = new Date(item['Order Date']);
            return orderDate.getTime() === date.getTime();
        });
        return { [date.toISOString()]: filteredData };
    }
}
