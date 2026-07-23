// ---- Events :Link ----

function Addition(a,b,c){
    return a+b+c
}
// -- onclick
function getEmail(){
    var email = document.getElementById('email')
    console.log(email.value);
}

// -- formSubmission
function getEmail1(element){
    element.preventDefault()
    var email = document.getElementById('email')
    var pass = document.getElementById('password')
    //  console.log(email.value);//abc@gmail.com
    //  console.log(pass.value);//password

    email.value = "xyz@gmail.com"
    console.log(email.value);
    
    // console.log(email);//<input type="email" id="email" />
    console.log(element);
}

// onmouseover
// onmouseleave
// onFocus -- 
// onblur

function onFocus(ele){
    ele.style.backgroundColor = 'green'
    ele.style.color = 'white'
    ele.style.border='none'
    ele.style.borderRadius='3px'
    ele.style.margin='3px'
}

function onBlur(ele){
    ele.style.backgroundColor = 'purple'
    ele.style.color = 'white'
    ele.style.border='none'
    ele.style.borderRadius='3px'
    ele.style.margin='3px'
}

