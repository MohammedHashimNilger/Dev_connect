import express from "express";
import indexRoutes from "./routes/index.routes.js";
import authroutes from './routes/auth.routes.js'
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/", indexRoutes);
app.use('/api/auth', authroutes);

export default app;