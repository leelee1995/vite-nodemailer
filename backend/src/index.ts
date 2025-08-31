import express from "express";
import cors from "cors";
import { PORT } from "./constants/env.js";
import authRoutes from "./routes/authRoute.js";

const app = express();

if (process.env.NODE_ENV !== "production") {
    app.use(
        cors({
            origin: "http://localhost:5173",
            credentials: true,
        })
    );
}

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
