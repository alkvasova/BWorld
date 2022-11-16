const forma = document.forms["Myform"];
const buttonshort = forma.elements["button_form"];
const formShort = Array.from(forma);
const validFormShort = [];

formShort.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
      el.setAttribute("is-valid", "0");
      validFormShort.push(el);
    }
});

forma.addEventListener("input", inputHandlerForm);
buttonshort.addEventListener("click", buttonHandler);

function inputHandlerForm({ target }) {
    if (target.hasAttribute("data-reg")) {
    inputCheckForm(target);
    }
}

function inputCheckForm (el) {
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

function buttonHandlerForm(e) {
    const allValidForm = [];
    validFormShort.forEach((el) => {
        allValidForm.push(el.getAttribute("is-valid"));
    });
    const isAllValidForm = allValidForm.reduce((acc, current) => {
        return acc && current;
    });
            
    if (!Boolean(Number(isAllValidForm))) {
        e.preventDefault();
    }
}
        
