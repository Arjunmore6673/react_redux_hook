import { combineReducers } from 'redux';

import { DATA_AVAILABLE, DELETE_SINGLE } from "./actions" //Import the actions types constant we defined in our actions

let dataState = { data: [] };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            return { ...state, data: action.data };
        case DELETE_SINGLE: {
            console.log("IN DELETE_SINGLE object")
            console.log(JSON.stringify(state.data.length))
            return {
                data: state.data.filter(o => {
                    return o.title != action.data
                })
            };
            console.log(JSON.stringify(outpu.data.length))

        }
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;