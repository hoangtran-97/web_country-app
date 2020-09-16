export type CountryListProps = {
    countries: any
    width: number
}
export type CountryListItemProps = {
    country: any
    key: string
    width: number
}
export type FilterProps = {
    width: number
    activeFilter: string | null
    setActiveFilter: Function
}
export type FilterItemProps = {
    filterCat: string
    activeFilter: string | null
    setActiveFilter: Function
}
export type SearchProps = {
    placeholder: string
    query?: string
    setQuery: Function
}
