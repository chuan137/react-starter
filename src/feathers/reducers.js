import _reduce from 'lodash/reduce'
import createTypes from './actiontypes'

const initState = {
  data: [],
  loading: false,
  error: null,
  message: null,
  pagination: 20
}

const normalizeData = (data) =>
  _reduce(action.payload.data, function (obj, row) {
    obj[row.id] = row
    return obj
  })


export default function createReducer(serviceName, endpoint) {
  endpoint = endpoint ? endpoint : serviceName
  const ActionTypes = createTypes(serviceName)

  return function (state = initState, action) {
    switch (action.type) {
      case ActionTypes.FIND_FULFILLED:
        return {
          ...state,
          error: null,
          loading: false,
          data: { ...state.data, ...normalizeData(action.payload.data) }
        }
      case ActionTypes.FIND_PENDING:
        return { ...state, loading: true, error: null }
      case ActionTypes.FIND_REJECTED:
        return { ...state, loading: false, error: true }
      default:
        return state
    }
  }
}
