function enableSubmit(){
    let inputs = document.getElementsByClassName('required'); // Enter your class name for a required field, this should also be reflected within your form fields.
    let btn = document.querySelector('button');
    if (isValid= true ){
        btn.style.border='1px solid green'
    }  else {
        btn.style.border='1px solid red'
    }
    let isValid = true;
    for (var i = 0; i < inputs.length; i++){
    let changedInput = inputs[i];
    if (changedInput.value.trim() === "" || changedInput.value === null){
    isValid = false;
    break;
    }
    }
    btn.disabled = !isValid;
    }
   
    var min=new Date()
    var date=document.getElementsByClassName('date')
    document.getElementById('setdate').setAttribute('min', new Date().toISOString().split('T')[0])
    let valid= true
    if( valid> min) {
       date.style.border= '1px solid green' 
    }