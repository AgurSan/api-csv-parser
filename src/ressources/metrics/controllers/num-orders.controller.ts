import { NumOrdersService } from '../services/num-orders.service';
import { CsvParser,DataService } from '~/utils';
import { config } from "~/config";

const csvParser = new CsvParser();
const dataService = new DataService(csvParser, config.CSV_FILE_PATH);
const numOrdersService = new NumOrdersService(dataService);

export const NumOrdersController = {

        /**
         * Retrieves the number of orders by calling the getNumOrders method of the numOrdersService.
         *
         * @return {Promise<number>} The number of orders.
         */
    getNumOrders: async () => {
        const numOrders = await numOrdersService.getNumOrders();
        return numOrders;
    }
}
