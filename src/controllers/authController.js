exports.login = (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'senha') {
      req.session.user = { username };
      res.status(200).json({ success: true });
    } else {
      res.json({ success: false, message: 'Credenciais inválidas' });
    }
  };
  
  exports.checkAuth = (req, res) => {
    res.json({ loggedIn: !!req.session.user });
  };