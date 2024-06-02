const showHiddenPass = (inputPass, inputIcon) => {
    const input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', () =>{
        if (input.type === 'password') {
            input.type = 'text'
            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        } else {
            input.type = 'password'
            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}
showHiddenPass('input-pass', 'input-icon')


function Register (){
    const form = document.getElementById("formy");
    const dates = form.querySelectorAll('input-email', 'input-user', 'input-pass');
    
    const items = {};
    for (let date of dates){
        if(date.value !==''){
            items[date.id] = date.value;
        }
    }
    localStorage.setItem('registered', JSON.stringify(items));
    }
    
    button.addEventListener('DOMContentLoaded', function () {
        let memory = localStorage.getItem('registered');
        if(memory){
            let forma = document.getElementById("formy");
            let obj = JSON.parse(memory);
    
            for(let date of obj){
                let element = forma.querySelector('#${date}');
                element.value = obj[date];
            }
        }
    });
    