
export function slide() {
//  Image slider js

const container=document.querySelector(".thumbnail-container");
const allBox=container.children;
const containerWidth=container.offsetWidth;

  const divImg=document.querySelector(".slide");
  const divImgWidth=divImg.offsetWidth;
  //alert(divImgWidth);


const margin= 3;
 var items=0;
 var totalItems=0;
 var jumpSlideWidth=0;


// item setup per slide



function load(){
    const responsive=[
{breakPoint:{width:0,item:2}}, //if width greater than 0 (1 item will show) 
{breakPoint:{width:600,item:3}}, //if width greater than 600 (2  item will show) 
{breakPoint:{width:1000,item:3}}, //if width greater than 1000 (3 item will show) 
{breakPoint:{width:1700,item:4}} //if width greater than 1000 (4 item will show) 
]
   for(let i=0; i<responsive.length;i++){
     if(window.innerWidth>responsive[i].breakPoint.width){
       items=responsive[i].breakPoint.item
     }
   }
  //alert(items);
   start();
}

var eachDivWidth;

function start(){
  var totalItemsWidth=0
 for(let i=0;i<allBox.length;i++){
    // width and margin setup of items
   var vvv = allBox[i].style.width=(containerWidth/items)-margin + "px";
     //alert(vvv);
     eachDivWidth = allBox[i].style.width=(containerWidth/items)-margin;
   var ggg = allBox[i].style.margin=(margin/2)+ "px";
     //alert(ggg);
      totalItemsWidth+=containerWidth/items;
      totalItems++;
      
      //alert(totalItems);
 }

 // thumbnail-container width set up
var kan = container.style.width=totalItemsWidth + "px";
//alert(kan);



var NextBtn = document.querySelector("#next");
var PrevBtn = document.querySelector("#prev");

var total = 0;
var countOfDivs = document.querySelectorAll(".slide").length;
//alert(countOfDivs);

var har = document.querySelector(".slide");
 var ddd = har.offsetWidth;
  // alert(ddd + "  imagesdiv");
 var mainDivMar = document.querySelector("#wrapperimage");
 var hhu = mainDivMar.offsetLeft;
//alert(hhu);
 let numb = eachDivWidth;
 var kol = jumpSlideWidth=jumpSlideWidth+(numb);
// alert(numb);
 //var mainMargin = document.querySelector();

NextBtn.addEventListener('click', function() { 

NextBtn.style.display = "block";
PrevBtn.style.display = "block";

var hhu = mainDivMar.offsetLeft;
//alert(hhu);


const allSlides=Math.ceil(totalItems/items);
var vgt = countOfDivs-2;
var totalMultDiv = kol * vgt;
//alert(totalMultDiv);
var marginTopher = document.querySelector("#wrapperimage");
let numb = har + 30;
//jumpSlideWidth=jumpSlideWidth+(numb);

console.log(marginTopher);
 if(countOfDivs <= allSlides){
   //alert();
    allSlides++;
    total++;
 }
  this.parentNode.getAttribute("data-element");
   //alert(containerWidth);
   var totalMargin =  -totalMultDiv;
   var juMargin = -jumpSlideWidth+hhu;
   //alert(totalMargin +" < "+juMargin  );
   if( totalMargin < juMargin ){
     container.style.marginLeft= -jumpSlideWidth+hhu + "px";
     //alert("No slides to show");
   }
   else{
       NextBtn.style.display = "none";

          //alert("No slides to show");
      //alert(-jumpSlideWidth*vgt + "px");
   }
});

PrevBtn.addEventListener('click', function() { 

NextBtn.style.display = "block";
PrevBtn.style.display = "block";

var hhu = mainDivMar.offsetLeft;
//alert(hhu);


const allSlides=Math.ceil(totalItems/items);
var vgt = countOfDivs-allSlides;
//	alert(vgt);
var marginTopher = document.querySelector("#wrapperimage");
let numb = har + 30;
//jumpSlideWidth=jumpSlideWidth+(numb);

console.log(marginTopher);
 if(countOfDivs <= allSlides){
   //alert();
    allSlides++;
    total++;
 }
  this.parentNode.getAttribute("data-element");
   //alert(containerWidth);
   var totalMargin = -jumpSlideWidth*vgt;
   var juMargin = -jumpSlideWidth+hhu;
  // alert(totalMargin +" < "+juMargin  );
   if( juMargin  >= -285 ){
    PrevBtn.style.display = "none"; 
     //alert("No slides to show");
   }
   else{
          container.style.marginLeft= jumpSlideWidth+hhu + "px";
          //alert(-jumpSlideWidth*vgt + "px");
   }
});

}

load();


}



export function sliden() {
  console.log('sliden')
  //news slider

const containernews=document.querySelector(".thumbnail-containernews");
const allBoxnews=containernews.children;
const containerWidthnews=containernews.offsetWidth;
const marginnews= 5;
 var itemsnews=0;
 var totalItemsnews=0;
 var jumpSlideWidthnews=0;


// item setup per slidexxxxxxx  x


function loadnews(){
  console.log('loaded')
    const responsivenews=[
{breakPoint:{width:0,itemnews:2}}, //if width greater than 0 (1 item will show) 
{breakPoint:{width:600,itemnews:3}}, //if width greater than 600 (2  item will show) 
{breakPoint:{width:1000,itemnews:3}}, //if width greater than 1000 (3 item will show) 
{breakPoint:{width:1700,itemnews:4}} //if width greater than 1000 (4 item will show) 
]

   for(let n=0; n<responsivenews.length;n++){
     if(window.innerWidth>responsivenews[n].breakPoint.width){
       itemsnews=responsivenews[n].breakPoint.itemnews
     }
   }
//     alert(itemsnews.length);
   startnews();
}


function startnews(){
  console.log('started')
  var totalItemsWidthnews=0
 for(let n=0;n<allBoxnews.length;n++){
    // width and margin setup of items
   var vvvnews = allBoxnews[n].style.width=(containerWidthnews/itemsnews)-marginnews + "px";
   var divnews = allBoxnews[n].style.width=(containerWidthnews/itemsnews)-marginnews;
// 			alert(vvvnews);
   var gggnews = allBoxnews[n].style.margin=(marginnews/2)+ "px";
   //	alert(gggnews);
      totalItemsWidthnews+=containerWidthnews/itemsnews;
      totalItemsnews++;
 }
      //   alert(totalItemsWidthnews);

 // thumbnail-container width set up
 var kannews = containernews.style.width=totalItemsWidthnews + "px";
//alert(kannews)



var NextBtnnews = document.querySelector("#nextn");
var PrevBtnnews = document.querySelector("#prevn");

var totalnews = 0;
var countOfDivsnews = document.querySelectorAll(".newsClass").length;
//alert(countOfDivsnews);

var harnews = document.querySelector(".newsClass").offsetWidth *2;
   //alert(harnews);
 var mainDivMarnews = document.querySelector("#wrappernews");
 var hhunews = mainDivMarnews.offsetLeft;
//	alert(hhunews);
 let numbnews = divnews + hhunews;
     // alert(numbnews);
 var kolnews = jumpSlideWidthnews=jumpSlideWidthnews+(numbnews);
//alert(kolnews);
 //var mainMargin = document.querySelector();

NextBtnnews.addEventListener('click', function() { 

NextBtnnews.style.display = "block";
PrevBtnnews.style.display = "block";

var hhunews = mainDivMarnews.offsetLeft;
//	alert(hhunews);


const allSlidesnews=Math.ceil(totalItemsnews/itemsnews);
var vgtnews = countOfDivsnews-allSlidesnews;
//alert(countOfDivsnews);
var marginTophernews = document.querySelector("#wrappernews");
let numbnews = harnews + 30;
//jumpSlideWidth=jumpSlideWidth+(numb);

console.log(marginTophernews);
 if(countOfDivsnews <= allSlidesnews){
//	 	alert();
    allSlidesnews++;
    totalnews++;
 }
//	  this.parentNode.getAttribute("data-element");
//     alert(containerWidthnews);
   var totalMarginnews = -kolnews*vgtnews;
   var juMarginnews = -jumpSlideWidthnews+hhunews;
//alert(totalMarginnews +" < "+juMarginnews  );
   if( totalMarginnews < juMarginnews ){
     containernews.style.marginLeft= -jumpSlideWidthnews+hhunews + "px";
//     	alert("No slides to show");
   }
   else{
       NextBtnnews.style.display = "none";

          //alert("No slides to show");
//        alert(-jumpSlideWidthnews*vgtnews + "px");
   }
});

PrevBtnnews.addEventListener('click', function() { 

NextBtnnews.style.display = "block";
PrevBtnnews.style.display = "block";

var hhunews = mainDivMarnews.offsetLeft;
//alert(hhunews);


const allSlidesnews = Math.ceil(totalItemsnews/itemsnews);
var vgtnews = countOfDivsnews-allSlidesnews;
//	alert(vgtnews);
var marginTophernews = document.querySelector("#wrappernews");
let numbnews = harnews + 30;
//jumpSlideWidth=jumpSlideWidth+(numb);

console.log(marginTophernews);
 if(countOfDivsnews <= allSlidesnews){
   //alert();
    allSlidesnews++;
    totalnews++;
 }
  this.parentNode.getAttribute("data-element");
   //alert(containerWidth);
   var totalMarginnews = -jumpSlideWidthnews*vgtnews;
   var juMarginnews = -jumpSlideWidthnews+hhunews;
  // alert(totalMargin +" < "+juMargin  );
   if( juMarginnews  >= -247 ){
    PrevBtnnews.style.display = "none"; 
     //alert("No slides to show");
   }
   else{
          containernews.style.marginLeft= jumpSlideWidthnews+hhunews + "px";
          //alert(-jumpSlideWidth*vgt + "px");
   }
});

}

loadnews();


}



export function slidev() {
// Videos starts here
const containervideos=document.querySelector(".thumbnail-containervideos");
const allBoxvideos=containervideos.children;
const containerWidthvideos=containervideos.offsetWidth;
const marginvideos= 5;
var itemsvideos=0;
var totalItemsvideos=0;
var jumpSlideWidthvideos=0;


  // item setup per slide


 function loadvideos(){
     
    const  responsivevideos=[
  {breakPoint:{width:0,itemvideos:2}}, //if width greater than 0 (1 item will show) 
  {breakPoint:{width:600,itemvideos:3}}, //if width greater than 600 (2  item will show) 
  {breakPoint:{width:1000,itemvideos:3}}, //if width greater than 1000 (3 item will show) 
  {breakPoint:{width:1700,itemvideos:4}} //if width greater than 1000 (4 item will show) 
 ]

     for(let v=0; v<responsivevideos.length;v++){
      if(window.innerWidth>responsivevideos[v].breakPoint.width){
        itemsvideos=responsivevideos[v].breakPoint.itemvideos
      }
     }
//     alert(itemsnews.length);
     startvideos();
 }
 
 
 function startvideos(){
   var totalItemsWidthvideos=0
  for(let v=0;v<allBoxvideos.length;v++){
     // width and margin setup of items
    var vvvvideos = allBoxvideos[v].style.width=(containerWidthvideos/itemsvideos)-marginvideos + "px";
    var divvideos = allBoxvideos[v].style.width=(containerWidthvideos/itemsvideos)-marginvideos;
//      alert(vvvnews);
    var gggvideos = allBoxvideos[v].style.margin=(marginvideos/2)+ "px";
    //  alert(gggnews);
        totalItemsWidthvideos+=containerWidthvideos/itemsvideos;
        totalItemsvideos++;
  }
       //   alert(totalItemsWidthnews);

  // thumbnail-container width set up
  var kanvideos = containervideos.style.width=totalItemsWidthvideos + "px";
  //alert(kannews)



var NextBtnvideos = document.querySelector("#nextv");
var PrevBtnvideos = document.querySelector("#prevv");

var totalvideos = 0;
var countOfDivsvideos = document.querySelectorAll(".news__item1").length;
//alert(countOfDivsnews);

 var harvideos = document.querySelector(".news__item1").offsetWidth *2;
     //alert(harnews);
  var mainDivMarvideos = document.querySelector("#wrappervideos");
  var hhuvideos = mainDivMarvideos.offsetLeft;
//  alert(hhunews);
   let numbvideos = divvideos + hhuvideos;
       // alert(numbnews);
   var kolvideos = jumpSlideWidthvideos=jumpSlideWidthvideos+(numbvideos);
 //alert(kolnews);
   //var mainMargin = document.querySelector();

NextBtnvideos.addEventListener('click', function() { 

  NextBtnvideos.style.display = "block";
  PrevBtnvideos.style.display = "block";

  var hhuvideos = mainDivMarvideos.offsetLeft;
//  alert(hhunews);


  const allSlidesvideos=Math.ceil(totalItemsvideos/itemsvideos);
  var vgtvideos = countOfDivsvideos-allSlidesvideos;
//alert(countOfDivsnews);
  var marginTophervideos = document.querySelector("#wrappervideos");
  let numbvideos = harvideos + 30;
  //jumpSlideWidth=jumpSlideWidth+(numb);

  console.log(marginTophervideos);
   if(countOfDivsvideos <= allSlidesvideos){
//    alert();
     allSlidesvideos++;
     totalvideos++;
   }
//    this.parentNode.getAttribute("data-element");
//     alert(containerWidthnews);
     var totalMarginvideos = -kolvideos*vgtvideos;
     var juMarginvideos = -jumpSlideWidthvideos+hhuvideos;
  //alert(totalMarginnews +" < "+juMarginnews  );
     if( totalMarginvideos < juMarginvideos ){
       containervideos.style.marginLeft= -jumpSlideWidthvideos+hhuvideos + "px";
//      alert("No slides to show");
     }
     else{
        NextBtnvideos.style.display = "none";

            //alert("No slides to show");
//        alert(-jumpSlideWidthnews*vgtnews + "px");
     }
 });
 
PrevBtnvideos.addEventListener('click', function() { 
  
  NextBtnvideos.style.display = "block";
  PrevBtnvideos.style.display = "block";

  var hhuvideos = mainDivMarvideos.offsetLeft;
  //alert(hhunews);


  const allSlidesvideos = Math.ceil(totalItemsvideos/itemsvideos);
  var vgtvideos = countOfDivsvideos-allSlidesvideos;
//  alert(vgtnews);
  var marginTophervideos = document.querySelector("#wrappervideos");
  let numbvideos = harvideos + 30;
  //jumpSlideWidth=jumpSlideWidth+(numb);

  console.log(marginTophervideos);
   if(countOfDivsvideos <= allSlidesvideos){
    //alert();
     allSlidesvideos++;
     totalvideos++;
   }
    this.parentNode.getAttribute("data-element");
     //alert(containerWidth);
     var totalMarginvideos = -jumpSlideWidthvideos*vgtvideos;
     var juMarginvideos = -jumpSlideWidthvideos+hhuvideos;
    // alert(totalMargin +" < "+juMargin  );
     if( juMarginvideos  >= -247 ){
      PrevBtnvideos.style.display = "none"; 
      //alert("No slides to show");
     }
     else{
            containervideos.style.marginLeft= jumpSlideWidthvideos+hhuvideos + "px";
            //alert(-jumpSlideWidth*vgt + "px");
     }
 });

 }

loadvideos();

}






/* When the user clicks on the button, 
 toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}








function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("countryInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("countryDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

//  When the user clicks on the button,
// toggle between hiding and showing the dropdown content 
function myFunctioncountry1() {
    document.getElementById("countryDropdown1").classList.toggle("countryshow");
}

function filterFunctionMb() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("countryInput1");
    filter = input.value.toUpperCase();
    div = document.getElementById("countryDropdown1");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}



// window.onscroll = function () {
//     scrollFunction();
// };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // document.getElementById("navbarsticky").style.padding = "30px 10px";
        document.getElementById("navbarsticky").style.position = "fixed";

        document.getElementById("inputsize").style.height = "40px";
        document.getElementById("navbarsticky").style.boxShadow = "rgba(144, 144, 144, 0.48) 0px 1px 5px";
    } else {
        document.getElementById("navbarsticky").style.position = "relative";
        document.getElementById("inputsize").style.height = "44px";
        document.getElementById("navbarsticky").style.boxShadow = "0px 0px 0px #fff";
    }
}

// suggestion dropdown js
