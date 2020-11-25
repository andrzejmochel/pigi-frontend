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
        case '/signin/google':
        case '/signin/facebook':
            loginSSO(req);
            break
        case '/signin':
            login(req);
            break
    }
    next()
};