const classes = [
    {
        id: 'Fighter',
        'class features': {
            hitDie: 'd10',
            primAbil: 'Strength or Dexterity',
            saves: 'Strength + Constitution',
        },
        description: {
            info: 'A master of martial combat, skilled with a variety of weapons and armor',
            hitDice: '1d10 per fighter level',
            hitAtFirstLvl: '10 + your Constitution modifier',
            hitAtHigherLvl: '1d10 (or 6) + your Constitution modifier per fighter level after 1st',
            profArmor: 'All armor, shields',
            profWeapons: 'Simple weapons, martial weapons',
            profTool: 'None',
            savingThrow: 'Strength, Constitution',
            skills: 'Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival',
            fightStyle:
                'You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.',
            secondWind:
                'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.',
        },
    },
    {
        id: 'Ranger',
        'class features': {
            hitDie: 'd10',
            primAbil: 'Dexterity or Wisdom',
            saves: 'Strength + Dexterity',
        },
        description: {
            info: 'A warrior who combats threats on the edges of civilization',
            hitDice: '1d10 per ranger level',
            hitAtFirstLvl: '10 + your Constitution modifier',
            hitAtHigherLvl: '1d10 (or 6) + your Constitution modifier per ranger level after 1st',
            profArmor: 'Light armor, medium armor, shields',
            profWeapons: 'Simple weapons, martial weapons',
            profTool: 'None',
            savingThrow: 'Strength, Dexterity',
            skills: 'Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival',
            favoredEnemy:
                'Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.',
            naturalExplorer:
                'You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions.',
        },
    },
    {
        id: 'Rogue',
        'class features': {
            hitDie: 'd8',
            primAbil: 'Dexterity',
            saves: 'Dexterity & Intelligence',
        },
        description: {
            info: 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies',
            hitDice: '1d8 per rogue level',
            hitAtFirstLvl: '8 + your Constitution modifier',
            hitAtHigherLvl: '1d8 (or 5) + your Constitution modifier per rogue level after 1st',
            profArmor: 'Light armor',
            profWeapons: 'Simple weapons, hand crossbows, longswords, rapiers, shortswords',
            profTool: 'Thieves’ tools',
            savingThrow: 'Dexterity, Intelligence',
            skills: 'Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth',
            expertise:
                'At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.',
            sneakAttack:
                'Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll. The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.',
            thiefCant:
                'During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.',
        },
    },
    {
        id: 'Sorcerer',
        'class features': {
            hitDie: 'd6',
            primAbil: 'Charisma',
            saves: 'Constitution & Charisma',
        },
        description: {
            info: 'A spellcaster who draws on inherent magic from a gift or bloodline',
            hitDice: '1d6 per sorcerer level',
            hitAtFirstLvl: '6 + your Constitution modifier',
            hitAtHigherLvl: '1d6 (or 4) + your Constitution modifier per sorcerer level after 1st',
            profArmor: 'None',
            profWeapons: 'Daggers, darts, slings, quarterstaffs, light crossbows',
            profTool: 'None',
            savingThrow: 'Constitution, Charisma',
            skills: 'Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion',
            spellInfo:
                'An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.',
            cantrips:
                'At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.',
            spellSlots:
                'The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.',
            spellSaveDc: '8 + your proficiency bonus + your Charisma modifier',
            spellAttackMod: 'your proficiency bonus + your Charisma modifier',
        },
    },
];

export default classes;
