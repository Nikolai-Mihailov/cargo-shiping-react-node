import jwt from 'jsonwebtoken';

export const authenticationToken = (res, req, next) => {
    const authHeader = req.headers['autorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })

}