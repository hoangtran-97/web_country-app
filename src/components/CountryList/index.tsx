import React from "react";

import { CountryListItem } from "../CountryListItem";
import { CountryListProps } from "../../typings";

export const CountryList = ({ countries, width }: CountryListProps) => {
    return (
        <tbody>
            {countries &&
                countries.map((country: any) => (
                    <CountryListItem
                        country={country}
                        key={country.alpha2Code}
                        width={width}
                    ></CountryListItem>
                ))}
        </tbody>
    );
};
