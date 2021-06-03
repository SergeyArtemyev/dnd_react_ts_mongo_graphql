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
