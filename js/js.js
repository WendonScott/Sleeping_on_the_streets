const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');



  burger.addEventListener('click', ()=>{
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //animate links
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`
      }
    });
    //burger animation
    burger.classList.toggle('toggle');
  });
}


navSlide();

// javaScript for gallery
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image =>{
  image.addEventListener('click', e =>{
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e =>{
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})
