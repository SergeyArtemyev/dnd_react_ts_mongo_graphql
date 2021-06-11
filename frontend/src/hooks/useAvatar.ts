import React, { useState } from 'react';
//race
import human from '../../src/img/form_img/human.jpg';
import elf from '../../src/img/form_img/elf.jpg';
import halfling from '../../src/img/form_img/halfling.jpg';
import dwarf from '../../src/img/form_img/dwarf.jpg';
//class
import fighter from '../../src/img/form_img/fighter.jpeg';
import ranger from '../../src/img/form_img/ranger.jpeg';
import rogue from '../../src/img/form_img/rogue.jpeg';
import sorcerer from '../../src/img/form_img/sorcerer.jpeg';

export const useAvatar = () => {
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');

    const onChangeAvatar = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();

        setName(e.target.value);

        switch (e.target.value) {
            case 'Human':
                setAvatar(human);
                break;
            case 'Elf':
                setAvatar(elf);
                break;
            case 'Halfling':
                setAvatar(halfling);
                break;
            case 'Dwarf':
                setAvatar(dwarf);
                break;
            case 'Fighter':
                setAvatar(fighter);
                break;
            case 'Ranger':
                setAvatar(ranger);
                break;
            case 'Rogue':
                setAvatar(rogue);
                break;
            case 'Sorcerer':
                setAvatar(sorcerer);
                break;
            default:
                setAvatar('');
        }
    };

    return { avatar, name, onChangeAvatar };
};
