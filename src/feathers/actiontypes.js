export default function (service) {
  return {
    FIND: `@@feathers/${service}_FIND`,
    FIND_PENDING: `@@feathers/${service}_FIND_PENDING`,
    FIND_REJECTED: `@@feathers/${service}_FIND_REJECTED`,
    FIND_FULFILLED: `@@feathers/${service}_FIND_FULFILLED`,

    GET: `@@feathers/${service}_GET`,
    GET_PENDING: `@@feathers/${service}_GET_PENDING`,
    GET_REJECTED: `@@feathers/${service}_GET_REJECTED`,
    GET_FULFILLED: `@@feathers/${service}_GET_FULFILLED`,

    UPDATE: `@@feathers/${service}_UPDATE`,
    UPDATE_PENDING: `@@feathers/${service}_UPDATE_PENDING`,
    UPDATE_REJECTED: `@@feathers/${service}_UPDATE_REJECTED`,
    UPDATE_FULFILLED: `@@feathers/${service}_UPDATE_FULFILLED`,
  }
}
