import express from "express";
import UsersService from "../services/users.service.js"
import jwt from 'jsonwebtoken';

const router = express.Router();


router.post('/singin', async (req, res, next) => {

    const userServise = new UsersService();

    try {

        const { email, username, password, eik, companyName, ownerFirstName, ownerLastName } = req.body;
        userServise.signup({ email, username });

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);
        res.json({ accessToken })

        res.send({ status: 200, message: 'ok' });
    } catch (error) {
        res.send(error)
    }
})

export { router }