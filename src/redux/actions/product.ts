import { Dispatch } from "redux";

import { ADD_PRODUCT, REMOVE_PRODUCT, ProductActions } from "../../typings";

export function addProduct(product: any): ProductActions {
    return {
        type: ADD_PRODUCT,
        payload: {
            product,
        },
    };
}

export function removeProduct(product: any): ProductActions {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            product,
        },
    };
}

// Async action processed by redux-thunk middleware
export function fetchProduct(productId: string) {
    return (dispatch: Dispatch) => {
        return fetch(`products/${productId}`)
            .then(resp => resp.json())
            .then(product => {
                dispatch(addProduct(product));
            });
    };
}
