function initAbility() {
    let checkfortotal; // Helper variable
    let remainingPoints = 27;
    // Set Default Ability score table
    let races = document.getElementById('race');
    let raceBonus = document.getElementsByClassName('race-bonus');
    let total = document.getElementsByClassName('total');
    let input = document.getElementsByClassName('ability-input');
    let plus = document.getElementsByClassName('plus-icon');
    let minus = document.getElementsByClassName('minus-icon');

    if (races.value === 'Human') {
        for (let i = 0; i < raceBonus.length; i++) {
            remainingPoints = 27;

            document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;

            minus[i].style.visibility = 'hidden';

            plus[i].style.visibility = 'visible';
            // plus[i].style.display = "inline-block";

            input[i].value = '8';
            let ability = document.getElementsByClassName('ability');
            if (ability[i]) {
                raceBonus[i].innerHTML = '+1';

                total[i].value = '9';

                document.getElementsByClassName('modifier')[i].value = modifier(i);
            }
        }
    } else if (races.value === 'Elf') {
        for (let i = 0; i < raceBonus.length; i++) {
            remainingPoints = 27;

            document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;

            minus[i].style.visibility = 'hidden';

            plus[i].style.visibility = 'visible';
            // plus[i].style.display = "inline-block";

            input[i].value = '8';
            raceBonus[i].innerHTML = '-';

            total[i].value = '8';

            document.getElementsByClassName('modifier')[i].value = modifier(i);

            if (raceBonus[i].parentElement.id === 'dexterity') {
                raceBonus[i].innerHTML = '+2';

                total[i].value = '10';

                document.getElementsByClassName('modifier')[i].value = modifier(i);
            }
        }
    } else if (races.value === 'Halfling') {
        for (let i = 0; i < raceBonus.length; i++) {
            remainingPoints = 27;

            document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;

            minus[i].style.visibility = 'hidden';

            plus[i].style.visibility = 'visible';
            // plus[i].style.display = "inline-block";

            input[i].value = '8';
            raceBonus[i].innerHTML = '-';

            total[i].value = '8';

            document.getElementsByClassName('modifier')[i].value = modifier(i);

            if (raceBonus[i].parentElement.id === 'dexterity') {
                raceBonus[i].innerHTML = '+2';

                total[i].value = '10';

                document.getElementsByClassName('modifier')[i].value = modifier(i);
            }
        }
    } else {
        for (let i = 0; i < raceBonus.length; i++) {
            remainingPoints = 27;

            document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;

            minus[i].style.visibility = 'hidden';

            plus[i].style.visibility = 'visible';
            // plus[i].style.display = "inline-block";

            input[i].value = '8';
            raceBonus[i].innerHTML = '-';

            total[i].value = '8';

            document.getElementsByClassName('modifier')[i].value = modifier(i);

            if (raceBonus[i].parentElement.id === 'constitution') {
                raceBonus[i].innerHTML = '+2';

                total[i].value = '10';

                document.getElementsByClassName('modifier')[i].value = modifier(i);
            }
        }
    }

    document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;
    // Вот тут узнать про накапливание!!!!!!!!!!!!!!!
    let ability = document.getElementsByClassName('ability');
    for (let i = 0; i < ability.length; i++) {
        ability[i].onclick = function (e) {
            let description = document.getElementsByClassName('ability-description')[0];
            if (e.target.parentElement.id === 'strength') {
                description.innerHTML = `
        <h5>Strength</h5>
        <p>Strength measures bodily power, athletic training, and
          the extent to which you can exert raw physical force.</p>
        `;
            }
            if (e.target.parentElement.id === 'dexterity') {
                description.innerHTML = `
        <h5>Dexterity</h5>
        <p>Dexterity measures agility, reflexes, and balance.</p>
        `;
            }
            if (e.target.parentElement.id === 'constitution') {
                description.innerHTML = `
        <h5>Constitution</h5>
        <p>Constitution measures health, stamina, and vital force.
        </p>
        `;
            }
            if (e.target.parentElement.id === 'intelligence') {
                description.innerHTML = `
        <h5>Intelligence</h5>
        <p>Intelligence measures mental acuity, accuracy of recall,
        and the ability to reason.</p>
        `;
            }
            if (e.target.parentElement.id === 'wisdom') {
                description.innerHTML = `
        <h5>Wisdom</h5>
        <p>Wisdom reflects how attuned you are to the world around
        you and represents perceptiveness and intuition.
        </p>
        `;
            }
            if (e.target.parentElement.id === 'charisma') {
                description.innerHTML = `
        <h5>Charisma</h5>
        <p>Charisma measures your ability to interact effectively
        with others. It includes such factors as confidence and
        eloquence, and it can represent a charming or commanding personality.</p>
        `;
            }
            let plusBtn = document.getElementsByClassName('plus')[i];
            let minusBtn = document.getElementsByClassName('minus')[i];
            if (e.target.parentElement === plusBtn) {
                plusAbility(i);
            }
            if (e.target.parentElement === minusBtn) {
                minusAbility(i);
            }
        };
    }
    // function for a + button

    function plusAbility(i) {
        let input = document.getElementsByClassName('ability-input')[i];
        let plus = document.getElementsByClassName('plus-icon')[i];
        let minus = document.getElementsByClassName('minus-icon')[i];
        checkfortotal = true;

        minus.style.visibility = 'visible';

        input.value++;

        if (input.value >= 14) {
            remainingPoints -= 2;
        } else {
            remainingPoints--;
        }

        document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;

        document.getElementsByClassName('total')[i].value = totalPoints(i);

        document.getElementsByClassName('modifier')[i].value = modifier(i);

        if (input.value === '15') {
            plus.style.visibility = 'hidden';
        }
        if (remainingPoints === 1) {
            getInput();
        }
        if (remainingPoints === 0) {
            for (let j = 0; j < document.getElementsByClassName('plus-icon').length; j++) {
                document.getElementsByClassName('plus-icon')[j].style.visibility = 'hidden';
            }
        }
    }
    // Hide plus buttons
    function getInput() {
        let input = document.getElementsByClassName('ability-input');
        let plus = document.getElementsByClassName('plus-icon');
        for (let i = 0; i < input.length; i++) {
            if (input[i].value >= 13) {
                plus[i].style.visibility = 'hidden';
            }
        }
    }
    // Get total points

    function totalPoints(i) {
        let total = document.getElementsByClassName('total')[i].value;
        total = parseInt(total);

        if (checkfortotal === true) {
            total++;
        } else {
            total--;
        }

        return total;
    }

    // Get modifiers

    function modifier(i) {
        let total = document.getElementsByClassName('total')[i].value;

        let modifier = document.getElementsByClassName('modifier')[i].value;
        total = parseInt(total);
        modifier = parseInt(modifier);
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
        return modifier;
    }

    // Function for - button

    function minusAbility(i) {
        let input = document.getElementsByClassName('ability-input')[i];
        let plus = document.getElementsByClassName('plus-icon')[i];
        let minus = document.getElementsByClassName('minus-icon')[i];
        checkfortotal = false;

        plus.style.visibility = 'visible';

        input.value--;

        if (input.value > 12) {
            remainingPoints += 2;
        } else {
            remainingPoints++;
        }

        if (remainingPoints > 0) {
            for (let j = 0; j < document.getElementsByClassName('plus-icon').length; j++) {
                if (document.getElementsByClassName('ability-input')[j].value === '15') {
                    document.getElementsByClassName('plus-icon')[j].style.visibility = 'hidden';
                } else {
                    document.getElementsByClassName('plus-icon')[j].style.visibility = 'visible';
                }
            }
            if (remainingPoints === 1) {
                getInput();
            }
        }

        document.getElementsByClassName('remaining-points')[0].innerHTML = remainingPoints;

        document.getElementsByClassName('total')[i].value = totalPoints(i);

        document.getElementsByClassName('modifier')[i].value = modifier(i);

        if (input.value <= 8) {
            minus.style.visibility = 'hidden';
        }
    }
}

export default initAbility;
