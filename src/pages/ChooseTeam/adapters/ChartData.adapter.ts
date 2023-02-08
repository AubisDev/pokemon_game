
export interface ChartData {
    statName: string;
    statValue: number;
    fullMark: number;
}

export const CharDataAdapter = ({attack, defense, speed, health }:any): ChartData[] => {
    return [
        {
            statName:'Attack',
            statValue: Number(attack),
            fullMark: 150,
        },
        {
            statName:'Defense',
            statValue: Number(defense),
            fullMark: 150,
        },
        {
            statName:'Speed',
            statValue: Number(speed),
            fullMark: 150,
        },
        {
            statName:'Health',
            statValue: Number(health),
            fullMark: 150,
        },
    ]

}