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
        
        const form = document.getElementById('form_big');
        let data = {
            name: form.querySelector('[name ="name"]').value,
            phone: form.querySelector('[name ="phone"]').value,
            master: form.querySelector('[name ="master"]').value,
            usluga: form.querySelector('[name ="usluga"]').value,
            date: form.querySelector('[name ="date"]').value,
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
                setTimeout(function() {
                    document.getElementById('form_big').style.display = 'none';
                    }, 3000)
            }
        }            
            //console.log(response)
            );
    }
  
    const applicantForm = document.getElementById('form_big')
    applicantForm.addEventListener('submit', handleFormSubmit)
  
  
   
    