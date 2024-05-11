import { Request, Response } from 'express';
import { DataByStateService } from '../services/data-by-state.service';
import { DataService } from '~/utils';

export class DataByStateController {
    private dataByStateService: DataByStateService;

    /**
     * Constructs a new instance of the class.
     *
     * @param {DataService} dataService - The data service used to retrieve data.
     */
    constructor(private dataService: DataService) {
        this.dataByStateService = new DataByStateService(dataService);
    }

    /**
     * Retrieves data filtered by state.
     *
     * @param {Request} req - The request object containing the state parameter.
     * @param {Response} res - The response object to send the retrieved data.
     * @return {Promise<void>} - A promise that resolves when the data filtered by state is retrieved and the response is sent.
     */
    async getDataByState(req: Request, res: Response): Promise<void> {
        try {
            const state = req.params.state;
            const dataByState = await this.dataByStateService.getDataByState(state);
            res.status(200).json(dataByState);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}