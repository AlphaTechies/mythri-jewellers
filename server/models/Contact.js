import mongoose from 'mongoose';
import validator from "validator";
const contactModel=mongoose.Schema({
    name:{type:String,required:true},
    email:{type: String,
        required: [true, "email can't be empty"],
        validate: {
          validator: validator.isEmail,
          message: "Not a valid email",
        },
    },
    message:{type:String,required:true},
});
const Contact = new mongoose.model("Contact", contactModel);
export default Contact;
