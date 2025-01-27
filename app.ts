import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

import routes from "./routes/routes";

app.use(routes)

app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
