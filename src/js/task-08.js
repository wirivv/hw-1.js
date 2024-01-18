const form = document.querySelector('form.login-form');
form.addEventListener('submit' , function(event)  {
    event.preventDefault();

    const elements = form.elements;
    let data = {};
    let allFieldsFiiled = true;
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if( element.tagName === 'INPUT' ) {
            if(element.value === '') {
                alert('All friends must be filled');
                allFieldsFiiled  = false;
                break;
            } else {
                data[element.name] = element.value;
            }
        }
      }

      if(allFieldsFiiled) {
        console.log(data);
        form.reset();
      }

})
