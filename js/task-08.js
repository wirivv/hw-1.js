const forms = document.querySelectorAll('.login-form');
forms.forEach(form => {
  form.addEventListener('submit', myForm);
});

function myForm(event) {
    event.preventDefault()
    if(validation(this) === true) {
        alert('Форма проверена успешно')
    }
  }


  function validation(form) {
    let result = true;
    
    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {
        if(input.value === "") {
            alert('Поле написано не правильно')
            result = false
        }
    }


    return result
  }