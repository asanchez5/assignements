/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: Pokemon.js
 */
/*
 * Author:      asanchez@akurey.com
 * Date:        03/08/2019
 * Description: Pokemon assignation to test knowledge about
 * javascript.
 */

 /**
 *Creates a pokemon
 * @param {String} name
 * @returns {Object}
 */
function Pokemon (pName, pType, pAtack, pDefense) {
    this.name = pName;
    this.type = pType;
    this.attack = pAtack;
    this.defense = pDefense;
}

const effectiveness_rules = {
    "fire" : {
        "grass": 2,
        "water": 0.5,
    },
    "grass": {
        "fire": 2,
        "water": 0.5,
    },
    "water": {
        "fire": 2,
        "grass": 0.5,
        "electric": 0.5
    },
    "electric": {
        "electric": 0.5
    }
}

/**
* Used to fetch the correct efectivenes which later will be used as a param
* to calculate the final damage
* @param {Pokemon} pPokemonA
* @param {Pokemon} pPokemonB
* @returns {number}
*/
function fight (pPokemonA, pPokemonB)  {
    const effectiveness = effectiveness_rules[pPokemonA.type][pPokemonB.type]|| 1;
    return calculate_damage(pPokemonA, pPokemonB, effectiveness);
}

/**
* Calculates the total damage
* @param {Pokemon} pPokemonA
* @param {Pokemon} pPokemonB
* @param {number} pEffectiveness
* @returns {number}
*/
function calculate_damage (pPokemonA, pPokemonB, pEffectiveness){
    return Math.round(50 * (pPokemonA.attack / pPokemonB.defense) * pEffectiveness);
}
