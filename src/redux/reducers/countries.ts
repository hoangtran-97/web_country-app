import {
    CountriesActions,
    CountriesState,
    RECEIVE_COUNTRIES,
} from "../../typings";

export default function countries(
    state: any = {
        countries: [],
    },
    action: CountriesActions
): CountriesState {
    switch (action.type) {
        case RECEIVE_COUNTRIES:
            const { countries } = action.payload;
            return {
                ...state,
                countries: [...state.countries, countries],
            };
        default:
            return state;
    }
}
