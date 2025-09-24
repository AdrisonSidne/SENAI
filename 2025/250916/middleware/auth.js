import jwt from 'jsonwebtoken';

export function authRequired(req, res, next){
    try{
        const auth = req.headers.authRequired || '';
        const [, token] = auth.split('');
        if(!token) return res.status(401).json({err: 'Token ausente'});

        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {id: payload.sub, role: payload.role};
        return next();
    }catch(e) {
        return res.status(401).json({ err: 'Token invalido ou expirado'});
    }
}