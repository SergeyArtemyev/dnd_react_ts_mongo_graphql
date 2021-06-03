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

    type BackgroundDescription {
        info: String!
        skillProff: [String!]
        backFeature: String!
        featureInfo: String!
        toolProf: String
        vehicleProff: String
    }

    input PlayerInput {
        race: String!
        playerClass: String!
        str: Int!
        strMod: Int!
        strengthPoints: Int!
        dex: Int!
        dexMod: Int!
        dexterityPoints: Int!
        con: Int!
        conMod: Int!
        constitutionPoints: Int!
        int: Int!
        intMod: Int!
        intelligencePoints: Int!
        wis: Int!
        wisMod: Int!
        wisdomPoints: Int!
        char: Int!
        charMod: Int!
        charismaPoints: Int!
        avatar: String!
        charName: String!
        background: String!
        alignment: String!
        faith: String!
        lifestyle: String!
        hair: String!
        skin: String!
        eyes: String!
        height: Int!
        width: Int!
        age: Int!
        gender: String!
    }

    type Player {
        race: String!
        playerClass: String!
        str: Int!
        strMod: Int!
        strengthPoints: Int!
        dex: Int!
        dexMod: Int!
        dexterityPoints: Int!
        con: Int!
        conMod: Int!
        constitutionPoints: Int!
        int: Int!
        intMod: Int!
        intelligencePoints: Int!
        wis: Int!
        wisMod: Int!
        wisdomPoints: Int!
        char: Int!
        charMod: Int!
        charismaPoints: Int!
        avatar: String!
        charName: String!
        background: String!
        alignment: String!
        faith: String!
        lifestyle: String!
        hair: String!
        skin: String!
        eyes: String!
        height: Int!
        width: Int!
        age: Int!
        gender: String!
    }

    type Query {
        getRaces: RacesResult!
        getClasses: ClassesResult!
        getBackground: [Background]
    }

    type Mutation {
        createCharacter(input: PlayerInput): Player
    }
`;

export default typeDefs;
