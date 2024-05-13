import { DataByStateService } from '../services';
import { CsvParser, DataService } from '~/utils';
import { config } from "~/config";
import { Product } from "~~/types/Product";

const csvParser = new CsvParser();
const dataService = new DataService(csvParser, config.CSV_FILE_PATH);
const dataByStateService = new DataByStateService(dataService);

export const DataByStateController = {
    getDataByState: async (state: string): Promise<Product[]> => {
        const dataByState = await dataByStateService.getDataByState(state);
        return dataByState;
    }
}
