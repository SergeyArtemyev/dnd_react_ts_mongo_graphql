import { gql } from '@apollo/client';

export const getRaces = gql`
    query GetRaces {
        getRaces {
            ... on ErrorResult {
                message
            }
            ... on RacesArray {
                races {
                    id
                    racialTraits {
                        abscore
                        skills
                    }
                    description {
                        info
                        abScInc
                        age
                        alignment
                        size
                        speed
                        languages
                    }
                }
            }
        }
    }
`;

export const getClasses = gql`
    query GetClasses {
        getClasses {
            ... on ErrorResult {
                message
            }
            ... on ClassesArray {
                classes {
                    id
                    classFeatures {
                        hitDie
                        primAbil
                        saves
                    }
                    description {
                        info
                        hitDice
                        hitAtFirstLvl
                        hitAtHigherLvl
                        profArmor
                        profWeapons
                        profTool
                        savingThrow
                        skills
                        favoredEnemy
                        fightingStyle
                        secondWind
                        naturalExplorer
                        expertise
                        sneakAttack
                        thiefCant
                        spellInfo
                        cantrips
                        spellSlots
                        spellSaveDc
                        spellAttackMod
                    }
                }
            }
        }
    }
`;

export const getBackground = gql`
    query GetBackground {
        getBackground {
            ... on ErrorResult {
                message
            }
            ... on BackgroundArray {
                background {
                    id
                    description {
                        info
                        skillProff
                        backFeature
                        featureInfo
                        toolProff
                        vehicleProff
                    }
                }
            }
        }
    }
`;

export const getPlayer = gql`
    query GetPlayer {
        getPlayer {
            ... on ErrorResult {
                message
            }
            ... on PlayerArray {
                player {
                    _id
                    race
                    extraLanguage
                    cantrip
                    toolProff
                    playerClass
                    fighterSkill1
                    fighterSkill2
                    fightingStyle
                    rangerSkill1
                    rangerSkill2
                    rangerSkill3
                    favoredEnemy
                    language
                    naturalExplorer
                    rogueSkill1
                    rogueSkill2
                    rogueSkill3
                    rogueSkill4
                    expertise1
                    expertise2
                    sorcererSkill
                    str
                    strMod
                    strengthPoints
                    dex
                    dexMod
                    dexterityPoints
                    con
                    conMod
                    constitutionPoints
                    int
                    intMod
                    intelligencePoints
                    wis
                    wisMod
                    wisdomPoints
                    char
                    charMod
                    charismaPoints
                    avatar
                    charName
                    background
                    adLang
                    adLang1
                    adLang2
                    gameSet
                    artisanTool
                    extraSkill1
                    extraSkill2
                    alignment
                    faith
                    lifestyle
                    hair
                    skin
                    eyes
                    height
                    weight
                    age
                    gender
                    mWeapon
                    sWeapon
                    potions
                    stuff
                }
            }
        }
    }
`;
