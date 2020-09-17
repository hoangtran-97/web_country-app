import { Dispatch } from "redux";

import { RECEIVE_COUNTRIES, ReceiveCountriesAction } from "../../typings";

export function receiveCountries(countries: any): ReceiveCountriesAction {
    return {
        type: RECEIVE_COUNTRIES,
        payload: {
            countries,
        },
    };
}

export function fetchCountries(baseURL: string) {
    return (dispatch: Dispatch) => {
        return fetch(`https://restcountries.eu/rest/v2/all`)
            .then(resp => resp.json())
            .then(countries => {
                dispatch(receiveCountries(countries));
            });
    };
}
