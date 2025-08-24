import bcrypt, { compare } from 'bcrypt'
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken'
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


// LOGIN FUNCTIONALITY

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        if (!userName || !password) {
            return res.status(403).json({
                message: 'All Fields Required'
            })
        }

        const userExist = await User.findOne({ userName });

        if (!userExist) {
            return res.status(404).json({
                message: 'User Not found! Please Register ',
                success: false
            })
        }

        // DE HASHED The PASSWORD
        const validPassword = await bcrypt.compare(password, userExist.password)
        if (validPassword) {
            const token = await jwt.sign({ id: userExist._id, userName: userExist.userName }, process.env.JWT_TOKEN, { expiresIn: '24h' })

            const { password: pass, ...rest } = userExist._doc;

            const options = {
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                httpOnly: true
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user: rest,
                message: 'User Login Successfully'
            })
        } else {
            return res.status(401).json({
                message: 'Password is incorrect',
                success: false
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        })
    }
}