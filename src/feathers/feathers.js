import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import auth from 'feathers-authentication-client'
import hooks from 'feathers-hooks'

const app = feathers()
const restClient = rest(`${process.env.REACT_APP_HOST}`)

app.configure(hooks())
app.configure(restClient.fetch(fetch))
app.configure(auth({ path: '/authentication', storage: localStorage }))

export default app
