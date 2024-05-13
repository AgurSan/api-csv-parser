import { GetAllOrderDatesService } from "../services";
import { CsvParser, DataService } from "~/utils";
import { config } from "~/config";

const csvParser = new CsvParser();
const dataService = new DataService(csvParser, config.CSV_FILE_PATH);
const getAllOrderDatesService = new GetAllOrderDatesService(dataService);

export const GetAllOrderDatesController = {
    /**
     * Retrieves all distinct order dates sorted chronologically by calling the getAllOrderDates method of the getAllOrderDatesService.
     *
     * @return {Promise<Date[]>} An array of distinct order dates sorted chronologically.
     */
    getAllOrderDates: async (): Promise<Date[]> => {
        const orderDates = await getAllOrderDatesService.getAllOrderDates();
        return orderDates;
    },
};