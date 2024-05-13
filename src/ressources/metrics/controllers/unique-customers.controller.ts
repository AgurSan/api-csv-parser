import { UniqueCustomersService } from '../services/unique-customers.service';
import { CsvParser, DataService } from '~/utils';
import { config } from "~/config";

const csvParser = new CsvParser();
const dataService = new DataService(csvParser, config.CSV_FILE_PATH);
const uniqueCustomersService = new UniqueCustomersService(dataService);

export const UniqueCustomersController = {
    
    getUniqueCustomers: async () => {
        const uniqueCustomers = await uniqueCustomersService.getUniqueCustomers();
        return uniqueCustomers;
    }
}

