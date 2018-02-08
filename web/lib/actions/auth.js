const asyncActionType = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`,
  })

export const LOGIN = asyncActionType('LOGIN')
export const loginPending = () => ({
    type: LOGIN.PENDING,
})

export const loginSuccess = (response) => ({
	type: LOGIN.SUCCESS,
    payload: response
})

export const loginFailure = (response) => ({
	type: LOGIN.FAILURE,
    payload: response
})