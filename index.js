gsap.from('.head', {y: -80, duration:2.5, delay: .8, opacity:0} )

gsap.from(".head2", { y: 30,opacity: 0, delay:1, duration:3})

gsap.to(".par1", {
  text: "Are you looking to create a website for your sucesful business?",
  duration: 3, 
  ease: "power1.in",
  delay:5, 
 
})

gsap.to(".par2", {
  text: "I can help you!",
  duration: 2,   
  ease: "power1.in", 
  delay:8.9,
})


let text = " I am Front-end developer... "
let i = 0;
let speed = 120;

function type(){
    if(i< text.length){
        document.querySelector(".head2").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();



/*--------------------
Utils
--------------------*/
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

/*--------------------
Raf
--------------------*/
const raf = () => {
  mouse.newX = lerp(mouse.newX, mouse.x, .12)
  mouse.newY = lerp(mouse.newY, mouse.y, .12)
  
  mouse.speedX = lerp(mouse.speedX, mouse.x - mouse.newX, .12)
  mouse.speedY = lerp(mouse.speedY, mouse.y - mouse.newY, .12)
  const speed = Math.abs(mouse.speedX) > Math.abs(mouse.speedY) ? mouse.speedX : -mouse.speedY
  
  let style
  
  if (!mouse.hover) {
    style = {
      width: '30px',
      height: '30px',
      marginLeft: '-15px',
      marginTop: '-15px',
      transform: `
        translate(${mouse.newX}px, ${mouse.newY}px)
        rotate(${45 - speed * 0.2}deg)
        scale(${1 - Math.abs(speed) * 0.001})
      `
    }
  } else {
    style = {
      width: `${mouse.width}px`,
      height: `${mouse.height}px`,
      marginLeft: 0,
      marginTop: 0,
      transform: `
        translate(${mouse.newX}px, ${mouse.newY}px)
        rotate(0deg)
        scale(${1 - Math.abs(speed) * 0.001})
      `
    }
  }
  Object.assign($cursor.style, style)
  
  requestAnimationFrame(raf)
}
raf()





particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#16FF00"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#16FF00"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.9,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 60,
      "color": "#16FF00",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 120,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 50,
        "duration": 4,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);