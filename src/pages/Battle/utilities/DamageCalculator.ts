import { colorTypesList } from '../../../utilities/colorsTypesList';


export const calculateDamage = ( attackerPoints:any, defenderPoints:any, attackerTypes:any, defenderTypes:any) => {
    const value1 = ((12*50)/250);
    const value2 = Math.round((attackerPoints/defenderPoints));
    const multiplier = value1 * value2;
    const baseDmg = 25;
    const critical = CriticalChance();
    const typeEfectivesness = typeDamageCalculator(attackerTypes, defenderTypes);
    return multiplier * baseDmg * critical * typeEfectivesness;
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
            if( defenderDataTypeData.noAffects.includes(attackerTypes[0]) || defenderDataTypeData.noAffects.includes(attackerTypes[1])) return 0;
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