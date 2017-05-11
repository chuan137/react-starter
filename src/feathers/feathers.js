import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import auth from 'feathers-authentication-client'
import hooks from 'feathers-hooks'
// import fetch from 'node-fetch'

const app = feathers()
const restClient = rest('https://mypacka-dyc3r.appspot.com')

app.configure(hooks())
app.configure(restClient.fetch(fetch))
app.configure(auth({ path: '/authentication',storage: localStorage }))
app.authenticate({ strategy: 'local', email: 'admin@mypacka.com', password: 'qweasd123' })

export default app
window.app = app;