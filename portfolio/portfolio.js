
const sport = document.querySelectorAll('.item');
 
sport.forEach(item =>{
    item.addEventListener('mouseover', () =>{
removeFocuse()
        item.classList.add('selected');
    })
    removeFocuse = () =>{
        sport.forEach(item =>{
            item.classList.remove('selected');
        })
    }
})
gsap.from(".web", {opacity: 0, duration:2, delay:1, stagger:1})
gsap.from('.head', {y: -80, duration:2.5, delay: .8, opacity:0} )