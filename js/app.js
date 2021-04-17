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

    const fighterListElement = document.createElement('li');
    fighterListElement.textContent = `Fighter: ${first_name} ${surname} Weight Class: ${weight_class}`;

    const fightersList = document.querySelector('#fighters_list');
    fightersList.appendChild(fighterListElement);
}

const deleteAll = function() {
    const list = document.querySelectorAll('li')
    for (const item of list){
        item.remove();
}
}