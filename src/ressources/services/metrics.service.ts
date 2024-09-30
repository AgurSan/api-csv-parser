import type { Product } from "~~/types/Product";
import type { MonthlyMetric } from "~~/types/MonthlyMetrics";
export class MetricsService {
  /**
   * Calculates the total revenue by summing the sales multiplied by the quantity of each product in the data array.
   *
   * @param {Product[]} data - An array of products containing sales and quantity information.
   * @return {number} The total revenue calculated from the data array.
   */
  public calculateTotalRevenue(data: Product[]): number {
    if (data.length === 0) return 0;
    return data.reduce((acc, item) => acc + item.sales * item.quantity, 0);
  }

  /**
   * Calculates the average revenue per order.
   *
   * @param {Product[]} data - An array of products containing sales and quantity information.
   * @return {number} The average revenue per order.
   */
  public calculateAvgRevenuePerOrder(data: Product[]): number {
    const totalRevenue = this.calculateTotalRevenue(data);
    const totalOrders = data.length;
    return totalOrders === 0 ? 0 : totalRevenue / totalOrders;
  }

  /**
   * Calculates the number of unique customers based on the 'Customer ID' field in the input data array.
   *
   * @param {Product[]} data - An array of products containing customer IDs.
   * @return {number} The number of unique customers.
   */
  public calculateUniqueCustomers(data: Product[]): number {
    return new Set(data.map((item) => item.customerId)).size;
  }

  /**
   * Calculates the monthly metrics based on the data provided.
   *
   * @param {Product[]} data - An array of products containing information for each month.
   * @return {Record<number, MonthlyMetric>} Object containing monthly revenue and number of orders.
   */
  public calculateMonthlyMetrics(
    data: Product[],
  ): Record<number, MonthlyMetric> {
    const monthlyMetrics: Record<number, MonthlyMetric> = {};
    data.forEach((item) => {
      const month = item.orderDate.getMonth() + 1;
      if (!monthlyMetrics[month]) {
        monthlyMetrics[month] = { revenue: 0, orders: 0 };
      }
      monthlyMetrics[month].revenue += item.sales * item.quantity;
      monthlyMetrics[month].orders += 1;
    });
    return monthlyMetrics;
  }
}
