import { DataService } from '~/utils';
import { Product } from '~~/types/Product';

export class DataByStateService {
    constructor(private dataService: DataService) {}
    async getDataByState(state: string): Promise<Product[]> {
        const data = await this.dataService.getData();
        const filteredData = data.filter(item => item['State'] === state);
        return filteredData;
    }
}
