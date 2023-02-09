import fireSymbol from "../assets/PokemonTypeIcons/fire-type.webp";
import waterSymbol from "../assets/PokemonTypeIcons/aqua-type.webp";
import grassSymbol from "../assets/PokemonTypeIcons/grass-type.webp";
import electricSymbol from "../assets/PokemonTypeIcons/electric-type.webp";
import ghostSymbol from "../assets/PokemonTypeIcons/ghost-type.webp";
import dragonSymbol from "../assets/PokemonTypeIcons/dragon-type.webp";
import fightingSymbol from "../assets/PokemonTypeIcons/fighting-type.webp";
import rockSymbol from "../assets/PokemonTypeIcons/rock-type.webp";
import groundSymbol from "../assets/PokemonTypeIcons/ground-type.webp";
import darkSymbol from "../assets/PokemonTypeIcons/dark-type.webp";
import bugSymbol from "../assets/PokemonTypeIcons/bug-type.webp";
import fairySymbol from "../assets/PokemonTypeIcons/fairy-type.webp";
import flyingSymbol from "../assets/PokemonTypeIcons/flying-type.webp";
import psychicSymbol from "../assets/PokemonTypeIcons/psychic-type.webp";
import poisonSymbol from "../assets/PokemonTypeIcons/poison-type.webp";
import steelSymbol from "../assets/PokemonTypeIcons/steel-type.webp";
import iceSymbol from "../assets/PokemonTypeIcons/ice-type.webp";
import normalSymbol from "../assets/PokemonTypeIcons/normal-type.webp";

export interface TypeData {
  bgColor: string;
  bgGradient: string;
  weak: string[];
  resistent: string[];
  noAffects: string[];
  symbol: string;
}

export const colorTypesList = (type: string): TypeData => {
  switch (type) {
    case "grass":
      return {
        bgColor: "rgb(32,64,0)",
        bgGradient:
          "linear-gradient(-45deg, rgba(32,64,0,1) 0%, rgba(62,151,9,1) 31%, rgba(103,247,10,1) 56%, rgba(239,254,231,1) 100%)",
        weak: ["flying", "poison", "bug", "fire", "ice"],
        resistent: ["ground", "water", "grass", "electric"],
        noAffects: [],
        symbol: grassSymbol,
      };

    case "fire":
      return {
        bgColor: "rgb(252,12,11)",
        bgGradient:
          "linear-gradient(45deg, rgba(252,12,11,1) 0%, rgba(246,127,11,1) 31%, rgba(248,184,14,1) 56%, rgba(239,254,231,1) 100%)",
        weak: ["ground", "rock", "water"],
        resistent: ["bug", "steel", "fire", "grass", "ice"],
        noAffects: [],
        symbol: fireSymbol,
      };

    case "water":
      return {
        bgColor: "#08517a",
        bgGradient:
          "linear-gradient(125deg, rgba(8,81,122,1) 0%, rgba(10,122,188,1) 33%, rgba(54,175,246,1) 66%, rgba(239,254,231,1) 100%)",
        weak: ["grass", "electric"],
        resistent: ["steel", "fire", "water", "ice"],
        noAffects: [],
        symbol: waterSymbol,
      };

    case "normal":
      return {
        bgColor: "rgb(230, 223, 115)",
        bgGradient:
          "linear-gradient(125deg, rgba(172,169,116,1) 0%, rgba(204,201,170,1) 33%, rgba(234,234,222,1) 66%, rgba(239,254,231,1) 100%)",
        weak: ["rock", "ghost", "steel"],
        resistent: [],
        noAffects: [],
        symbol: normalSymbol,
      };

    case "flying":
      return {
        bgColor: "rgb(8,87,100)",
        bgGradient:
          "linear-gradient(125deg, rgba(8,87,100,1) 0%, rgba(94,185,178,1) 33%, rgba(220,229,234,1) 66%, rgba(239,254,231,1) 100%)",
        weak: ["rock", "electric", "ice"],
        resistent: ["fighting", "bug", "grass"],
        noAffects: ["ground"],
        symbol: flyingSymbol,
      };

    case "bug":
      return {
        bgColor: "rgb(145,186,46)",
        bgGradient:
          "linear-gradient(125deg, rgba(145,186,46,1) 0%, rgba(189,221,110,1) 33%, rgba(217,254,158,1) 66%, rgba(239,254,231,1) 100%)",
        weak: ["flying", "rock", "fire"],
        resistent: ["fighting", "ground", "grass"],
        noAffects: [],
        symbol: bugSymbol,
      };

    case "poison":
      return {
        bgColor: "rgb(97,19,128)",
        bgGradient:
          "linear-gradient(125deg, rgba(97,19,128,1) 0%, rgba(168,25,215,1) 33%, rgba(202,114,236,1) 66%, rgba(239,254,231,1) 100%)",
        weak: ["ground", "psychic"],
        resistent: ["fighting", "poison", "grass", "fairy"],
        noAffects: [],
        symbol: poisonSymbol,
      };

    case "electric":
      return {
        bgColor: "rgb(150,145,1)",
        bgGradient:
          "linear-gradient(125deg, rgba(150,145,1,1) 0%, rgba(255,250,36,1) 33%, rgba(247,255,133,1) 66%, rgba(239,254,231,1) 100%)",
        weak: ["ground"],
        resistent: ["flying", "steel", "electric"],
        noAffects: [],
        symbol: electricSymbol,
      };

    case "ground":
      return {
        bgColor: "rgb(191,172,33)",
        bgGradient:
          "linear-gradient(125deg, rgba(191,172,33,1) 0%, rgba(225,209,88,1) 33%, rgba(247,255,133,1) 66%, rgba(239,254,231,1) 100%)",
        weak: ["water", "grass", "ice"],
        resistent: ["poison", "rock"],
        noAffects: ["electric"],
        symbol: groundSymbol,
      };

    case "fighting":
      return {
        bgColor: "rgb(128,11,17)",
        bgGradient:
          "linear-gradient(125deg, rgba(128,11,17,1) 0%, rgba(232,19,25,1) 33%, rgba(211,96,99,1) 66%, rgba(239,254,231,1) 100%)",
        weak: ["flying", "psychic", "fairy"],
        resistent: ["rock", "bug", "dark"],
        noAffects: [],
        symbol: fightingSymbol,
      };

    case "psychic":
      return {
        bgColor: "rgb(138,5,50)",
        bgGradient:
          "linear-gradient(125deg, rgba(138,5,50,1) 0%, rgba(236,14,99,1) 33%, rgba(245,87,146,1) 66%, rgba(239,254,231,1) 100%)",
        weak: ["bug", "ghost", "dark"],

        resistent: ["fighting", "psychic"],
        noAffects: [],
        symbol: psychicSymbol,
      };

    case "rock":
      return {
        bgColor: "rgb(71,64,38)",
        bgGradient:
          "linear-gradient(125deg, rgba(71,64,38,1) 0%, rgba(119,106,62,1) 33%, rgba(180,162,112,1) 66%, rgba(239,254,231,1) 100%)",
        weak: ["fighting", "ground", "steel", "water", "grass"],
        resistent: ["normal", "flying", "poison", "fire"],
        noAffects: [],
        symbol: rockSymbol,
      };

    case "ice":
      return {
        bgColor: "rgb(12,45,49)",
        bgGradient:
          "linear-gradient(125deg, rgba(12,45,49,1) 0%, rgba(25,149,161,1) 33%, rgba(102,209,229,1) 66%, rgba(220,252,247,1) 100%)",
        weak: ["fighting", "rock", "steel", "fire"],
        noAffects: [],
        resistent: ["ice"],
        symbol: iceSymbol,
      };

    case "ghost":
      return {
        bgColor: "rgb(71,43,83)",
        bgGradient:
          "linear-gradient(125deg, rgba(71,43,83,1) 0%, rgba(142,85,164,1) 33%, rgba(189,152,203,1) 66%, rgba(240,230,241,1) 100%)",
        weak: ["ghost", "dark"],
        resistent: ["poison", "bug"],
        noAffects: ["normal", "fighting"],
        symbol: ghostSymbol,
      };

    case "dragon":
      return {
        bgColor: "rgb(41,3,106)",
        bgGradient:
          "linear-gradient(125deg, rgba(41,3,106,1) 0%, rgba(138,85,253,1) 33%, rgba(214,177,254,1) 66%, rgba(255,255,255,1) 100%)",
        weak: ["ice", "dragon", "fairy"],
        resistent: ["fire", "water", "grass", "electric"],
        noAffects: [],
        symbol: dragonSymbol,
      };

    case "dark":
      return {
        bgColor: "rgb(45,34,28)",
        bgGradient:
          "linear-gradient(125deg, rgba(45,34,28,1) 0%, rgba(95,70,50,1) 33%, rgba(145,104,82,1) 66%, rgba(79,79,79,1) 100%)",
        weak: ["fighting", "bug", "fairy"],
        resistent: ["ghost", "dark"],
        noAffects: ["psychic"],
        symbol: darkSymbol,
      };

    case "steel":
      return {
        bgColor: "rgb(69,69,69)",
        bgGradient:
          "linear-gradient(125deg, rgba(69,69,69,1) 0%, rgba(123,142,138,1) 33%, rgba(187,197,196,1) 66%, rgba(237,239,238,1) 100%)",
        weak: ["fighting", "ground", "fire"],
        resistent: [
          "normal",
          "flying",
          "rock",
          "bug",
          "steel",
          "grass",
          "psychic",
          "ice",
          "dragon",
          "fairy",
        ],
        noAffects: ["poison"],
        symbol: steelSymbol,
      };

    case "fairy":
      return {
        bgColor: "rgb(248,126,167)",
        bgGradient:
          "linear-gradient(125deg, rgba(248,126,167,1) 0%, rgba(255,160,194,1) 33%, rgba(253,209,224,1) 66%, rgba(255,255,255,1) 100%)",
        weak: ["poison", "steel"],
        resistent: ["fighting", "bug", "dark"],
        noAffects: ["dragon"],
        symbol: fairySymbol,
      };
    default:
      return {
        bgColor: "",
        bgGradient: "",
        weak: [],
        resistent: [],
        noAffects: [],
        symbol: "",
      };
  }
};
