import _reduce from 'lodash/reduce'
import createTypes from './actiontypes'

const initState = {
  data: {},
  loading: false,
  error: null,
  message: null,
  pages: {}
}

const parseFind = (payload) => {
  let data, pageNum, page;
  data = _reduce(payload.data, function (obj, row) {
    obj[row.id] = row
    return obj
  }, {})
  pageNum = payload.skip / payload.limit
  page = Object.keys(data)
  return { pageNum, page, data }
}

const parseGet = (payload) => {
  const res = {}
  res[payload.data.id] = payload.data
  return res
}

export default function createReducer(serviceName, endpoint) {
  endpoint = endpoint ? endpoint : serviceName
  const ActionTypes = createTypes(serviceName)

  return function (state = initState, action) {
    switch (action.type) {
      case ActionTypes.FIND_FULFILLED:
        let { data, page, pageNum } = parseFind(action.payload)
        let newPage = {}
        newPage[pageNum] = page
        return {
          ...state,
          error: null,
          loading: false,
          data: { ...state.data, ...data },
          pages: { ...state.pages, ...newPage }
        }
      case ActionTypes.GET_FULFILLED:
        return {
          ...state,
          error: null,
          loading: false,
          data: { ...state.data, ...parseGet(action.payload) }
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
