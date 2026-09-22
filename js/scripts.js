import OpenAI from 'https://esm.sh/openai';

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
        if(!items[i].textContent.toLowerCase().includes(searchInput.toLowerCase())){
            items[i].style.display = 'none'
        }

    }
}

function modal_toggle(){
    document.getElementById('modalOverlay').classList.toggle('modal-overlay-opened')
}

document.getElementById('tabButton1').addEventListener('click',function name(params) {
    document.getElementById('tabButton1').classList.add('active')
    document.getElementById('tabButton2').classList.remove('active')
    document.getElementById('tabButton3').classList.remove('active')
    
    document.getElementById('tab1').classList.add('active')
    document.getElementById('tab2').classList.remove('active')
    document.getElementById('tab3').classList.remove('active')

})

document.getElementById('tabButton2').addEventListener('click',function name(params) {
    document.getElementById('tabButton1').classList.remove('active')
    document.getElementById('tabButton2').classList.add('active')
    document.getElementById('tabButton3').classList.remove('active')
    
    document.getElementById('tab1').classList.remove('active')
    document.getElementById('tab2').classList.add('active')
    document.getElementById('tab3').classList.remove('active')

})

document.getElementById('tabButton3').addEventListener('click',function name(params) {
    document.getElementById('tabButton1').classList.remove('active')
    document.getElementById('tabButton2').classList.remove('active')
    document.getElementById('tabButton3').classList.add('active')
    
    document.getElementById('tab1').classList.remove('active')
    document.getElementById('tab2').classList.remove('active')
    document.getElementById('tab3').classList.add('active')

})


document.getElementById('accordionHeader1').addEventListener('click',function name(params) {
    document.getElementById('accordionContent1').classList.toggle('open')
})
document.getElementById('accordionHeader2').addEventListener('click',function name(params) {
    document.getElementById('accordionContent2').classList.toggle('open')
})
document.getElementById('accordionHeader3').addEventListener('click',function name(params) {
    document.getElementById('accordionContent3').classList.toggle('open')
})




async function  aitest(){

    const client = new OpenAI({
        baseURL: 'https://api.gapgpt.app/v1',
        apiKey: 'sk-fZZ2n0HbaxBeqVlCO4Q3YBxDTTYaonGQDuF1EvWPf1aFXxyO',
        dangerouslyAllowBrowser: true   // <-- silences the error
    });
    const response = await client.chat.completions.create({
    model: 'glm-4-flash',
    messages: [{ role: 'user', content: 'سلام!' }]
    });
    console.log(response.choices[0].message.content);
}
aitest()


mylist = ['BMW', 'benz', 'ferrari']

for(i=0 ; i<mylist.length ; i++){
    console.log(mylist[i])
}

stringifiedList = JSON.stringify(mylist)

localStorage.setItem('mylist', stringifiedList)

mylist2 = localStorage.getItem('mylist')

parsedList = JSON.parse(mylist2)

for(i=0 ; i<parsedList.length ; i++){
    console.log(parsedList[i])
}



fav_saraches = []
fav_saraches.push('mobile')