import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 8000

const app = express();


app.use('/', (req, res) => {
    return res.status(200).json({
        message: `server is running on port ${PORT}`,
        success: true
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})