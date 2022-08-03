// nav bar //
const toggleButton = document.querySelector('#hamburger')
const navBarLinks = document.querySelector('#nav-links')

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('clicked')
})
// end nav bar //


// hero //
// typewriter effect
const textDisplay = document.getElementById('text')
const phrase = 'welcome. please enter your name to proceed...'
let i = 0 
let currentPhrase = []

function loop () {
    textDisplay.innerHTML = currentPhrase.join('')
    if (i <= phrase.length) {
        currentPhrase.push(phrase[i])
        i++
        textDisplay.innerHTML = currentPhrase.join('')
    }
  setTimeout(loop, 75)
}

loop()

// set user's name on home page
const username = document.querySelector('#user-name')

const ready = document.querySelector('#ready')
ready.addEventListener('click', () => {
    console.log('username: ' + username.value)
    if(username.value !== ''){
        const userBtn1 = document.querySelector('#user-register1')
        const userBtn2 = document.querySelector('#user-register2')
        userBtn1.innerHTML = `hacker ${username.value}, register`
        userBtn2.innerHTML = `hacker ${username.value}, register`

        const userSubheading = document.querySelector('#user-subheading')
        userSubheading.innerHTML = `hacker ${username.value}, Build a business in 48 hours`
    }
})
// end hero //


// countdown //
const countdown = () => {
    const countDate = new Date('October 14, 2022 00:00:00').getTime()
    const now = new Date().getTime()
    const gap = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    // calculate countdown
    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMin = Math.floor((gap % hour) / minute)
    const textSec = Math.floor((gap % minute) / second)

    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.min').innerText = textMin
    document.querySelector('.sec').innerText = textSec
}

if(document.querySelector('.day')) setInterval(countdown, 1000)
// end countdown //


// image slider //
if(document.querySelector('#radio1')){
    var counter = 1;
    setInterval(() => {
        document.querySelector(`#radio${counter}`).checked = true;
        counter++;
        if(counter > 6){
            counter = 1;
        }
    }, 5000)
}
// end image slider //


// faq accordian //
// let accButton = document.getElementsByClassName('label')
// console.log(accButton)

// for(let i = 0; i < accButton.length; i++){
//     accButton[i].addEventListener('click', () => {
//         console.log('clicked')
//         this.classList.toggle("active")

//         let panel = this.nextElementSibling
//         console.log(panel)
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     })
// }
// end faq accordian //
