import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import fetch from 'node-fetch'

const restClient = rest('https://mypacka-dyc3r.appspot.com/api')
const app = feathers()

app.configure(restClient.fetch(fetch))

export default app
window.app = app;