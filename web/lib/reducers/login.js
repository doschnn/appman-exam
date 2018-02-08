import { LOGIN } from '../actions/auth';

const initialState = {
    status: '',
    message: '',
    loginPending: false
}

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.SUCCESS:
      return {
          status: action.payload.status,
          message: action.payload.data.msg,
          loginPending: false
    }
    break
    case LOGIN.PENDING:
      return {
        status: '',
        message: '',
        loginPending: true
    }
      break
    case LOGIN.FAILURE:
      return { 
        status: action.payload.status,
        message: action.payload.data.msg,
        loginPending: false
    }
    break
    default:
      return state
  }
}