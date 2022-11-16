
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
    });
}

const applicantFormShort = document.getElementById('Myform')
applicantFormShort.addEventListener('submit', handleFormSubmit)

