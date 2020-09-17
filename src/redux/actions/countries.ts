import { Dispatch } from "redux";

import { RECEIVE_COUNTRIES, CountriesActions } from "../../typings";

export function receiveCountries(countries: any): CountriesActions {
    return {
        type: RECEIVE_COUNTRIES,
        payload: {
            countries,
        },
    };
}

export function fetchCountries() {
    return (dispatch: Dispatch) => {
        return fetch(`https://restcountries.eu/rest/v2/all`)
            .then(resp => resp.json())
            .then(countries => {
                dispatch(receiveCountries(countries));
            });
    };
}
