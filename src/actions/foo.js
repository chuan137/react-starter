

export function foo() {
  return function(dispatch) {
    return dispatch({
      type: 'FOO',
      payload: new Promise()
    })
    .then(() => {
      dispatch({
        type: 'BAR'
      })
    })
  }
} 