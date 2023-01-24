
export interface Pokemon extends Stats{
    name: string;
    id: string;
    imageBack?: string;
    imageFront?: string;
    abilities?: string[];
}

interface Stats {
    attack?: string;
    speed?: number;
    health?: number;
    defense?: number;
    type?: string[];
    status?: 'alive' | 'dead';
}