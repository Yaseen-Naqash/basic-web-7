
// console.log("hello world")

// let first_Name = 'ahmad';
// let last_name = 'mousavi';

// let age = 18;
// let weight = 72.4;
// let is_staff = true;
// let favorite_fruits = ['apple', 'cherry', 'pineapple', 'orange']
// let id_card = {
//     'id':'1743054875',
//     'expire_date': '14/7/2026',
//     'city':'ahwaz'
// }



// if (age < 18 && is_staff==true || weight > 100){
//     console.log('under age, illigal employee, go gym')
// }
// else if ('apple' in favorite_fruits){
//     console.log('you need a diet')

// }
// else{
//     console.log('employee not found')
// }

// for(let i=0; i<=10 ; i++){  
//     console.log(i)  

    
// }

// while(age < 18){
//     age++;
    
// }




// function somename(a, b){
//     let c = a * b;
//     return c
// }

// ==================================================


let text1 = document.getElementById('text1')
function change_text(){
    text1.textContent = 'text has been changed'
}

let text2 = document.getElementById('text2')
function change_color(){
    text2.style.color = 'red'
}

let text3 = document.getElementById('text3')
function toggle_class(){
    text3.classList.toggle('toggle-class')
}
let notif = document.getElementById('notification')
function show_notif(){
    if (notif.style.display === 'none'){
        notif.style.display = 'block'
    }
    else{
        notif.style.display = 'none'
    }
}


let clickEvent = document.getElementById('clickEvent')

clickEvent.addEventListener('click', show_notif)
let dblClickEvent = document.getElementById('dblClickEvent')
dblClickEvent.addEventListener('dblclick', function name(params) {
    console.log('dbclicked')
})

let mouseOverEvent = document.getElementById('mouseOverEvent')
mouseOverEvent.addEventListener('mouseover', function name(params) {
    console.log('mouse entered the button')
    
})
mouseOverEvent.addEventListener('mouseleave', function name(params) {
    console.log('mouse left')
})


function submit(){
    let notification = document.getElementById('notification')
    let username = document.getElementById('username').value
    
    let userame_regex = /^[A-Za-z1-9][A-Za-z1-9_]*$/
   if (!userame_regex.test(username)){
    notification.style.display = 'flex'
    notification.textContent = 'username isnt valid'

   }
   else{
    console.log(username)
   }
}




setInterval(function name(params) {
    let time = document.getElementById('time')
    let now = new Date()
    
    time.textContent = now.toLocaleTimeString()
},1000)

document.addEventListener('DOMContentLoaded', function name(params) {

    
    
})

setInterval(function name(params) {

    
},1000)

function search(){
    let searchInput = document.getElementById('searchInput').value

    let items = document.querySelectorAll('.list-item')


    for(let i = 0; i<items.length; i++){
        if(!items[i].textContent.includes(searchInput)){
            items[i].style.display = 'none'
        }

    }
}



