const races = [
    {
        id: 'Human',
        'racial traits': {
            abscore: '+1 to All Ability Scores',
        },
        description: {
            info: 'Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.',
            abScInc: 'Your ability scores each increase by 1.',
            age: 'Humans reach adulthood in their late teens and live less than a century.',
            alignment:
                'Humans tend toward no particular alignment. The best and the worst are found among them.',
            size: 'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
            speed: 'Your base walking speed is 30 feet.',
            languages:
                'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
        },
    },
    {
        id: 'Elf',
        'racial traits': {
            abscore: '+2 Dexterity',
            skills: ['Darkvision', 'Keen Senses', 'Fey Ancestry', 'Trance'],
        },
        description: {
            info: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.',
            abScInc: 'Your Dexterity score increases by 2.',
            age: 'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
            alignment:
                'Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.',
            size: 'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
            speed: 'Your base walking speed is 30 feet.',
            languages:
                'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
        },
    },
    {
        id: 'Halfling',
        'racial traits': {
            abscore: '+2 Dexterity',
            skills: ['Lucky', 'Brave', 'Halfling Nimbenes'],
        },
        description: {
            info: 'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.',
            abScInc: 'Your Dexterity score increases by 2.',
            age: 'A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.',
            alignment:
                'Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.',
            size: 'Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.',
            speed: 'Your base walking speed is 25 feet.',
            languages:
                'You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.',
        },
    },
    {
        id: 'Dwarf',
        'racial traits': {
            abscore: '+2 Constitution',
            skills: ['Darkvision', 'Dwarven Resilience', 'Dwarven Combat Training', 'Stonecunning'],
        },
        description: {
            info: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.',
            abScInc: 'Your Constitution score increases by 2.',
            age: 'Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.',
            alignment:
                'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.',
            size: 'Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.',
            speed: 'Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.',
            languages:
                'You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.',
        },
    },
];

export default races;
