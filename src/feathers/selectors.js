import _reduce from 'lodash/reduce'

export default function (service) {
  return {
    get: (state, id) => {
      try {
        return state[service].data[id]
      } catch (err) {
        console.log(err)
        return undefined
      }
    },

    find: (state, pageid = 0) => {
      try {
        const ids = state[service].pages[pageid]
        if (ids === undefined) {
          throw new Error('no page')
        } else {
          return _reduce(ids, (obj, id) => {
            obj.append(state[service].data[id])
          }, [])
        }
      } catch (err) {
        return undefined
      }
    }
  }
}
