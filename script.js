// ----------------------LETS GO-------------------------

function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  multiplier:0.5,
  lerp:0.045,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




}

//  locoscroll()







// ------------------circle effect on mouse move on wapper-----------------------------

var wrap=document.querySelector(".teenoverlay");
var circle=document.querySelector(".cursor");
 
wrap.addEventListener("mouseenter",function(dets){

circle.style.scale= 1;


})

wrap.addEventListener("mouseleave",function(dets){

  circle.style.scale= 0;
  
  
  })

  wrap.addEventListener("mousemove",function(elem){
    circle.style.left=elem.x+"px"
    circle.style.top=elem.y+"px"

})




  
var wraptwo=document.querySelector(".teenoverlay2");
var circletwo=document.querySelector(".cursor2");
 
wraptwo.addEventListener("mouseenter",function(dets){

circletwo.style.scale= 1;


})

wraptwo.addEventListener("mouseleave",function(dets){

  circletwo.style.scale= 0;
  
  
  })

  wraptwo.addEventListener("mousemove",function(elem){
    circletwo.style.left=elem.x+"px"
    circletwo.style.top=elem.y+"px"

})




var wrapthree=document.querySelector(".teenoverlay3");
var circlethree=document.querySelector(".cursor3");
 
wrapthree.addEventListener("mouseenter",function(dets){

circlethree.style.scale= 1;


})

wrapthree.addEventListener("mouseleave",function(dets){

  circlethree.style.scale= 0;
  
  
  })

  wrapthree.addEventListener("mousemove",function(elem){
    circlethree.style.left=elem.x+"px"
    circlethree.style.top=elem.y+"px"

})












window.addEventListener("scroll", function(elem){

   console.log(scrollY);

  console.log("hui hui");
  
  
   circle.style.top=elem.scrollY+"px"
  
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