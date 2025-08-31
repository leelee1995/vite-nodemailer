import React, { useState } from "react";
import { useAuthStore } from "../store/nodemailerStore";

const HomePage = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const { sendEmail, isLoading, error } = useAuthStore();

    const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await sendEmail(name, email);
    };

    return (
        <div className="max-w-md overflow-hidden">
            <div className="card bg-base-200 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title text-center">
                        leelee1995's Nodemailer Showcase
                    </h2>
                    <form onSubmit={handleSend}>
                        {error && <p className="text-red-500">{error}</p>}
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            className="input input-bordered w-full mb-2"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            className="input input-bordered w-full mb-2"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className={`btn btn-primary w-full ${
                                isLoading && "btn-disabled"
                            }`}
                        >
                            {isLoading ? "Sending..." : "Send Email"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
