/*import { CLIENT_URL } from "../constants/env.js";

export const VERIFICATION_EMAIL_TEMPLATE = (username, verificationToken) => {
    return `
        <!DOCTYPE html>
<html>
<head>
    <title>Email Verification</title>
    <style>
        body { font-family: sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eeeeee; }
        .content { text-align: left; padding: 20px 0; }
        .button-container { text-align: center; margin: 20px 0; }
        .button { display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px; }
        .footer { text-align: center; font-size: 12px; color: #777777; padding-top: 20px; border-top: 1px solid #eeeeee; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Verify Your Email Address</h2>
        </div>
        <div class="content">
            <p>Hello ${username},</p>
            <p>Thank you for signing up! Please click the button below to verify your email address and activate your account.</p>
            <div class="button-container">
                <a href="${CLIENT_URL}/auth/verify-email/${verificationToken}" class="button">Verify Email</a>
            </div>
            <p>If the button above doesn't work, you can also copy and paste the following link into your web browser:</p>
            <p>${CLIENT_URL}/auth/verify-email/${verificationToken}</p>
            <p>This link will expire in 1 hour. If you did not create an account, no further action is required.</p>
        </div>
        <div class="footer">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
    `;
};

export const PASSWORD_RESET_EMAIL_TEMPLATE = (name, resetToken) => {
    return `
        <!DOCTYPE html>
<html>
<head>
    <title>Password Reset</title>
    <style>
        body { font-family: sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eeeeee; }
        .content { text-align: left; padding: 20px 0; }
        .button-container { text-align: center; margin: 20px 0; }
        .button { display: inline-block; padding: 10px 20px; background-color: #ff4500; color: #ffffff; text-decoration: none; border-radius: 5px; }
        .footer { text-align: center; font-size: 12px; color: #777777; padding-top: 20px; border-top: 1px solid #eeeeee; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Password Reset Request</h2>
        </div>
        <div class="content">
            <p>Hello,</p>
            <p>We received a request to reset the password for your account. Please click the button below to set a new password.</p>
            <div class="button-container">
                <a href="{{reset_url}}" class="button">Reset Password</a>
            </div>
            <p>If the button doesn't work, you can copy and paste the following link into your web browser:</p>
            <p>{{reset_url}}</p>
            <p>This link is only valid for a limited time and will expire soon for security reasons. If you did not request a password reset, you can safely ignore this email.</p>
        </div>
        <div class="footer">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
    `;
};

export const PASSWORD_RESET_SUCCESS_TEMPLATE = (name) => {
    return `
        <h1>Hello ${name},</h1>
        <p>Your password has been successfully reset.</p>
    `;
}; */
