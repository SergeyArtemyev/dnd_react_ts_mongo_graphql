function initAbility() {
    let checkfortotal: boolean; // Helper variable
    let remainingPoints = '27';
    // Set Default Ability score table
    let races = document.getElementById('races') as HTMLSelectElement;
    let raceBonus = document.getElementsByClassName('race-bonus') as HTMLCollectionOf<HTMLTableDataCellElement>;
    let total = document.getElementsByClassName('total') as HTMLCollectionOf<HTMLInputElement>;
    let input = document.getElementsByClassName('ability-input') as HTMLCollectionOf<HTMLInputElement>;
    let plus = document.getElementsByClassName('plus-icon') as HTMLCollectionOf<HTMLDivElement>;
    let minus = document.getElementsByClassName('minus-icon') as HTMLCollectionOf<HTMLDivElement>;
    if (races.value === 'Human') {
        for (let i = 0; i < raceBonus.length; i++) {
            remainingPoints = '27';

            document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;

            minus[i].style.visibility = 'hidden';

            plus[i].style.visibility = 'visible';
            // plus[i].style.display = "inline-block";

            input[i].value = '8';
            let ability = document.getElementsByClassName('ability');
            if (ability[i]) {
                raceBonus[i].innerHTML = '+1';

                total[i].value = '9';

                (document.getElementsByClassName('modifier')[i] as HTMLInputElement).value = modifier(i);
            }
        }
    } else if (races.value === 'Elf') {
        for (let i = 0; i < raceBonus.length; i++) {
            remainingPoints = '27';

            document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;

            minus[i].style.visibility = 'hidden';

            plus[i].style.visibility = 'visible';
            // plus[i].style.display = "inline-block";

            input[i].value = '8';
            raceBonus[i].innerHTML = '-';

            total[i].value = '8';

            (document.getElementsByClassName('modifier')[i] as HTMLInputElement).value = modifier(i);

            if (raceBonus[i].parentElement!.id === 'dexterity') {
                raceBonus[i].innerHTML = '+2';

                total[i].value = '10';

                (document.getElementsByClassName('modifier')[i] as HTMLInputElement).value = modifier(i);
            }
        }
    } else if (races.value === 'Halfling') {
        for (let i = 0; i < raceBonus.length; i++) {
            remainingPoints = '27';

            document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;

            minus[i].style.visibility = 'hidden';

            plus[i].style.visibility = 'visible';
            // plus[i].style.display = "inline-block";

            input[i].value = '8';
            raceBonus[i].innerHTML = '-';

            total[i].value = '8';

            (document.getElementsByClassName('modifier')[i] as HTMLInputElement).value = modifier(i);

            if (raceBonus[i].parentElement!.id === 'dexterity') {
                raceBonus[i].innerHTML = '+2';

                total[i].value = '10';

                (document.getElementsByClassName('modifier')[i] as HTMLInputElement).value = modifier(i);
            }
        }
    } else {
        for (let i = 0; i < raceBonus.length; i++) {
            remainingPoints = '27';

            document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;

            minus[i].style.visibility = 'hidden';

            plus[i].style.visibility = 'visible';
            // plus[i].style.display = "inline-block";

            input[i].value = '8';
            raceBonus[i].innerHTML = '-';

            total[i].value = '8';

            (document.getElementsByClassName('modifier')[i] as HTMLInputElement).value = modifier(i);

            if (raceBonus[i].parentElement!.id === 'constitution') {
                raceBonus[i].innerHTML = '+2';

                total[i].value = '10';

                (document.getElementsByClassName('modifier')[i] as HTMLInputElement).value = modifier(i);
            }
        }
    }

    document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;
    // Вот тут узнать про накапливание!!!!!!!!!!!!!!!
    let ability = document.getElementsByClassName('ability') as HTMLCollectionOf<HTMLTableRowElement>;
    for (let i = 0; i < ability.length; i++) {
        ability[i].onclick = function (e) {
            let description = document.getElementsByClassName('ability-description')[0];
            if ((e.target as HTMLTableRowElement).parentElement!.id === 'strength') {
                description.innerHTML = `
        <h5>Strength</h5>
        <p>Strength measures bodily power, athletic training, and
          the extent to which you can exert raw physical force.</p>
        `;
            }
            if ((e.target as HTMLTableRowElement).parentElement!.id === 'dexterity') {
                description.innerHTML = `
        <h5>Dexterity</h5>
        <p>Dexterity measures agility, reflexes, and balance.</p>
        `;
            }
            if ((e.target as HTMLTableRowElement).parentElement!.id === 'constitution') {
                description.innerHTML = `
        <h5>Constitution</h5>
        <p>Constitution measures health, stamina, and vital force.
        </p>
        `;
            }
            if ((e.target as HTMLTableRowElement).parentElement!.id === 'intelligence') {
                description.innerHTML = `
        <h5>Intelligence</h5>
        <p>Intelligence measures mental acuity, accuracy of recall,
        and the ability to reason.</p>
        `;
            }
            if ((e.target as HTMLTableRowElement).parentElement!.id === 'wisdom') {
                description.innerHTML = `
        <h5>Wisdom</h5>
        <p>Wisdom reflects how attuned you are to the world around
        you and represents perceptiveness and intuition.
        </p>
        `;
            }
            if ((e.target as HTMLTableRowElement).parentElement!.id === 'charisma') {
                description.innerHTML = `
        <h5>Charisma</h5>
        <p>Charisma measures your ability to interact effectively
        with others. It includes such factors as confidence and
        eloquence, and it can represent a charming or commanding personality.</p>
        `;
            }
            let plusBtn = document.getElementsByClassName('plus')[i];
            let minusBtn = document.getElementsByClassName('minus')[i];
            if ((e.target as HTMLTableRowElement).parentElement! === plusBtn) {
                plusAbility(i);
            }
            if ((e.target as HTMLTableRowElement).parentElement! === minusBtn) {
                minusAbility(i);
            }
        };
    }
    // function for a + button

    function plusAbility(i: number) {
        let input = document.getElementsByClassName('ability-input')[i] as HTMLInputElement;
        let plus = document.getElementsByClassName('plus-icon')[i] as HTMLSpanElement;
        let minus = document.getElementsByClassName('minus-icon')[i] as HTMLSpanElement;
        checkfortotal = true;

        minus.style.visibility = 'visible';
        // convert string to number
        let value = +input.value;
        let points = +remainingPoints;

        value++;
        if (value >= 14) {
            points -= 2;
        } else {
            points--;
        }

        input.value = value.toString();
        remainingPoints = points.toString();
        document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;

        (document.getElementsByClassName('total')[i] as HTMLInputElement).value = totalPoints(i);

        (document.getElementsByClassName('modifier')[i] as HTMLInputElement).value = modifier(i);

        if (value === 15) {
            plus.style.visibility = 'hidden';
        }
        if (points === 1) {
            getInput();
        }
        if (points === 0) {
            for (let j = 0; j < document.getElementsByClassName('plus-icon').length; j++) {
                (document.getElementsByClassName('plus-icon')[j] as HTMLDivElement).style.visibility = 'hidden';
            }
        }
    }
    // Hide plus buttons
    function getInput() {
        let input = document.getElementsByClassName('ability-input') as HTMLCollectionOf<HTMLInputElement>;
        let plus = document.getElementsByClassName('plus-icon') as HTMLCollectionOf<HTMLDivElement>;
        // convert string to number
        let value: number;
        for (let i = 0; i < input.length; i++) {
            value = +input[i].value;
            if (value >= 13) {
                plus[i].style.visibility = 'hidden';
            }
        }
    }
    // Get total points

    function totalPoints(i: number) {
        let totalElementValue = (document.getElementsByClassName('total')[i] as HTMLInputElement).value;
        let total = parseInt(totalElementValue);

        if (checkfortotal === true) {
            total++;
        } else {
            total--;
        }

        return total.toString();
    }

    // Get modifiers

    function modifier(i: number) {
        let totalElementValue = (document.getElementsByClassName('total')[i] as HTMLInputElement).value;
        let modifierElementValue = (document.getElementsByClassName('modifier')[i] as HTMLInputElement).value;

        let total = parseInt(totalElementValue);
        let modifier = parseInt(modifierElementValue);
        if (total === 8 || total === 9) {
            modifier = -1;
        } else if (total === 10 || total === 11) {
            modifier = +0;
        } else if (total === 12 || total === 13) {
            modifier = +1;
        } else if (total === 14 || total === 15) {
            modifier = +2;
        } else if (total === 16 || total === 17) {
            modifier = +3;
        } else if (total === 18 || total === 19) {
            modifier = +4;
        } else if (total === 20 || total === 21) {
            modifier = +5;
        }
        return modifier.toString();
    }

    // Function for - button

    function minusAbility(i: number) {
        let input = document.getElementsByClassName('ability-input')[i] as HTMLInputElement;
        let plus = document.getElementsByClassName('plus-icon')[i] as HTMLDivElement;
        let minus = document.getElementsByClassName('minus-icon')[i] as HTMLDivElement;
        checkfortotal = false;

        plus.style.visibility = 'visible';
        // convert string to number
        let value = +input.value;
        let points = +remainingPoints;

        value--;

        if (value > 12) {
            points += 2;
        } else {
            points++;
        }

        input.value = value.toString();

        if (points > 0) {
            for (let j = 0; j < document.getElementsByClassName('plus-icon').length; j++) {
                if ((document.getElementsByClassName('ability-input')[j] as HTMLInputElement).value === '15') {
                    (document.getElementsByClassName('plus-icon')[j] as HTMLDivElement).style.visibility = 'hidden';
                } else {
                    (document.getElementsByClassName('plus-icon')[j] as HTMLDivElement).style.visibility = 'visible';
                }
            }
            if (points === 1) {
                getInput();
            }
        }

        remainingPoints = points.toString();
        document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;

        (document.getElementsByClassName('total')[i] as HTMLInputElement).value = totalPoints(i);

        (document.getElementsByClassName('modifier')[i] as HTMLInputElement).value = modifier(i);

        if (value <= 8) {
            minus.style.visibility = 'hidden';
        }
    }
}

export default initAbility;
