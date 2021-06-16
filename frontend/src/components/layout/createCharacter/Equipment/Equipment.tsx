import React, { useEffect, useCallback } from 'react';
import initEquipment from '../../../../utils/initEqupment';
import EqCheckbox from './EqCheckbox';

const Equipment = React.memo(() => {
    const initEq = useCallback(initEquipment, []);

    useEffect(() => {
        initEq();
    }, [initEq]);

    return (
        <>
            <h4 className='center-align'>Choose Stating Equipment</h4>
            <div className='ch-equipment'>
                <div className='main-weapon'>
                    <h5 className='center-align'>Main Weapon</h5>
                    <div style={{ textAlign: 'left', width: '300px', margin: '0 auto' }}>
                        <EqCheckbox name='mWeapon' id='sword' value='Sword' />
                        <br />

                        <EqCheckbox name='mWeapon' id='crossbow' value='Crossbow' />
                        <br />
                        <EqCheckbox name='mWeapon' id='wand' value='Magic Wand' />

                        <br />
                        <EqCheckbox name='mWeapon' id='dagger' value='Dagger' />
                    </div>
                </div>
                <div className='secondary-weapon'>
                    <h5 className='center-align'>Secondary Weapon</h5>
                    <div style={{ textAlign: 'left', width: '300px', margin: '0 auto' }}>
                        <EqCheckbox name='sWeapon' id='twohanded-sw' value='Two-Handed Sword' />

                        <br />
                        <EqCheckbox name='sWeapon' id='bow' value='Bow' />

                        <br />
                        <EqCheckbox name='sWeapon' id='s-wand' value='Magic Wand' />

                        <br />
                        <EqCheckbox name='sWeapon' id='s-dagger' value='Dagger' />
                    </div>
                </div>
                <div className='potions'>
                    <h5 className='center-align'>Potions</h5>
                    <div style={{ textAlign: 'left', width: '300px', margin: '0 auto' }}>
                        <EqCheckbox name='potions' id='heal' value='2 Heal Potions' />

                        <br />
                        <EqCheckbox name='potions' id='mana' value='2 Mana Potions' />

                        <br />
                        <EqCheckbox name='potions' id='poison' value='2 poison Potions' />

                        <br />
                        <EqCheckbox name='potions' id='endurance' value='2 Endurance Potions' />
                    </div>
                </div>
                <div className='other-stuff'>
                    <h5 className='center-align'>Other Stuff</h5>
                    <div style={{ textAlign: 'left', width: '300px', margin: '0 auto' }}>
                        <EqCheckbox name='stuff' id='gold' value='20 Gold' />

                        <br />
                        <EqCheckbox name='stuff' id='lockpick' value='5 Lockpick' />

                        <br />
                        <EqCheckbox name='stuff' id='arrows' value='15 Arrows' />

                        <br />
                        <EqCheckbox name='stuff' id='smithTools' value="Smoth's Tools" />
                    </div>
                </div>
            </div>
        </>
    );
});

export default Equipment;
