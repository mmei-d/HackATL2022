
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

setInterval(countdown, 1000)
// end countdown //


// image slider //
var counter = 1;
setInterval(() => {
    document.querySelector(`#radio${counter}`).checked = true;
    counter++;
    if(counter > 6){
        counter = 1;
    }
}, 5000)
// end image slider //


// faq accordian //
let accButton = document.querySelector('label')
let panel = document.querySelector('panel')

for(let i = 0; i < accButton.length; i++){
    accButton[i].addEventListener('click', () => {
        if(parseInt(panel[i].style.height) !== panel[i].scrollHeight){
            panel[i].style.height = panel[i].scrollHeight + 'px'
        }else{
            panel[i].style.height = '0px'
        }
    })
}
// end faq accordian //
