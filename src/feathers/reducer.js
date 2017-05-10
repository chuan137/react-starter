
const initState = {
  data: [],
  loading: false,
  error: null,
  message: null
}


function constCreator (serviceName) {
  return {
    FIND: `${serviceName}_FIND`,
    GET: `${serviceName}_GET`
  }
}

function reducerCreator(serviceName, endpoint) {
  endpoint = endpoint ? endpoint : serviceName;
  const A = constCreator(serviceName) 

  return {
    serviceName: function(state = initState, action) {
      switch(action.type) {
        case `${A.FIND}_FULFILLED`: 
          return {
            ...initState,
            data: _reduce(action.payload.data, function(obj, row) {
              obj[row.id] = row
              return obj
            })
          }
        case `${A.FIND}_FAILED`:
          return {
            ...initState,
            error: true,
            message: payload.error.message
          }
        case `${A.FIND}_LOADING`:
          return {
            ...initState,
            loading: true
          }

        case `${A.GET}_LOADING`:
          return {
            ...state,
            loading: true
          }

         default:
          return state
      }
    }
  }
}
