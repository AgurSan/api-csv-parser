import type { Product } from "~~/types/Product";
import { CsvParser } from "~/utils";

export class DataService {
  constructor(private csvParser: CsvParser, private filePath: string) {}

  /**
   * Retrieves data from a CSV file.
   *
   * @return {Promise<Product[]>} A promise that resolves to an array of data from the CSV file.
   */
  async getData(): Promise<Product[]> {
    return this.csvParser.parseData(this.filePath);
  }

  /**
   * Retrieves filtered data from the CSV file.
   *
   * @param {Function} filterFn - A function to filter the products.
   * @return {Promise<Product[]>} A promise that resolves to an array of filtered products.
   */
  async getFilteredData(
    filterFct: (product: Product) => boolean,
  ): Promise<Product[]> {
    const data = await this.getData();
    return data.filter(filterFct);
  }

  /**
   * Retrieves data filtered by the specified year.
   *
   * @param {number} year - The year to filter the data by.
   * @return {Promise<Product[]>} The data filtered by the specified year.
   */
  async getDataByYear(year: number): Promise<Product[]> {
    return this.getFilteredData(
      (product) => product["Order Date"].getFullYear() === year,
    );
  }
  /**
   * Retrieves data filtered by state.
   *
   * @param {string} state - The state to filter the data by.
   * @return {Promise<Product[]>} A promise that resolves to an array of filtered products.
   */
  async getDataByState(state: string): Promise<Product[]> {
    return this.getFilteredData((product) => product.State === state);
  }

  /**
   * Retrieves data filtered by year and state.
   *
   * @param {number} year - The year to filter the data by.
   * @param {string} state - The state to filter the data by.
   * @return {Promise<Product[]>} A promise that resolves to an array of filtered products.
   */
  async getDataByYearAndState(year: number, state: string): Promise<Product[]> {
    return this.getFilteredData(
      (product) =>
        product["Order Date"].getFullYear() === year && product.State === state,
    );
  }

  /**
   * Retrieves unique years from the data.
   *
   * @return {Promise<Set<string>>} A promise that resolves to a set of unique years.
   */
  async getUniqueYears(): Promise<Set<string>> {
    const data = await this.getData();
    const years = new Set<string>();
    data.forEach((product) => {
      years.add(product["Order Date"].getFullYear().toString());
    });
    return years;
  }

  /**
   * Retrieves unique states from the data.
   *
   * @return {Promise<Set<string>>} A promise that resolves to a set of unique states.
   */
  async getUniqueStates(): Promise<Set<string>> {
    const data = await this.getData();
    const states = new Set<string>();
    data.forEach((product) => {
      states.add(product.State);
    });
    return states;
  }
}
