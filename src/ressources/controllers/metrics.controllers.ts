import { Request, Response, NextFunction } from "express";
import { DataService, MetricsService } from "../services";
import type { Product } from "~~/types/Product";

export class MetricsController {
  constructor(
    private dataService: DataService,
    private metricsService: MetricsService,
  ) {}

  /**
   * Retrieves metrics based on the filter criteria provided in the request query.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @param {NextFunction} next - The next function in the middleware chain.
   * @return {Promise<void>} A promise that resolves to void.
   */
  public async getMetricsByFilter(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const { state, year } = req.query;
    try {
      let data: Product[];

      if (state && year) {
        data = await this.dataService.getDataByYearAndState(
          Number(year),
          String(state),
        );
      } else if (state) {
        data = await this.dataService.getDataByState(String(state));
      } else if (year) {
        data = await this.dataService.getDataByYear(Number(year));
      } else {
        data = await this.dataService.getData();
      }

      const totalRevenue = this.metricsService.calculateTotalRevenue(data);
      const avgRevenuePerOrder =
        this.metricsService.calculateAvgRevenuePerOrder(data);
      const uniqueCustomers =
        this.metricsService.calculateUniqueCustomers(data);
      const monthlyMetrics = this.metricsService.calculateMonthlyMetrics(data);

      res.json({
        totalRevenue,
        avgRevenuePerOrder,
        uniqueCustomers,
        monthlyMetrics,
      });
    } catch (error) {
      next(error);
    }
  }
}
