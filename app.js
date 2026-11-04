//PART 1
const mainTitelEl = document.querySelector('#main-title')
mainTitelEl.textContent = "Welcome to the Cozy Cafe."
// console.dir(mainTitelEl)

//PART 2
const highlightTitleEls = document.querySelectorAll('.highlight-title')
highlightTitleEls.forEach((highlightTitleEl) => {
    highlightTitleEl.style.fontStyle = 'italic'
    // console.log(highlightTitleEl.textContent)
})

const quoteOfTheDay = document.querySelector('#quote-of-the-day')
quoteOfTheDay.textContent = 'A little coffee, a little conversation.'
// console.log(quoteOfTheDay)
quoteOfTheDay.classList.add('featured')

//PART 3
const mainPhotoEl = document.querySelector('#main-photo')
// console.log(mainPhotoEl.getAttribute('src'))
mainPhotoEl.setAttribute('src', './assets/berry-cake.jpg')
mainPhotoEl.setAttribute('alt', 'A berry cake served at the cafe')

//PART 4
const bgColorBtnEl = document.querySelector('#bg-color-btn')
// console.log(bgColorBtnEl)
const bodyEl = document.querySelector('body')
const handleBackgroundChange = () => {
    bodyEl.style.backgroundColor = 'lightsteelblue'
}
bgColorBtnEl.addEventListener('click' ,handleBackgroundChange)

//PART 5
const roseLatteEl = document.querySelector('#rose-latte')
const PistachioEl = document.querySelector('#croissant')
const cheesecakeEl = document.querySelector('#cheesecake')

const roseBtnEl = document.getElementById('0')
const pistachioBtnEl = document.getElementById('1')
const cheesecakeBtnEl = document.getElementById('2')

roseLatteEl.textContent = 'Available'
PistachioEl.textContent = 'Sold Out'
cheesecakeEl.textContent = 'Available'

roseBtnEl.addEventListener('click', () => {
    roseLatteEl.textContent = 'Sold Out'
})
pistachioBtnEl.addEventListener('click', () => {
    PistachioEl.textContent = 'Sold Out'
})
cheesecakeBtnEl.addEventListener('click', () => {
    cheesecakeEl.textContent = 'Sold Out'
})


console.log('Cozy Cafe JavaScript is connected!');
