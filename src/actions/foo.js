
export function foo() {
  return {
    type: 'FOO',
    payload: { value: 'foo' }
  }
}

export function asyncFoo() {
  return function(dispatch) {
    // return dispatch({
    dispatch({
      type: 'FOO',
      payload: new Promise(resolve => 
        setTimeout(() => resolve({ value: 'FOO' }), 1000)
      )
    })
    .then((value) => {
      console.log(value)
      dispatch({ type: 'BAR' })
    })
  }
} 

export function asyncFooFail() {
  return dispatch => {
    dispatch({
      type: 'FOO',
      payload: new Promise((resolve, reject) => 
        setTimeout(() => reject('force foo to fail'), 1000)
      )
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: 'BAR' })
    })
  }
}