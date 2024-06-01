const popup = document.getElementById("popup");
const name = document.getElementById("name");

function Register (){
const form = document.getElementById("formy");
const dates = form.querySelectorAll('input');

const items = {};
for (let date of dates){
    if(date.value !==''){
        items[date.id] = date.value;
    }
}
localStorage.setItem('Register', JSON.stringify(items));
}

if(name) {
    popup.classList.add("open-popup")
}

const closePopup = ()=> {
    popup.classList.remove("open-popup")
} 
