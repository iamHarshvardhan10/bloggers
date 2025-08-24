import express from 'express'
import dotenv from 'dotenv'
import databaseConnection from './config/db.js';
dotenv.config()
import authRoutes from './routes/auth.router.js';
import blogRoutes from './routes/blog.router.js'
import cookieParser from 'cookie-parser';
import cloudinaryConnect from './config/cloudinary.js';
import fileUpload from 'express-fileupload';

const PORT = process.env.PORT || 8000

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/temp/'
    })
)

app.get('/', (req, res) => {
    return res.status(200).json({
        message: `server is running on port ${PORT}`,
        success: true
    })
})

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/blog', blogRoutes)


// CLOUDINARY CONNECT
cloudinaryConnect()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    databaseConnection()
})