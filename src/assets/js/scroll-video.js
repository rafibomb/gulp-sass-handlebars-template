const intro = document.querySelector('.hero-scrolling-video-container');
const video = intro.querySelector('video');
const text = intro.querySelector('.nontitle');

//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 8000,
  triggerElement: intro,
  triggerHook: 0
})
.setPin(intro)
.addTo(controller);

//Text Animation
let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
//.setTween(textAnim)
.addTo(controller);

//Video Animation
let accelamount = 1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
})

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay
}, 100)

document.addEventListener('scroll', function(e) {
  let lastKnownScrollPosition = window.scrollY;
  console.log(lastKnownScrollPosition)
  const title1 = document.querySelector('.title1');
  const title2 = document.querySelector('.title2');
  const title3 = document.querySelector('.title3');

  if (lastKnownScrollPosition >= 500) {
    title1.classList.add('fade-away');
    title1.classList.remove('fade-back');
  } else if (lastKnownScrollPosition < 500) {
    title1.classList.remove('fade-away');
    title1.classList.add('fade-back');
  }

  if (lastKnownScrollPosition >= 2000 && lastKnownScrollPosition <= 3000) {
    title2.classList.remove('fade-away');
    title2.classList.add('fade-back');
  } else if (lastKnownScrollPosition >= 3000 || lastKnownScrollPosition < 2000) {
    title2.classList.add('fade-away');
    title2.classList.remove('fade-back');
  }

  if (lastKnownScrollPosition >= 4000) {
    title3.classList.remove('fade-away');
    title3.classList.add('fade-back');
  } else if (lastKnownScrollPosition <= 3000) {
    title3.classList.add('fade-away');
    title3.classList.remove('fade-back');
  }
});
