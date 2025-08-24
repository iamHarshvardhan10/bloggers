
import jwt from 'jsonwebtoken'

export const verifyUser = async (req, res, next) => {
    try {
        const token = req.cookies?.token || req.body?.token || req.headers['authorization']?.replace("Bearer ", "")

        console.log(token)

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token Missing'
            })
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_TOKEN)
            console.log(decoded)

            req.user = decoded;

        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token'
            })
        }

        next()
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false
        })
    }
}