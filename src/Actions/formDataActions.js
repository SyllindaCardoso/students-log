// 1. Actions will dispatch 2 things: type and payload
// 2. You don't have to return payload, if there is no need
export function getFormData() {
    //API calls to get data from database

    // but for now send back fake data

    return function (dispatch) {
        dispatch({
            type: 'GET_FORM_DATA',
        })
    }
}

// payload => data to send to reducer
export function addFormData(payload) {
    return function (dispatch) {
        dispatch({
            type: 'ADD_FORM_DATA',
            payload: payload
        })
    }
}

export function deleteFormData(payload) {
    return function (dispatch) {
        dispatch({
            type: 'DELETE_FORM_DATA', 
            payload: payload
        })
    }
}

export function editFormData(payload) {
    return function (dispatch) {
        dispatch({
            type: 'EDIT_FORM_DATA', 
            payload: payload
        })
    }
}