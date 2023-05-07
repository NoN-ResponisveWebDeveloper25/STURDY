// ----------------------LETS GO-------------------------








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


