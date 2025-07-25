import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
