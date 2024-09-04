import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://vidhishaagarwal262:6QFxTHQZ97W5KZWI@cluster0.vwikg.mongodb.net/food_order").then(()=>console.log("DB Connected"))
}