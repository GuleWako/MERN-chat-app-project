import mongoose from "mongoose";
const connectDatabase = async ()=>{
    try {
        await mongoose.connect(process.env.URL + '/' + process.env.DB)
        .then(console.log("Connect to database ", process.env.DB))
    } catch (error) {
        console.log("Error while connecting .. ", error.message)
    }
}
export default connectDatabase