import { DataByDateService } from "../services";
import { CsvParser, DataService } from "~/utils";
import { config } from "~/config";
import { Product } from "~~/types/Product";

const csvParser = new CsvParser();
const dataService = new DataService(csvParser, config.CSV_FILE_PATH);
const dataByDateService = new DataByDateService(dataService);

export const DataByDateController = {

    /**
     * Retrieves data based on a specific date.
     *
     * @param {string} dateString - The date string in the format 'MM/DD/YYYY'.
     * @return {Promise<Product[]>} The data corresponding to the provided date.
     */
    getDataByDate: async (dateString: string): Promise<Product[]> => {
        const dateParts = dateString.split('-');
        if (dateParts.length !== 3) {
            throw new Error('Invalid date format');
        }
        const year = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10) - 1; 
        const day = parseInt(dateParts[2], 10);
        const date = new Date(year, month, day);
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date format');
        }
        const dataByDate = await dataByDateService.getDataByDateService(date);
        return dataByDate;     
    }
}