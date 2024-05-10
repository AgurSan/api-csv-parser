import { DataService } from './data.service';

export class DataByStateService {
    constructor(private dataService: DataService) {}

    /**
     * Retrieves data filtered by state.
     *
     * @param {string} state The state to filter by.
     * @return {Promise<any[]>} An array of data filtered by state.
     */
    async getDataByState(state: string): Promise<any[]> {
        const data = await this.dataService.getData();
        const filteredData = data.filter(item => item['State'] === state);
        return filteredData;
    }
}
