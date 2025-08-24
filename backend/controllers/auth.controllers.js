import bcrypt from 'bcrypt'
import User from '../models/user.model.js';

// USER REGISTER 

export const register = async (req, res) => {
    try {
        const { userName, password } = req.body;

        if (!userName || !password) {
            return res.status(400).json({
                message: 'ALL FIELDS ARE REQUIRED!'
            })
        }

        console.log(userName)
        console.log(password)


        const checkUser = await User.findOne({ userName })

        console.log(checkUser)
        if (checkUser) {
            return res.status(403).json({
                message: 'User Already Exist! Please Login to Proceed',
                success: false
            })
        } console.log('Check user')
        // HASH PASSWORD 
        const hashPassword = bcrypt.hashSync(password, 10);

        const user = await User.create({
            userName,
            password: hashPassword
        })


        user.password = undefined;


        return res.status(201).json({
            message: 'User Created Successfully',
            success: true,
            user,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
            success: false
        })
    }
}