import { DataService } from '~/utils';
import { Product } from '~~/types/Product';

export class DataByDateService {
    constructor(private dataService: DataService) {}
    /**
     * Retrieves data by the specified date.
     *
     * @param {Date} date - The date to filter the data by.
     * @return {Promise<Product[]>} The data filtered by the specified date.
     */
    async getDataByDateService(date: Date): Promise<Product[]> {
        const data = await this.dataService.getData();
        const fileterdData = data.filter((item: Product) => {
            const orderDate = new Date(item['Order Date']);
            return orderDate.getTime() === date.getTime();
        });
        return fileterdData;
    }
}
