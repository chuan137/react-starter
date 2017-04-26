
const foo = {
  count: 0,
  value: null
}

export default function fooReducer(state=foo, action) {
  switch(action.type) {
    case 'Foo':
      return {...foo, value: action.payload.value }
    default:
      return state
  }
}
