import mongoose from "mongoose";

const databaseConnection = async () => {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('MONGODB Connection Successfully Done!')
    }).catch((error) => {
        console.log(error.message);
        process.exit(1)
    })
}


export default databaseConnection;