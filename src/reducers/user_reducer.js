import types from '../actions/types'

const DEFAULT_STATE = {
    auth: false,
    error: '', 
    all: '', 
    avatar: ''
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.ADD_NEW_USER:
            return { auth: true, error: ''}
        case types.RETRIEVE_AVATARS:
            return { auth: true, all: action.payload.data, error: ''}
        case types.AUTH_ERROR:
            return { auth: false, error: action.error}
        case types.SIGN_UP:
        case types.LOG_IN:
            return { auth: true, error: '' }
        case types.LOG_OUT:
            return { auth: false, error: '' }
        default:
            return state
    }
}