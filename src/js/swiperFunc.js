let currentIndex = 0
const slides = document.querySelectorAll('.carousel-item')
const wrapper = document.querySelector('.wrapper')
const totalSlides = slides.length

const firstClone = slides[0].cloneNode(true)
const lastClone = slides[totalSlides - 1].cloneNode(true)

wrapper.appendChild(firstClone)
wrapper.insertBefore(lastClone, slides[0])

wrapper.style.transform = `translateX(-100%)`

function showSlide() {
  currentIndex++
  wrapper.style.transition = 'transform 0.5s ease-in-out'
  wrapper.style.transform = `translateX(${-100 * (currentIndex + 1)}%)`

  if (currentIndex === totalSlides) {
    setTimeout(() => {
      wrapper.style.transition = 'none'
      currentIndex = 0
      wrapper.style.transform = `translateX(-100%)`
    }, 500)
  }
}

setInterval(showSlide, 3000)
