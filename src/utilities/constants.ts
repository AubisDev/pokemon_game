import { Pokemon } from '../models/pokemon.model';

export const userTeamInitialState: Pokemon[] =  [
    {
        name:'scyther', 
        id: '123' , 
        health:70, 
        attack:110, 
        defense:80, 
        speed: 105, 
        types:['bug','flying'], 
        status:"alive", 
        currentHealth:70, 
        imageSpot:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
        imageBack:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/123.png', 
        imageFront:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/123.png'
    },
    {
        name:'piloswine', 
        id: '221' , 
        health:100, 
        attack:100, 
        defense:80, 
        speed: 50, 
        types:['ice','ground'], 
        status:"alive", 
        currentHealth:100, 
        imageSpot:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png',
        imageBack:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/221.png', 
        imageFront:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/221.png'
    },

    {
        name:'weepinbell', 
        id: '70' , 
        health:65, 
        attack:90, 
        defense:50, 
        speed: 55, 
        types:['ice','ground'], 
        status:"alive", 
        currentHealth:65, 
        imageSpot:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png',
        imageBack:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/70.png', 
        imageFront:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/70.png'
    },

    {
        name:'cloyster', 
        id: '91' , 
        health:50, 
        attack:95, 
        defense:180, 
        speed: 70, 
        types:['water','ice'], 
        status:"alive", 
        currentHealth:50, 
        imageSpot:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
        imageBack:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/91.png', 
        imageFront:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/91.png'
    },
    {
        name:'slaking', 
        id: '289' , 
        health:150, 
        attack:160, 
        defense:95, 
        speed: 100, 
        types:['normal'], 
        status:"alive", 
        currentHealth:150, 
        imageSpot:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png',
        imageBack:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/289.png', 
        imageFront:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/289.png'
    },
    {
        name:'glameow', 
        id: '431' , 
        health:49, 
        attack:55, 
        defense:42, 
        speed: 85, 
        types:['normal'], 
        status:"alive", 
        currentHealth:50, 
        imageSpot:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png',
        imageBack:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/431.png', 
        imageFront:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/431.png'
    },

]


// export const userTeamInitialState: Pokemon[]  = [
//     {name:'', id: '0' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
//     {name:'', id: '1' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
//     {name:'', id: '2' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
//     {name:'', id: '3' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
//     {name:'', id: '4' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
//     {name:'', id: '5' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
// ]

export const botTeamInitialState: Pokemon[]  = [
    {name:'', id: '0' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
    {name:'', id: '1' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
    {name:'', id: '2' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
    {name:'', id: '3' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
    {name:'', id: '4' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
    {name:'', id: '5' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
]


export const usernameError:string = "Trainer name must be at least 2 characters";