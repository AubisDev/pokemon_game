import { ChartData } from '../adapters/ChartData.adapter';


export const charDataEmptyValues = (): ChartData[] => {
    return [
        {
            statName:'Attack',
            statValue: 0,
            fullMark: 150,
        },
        {
            statName:'Defense',
            statValue: 0,
            fullMark: 150,
        },
        {
            statName:'Speed',
            statValue: 0,
            fullMark: 150,
        },
        {
            statName:'Health',
            statValue: 0,
            fullMark: 150,
        },
    ]
}

export const SearchErrorMessage: string = 'Pokemon not found, try again';
export const initialAlivePokemonState = [];