import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const generateVerificationToken = (res, userId) => {
    //console.log("JWT_SECRET:", process.env.JWT_SECRET); // Debugging

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is missing! Check your .env file.");
    }

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("token", token, {
        httpOnly: true, //prevents xss attacks
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", //prevents csrf
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
 // Debugging
};

export default generateVerificationToken;
