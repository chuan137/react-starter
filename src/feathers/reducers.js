import _reduce from 'lodash/reduce'
import createTypes from './actiontypes'

const initState = {
  data: [],
  loading: false,
  error: null,
  message: null,
  pagination: 20
}

const normalizeData = (data) => {
  if (data !== null && typeof data === 'object') {
    const res = {}
    return res[data.id] = data
  } else {
    return _reduce(data, function (obj, row) {
      obj[row.id] = row
      return obj
    })
  }
}

export default function createReducer(serviceName, endpoint) {
  endpoint = endpoint ? endpoint : serviceName
  const ActionTypes = createTypes(serviceName)

  return function (state = initState, action) {
    switch (action.type) {
      case ActionTypes.FIND_FULFILLED:
      case ActionTypes.GET_FULFILLED:
        return {
          ...state,
          error: null,
          loading: false,
          data: { ...state.data, ...normalizeData(action.payload.data) }
        }

      case ActionTypes.FIND_PENDING:
      case ActionTypes.GET_PENDING:
        return { ...state, loading: true, error: null, message: null, code: null }
      case ActionTypes.FIND_REJECTED:
      case ActionTypes.GET_REJECTED:
        return { ...state, loading: false, error: true, message: action.payload.message, code: action.payload.code }
      default:
        return state
    }
  }
}
