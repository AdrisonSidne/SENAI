import { Router } from "express";
import { application, authRequired } from "../middleware/auth.js";

const router = Router();

const todosByUser = new Map();

function getUserTodos(uid){
    if(!todosByUser.has(uid)) todosByUser.set(uid, []);
    return todosByUser.get(uid);
}

router.use(authRequired);

router.get('/', (req, res) => {
    const list = getUserTodos(req.user.id);
    res.json(list);
});
