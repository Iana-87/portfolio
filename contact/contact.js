gsap.from('.head', {y: -80, duration:2.5, delay: .8, opacity:0} )
gsap.from(".web", {opacity: 0, duration:2, delay:1, stagger:1})
gsap.from('.img2', {y: -300, duration:2.5, delay: .8, opacity:0} )

$('#button').click(() => {
    var display = $('#popup').css('display');
    if (display === "none") {
        $('#popup').show();
        $('#overlay').fadeIn();
    }
    else {
        $('#popup').hide();
        $('#overlay').fadeOut();
    }
});

$('#overlay').click(() => {
    $('#popup').hide();
    $('#overlay').fadeOut();
});