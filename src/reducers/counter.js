import * as types from "../actions/actionsType";

const initialState = {
    n: 5,
    numbers: [1,2,3,4,5],
    durationPrint: 1000,
    result: -1,
    userResponse: 0,
    victory: false
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.FINISHED_COUNTING:
            return {
                ...state,
                victory: state.userResponse == state.result
            };
        default:
            return state;
    }
}