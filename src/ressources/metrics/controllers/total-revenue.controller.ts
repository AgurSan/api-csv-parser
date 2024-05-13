import { Request, Response } from 'express';
import { TotalRevenueService } from '../services/total-revenue.service';
import { CsvParser, DataService } from '~/utils';
import { config } from "~/config";

const csvParser = new CsvParser();
const dataService = new DataService(csvParser, config.CSV_FILE_PATH);
const totalRevenueService = new TotalRevenueService(dataService);

export const TotalRevenueController = {
    getTotalRevenue: async () => {
        const totalRevenue = await totalRevenueService.calculateTotalRevenue();
        return totalRevenue;    
    }
}
