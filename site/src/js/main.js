const API_PATH = 'https://beauty-saloon-server.herokuapp.com/api';

fetch(`${API_PATH}/login`, {
    method: 'POST',
    body: JSON.stringify({
        userName: 'admin',
        password: 'admin'
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(({ access_token }) => {
        return fetch(`${API_PATH}/orders`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
    })
    .then(response => response.json())
    .then(orders => {
        console.log(orders);
    })

    .then(response => console.log(response));


function handleFormSubmit(event) {
    event.preventDefault()
    
    const form = document.getElementById('Myform');

    let data = {
        name: form.querySelector('[name ="name"]').value,
        phone: form.querySelector('[name ="telefon"]').value,
    };

    fetch(`${API_PATH}/orders`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
    }
    })
    .then(response => {return response.json()})
    .then (response => {
        if (response.status === 'Opened') {
            const elem = document.createElement('div');
            elem.classList.add(this.cssPrefix);
            elem.innerHTML = `<span class="${this.cssPrefix}__message">Ваша заявка отправлена! В ближайшее время с вами свяжется менеджер</span>`;
            form_big.append(elem)
        }
    }            
        );
}

const applicantForm = document.getElementById('Myform')
applicantForm.addEventListener('submit', handleFormSubmit)

