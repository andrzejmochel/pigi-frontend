module.exports = (req, res, next) => {

    function loginSSO(req) {
        const oldBody = req.body;
        req.body = {
            email: oldBody.username,
            password: oldBody.id,
        }
        console.log('loginGoogle', req.body);
    }

    function login(req) {
        const oldBody = req.body;
        req.body = {
            email: oldBody.username,
            password: oldBody.password,
        }
        console.log('loginGoogle', req.body);
    }

    switch (req.url) {
        case '/loginGoogle':
        case '/loginFacebook':
            loginSSO(req);
            break
        case '/login':
            login(req);
            break
    }
    next()
};