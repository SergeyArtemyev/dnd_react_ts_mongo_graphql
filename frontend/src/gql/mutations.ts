import { gql } from '@apollo/client';

export const addPlayer = gql`
    mutation CreateCharacter($input: PlayerInput) {
        createCharacter(input: $input) {
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
`;

export const deletePlayer = gql`
    mutation DeletePlayer($id: ID!) {
        deletePlayer(id: $id) {
            ... on ErrorResult {
                message
            }
            ... on DeleteResult {
                result
            }
        }
    }
`;
