const apiURL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchHardBossTeamService = async () => {
    try {
        return await Promise.all([
            fetch(`${apiURL}/dialga`),
            fetch(`${apiURL}/rayquaza`),
            fetch(`${apiURL}/lugia`),
            fetch(`${apiURL}/mewtwo`),
            fetch(`${apiURL}/slaking`),
            fetch(`${apiURL}/arceus`),
        ]).then(([res1,res2,res3,res4,res5,res6]) => Promise.all([
            res1.json(),
            res2.json(),
            res3.json(),
            res4.json(),
            res5.json(),
            res6.json(),
        ]));
    } catch (error) {
        console.log(error);
    }
}