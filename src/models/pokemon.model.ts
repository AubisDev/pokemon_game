
export interface Pokemon extends Stats{
    name: string;
    id: string;
    imageBack?: string;
    imageFront?: string;
    abilities?: string[];
}

interface Stats {
    ttack?: string;
    speed?: number;
    health?: number;
    defense?: number;
    type?: string |string[];
    status?: 'alive' | 'dead';
}