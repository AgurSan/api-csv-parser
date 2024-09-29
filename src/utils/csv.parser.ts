import type { Product } from "~~/types/Product";
import fs from "fs";
import csv from "csv-parser";

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

      stream
        .pipe(csv({ mapHeaders: ({ header }) => header.trim() }))
        .on("data", (data: Record<string, string>) => {
          const rowData: Product = {
            rowId: parseInt(data["Row ID"]),
            orderId: data["Order ID"],
            orderDate: new Date(Date.parse(data["Order Date"])),
            customerId: data["Customer ID"],
            state: data["State"],
            region: data["Region"],
            productId: data["Product ID"],
            sales: parseFloat(data["Sales"]),
            quantity: parseInt(data["Quantity"]),
          };
          datas.push(rowData);
        })
        .on("end", () => {
          resolve(datas);
        })
        .on("error", (error: Error) => {
          reject(error);
        });
    });
  }
}
