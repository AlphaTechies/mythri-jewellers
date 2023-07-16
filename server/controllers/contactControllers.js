import { StatusCodes } from "http-status-codes";
import asyncHandler from "express-async-handler";
import Contact from "../models/Contact";
import { sendMail } from "../middleware/sendMail";

export const sendDetails = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Please fill all details",
      status: "failed",
    });
  }

  try {
    await sendMail(email, message);
    const newMsg = new Contact({
      name: name,
      email: email,
      message: message,
    });

    const msgData = await newMsg.save(); // Await the save() operation

    return res.status(StatusCodes.CREATED).json({
      message: "Message Sent successfully.",
      msgData, // Send the saved data in the response
      status: "success",
    });
  } catch (error) {
    console.error("Error sending email or saving contact:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Something went wrong while sending the message.",
      status: "failed",
    });
  }
});

export const getDetails = asyncHandler(async (req, res) => {
  const details = await Contact.find();
  return res.status(StatusCodes.OK).json({ details });
});
