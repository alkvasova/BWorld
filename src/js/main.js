
const from = document.getElementById('form');

function retrieveFormValue (event) {
    event.preventDefault ();

    const name = form.querySelector('[name ="name"]'),
        telefon = form.querySelector('[name ="telefon"]');

    const values = {
        name: name.value,
        telefon: telefon.value
    };

    console.log ('v1', values);
}

form.addEventListener ('submit', retrieveFormValue);