import express from "express";
import cors from "cors";
import { PORT, NODE_ENV } from "./constants/env.js";
import authRoutes from "./routes/authRoute.js";
import path from "path";

const app = express();
const __dirname = path.resolve();

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
app.use(express.static(path.join(__dirname, "../frontend/dist")));

if (NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get(/^\/(?!api\/).*$/, (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
