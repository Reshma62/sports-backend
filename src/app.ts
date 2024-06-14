import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import router from "./app/routes";
import notFound from "./app/middleware/notFound";
import globalErrorHandler from "./app/middleware/GlobalErrorHandle";

app.get("/", (req: Request, res: Response) => {
  const htmlContent = `<h1 style="text-align: center; color: blue; font-size: 70px; margin-top: 50px">Sports backend server is ok !</h1>`;
  res.send(htmlContent);
});

app.use(express.json());
app.use(cors());
app.use(router);
app.use(globalErrorHandler);
app.use(notFound);

export default app;


