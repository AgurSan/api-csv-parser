import type { Product } from "~~/types/Product";
import fs from 'fs';
import csv from 'csv-parser';

export class CsvParser {
/**
 * Parses the data from a CSV file and returns an array of Product objects.
 *
 * @param filePath The path to the CSV file.
 * @returns A promise that resolves to an array of Product objects.
 */
async parseData(filePath: string): Promise<Product[]> {
    return new Promise<Product[]>((resolve, reject) => {
        const datas: Product[] = [];
        const stream = fs.createReadStream(filePath);

        stream.pipe(csv({ mapHeaders: ({ header }) => header.trim() }))
            .on('data', (data: Record<string, string>
                
            ) => {
                const rowData: Product = {
                    'Row ID': parseInt(data['Row ID']),
                    'Order ID': data['Order ID'],
                    'Order Date': new Date(Date.parse(data['Order Date'])),
                    'Customer ID': data['Customer ID'],
                    'State': data['State'],
                    'Region': data['Region'],
                    'Product ID': data['Product ID'],
                    'Sales': parseFloat(data['Sales']),
                    'Quantity': parseInt(data['Quantity'])
                };
                datas.push(rowData);
            })
            .on('end', () => {
                resolve(datas);
            })
            .on('error', (error: Error) => {
                reject(error);
            });
    });
}
}