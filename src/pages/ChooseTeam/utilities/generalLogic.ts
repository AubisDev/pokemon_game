import { Pokemon } from "../../../models";
import {
  fetchRandomTeamService,
  fetchBossTeamService,
  fetchHardBossTeamService,
} from "../services";

export const checkIfAlreadyExist = (userTeam: Pokemon[], id: string) => {
  return userTeam.some((elem) => elem.id == id);
};

export const findEmptySpot = (currentState: Pokemon[]) => {
  return currentState.findIndex((elem: Pokemon) => elem.name === "");
};

export const fetchBotTeam = async (option: string) => {
  return option === "random"
    ? fetchRandomTeamService()
    : option === "boss"
    ? fetchBossTeamService()
    : fetchHardBossTeamService();
};
