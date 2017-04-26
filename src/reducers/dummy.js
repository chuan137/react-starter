
const dummy = {
  count: 0
}

export default function dummyReducer(state=dummy, action) {
  switch(action.type) {
    case 'NOTHING':
    default:
      return state
  }
}
