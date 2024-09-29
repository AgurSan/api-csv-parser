import { Request, Response, NextFunction } from "express";
import { DataService } from "../services";

export class MetadataController {
  constructor(private dataService: DataService) {}

  /**
   * Retrieves unique years and states from the data.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @param {NextFunction} next - The next function in the middleware chain.
   * @return {Promise<void>} A promise that resolves to void.
   */
  public async getMetadata(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const [years, states] = await Promise.all([
        this.dataService.getUniqueYears(),
        this.dataService.getUniqueStates(),
      ]);
      res.json({
        years: Array.from(years),
        states: Array.from(states),
      });
    } catch (error) {
      next(error);
    }
  }
}
