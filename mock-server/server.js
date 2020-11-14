const jsonServer = require('json-server')
const auth = require('json-server-auth')
const middlewares = jsonServer.defaults()

const register = require('./modules/register')

const ssoLogin = require('./modules/login')


const app = jsonServer.create()
const router = jsonServer.router('./mock-server/db.json')

// /!\ Bind the router db to the app
app.db = router.db

// You must apply the auth middleware before the router
app.use(middlewares)
app.use(jsonServer.bodyParser)
app.use(register)
app.use(jsonServer.rewriter({
    "/signupGoogle": "/signup",
    "/signupFacebook": "/signup"
}))
app.use(auth)
app.use(router)
app.listen(3001, () => {
    console.log("JSON Server is running")
})

