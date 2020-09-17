// Action types
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const TOGGLE_DIALOG = "TOGGLE_DIALOG";

export type CountryListProps = {
    countries: any;
    width: number;
};
export type CountryListItemProps = {
    country: any;
    key: string;
    width: number;
};
export type FilterProps = {
    width: number;
    activeFilter: string | null;
    setActiveFilter: Function;
};
export type FilterItemProps = {
    filterCat: string;
    activeFilter: string | null;
    setActiveFilter: Function;
};
export type SearchProps = {
    placeholder: string;
    query: string;
    setQuery: Function;
};

// Enum
export enum DialogType {
    SignIn = "signIn",
    SignUp = "signUp",
}

// A product
export type Product = {
    id: string;
    name: string;
    price: number;
};

export type AddProductAction = {
    type: typeof ADD_PRODUCT;
    payload: {
        product: Product;
    };
};

export type RemoveProductAction = {
    type: typeof REMOVE_PRODUCT;
    payload: {
        product: Product;
    };
};

export type ToggleDialogAction = {
    type: typeof TOGGLE_DIALOG;
    payload: {
        dialog: DialogType;
    };
};

export type UiActions = ToggleDialogAction;

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction;

export type ProductState = {
    inCart: Product[];
};

// Using dynamic keys from an enum
export type UiState = {
    dialogOpen: {
        [key in DialogType]?: boolean;
    };
};

export type AppState = {
    product: ProductState;
    ui: UiState;
};
