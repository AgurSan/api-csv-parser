import { TotalRevenueService } from '../services';
import { CsvParser, DataService } from '~/utils';
import { config } from "~/config";

const csvParser = new CsvParser();
const dataService = new DataService(csvParser, config.CSV_FILE_PATH);
const totalRevenueService = new TotalRevenueService(dataService);

export const TotalRevenueController = {
    /**
     * Retrieves the total revenue by calling the calculateTotalRevenue method of the totalRevenueService.
     *
     * @return {Promise<number>} The total revenue calculated by the calculateTotalRevenue method.
     */
    getTotalRevenue: async () => {
        const totalRevenue = await totalRevenueService.calculateTotalRevenue();
        return totalRevenue;    
    }
}
