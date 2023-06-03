// ----------------------LETS GO-------------------------

gsap.registerPlugin(ScrollTrigger);



var six=document.querySelectorAll(".pagesix>h1");
console.log(six)


six.forEach(function(elem){
 gsap.to(elem,{
  // transform:"rotateX(90deg)",
  color:"black",

  scrollTrigger:{
    trigger:elem,
    scroller:"body",
    start:"top 50%",
    end:"top 10%",
    // markers:true,
     scrub:2,
  }


 })

  

})










var circle=document.querySelector(".cursor");
var main=document.querySelector(".main");
 

  main.addEventListener("mousemove",function(elem){
    circle.style.left=elem.x+"px"
    circle.style.top=elem.y+"px"

})








  // ---------------------------------RESPONSIVE CODE-------------------------
  var button =document.querySelector(".special");
  var menu =document.querySelector(".menu");


  button.addEventListener("click",function(){
   console.log(menu)
  //  menu.style.display="block";
    menu.style.top="0%";

  })



  var buttontwo =document.querySelector(".ri-arrow-down-s-line");
  var menu =document.querySelector(".menu");


  buttontwo.addEventListener("click",function(){
   console.log(menu)
    menu.style.top="-150%";
    // menu.style.display="none";

  })


