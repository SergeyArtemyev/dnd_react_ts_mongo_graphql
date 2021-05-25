import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    'class features': {
        hitDie: {
            type: String,
            required: true,
        },
        primAbil: {
            type: String,
            required: true,
        },
        saves: {
            type: String,
            required: true,
        },
    },
    description: {
        info: {
            type: String,
            required: true,
        },
        hitDice: {
            type: String,
            required: true,
        },
        hitAtFirstLvl: {
            type: String,
            required: true,
        },
        hitAtHigherLvl: {
            type: String,
            required: true,
        },
        profArmor: {
            type: String,
            required: true,
        },
        profWeapons: {
            type: String,
            required: true,
        },
        profTool: {
            type: String,
            required: true,
        },
        savingThrow: {
            type: String,
            required: true,
        },
        skills: {
            type: String,
            required: true,
        },
        favoredEnemy: {
            type: String,
        },
        fightingStyle: {
            type: String,
        },
        secondWind: {
            type: String,
        },
        naturalExplorer: {
            type: String,
        },
        expertise: {
            type: String,
        },
        sneakAttack: {
            type: String,
        },
        thiefCant: {
            type: String,
        },
        spellInfo: {
            type: String,
        },
        cantrips: {
            type: String,
        },
        spellSlots: {
            type: String,
        },
        spellSaceDc: {
            type: String,
        },
        spellAttackMod: {
            type: String,
        },
    },
});

const CharClass = mongoose.model('Class', classSchema);

export default CharClass;
