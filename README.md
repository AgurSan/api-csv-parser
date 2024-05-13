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

### Total Revenue
- **Description:** Calculates the total revenue from the data in the CSV files.
- **Endpoint:** /total-revenue
- **HTTP Method:** GET
- **Example Usage:** http://localhost:3000/total-revenue

### Average Revenue Per Order
- **Description**: Calculates the average revenue per order from the data in the CSV files.
- **Endpoint**: /avg-revenue-per-order
- **HTTP Method**: GET
- **Example Usage**: http://localhost:3000/avg-revenue-per-order

### Number of Orders
- **Description**: Counts the total number of orders from the data in the CSV files.
- **Endpoint**: /num-orders
- **HTTP Method**: GET
- **Example Usage**: http://localhost:3000/num-orders

### Unique Customers
- **Description**: Counts the unique number of customers from the data in the CSV files.
- **Endpoint**: /unique-customers
- **HTTP Method**: GET
- **Example Usage**: http://localhost:3000/unique-customers

### Data by State
- **Description**: Retrieves data filtered by state from the data in the CSV files.
- **Endpoint**: /by-state/:state
- **HTTP Method**: GET
- **Example Usage**: http://localhost:3000/by-state/California

### Data by Order Date
- **Description**: Retrieves data filtered by order date from the data in the CSV files. orderDate (YYYY-MM-DD)
- **Endpoint**: /by-date/:orderDate
- **HTTP Method**: GET
- **Example Usage**: http://localhost:3000/by-order-date/2015-05-14

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

### Total Revenue
- **Description:** Calculates the total revenue from the data in the CSV files.
- **Endpoint:** /total-revenue
- **HTTP Method:** GET
- **Example Usage:** http://localhost:3000/total-revenue

### Average Revenue Per Order
- **Description**: Calculates the average revenue per order from the data in the CSV files.
- **Endpoint**: /avg-revenue-per-order
- **HTTP Method**: GET
- **Example Usage**: http://localhost:3000/avg-revenue-per-order

### Number of Orders
- **Description**: Counts the total number of orders from the data in the CSV files.
- **Endpoint**: /num-orders
- **HTTP Method**: GET
- **Example Usage**: http://localhost:3000/num-orders

### Unique Customers
- **Description**: Counts the unique number of customers from the data in the CSV files.
- **Endpoint**: /unique-customers
- **HTTP Method**: GET
- **Example Usage**: http://localhost:3000/unique-customers

### Data by State
- **Description**: Retrieves data filtered by state from the data in the CSV files.
- **Endpoint**: /by-state/:state
- **HTTP Method**: GET
- **Example Usage**: http://localhost:3000/by-state/CA

### Data by Order Date
- **Description**: Retrieves all unique order Date in the CSV file.
- **Endpoint**: /order-dates
- **HTTP Method**: GET
- **Example Usage**: http://localhost:3000/order-dates
