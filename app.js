
const humbager = document.querySelector('.humbager')
const navbarNav = document.querySelector('.navbar-nav')
const closeNav = document.querySelector('.fa-bars')

humbager.addEventListener('click',()=>{
    navbarNav.classList.toggle('hide')
})
window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
      slidesToShow:"1",
      draggable:true,
      duration:0.1
    })
  })

const glider = new Glider(document.getElementById('glider'));

function sliderAuto(slider, miliseconds) {
 const slidesCount = slider.track.childElementCount;
 let slideTimeout = null;
 let nextIndex = 1;

 function slide () {
   slideTimeout = setTimeout(
     function () {
       if (nextIndex >= slidesCount ) {
         nextIndex = 0;
       }
       slider.scrollItem(nextIndex++);
     },
     miliseconds
   );
 }

 slider.ele.addEventListener('glider-animated', function() {
   window.clearInterval(slideTimeout);
   slide();
 });

 slide();
}

sliderAuto(glider, 4000)