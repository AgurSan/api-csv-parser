import { AvgRevenuePerOrderService } from '../services';
import { CsvParser, DataService } from '~/utils';
import { config } from "~/config";

const csvParser = new CsvParser();
const dataService = new DataService(csvParser, config.CSV_FILE_PATH);
const avgRevenuePerOrderService = new AvgRevenuePerOrderService(dataService);

export const AvgRevenuePerOrderController = {
    /**
     * Retrieves the average revenue per order.
     *
     * @return {Promise<number>} The average revenue per order.
     */
    getAvgRevenuePerOrder: async () => {
        const avgRevenuePerOrder = await avgRevenuePerOrderService.getAvgRevenuePerOrder();
        return avgRevenuePerOrder;
    }
}
