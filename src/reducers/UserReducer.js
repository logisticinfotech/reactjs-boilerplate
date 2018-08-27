import * as type from "../actions/const";

const initialState = { userdetail: [] };

export default function UserReducer(state = initialState, action) {
    const data = action.data;

    switch (action.type) {
        case type.USER_DETAIL:
            return {
                ...state,
                userdetail: data,
            };

        default:
            return state;
    }
}
