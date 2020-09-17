import {
    CountriesActions,
    CountriesState,
    RECEIVE_COUNTRIES,
} from "../../typings";

export default function countries(
    state: any = {
        list: [],
    },
    action: CountriesActions
): CountriesState {
    switch (action.type) {
        case RECEIVE_COUNTRIES:
            const { countries } = action.payload;
            return {
                ...state,
                list: [...state.list, countries],
            };
        default:
            return state;
    }
}
