import type { Product } from '~~/types/Product';
import { CsvParser } from '~/utils';

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
    async getFilteredData(filterFct: (product: Product) => boolean): Promise<Product[]> {
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
        return this.getFilteredData(product => product['Order Date'].getFullYear() === year);
    }
    /**
         * Retrieves data filtered by state.
         *
         * @param {string} state - The state to filter the data by.
         * @return {Promise<Product[]>} A promise that resolves to an array of filtered products.
         */
    async getDataByState(state: string): Promise<Product[]> {
        return this.getFilteredData(product => product.State === state);
    }

    /**
     * Retrieves data filtered by year and state.
     *
     * @param {number} year - The year to filter the data by.
     * @param {string} state - The state to filter the data by.
     * @return {Promise<Product[]>} A promise that resolves to an array of filtered products.
     */
    async getDataByYearAndState(year: number, state: string): Promise<Product[]> {
        return this.getFilteredData(product =>
            product['Order Date'].getFullYear() === year && product.State === state
        );
    }
}



