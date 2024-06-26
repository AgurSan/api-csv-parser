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
```
http://localhost:3000/metrics  
  
http://localhost:3000/metrics?year=2023  
  
http://localhost:3000/metrics?state=California  
  
http://localhost:3000/metrics?year=2023&state=California  
```

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
    ...
  }
}


```
  
### Metadata
- **Description:** Retrieves unique years and states from the CSV file.  
- **Endpoint:** /metadata  
- **HTTP Method:** GET  
- **Example Usage:**  
```
http://localhost:3000/metadata
```

- **JSON Format:**  
```json
"years": ["2015", "2016", "2017", ...],
"states": ["California", "Texas", "New York", ...]


```

## Configuration
- **API_PORT:** The port is by Default "3000".
- **CSV_FIL_PATH:** The path to the CSV file to be parsed. Make sure to set the correct path.
  
Example "config.ts":  
```typescript
export const config = {
    API_PORT: 3000,
    CSV_FILE_PATH: '/path/to/your/dataset.csv'
}
```

### CSV

- **Csv Format:**
```csv
Row ID,Order ID,Order Date,Customer ID,State,Region,Product ID,Sales,Quantity,
1,CA-2016-152156,11/8/2016,CG-12520,Kentucky,South,FUR-BO-10001798,261.96,2,
2,CA-2016-152156,11/8/2016,CG-12520,Kentucky,South,FUR-CH-10000454,731.94,3,
...


```
  
### Error Handling
  
The API provides error handling to ensure that any issues are properly reported. Errors are returned with a JSON structure containing the error message.
  
Example:

```json
{
    "error": "Internal server error"
}
```
  