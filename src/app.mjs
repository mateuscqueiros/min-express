import express from "express";
import dotenv from "dotenv";
import publicRoutes from "./routes/public/index.mjs";

export const app = express();
dotenv.config();

const port = process.env.PORT;

app.use("/", publicRoutes)

app.get("/", (req, res) => {
  res.send("Ola mundo")
})

app.listen(port, () => {
  console.log("Servidor iniciado em: ", port)
})

