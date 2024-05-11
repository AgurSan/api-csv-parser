import { Request, Response } from "express";
import { DataByDateService } from "../services";
import { DataService } from "~/utils";

export class DataByDateController {
    private static dataByDateService: DataByDateService;

    /**
     * Constructs a new instance of the class.
     *
     * @param {DataService} dataService - The data service used to retrieve data.
     */
    constructor(private dataService: DataService) {
        DataByDateController.dataByDateService = new DataByDateService(dataService);
    }

    /**
     * Retrieves data by a specific date.
     *
     * @param {Request} req - The request object containing the date parameter.
     * @param {Response} res - The response object to send the retrieved data.
     */
    static async getDataByDate(req: Request, res: Response) {
        try {
            const date = new Date(req.params.date);
            const dataByDate = await DataByDateController.dataByDateService.getDataByDateService(date);
            res.status(200).json(dataByDate);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}