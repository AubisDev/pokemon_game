

export const colorTypesList = {
    grass: { 
        bgColor: 'rgb(32,64,0)', 
        bgGradient:'linear-gradient(90deg, rgba(32,64,0,1) 0%, rgba(62,151,9,1) 31%, rgba(103,247,10,1) 56%, rgba(239,254,231,1) 100%)',
        weak: ['Flying', 'Poison', 'Bug', 'Fire', 'Ice'],
        resistent: ['Ground', 'Water', 'Grass', 'Electric']
    },
        
    fire: {
        bgColor: 'rgb(252,12,11)', 
        bgGradient:'linear-gradient(90deg, rgba(252,12,11,1) 0%, rgba(246,127,11,1) 31%, rgba(248,184,14,1) 56%, rgba(239,254,231,1) 100%)',
        weak: ['Ground', 'Rock', 'Water'],
        resistent: ['Bug', 'Steel', 'Fire', 'Grass', 'Ice']
    },
    
    water: { 
        bgColor: 'rgb(8,81,122)', 
        bgGradient:'linear-gradient(90deg, rgba(8,81,122,1) 0%, rgba(10,122,188,1) 33%, rgba(54,175,246,1) 66%, rgba(239,254,231,1) 100%)',
        weak: ['Grass', 'Electric'],
        resistent: ['Steel', 'Fire', 'Water', 'Ice']
    },
    normal: { 
        bgColor: 'rgb(172,169,116)', 
        bgGradient:'linear-gradient(90deg, rgba(172,169,116,1) 0%, rgba(204,201,170,1) 33%, rgba(234,234,222,1) 66%, rgba(239,254,231,1) 100%)',
        weak: ['rock', 'ghost', 'steel'],
        resistent: ['ghost']
    },
    flying: { 
        bgColor: 'rgb(8,87,100)', 
        bgGradient:'linear-gradient(90deg, rgba(8,87,100,1) 0%, rgba(94,185,178,1) 33%, rgba(220,229,234,1) 66%, rgba(239,254,231,1) 100%)',
        weak: ['Rock', 'Electric', 'Ice'],
        resistent: ['Fighting', 'Ground', 'Bug', 'Grass']
    },
    bug: { 
        bgColor: 'rgb(145,186,46)', 
        gGradient:'linear-gradient(90deg, rgba(145,186,46,1) 0%, rgba(189,221,110,1) 33%, rgba(217,254,158,1) 66%, rgba(239,254,231,1) 100%)',
        weak: ['Flying', 'Rock', 'Fire'],
        resistent: ['Fighting', 'Ground', 'Grass']
    },
    poison: { 
        bgColor: 'rgb(97,19,128)', 
        bgGradient:'linear-gradient(90deg, rgba(97,19,128,1) 0%, rgba(168,25,215,1) 33%, rgba(202,114,236,1) 66%, rgba(239,254,231,1) 100%)',
        weak: ['Ground', 'Psychic'],
        resistent: ['Fighting', 'Poison', 'Grass', 'Fairy']
    },
    electric: { 
        bgColor: 'rgb(150,145,1)', 
        bgGradient:'linear-gradient(90deg, rgba(150,145,1,1) 0%, rgba(255,250,36,1) 33%, rgba(247,255,133,1) 66%, rgba(239,254,231,1) 100%)',
        weak: ['Ground'],
        resistent: ['Flying', 'Steel', 'Electric']
    },
    ground: { 
        bgColor: 'rgb(191,172,33)', 
        bgGradient:'linear-gradient(90deg, rgba(191,172,33,1) 0%, rgba(225,209,88,1) 33%, rgba(247,255,133,1) 66%, rgba(239,254,231,1) 100%)',
        weak: ['Water', 'Grass', 'Ice'],
        resistent: ['Poison', 'Rock', 'Electric']
    },
    fighting: { 
        bgColor: 'rgb(128,11,17)', 
        bgGradient:'linear-gradient(90deg, rgba(128,11,17,1) 0%, rgba(232,19,25,1) 33%, rgba(211,96,99,1) 66%, rgba(239,254,231,1) 100%)',
        weak: ['Flying', 'Psychic', 'Fairy'],
        resistent: ['Rock', 'Bug', 'Dark']
    },
    phychic: { 
        bgColor: 'rgb(138,5,50)', 
        bgGradient:'linear-gradient(90deg, rgba(138,5,50,1) 0%, rgba(236,14,99,1) 33%, rgba(245,87,146,1) 66%, rgba(239,254,231,1) 100%)',
        weak: ['Bug', 'Ghost', 'Dark'],
        resistent: ['Fighting', 'Psychic']
    },
    rock: { 
        bgColor: 'rgb(71,64,38)', 
        bgGradient:'linear-gradient(90deg, rgba(71,64,38,1) 0%, rgba(119,106,62,1) 33%, rgba(180,162,112,1) 66%, rgba(239,254,231,1) 100%)',
        weak: ['Fighting', 'Ground', 'Steel', 'Water', 'Grass'],
        resistent: ['Normal', 'Flying', 'Poison', 'Fire']
    },
    ice: { 
        bgColor: 'rgb(12,45,49)', 
        bgGradient:'linear-gradient(90deg, rgba(12,45,49,1) 0%, rgba(25,149,161,1) 33%, rgba(102,209,229,1) 66%, rgba(220,252,247,1) 100%)',
        weak: ['Fighting', 'Rock', 'Steel', 'Fire'],
        resistent: ['ice']
    },
    ghost: { 
        bgColor: 'rgb(71,43,83)', 
        bgGradient:'linear-gradient(90deg, rgba(71,43,83,1) 0%, rgba(142,85,164,1) 33%, rgba(189,152,203,1) 66%, rgba(240,230,241,1) 100%)',
        weak: ['Ghost', 'Dark'],
        resistent: ['Normal', 'Fighting', 'Poison', 'Bug']
    },
    dragon: { 
        bgColor: 'rgb(41,3,106)', 
        bgGradient:'linear-gradient(90deg, rgba(41,3,106,1) 0%, rgba(138,85,253,1) 33%, rgba(214,177,254,1) 66%, rgba(255,255,255,1) 100%)',
        weak: ['Ice', 'Dragon', 'Fairy'],
        resistent: ['Fire', 'Water', 'Grass', 'Electric']
    },
    dark: { 
        bgColor: 'rgb(45,34,28)', 
        bgGradient:'linear-gradient(90deg, rgba(45,34,28,1) 0%, rgba(95,70,50,1) 33%, rgba(145,104,82,1) 66%, rgba(79,79,79,1) 100%)',
        weak: ['Fighting', 'Bug', 'Fairy'],
        resistent: ['Ghost', 'Psychic', 'Dark']
    },
    steel: { 
        bgColor: 'rgb(69,69,69)', 
        bgGradient:'linear-gradient(90deg, rgba(69,69,69,1) 0%, rgba(123,142,138,1) 33%, rgba(187,197,196,1) 66%, rgba(237,239,238,1) 100%)',
        weak: ['Fighting', 'Ground', 'Fire'],
        resistent: ['Normal', 'Flying', 'Poison', 'Rock', 'Bug', 'Steel', 'Grass', 'Psychic', 'Ice', 'Dragon', 'Fairy']
    },
    fairy: { 
        bgcolor: 'rgb(248,126,167)', 
        bgGradient:'linear-gradient(90deg, rgba(248,126,167,1) 0%, rgba(255,160,194,1) 33%, rgba(253,209,224,1) 66%, rgba(255,255,255,1) 100%)',
        weak: ['Poison', 'Steel'],
        resistent: ['Fighting', 'Bug', 'Dragon', 'Dark']
    },
}