// Example import sendEmailMessage function
import { sendEmailMessage } from "../nodemailer/email.js";
import type { Request, Response } from "express";

// Example showcase import function
export const sendEmail = async (req: Request, res: Response) => {
    const { name, email } = req.body;

    try {
        if (!name || !email) {
            return res
                .status(400)
                .json({ message: "Username and email are required." });
        }
        await sendEmailMessage(name, email);

        res.status(200).json({ message: "Signup successful, email sent." });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({
            message: "Signup successful, but failed to send email.",
        });
    }
};
