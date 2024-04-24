gsap.from('.head', {y: -80, duration:2.5, delay: .8, opacity:0} )


let text = " “Learning to code is useful no matter what your career ambitions are.” - Arianna Huffington, Founder, The Huffington Post "
let i = 0;
let speed = 120;

function type(){
    if(i< text.length){
        document.querySelector("h4").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();



function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      document.getElementById('slider').checked = false;
  } else {
      setTheme('theme-light');
    document.getElementById('slider').checked = true;
  }
})();








const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1

/*--------------------
Vars
--------------------*/
const mouse = {
  newX: 0,
  newY: 0,
  speedX: 0,
  speedY: 0,
  x: 0,
  y: 0,
  hover: false,
  top: 0,
  left: 0,
  width: 0,
  height: 0,
}
const $cursor = document.querySelector('.cursor')
const links = document.querySelectorAll('[data-link]')

/*--------------------
Mouse
--------------------*/
const handleMouse = (e) => {
  if (!mouse.hover) {
    mouse.x = e.clientX || e.touches[0].clientX
    mouse.y = e.clientY || e.touches[0].clientY
  }
}
window.addEventListener('mousemove', handleMouse)
window.addEventListener('touchmove', handleMouse)
window.addEventListener('touchstart', handleMouse)

/*--------------------
Links
--------------------*/
let timer
links.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      $cursor.classList.add('hover')
      mouse.hover = true
      const { top, left, width, height } = link.getBoundingClientRect()
      mouse.x = left - 6
      mouse.y = top - 1
      mouse.width = width
      mouse.height = height  
    }, 100)
    
  })
  link.addEventListener('mouseleave', () => {
    clearTimeout(timer)
      timer = setTimeout(() => {
      $cursor.classList.remove('hover')
      mouse.hover = false
    }, 100)
  })
})