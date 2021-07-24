var button = document.querySelector('#btn')
var color = document.querySelector('.color')


const numbers = '0123456789'
const alphabets = 'abcdef'

button.addEventListener('click', (()=>{
let hex = '#'
for (let i=0; i<6; i++) {
    hex += getRandom()
}
document.body.style.background = hex;
color.textContent = hex;
}))

function getRandomNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getRandomAlphabet () {
    return alphabets[Math.floor(Math.random() * alphabets.length)]
}

// console.log(getRandomNumber())
// console.log(getRandomAlphabet())


function getRandom() {
    let colors = []
    colors.push(getRandomAlphabet());
    colors.push(getRandomNumber());
    return colors[Math.floor(Math.random() * colors.length)]
}