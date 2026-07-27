import express from "express";
import indexRoutes from "./routes/index.routes.js";
import authroutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/", indexRoutes);
app.use("/api/auth", authroutes);
app.use("/api/users", userRoutes);

export default app;
