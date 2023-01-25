
export interface Pokemon extends Stats{
    name: string;
    id: string;
    imageBack?: string;
    imageFront?: string;
    abilities?: string[];
}

export interface Stats {
    attack?: string;
    speed?: number;
    health?: number;
    defense?: number;
    types?: string[];
    status?: 'alive' | 'dead';
}

