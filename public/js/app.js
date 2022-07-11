const contactFrom = document.querySelector('#contact_form');

let name = document.getElementById('name_input');
let email = document.getElementById('email_input');
let subject = document.getElementById('subject_input');
let message = document.getElementById('message_input');

/* contactFrom.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('Something went wrong!')
        }
    }

    xhr.send(JSON.stringify(formData));

}) */