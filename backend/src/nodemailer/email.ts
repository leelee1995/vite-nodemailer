import nodemailer from "nodemailer";
import {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
} from "../constants/env.js";

export interface MailOptions {
    from: string;
    to: string;
    subject: string;
    html: string;
}

//  This is an example email function. You can remove it if you don't need it.
export const sendEmailMessage = async (name: string, email: string) => {
    const mailOptions: MailOptions = {
        from: SMTP_USER,
        to: email,
        subject: "My Showcase",
        html: `<p>Thank you, ${name} for your interest in My Showcase. Please do not reply to this email.</p>`,
    };

    try {
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: false, // use TLS, not SSL
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        await transporter.sendMail(mailOptions);

        console.log("Email message sent successfully");
    } catch (error) {
        console.error("Error sending email message:", error);
    }
};
