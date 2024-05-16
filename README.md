# API CSV Parser
  
## Description
API CSV Parser is a project aimed at providing a RESTful API for parsing CSV files and extracting metrics from the data.
  
## Features
- **CSV File Parsing:** The project provides services for parsing CSV files and extracting data.
- **Metrics Calculation:** Various services are available for calculating different metrics from the data extracted from CSV files.
  
## Installation
1. Clone this repository to your local machine.
2. Make sure you have Node.js installed on your machine.
3. Install dependencies by running the following command:
```bash
   npm install
```
  
## Usage
1. Ensure the server is running by executing the following command:
```bash
    npm run dev
```
  
2. You can now access the API at the following address: http://localhost:3000.
  
## Endpoints
Here are the endpoints available in this API:
  
### Global Metrics
- **Description:** Calculates the total revenue, average revenue per order, and unique customers.  
- **Endpoint:** /metrics  
- **HTTP Method:** GET  
- **Parameters:**  
year (optional): Filter by year.  
state (optional): Filter by state.  
  
- **Example Usage:**  
http://localhost:3000/metrics  
  
http://localhost:3000/metrics?year=2023  
  
http://localhost:3000/metrics?state=California  
  
http://localhost:3000/metrics?year=2023&state=California  

- **JSON Format:**  
```json
{
  "totalRevenue": 11488062.071900036,
  "avgRevenuePerOrder": 1149.4959047328434,
  "uniqueCustomers": 793,
  "monthlyMetrics": {
    "1": {
      "revenue": 505197.0024000002,
      "orders": 381
    },
    "2": {
      "revenue": 264645.5524000001,
      "orders": 300
    },
    "3": {
      "revenue": 980843.9724000006,
      "orders": 696
    },
    "4": {
      "revenue": 627581.3683999996,
      "orders": 668
    },
    "5": {
      "revenue": 797874.1184999995,
      "orders": 735
    },
    "6": {
      "revenue": 720871.2404999988,
      "orders": 717
    },
    "7": {
      "revenue": 702224.0310000004,
      "orders": 710
    },
    "8": {
      "revenue": 878110.9762000003,
      "orders": 706
    },
    "9": {
      "revenue": 1515795.0461000002,
      "orders": 1383
    },
    "10": {
      "revenue": 997496.4370999996,
      "orders": 819
    },
    "11": {
      "revenue": 1749999.8322000024,
      "orders": 1471
    },
    "12": {
      "revenue": 1747422.4947,
      "orders": 1408
    }
  }
}

```
  
### Configuration
- **API_PORT:** The port is by Default "3000".
- **CSV_FIL_PATH:** The path to the CSV file to be parsed. Make sure to set the correct path.
  
Example "config.ts":  
```typescript
export const config = {
    API_PORT: 3000,
    CSV_FILE_PATH: '/path/to/your/dataset.csv'
}
```
  
### Error Handling
  
The API provides error handling to ensure that any issues are properly reported. Errors are returned with a JSON structure containing the error message.
  
Example:

```json
{
    "error": "Internal server error"
}
```
  