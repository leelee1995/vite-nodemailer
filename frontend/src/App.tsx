import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
    return (
        <div className="min-h-screen flex relative items-center justify-center overflow-hidden">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;
