// show the email add: and cell phone number
const email = document.querySelector('.email');
const call = document.querySelector('.call');
const address = document.querySelector('.address');
const cell = document.querySelector('.cell');

var emailAdd = false;
email.addEventListener('click', function(){
    if(!emailAdd){
        address.classList.add('show');
        emailAdd = true;
    }else{
        address.classList.remove('show');
        emailAdd = false;
    }
});

var number = false;
call.addEventListener('click', function(){
    if(!number){
        cell.classList.add('show');
        number = true;
    }else{
        cell.classList.remove('show');
        number = false;
    }
})
