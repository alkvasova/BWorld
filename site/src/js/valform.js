const form = document.forms["Myform"];
const button = form.elements["button_form"];
const formArr = Array.from(form);
const validFormArr = [];

formArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
      el.setAttribute("is-valid", "0");
      validFormArr.push(el);
    }
});

form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
    inputCheck(target);
    }
}

function inputCheck (el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        el.style.border = "2px solid rgb(0, 196, 0)";
        el.setAttribute("is-valid", "1");
    } else {
        el.style.border = "2px solid rgb(255, 0, 0)";
        el.setAttribute("is-valid", "0");
    }
}

function buttonHandler(e) {
    const allValid = [];
    validFormArr.forEach((el) => {
        allValid.push(el.getAttribute("is-valid"));
    });
        
    if (!Boolean(Number(isAllValid))) {
        e.preventDefault();
        }
        const isAllValid = allValid.reduce((acc, current) => {
        return acc && current;
        });
            
        if (!Boolean(Number(isAllValid))) {
        e.preventDefault();
    }

}
        





// let = document.querySelector('.Myform'),
//     formInput = document.querySelectorAll('.form-input'),
//     inputPhone = document.querySelector('.js-input-phone');

// form.onsubmit = function () {
//     let phoneVal = inputPhone.value;

//     formInputs.forEach(function(input) {
//         if (input.value === '') {
//             input.classList.add('error');
//             console.log('input not filled')
//         } else {
//             input.classList.remove('error');
//         }

//     }) 
// return false;
// }
