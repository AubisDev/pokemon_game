import { apiURL } from "../utilities";

export const fetchBossTeamService = async () => {
  try {
    return await Promise.all([
      fetch(`${apiURL}/charizard`),
      fetch(`${apiURL}/raikou`),
      fetch(`${apiURL}/articuno`),
      fetch(`${apiURL}/darkrai`),
      fetch(`${apiURL}/heatran`),
      fetch(`${apiURL}/tyranitar`),
    ]).then(([res1, res2, res3, res4, res5, res6]) =>
      Promise.all([
        res1.json(),
        res2.json(),
        res3.json(),
        res4.json(),
        res5.json(),
        res6.json(),
      ]),
    );
  } catch (error) {
    console.log(error);
  }
};
