module.exports = (req, res, next) => {

    function signupSSO(req, type) {
        const oldBody = req.body;

        req.body = {
            email: oldBody.username,
            password: oldBody.id,
            type: type,
            id: oldBody.id
        }
        console.log('signup', req.body);
    }

    function signup(req) {
        const oldBody = req.body;
        req.body = {
            email: oldBody.email ? oldBody.email : oldBody.username,
            password: oldBody.password,
        }
        console.log('signup', req.body);
    }

    // eslint-disable-next-line default-case
    switch (req.url) {
        case '/signupGoogle':
            signupSSO(req, 'GOOGLE');
            break
        case '/signupFacebook':
            signupSSO(req, 'FACEBOOK');
            break
        case '/signup':
            signup(req);
            break
    }
    next()
};
