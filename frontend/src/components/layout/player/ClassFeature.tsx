import { FC } from 'react';
import { useDescription } from '../../../hooks/useDescription';
import { useProfSkills } from '../../../hooks/useProfSkills';
import { PlayerChildrenProps } from '../../../screens/Player';
import { Player } from '../../../store/reducers/playerReducer';
import SkillProff from './SkillProff';

const ClassFeature: FC<PlayerChildrenProps<Player>> = ({ playerData }) => {
    // const { playerClass } = playerData;
    // const { hitAtFirstLvl } = useDescription('class', playerClass!);
    // const proffSkills = useProfSkills(playerData);
    // console.log(proffSkills);
    //   useEffect(() => {
    //     if (playerClass !== undefined) {
    //       switch (playerClass) {
    //         case "Fighter":
    //           data.array.push(...data.array, fighterSkill1, fighterSkill2);
    //           return setData({ ...data });
    //         case "Ranger":
    //           data.array.push(...data.array, rangerSkill1, rangerSkill2, rangerSkill3);
    //           return setData({ ...data });
    //         case "Rogue":
    //           data.array.push(...data.array, rogueSkill1, rogueSkill2, rogueSkill3, rogueSkill4);
    //           return setData({ ...data });
    //         case "Sorcerer":
    //           data.array.push(...data.array, sorcererSkill1, sorcererSkill2);
    //           return setData({ ...data });
    //         default:
    //           return console.log("error");
    //       }
    //     }

    //     // eslint-disable-next-line
    //   }, [playerClass]);

    //   let classFeatures;
    //   if (playerClass === "Fighter") {
    //     classFeatures = (
    //       <>
    //         <h3>Class Features</h3>
    //         <p>
    //           <span className="main-color underline">Hit Points at 1st Level:</span> 10 + your
    //           Constitution modifier
    //         </p>
    //         <p className="main-color underline">Proficiency</p>
    //         <ul className="browser-default">
    //           <li className="profskills">{fighterSkill1}</li>
    //           <li className="profskills">{fighterSkill2}</li>
    //         </ul>
    //         <p className="main-color underline">Fighting style</p>
    //         <p>
    //           You adopt a particular style of fighting as your specialty. Choose one of the following
    //           options. You can’t take a Fighting Style option more than once, even if you later get to
    //           choose again.
    //         </p>
    //         <ul className="browser-default">
    //           <li>{fighterStyle}</li>
    //         </ul>
    //         <p className="main-color underline">Second wind</p>
    //         <p>
    //           You have a limited well of stamina that you can draw on to protect yourself from harm. On
    //           your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter
    //           level. Once you use this feature, you must finish a short or long rest before you can use
    //           it again.
    //         </p>
    //       </>
    //     );
    //   } else if (playerClass === "Ranger") {
    //     classFeatures = (
    //       <>
    //         <h3>Class Features</h3>
    //         <p>
    //           <span className="main-color underline">Hit Points at 1st Level:</span> 8 + your
    //           Constitution modifier
    //         </p>
    //         <p className="main-color underline">Proficiency</p>
    //         <ul className="browser-default">
    //           <li className="profskills">{rangerSkill1}</li>
    //           <li className="profskills">{rangerSkill2}</li>
    //           <li className="profskills">{rangerSkill3}</li>
    //         </ul>
    //         <p className="main-color underline">Favored Enemy</p>
    //         <p>
    //           Beginning at 1st level, you have significant experience studying, tracking, hunting, and
    //           even talking to a certain type of enemy.
    //         </p>
    //         <ul className="browser-default">
    //           <li>{favoredEnemy}</li>
    //         </ul>
    //         <p className="main-color underline">Language</p>
    //         <ul className="browser-default">
    //           <li>{rangerLang}</li>
    //         </ul>
    //         <p className="main-color underline">Natural Explorer</p>
    //         <p>
    //           You are particularly familiar with one type of natural environment and are adept at
    //           traveling and surviving in such regions.
    //         </p>
    //         <ul className="browser-default">
    //           <li>{naturalExplorer}</li>
    //         </ul>
    //       </>
    //     );
    //   } else if (playerClass === "Rogue") {
    //     classFeatures = (
    //       <>
    //         <h3>Class Features</h3>
    //         <p>
    //           <span className="main-color underline">Hit Points at 1st Level:</span> 8 + your
    //           Constitution modifier
    //         </p>
    //         <p className="main-color underline">Proficiency</p>
    //         <ul className="browser-default">
    //           <li className="profskills">{rogueSkill1}</li>
    //           <li className="profskills">{rogueSkill2}</li>
    //           <li className="profskills">{rogueSkill3}</li>
    //           <li className="profskills">{rogueSkill4}</li>
    //         </ul>
    //         <p className="main-color underline">Expertise</p>
    //         <p>
    //           Your proficiency bonus is doubled for any ability check you make that uses either of the
    //           chosen proficiencies.
    //         </p>
    //         <ul className="browser-default">
    //           <li>{expertise1}</li>
    //           <li>{expertise2}</li>
    //         </ul>
    //         <p className="main-color underline">Sneak Attack</p>
    //         <p>
    //           Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction.
    //           Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if
    //           you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.
    //         </p>
    //         <p className="main-color underline">Thieve's Cant</p>
    //         <p>
    //           During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and
    //           code that allows you to hide messages in seemingly normal conversation. Only another
    //           creature that knows thieves’ cant understands such messages. It takes four times longer to
    //           convey such a message than it does to speak the same idea plainly.
    //         </p>
    //       </>
    //     );
    //   }
    //   if (playerClass === "Sorcerer") {
    //     classFeatures = (
    //       <>
    //         <h3>Class Features</h3>
    //         <p>
    //           <span className="main-color underline">Hit Points at 1st Level:</span> 6 + your
    //           Constitution modifier
    //         </p>
    //         <p className="main-color underline">Proficiency</p>
    //         <ul className="browser-default">
    //           <li className="profskills">{sorcererSkill1}</li>
    //           <li className="profskills">{sorcererSkill2}</li>
    //         </ul>
    //         <p className="main-color underline">Spellcasting</p>
    //         <p>
    //           An event in your past, or in the life of a parent or ancestor, left an indelible mark on
    //           you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your
    //           spells.
    //         </p>
    //         <p className="main-color underline">Cantrips</p>
    //         <p>
    //           At 1st level, you know four cantrips of your choice from the sorcerer spell list. You
    //           learn additional sorcerer cantrips of your choice at higher levels, as shown in the
    //           Cantrips Known column of the Sorcerer table.
    //         </p>
    //         <p className="main-color underline">Spell Slots</p>
    //         <p>
    //           The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st
    //           level and higher. To cast one of these sorcerer spells, you must expend a slot of the
    //           spell’s level or higher. You regain all expended spell slots when you finish a long rest.
    //         </p>
    //         <p>Spell save DC = 8 + your proficiency bonus + your Charisma modifier</p>
    //         <p>Spell attack modifier = your proficiency bonus + your Charisma modifier</p>
    //       </>
    //     );
    //   }

    return (
        <>
            <h3>Class Features</h3>
            <p>{/* <span className='main-color underline'>Hit Points at 1st Level:</span> {hitAtFirstLvl} */}</p>
            {/* <SkillProff skills={proffSkills} /> */}
        </>
    );
};

export default ClassFeature;
