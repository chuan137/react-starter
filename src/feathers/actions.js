import feathersClient from './feathers'
import createTypes from './actiontypes'

export default function (serviceName, pagination = 10) {
  const ActionTypes = createTypes(serviceName)

  return {
    find: (query=null) =>
      dispatch =>
        dispatch({
          type: ActionTypes.FIND,
          payload: feathersClient.service(serviceName).find({ query })
        }).catch(err => { })
    ,

    get: (id) =>
      dispatch =>
        dispatch({
          type: ActionTypes.GET,
          payload: feathersClient.service(serviceName).get(id)
        }).catch(err => { })
    ,
  }
}
