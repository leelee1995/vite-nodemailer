import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL: string =
    import.meta.env.MODE === "development"
        ? "http://localhost:3000/api/auth"
        : "/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set: any) => ({
    isLoading: false,
    error: null,

    sendEmail: async (name: string, email: string) => {
        try {
            set({ isLoading: true, error: null });

            const response = await axios.post(`${API_URL}/send-email`, {
                name,
                email,
            });

            toast.success("Email sent successfully!");

            console.log("Email sent successfully:", response.data);

            set({ isLoading: false });
        } catch (error: any) {
            toast.error("Failed to send email.");
            console.error("Error sending email:", error);
            set({ isLoading: false, error: error.response.data.message });
        }
    },
}));
