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
}
