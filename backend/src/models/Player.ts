import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    race: {
        type: String,
        required: true,
    },
    extraLanguage: {
        type: String,
    },
    cantrip: {
        type: String,
    },
    toolProff: {
        type: String,
    },
    playerClass: {
        type: String,
        required: true,
    },
    fighterSkill1: {
        type: String,
    },
    fighterSkill2: {
        type: String,
    },
    fightingStyle: {
        type: String,
    },
    rangerSkill1: {
        type: String,
    },
    rangerSkill2: {
        type: String,
    },
    rangerSkill3: {
        type: String,
    },
    favoredEnemy: {
        type: String,
    },
    language: {
        type: String,
    },
    naturalExplorer: {
        type: String,
    },
    rogueSkill1: {
        type: String,
    },
    rogueSkill2: {
        type: String,
    },
    rogueSkill3: {
        type: String,
    },
    rogueSkill4: {
        type: String,
    },
    expertise1: {
        type: String,
    },
    expertise2: {
        type: String,
    },
    sorcererSkill: {
        type: String,
    },
    str: {
        type: String,
        required: true,
    },
    strMod: {
        type: String,
        required: true,
    },
    strengthPoints: {
        type: String,
        required: true,
    },
    dex: {
        type: String,
        required: true,
    },
    dexMod: {
        type: String,
        required: true,
    },
    dexterityPoints: {
        type: String,
        required: true,
    },
    con: {
        type: String,
        required: true,
    },
    conMod: {
        type: String,
        required: true,
    },
    constitutionPoints: {
        type: String,
        required: true,
    },
    int: {
        type: String,
        required: true,
    },
    intMod: {
        type: String,
        required: true,
    },
    intelligencePoints: {
        type: String,
        required: true,
    },
    wis: {
        type: String,
        required: true,
    },
    wisMod: {
        type: String,
        required: true,
    },
    wisdomPoints: {
        type: String,
        required: true,
    },
    char: {
        type: String,
        required: true,
    },
    charMod: {
        type: String,
        required: true,
    },
    charismaPoints: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    charName: {
        type: String,
        required: true,
    },
    background: {
        type: String,
        required: true,
    },
    adLang: {
        type: String,
    },
    adLang1: {
        type: String,
    },
    adLang2: {
        type: String,
    },
    gameSet: {
        type: String,
    },
    artisanTool: {
        type: String,
    },
    extraSkill1: {
        type: String,
    },
    extraSkill2: {
        type: String,
    },
    alignment: {
        type: String,
        required: true,
    },
    faith: {
        type: String,
        required: true,
    },
    lifestyle: {
        type: String,
        required: true,
    },
    hair: {
        type: String,
        required: true,
    },
    skin: {
        type: String,
        required: true,
    },
    eyes: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    mWeapon: {
        type: String,
        required: true,
    },
    sWeapon: {
        type: String,
        required: true,
    },
    potions: {
        type: String,
        required: true,
    },
    stuff: {
        type: String,
        required: true,
    },
});

const Player = mongoose.model('Player', playerSchema);

export default Player;
