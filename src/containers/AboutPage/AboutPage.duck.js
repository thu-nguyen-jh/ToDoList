// import api, functions

const initialState = {
    status: 'idle'
}

// action types

const FETCH_TODO_ITEMS = 'app/TODO/FETCH_TODO_ITEMS';
const FETCH_TODO_ITEMS_REQUEST = 'app/TODO/FETCH_TODO_ITEMS_REQUEST';

// reducer
const reducer = (state, action) => {
    switch(action.type) {
        case FETCH_TODO_ITEMS_REQUEST:
            return {
                ...state,
                status: 'pending'
            }
        default:
            return state;
    }
}

// actions
export const fetchTodoItems = (params) => ({
    type: FETCH_TODO_ITEMS,
    payload: params
})

// thunk actions
export const fetchTodoItems = (params) => async (dispatch, getState, extraArgument) => {
    dispatch(fetchTodoItemsRequest());
    const response = await apiGetTodoItem();
}

// selectors
export const statusSelector = (state) => state.AboutPage.statuss;

export default reducer;