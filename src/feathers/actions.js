import feathersClient from './feathers'
import createTypes from './actiontypes'

export default function (serviceName) {
  const ActionTypes = createTypes(serviceName)
  // const find = `${service}_find`
  // const get = `${service}_get`

  return {
    find: () => dispatch => {
      dispatch({
        type: ActionTypes.FIND,
        payload: feathersClient.service('/users').find()
      }).catch(err => { })
    },

    get: (id) => dispatch => {
      dispatch({
        type: ActionTypes.GET,
        payload: feathersClient.service(serviceName).get(id)
      }).catch(err => { })
    }
  }
}
