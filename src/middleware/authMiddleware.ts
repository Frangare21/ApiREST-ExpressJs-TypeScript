import jwt from "jsonwebtoken";
import {getSecretKey} from "../services/enviromentService";

export function verifyToken(req, res, next) {
    const token = req.header('Authorization');

    if (!token) return res.status(401).json({ error: 'Access denied' })

    try {
        const decoded = jwt.verify(token, getSecretKey())
        req.userId = decoded["userId"];
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' })
    }
}