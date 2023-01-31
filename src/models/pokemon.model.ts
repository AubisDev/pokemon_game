
export interface Pokemon extends Stats{
    name: string;
    id: string;
    imageSpot: string;
    imageFront: string;
    imageBack: string;
}

export interface Stats {
    attack: number;
    speed: number;
    health: number;
    defense: number;
    types: string[];
    status: 'alive' | 'dead';
    currentHealth: number;
}

