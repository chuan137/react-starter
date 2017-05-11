import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import auth from 'feathers-authentication-client'
import hooks from 'feathers-hooks'
// import fetch from 'node-fetch'

const app = feathers()
// const restClient = rest('https://mypacka-dyc3r.appspot.com')
const restClient = rest('http://localhost:8080/api')

app.configure(hooks())
app.configure(restClient.fetch(fetch))
app.configure(auth({ path: '/authentication', storage: localStorage }))

export default app
