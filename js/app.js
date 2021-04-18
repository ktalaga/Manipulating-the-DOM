document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#form');
    form.addEventListener('submit', submitForm);

    const delAll = document.querySelector('#delete_all');
    delAll.addEventListener('click', deleteAll);
});

const submitForm = function(event) {
    event.preventDefault();

    const first_name = event.target.first_name.value;
    const surname = event.target.surname.value;

    let weight_class = document.querySelector('#weight_class');
    weight_class = weight_class.value;

    let last_fight = document.querySelector('input[name="last_fight"]:checked');
    last_fight = last_fight.value;

    let organisations = document.querySelectorAll('input[name="organisation"]:checked');
    let organisationsList = [];
    organisations.forEach((organisation) => {
        organisationsList.push(organisation.value)
    })

    const fighterListElement = document.createElement('li');
    fighterListElement.textContent = `Fighter: ${first_name} ${surname} Weight Class: ${weight_class} Last Fight: ${last_fight} Organisations: ${organisationsList}`;

    const fightersList = document.querySelector('#fighters_list');
    fightersList.appendChild(fighterListElement);

    event.target.reset();
}

const deleteAll = function() {
    const fightersList = document.querySelector('#fighters_list');
    fightersList.innerHTML = '';
}