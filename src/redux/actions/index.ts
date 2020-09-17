import { Dispatch } from "redux";

// import { useCountry } from "../../hooks/useCountry";

export * from "./product";
export * from "./ui";

export const handleInitialData = () => (
    query: string,
    activeFilter: string,
    dispatch: Dispatch
) => {
    // const [error, countries] = useCountry(query, activeFilter);
};
