import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type ErrorResult {
        message: String!
    }

    type Race {
        _id: ID!
        id: String!
        racialTraits: RacialTraits!
        description: RaceDescription!
    }

    type RacesArray {
        races: [Race!]
    }
    union RacesResult = RacesArray | ErrorResult

    type RacialTraits {
        abscore: String!
        skills: [String]
    }

    type RaceDescription {
        info: String!
        abScInc: String!
        age: String!
        alignment: String!
        size: String!
        speed: String!
        languages: String!
    }

    type Class {
        _id: ID!
        id: String!
        classFeatures: ClassFeatures!
        description: ClassDescription!
    }

    type ClassesArray {
        classes: [Class!]
    }

    union ClassesResult = ClassesArray | ErrorResult

    type ClassFeatures {
        hitDie: String!
        primAbil: String!
        saves: String!
    }

    type ClassDescription {
        info: String!
        hitDice: String!
        hitAtFirstLvl: String!
        hitAtHigherLvl: String!
        profArmor: String!
        profWeapons: String!
        profTool: String!
        savingThrow: String!
        skills: String!
        favoredEnemy: String
        fightingStyle: String
        secondWind: String
        naturalExplorer: String
        expertise: String
        sneakAttack: String
        thiefCant: String
        spellInfo: String
        cantrips: String
        spellSlots: String
        spellSaveDc: String
        spellAttackMod: String
    }

    type Background {
        _id: ID!
        id: String!
        description: BackgroundDescription!
    }

    type BackgroundArray {
        background: [Background!]
    }

    union BackgroundResult = BackgroundArray | ErrorResult

    type BackgroundDescription {
        info: String!
        skillProff: [String!]
        backFeature: String!
        featureInfo: String!
        toolProff: String
        vehicleProff: String
    }

    input PlayerInput {
        race: String!
        extraLanguage: String
        cantrip: String
        toolProff: String
        playerClass: String!
        fighterSkill1: String
        fighterSkill2: String
        fightingStyle: String
        rangerSkill1: String
        rangerSkill2: String
        rangerSkill3: String
        favoredEnemy: String
        language: String
        naturalExplorer: String
        rogueSkill1: String
        rogueSkill2: String
        rogueSkill3: String
        rogueSkill4: String
        expertise1: String
        expertise2: String
        sorcererSkill: String
        str: String!
        strMod: String!
        strengthPoints: String!
        dex: String!
        dexMod: String!
        dexterityPoints: String!
        con: String!
        conMod: String!
        constitutionPoints: String!
        int: String!
        intMod: String!
        intelligencePoints: String!
        wis: String!
        wisMod: String!
        wisdomPoints: String!
        char: String!
        charMod: String!
        charismaPoints: String!
        avatar: String!
        charName: String!
        background: String!
        adLang: String
        adLang1: String
        adLang2: String
        gameSet: String
        artisanTool: String
        extraSkill1: String
        extraSkill2: String
        alignment: String!
        faith: String!
        lifestyle: String!
        hair: String!
        skin: String!
        eyes: String!
        height: String!
        weight: String!
        age: String!
        gender: String!
        mWeapon: String!
        sWeapon: String!
        potions: String!
        stuff: String!
    }

    type Player {
        race: String!
        extraLanguage: String
        cantrip: String
        toolProff: String
        playerClass: String!
        fighterSkill1: String
        fighterSkill2: String
        fightingStyle: String
        rangerSkill1: String
        rangerSkill2: String
        rangerSkill3: String
        favoredEnemy: String
        language: String
        naturalExplorer: String
        rogueSkill1: String
        rogueSkill2: String
        rogueSkill3: String
        rogueSkill4: String
        expertise1: String
        expertise2: String
        sorcererSkill: String
        str: String!
        strMod: String!
        strengthPoints: String!
        dex: String!
        dexMod: String!
        dexterityPoints: String!
        con: String!
        conMod: String!
        constitutionPoints: String!
        int: String!
        intMod: String!
        intelligencePoints: String!
        wis: String!
        wisMod: String!
        wisdomPoints: String!
        char: String!
        charMod: String!
        charismaPoints: String!
        avatar: String!
        charName: String!
        background: String!
        adLang: String
        adLang1: String
        adLang2: String
        gameSet: String
        artisanTool: String
        extraSkill1: String
        extraSkill2: String
        alignment: String!
        faith: String!
        lifestyle: String!
        hair: String!
        skin: String!
        eyes: String!
        height: String!
        weight: String!
        age: String!
        gender: String!
        mWeapon: String!
        sWeapon: String!
        potions: String!
        stuff: String!
    }

    type Query {
        getRaces: RacesResult!
        getClasses: ClassesResult!
        getBackground: BackgroundResult!
    }

    type Mutation {
        createCharacter(input: PlayerInput): Player!
    }
`;

export default typeDefs;
