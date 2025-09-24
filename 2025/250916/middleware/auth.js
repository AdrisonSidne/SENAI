import jwt from 'jsonwebtoken';
<<<<<<< HEAD

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
=======
const secret = process.env.SECRET;

const login = async (req, res) => {
    const { user, password } = req.body
    if (user === 'ruan' && password === '123'){
      const nivelPermissao = 'administrador'
      const token = jwt.sign({ nivelPermissao }, secret, { expiresIn: 120 })
      res.status(201).send({ message: 'Login', token })
    }
    else {
        res.status(500).send({ message: 'Credenciais Inválidas' })
    }
}

const verificarToken = (req, res, next) => {
  const tokenUsuario = req.headers.autorization
  const secret = process.env.SECRET
  const verificacao = jwt.verify(tokenUsuario, secret)
  if(verificacao.nivelPermissao){
    req.nivel = verificacao.nivelPermissao
    // Depois dee validar o token e salvar o nível na requisição, libera para o controller
    next()
  }
  else {
    res.status(400).json({ auth: false, message: 'Token inválido' })
  }
}

export { login, verificarToken };
>>>>>>> e3b05452b82ea0ba8bb493f4d3ac623b5178def4
