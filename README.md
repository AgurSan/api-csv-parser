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

http://localhost:3000/metrics?year=2018

http://localhost:3000/metrics?state=California

http://localhost:3000/metrics?year=2017&state=California
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

Example "src/config.ts":

```typescript
export const config = {
  API_PORT: 3000,
  CSV_FILE_PATH: "/path/to/your/dataset.csv",
};
```

### CSV

- **Csv Format:**
  Default csv file is "src/data/dataset.csv":

```csv
Row ID,Order ID,Order Date,Customer ID,State,Region,Product ID,Sales,Quantity,
1,CA-2016-152156,11/8/2016,CG-12520,Kentucky,South,FUR-BO-10001798,261.96,2,
2,CA-2016-152156,11/8/2016,CG-12520,Kentucky,South,FUR-CH-10000454,731.94,3,
3,CA-2017-138688,6/12/2017,DV-13045,California,West,OFF-LA-10000240,14.62,2,
4,US-2015-108966,10/11/2015,SO-20335,Florida,South,FUR-TA-10000577,957.5775,5,
5,US-2015-108966,10/11/2015,SO-20335,Florida,South,OFF-ST-10000760,22.368,2,
6,CA-2018-115812,6/9/2018,BH-11710,Iowa,Midwest,FUR-FU-10001487,48.86,7,
7,CA-2018-115812,6/9/2018,BH-11710,Iowa,Midwest,OFF-AR-10002833,7.28,1,
8,CA-2015-117415,12/5/2015,IM-15070,California,West,FUR-TA-10001539,136.81,2,
9,CA-2015-117415,12/5/2015,IM-15070,California,West,OFF-BI-10003910,25.248,3,
10,CA-2018-114412,8/2/2018,BM-11785,Texas,South,TEC-PH-10002275,907.152,6,
11,CA-2018-161389,12/26/2018,AG-10270,North Carolina,South,OFF-AP-10002892,15.552,3,
12,CA-2018-161389,12/26/2018,AG-10270,North Carolina,South,FUR-TA-10001539,136.81,2,
13,CA-2017-143336,8/27/2017,PK-19075,New York,East,OFF-BI-10003656,2.544,2,
14,CA-2017-143336,8/27/2017,PK-19075,New York,East,OFF-PA-10002365,15.552,3,
15,CA-2016-137330,12/9/2016,HP-14815,California,West,OFF-BI-10000756,5.784,2,
16,CA-2016-137330,12/9/2016,HP-14815,California,West,FUR-FU-10001487,48.86,7,
17,CA-2019-117184,4/15/2019,LC-16930,Ohio,Midwest,OFF-PA-10004041,19.46,5,
18,CA-2019-117184,4/15/2019,LC-16930,Ohio,Midwest,OFF-BI-10000756,5.784,2,
19,US-2018-156909,7/8/2018,KB-16585,Washington,West,TEC-PH-10002033,1380.87,9,
20,US-2018-156909,7/8/2018,KB-16585,Washington,West,OFF-ST-10000760,22.368,2,
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
