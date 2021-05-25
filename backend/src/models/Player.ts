import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    race: {
        type: String,
        required: true,
    },
    playerClass: {
        type: String,
        required: true,
    },
    str: {
        type: Number,
        required: true,
    },
    strMod: {
        type: Number,
        required: true,
    },
    strengthPoints: {
        type: Number,
        required: true,
    },
    dex: {
        type: Number,
        required: true,
    },
    dexMod: {
        type: Number,
        required: true,
    },
    dexterityPoints: {
        type: Number,
        required: true,
    },
    con: {
        type: Number,
        required: true,
    },
    conMod: {
        type: Number,
        required: true,
    },
    constitutionPoints: {
        type: Number,
        required: true,
    },
    int: {
        type: Number,
        required: true,
    },
    intMod: {
        type: Number,
        required: true,
    },
    intelligencePoints: {
        type: Number,
        required: true,
    },
    wis: {
        type: Number,
        required: true,
    },
    wisMod: {
        type: Number,
        required: true,
    },
    wisdomPoints: {
        type: Number,
        required: true,
    },
    char: {
        type: Number,
        required: true,
    },
    charMod: {
        type: Number,
        required: true,
    },
    charismaPoints: {
        type: Number,
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
        type: Number,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
});

const Player = mongoose.model('Player', playerSchema);

export default Player;
