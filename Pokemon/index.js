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


function Pokemon (p_name, p_type, p_attack, p_defense) {
    this.name = p_name;
    this.type = p_type;
    this.attack = p_attack;
    this.defense = p_defense;
}

var effectiveness_rules = {
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

function fight (_PokemonA, _PokemonB)  {
    var effectiveness = effectiveness_rules[_PokemonA.type][_PokemonB.type]|| 1;
    return calculate_damage(_PokemonA, _PokemonB, effectiveness);
}

function calculate_damage (_PokemonA, _PokemonB, effectiveness){
    var damage = Math.round(50 * (_PokemonA.attack / _PokemonB.defense) * effectiveness);
    return damage;
}
