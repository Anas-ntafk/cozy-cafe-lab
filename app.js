const mainTitelEl = document.querySelector('#main-title')
mainTitelEl.textContent = "Welcome to the Cozy Cafe."
// console.dir(mainTitelEl)

const highlightTitleEls = document.querySelectorAll('.highlight-title')
highlightTitleEls.forEach((highlightTitleEl) => {
    highlightTitleEl.style.fontStyle = 'italic'
    // console.log(highlightTitleEl.textContent)
})

const quoteOfTheDay = document.querySelector('#quote-of-the-day')
quoteOfTheDay.textContent = 'A little coffee, a little conversation.'
// console.log(quoteOfTheDay)
quoteOfTheDay.classList.add('featured')

const mainPhotoEl = document.querySelector('#main-photo')
// console.log(mainPhotoEl.getAttribute('src'))
mainPhotoEl.setAttribute('src', './assets/berry-cake.jpg')
mainPhotoEl.setAttribute('alt', 'A berry cake served at the cafe')