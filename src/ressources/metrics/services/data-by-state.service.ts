import { DataService } from '~/utils';
import { Product } from '~~/types/Product';

export class DataByStateService {
    constructor(private dataService: DataService) {}
    /**
     * Retrieves data filtered by the specified state.
     *
     * @param {string} state - The state to filter the data by.
     * @return {Promise<Product[]>} The data filtered by the specified state.
     */
    async getDataByState(state: string): Promise<Product[]> {
        const data = await this.dataService.getData();
        const filteredData = data.filter(item => item['State'] === state);
        return filteredData;
    }
}
