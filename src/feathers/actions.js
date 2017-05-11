import feathersClient from './feathers'
import createTypes from './actiontypes'

export default function (service) {
  const ActionTypes = createTypes(service)
  const find = `${service}_find`
  const get = `${service}_get`

  return {
    find: () => dispatch => {
      dispatch({
        type: ActionTypes.FIND,
        payload: feathersClient(service).find()
      }).catch(err => { })
    },

    get: (id) => dispatch => {
      dispatch({
        type: ActionTypes.GET,
        payload: feathersClient(service).get(id)
      }).catch(err => { })
    }
  }
}
