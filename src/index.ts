import cors from "cors";
import express, { Express, Response } from "express";
import { CsvParser } from "~/utils";
import { DataService, MetricsService } from "~/ressources/services";
import {
  MetricsController,
  MetadataController,
} from "~/ressources/controllers";
import { config } from "~/config";

const app: Express = express();
app.use(cors());
app.use(express.json());

const csvParser = new CsvParser();
const dataService = new DataService(csvParser, `${config.CSV_FILE_PATH}`);
const metricsService = new MetricsService();
const metricsController = new MetricsController(dataService, metricsService);
const metadataController = new MetadataController(dataService);

//routes
app.get(
  "/metrics",
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    metricsController.getMetricsByFilter(req, res, next),
);

app.get(
  "/metadata",
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    metadataController.getMetadata(req, res, next),
);

//error handler
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error" });
  },
);

app.listen(config.API_PORT || 3000, () => {
  console.log(`Server started on port ${config.API_PORT}`);
});
