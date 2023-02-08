import { colorTypesList } from '../../../utilities/colorsTypesList';


export const calculateDamage = ( attackerPoints:number, defenderPoints:number, attackerTypes:string[], defenderTypes:string[]) => {
    const value1 = ((12*5)/250);
    const value2 =( attackerPoints/defenderPoints); 
    const multiplier = value1 * value2;
    const baseDmg = 50; 
    const critical = CriticalChance(); 1
    const typeEfectivesness = typeDamageCalculator(attackerTypes, defenderTypes);
    const totalDmg = Math.round(multiplier * baseDmg * critical * typeEfectivesness);
    return totalDmg
}


const typeDamageCalculator = (attackerTypes:string[], defenderTypes:string[] ) => {
    if( attackerTypes.length === 1){
        for( let typeD of defenderTypes){
            const defenderDataTypeData = colorTypesList(typeD.toLowerCase());
            if( defenderDataTypeData.noAffects.includes(attackerTypes[0])) return 0;
            else if( defenderDataTypeData.resistent.includes(attackerTypes[0])) return 0.25;
            else if( defenderDataTypeData.weak.includes(attackerTypes[0])) return 1.5;
        }
    }
    else{
        for( let typeD of defenderTypes){
            const defenderDataTypeData = colorTypesList(typeD.toLowerCase());
            if( defenderDataTypeData.noAffects.includes(attackerTypes[0]) && defenderDataTypeData.noAffects.includes(attackerTypes[1])) return 0;
            else if( defenderDataTypeData.resistent.includes(attackerTypes[0]) || defenderDataTypeData.resistent.includes(attackerTypes[1])) return 0.25;
            else if( defenderDataTypeData.weak.includes(attackerTypes[0]) || defenderDataTypeData.weak.includes(attackerTypes[1])) return 1.5;
        }
    }
     return 1;
}

const CriticalChance = () => {
    const criticalChance = Math.round( Math.random()*30 );
    return criticalChance >28 ? 1 : 2; 
}