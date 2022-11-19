
/*==================== POINTS ====================*/ 
const points = document.querySelectorAll('.point');
const images = document.querySelectorAll('.img-slider');

let i = 0;

points.forEach((item, index) => {
  item.addEventListener('click', () => {
    console.log("Clicou no ponto: " + (index));

    // Zera todas as imagens
    images[0].style.opacity = "0";
    images[1].style.opacity = "0";
    images[2].style.opacity = "0";
    images[3].style.opacity = "0";

    // Aparece somente aquela que clicou
    images[index].style.opacity = "1";


    points[0].classList.remove("active-point");
    points[1].classList.remove("active-point");
    points[2].classList.remove("active-point");
    points[3].classList.remove("active-point");

    points[index].classList.add("active-point");
  })
})

setInterval(changeBackground, 12000);

function changeBackground(){

  // Zera todas as imagens
  images[0].style.opacity = "0";
  images[1].style.opacity = "0";
  images[2].style.opacity = "0";
  images[3].style.opacity = "0";

  // Aparece somente aquela que clicou
  images[i].style.opacity = "1";

  points[0].classList.remove("active-point");
  points[1].classList.remove("active-point");
  points[2].classList.remove("active-point");
  points[3].classList.remove("active-point");

  points[i].classList.add("active-point");

  i++;

  if(i == 4) i = 0;

  //console.log('trocou de bg');
}

//console.log(points);
//console.log(images[0]);

/*--=========== GSAP SCROLLTRIGGER ============- */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  /*--=========== TIMELINE LOADING E HERO ============- */

  var tl1 = gsap.timeline();
    
  tl1
  .to('.screen-loading', {
    duration: 2,
    opacity: 0, 
    delay: 3,
    //filter: 'blur(10px)',
    //y: "-10%",
    ease: "power4.out",
  })
  .from(".bg-hero", {
    duration: 1, 
    opacity: 0, 
    stagger:{each: 0.1},
    ease: "power4.out",
  }, '-=1.0')
  .from("nav div", {
    duration: 2, 
    opacity: 0, 
    y: 400,
    stagger:{each: 0.2},
    ease: "back.out(1.7)",
  }, '-=0.5')
  .from(".box-hero div", {
    duration: 2, 
    opacity: 0, 
    y: 200,
    stagger:{each: 0.2},
    ease: "back.out(1.7)",
  }, '-=1.7')
    
});

ScrollTrigger.addEventListener("scrollStart", () => {
  ScrollTrigger.refresh();
});
