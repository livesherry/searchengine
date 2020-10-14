export const imageSliders = () => {
  console.log('imagesliders')
    // Image page slider and videos page starts here
    try{
const containerimg=document.querySelector(".thumbnail-containerimg");
const allBoximg=containerimg.children;
const containerWidthimg=containerimg.offsetWidth;
const marginimg= 10;
var itemsimg=0;
var totalItemsimg=0;
var jumpSlideWidthimg=0;


  // item setup per slide


 function loadimg(){
     
      const responsiveimg=[
  {breakPoint:{width:0,itemimg:2}}, //if width greater than 0 (1 item will show) 
  {breakPoint:{width:600,itemimg:3}}, //if width greater than 600 (2  item will show) 
  {breakPoint:{width:1000,itemimg:8}}, //if width greater than 1000 (3 item will show) 
  {breakPoint:{width:1700,itemimg:13}} //if width greater than 1000 (4 item will show) 
 ]

     for(let v=0; v<responsiveimg.length;v++){
      if(window.innerWidth>responsiveimg[v].breakPoint.width){
        itemsimg=responsiveimg[v].breakPoint.itemimg
      }
     }
   //alert(responsiveimg.length);
     startimg();
 }
 
 
 function startimg(){
   var totalItemsWidthimg=0
  for(let v=0;v<allBoximg.length;v++){
     // width and margin setup of items
    var vvvimg = allBoximg[v].style.width=(containerWidthimg/itemsimg)-marginimg + "px";
    var divimg = allBoximg[v].style.width=(containerWidthimg/itemsimg)-marginimg;
     // alert("vvvimg");
    var gggimg = allBoximg[v].style.margin=(marginimg/2)+ "px";
    //  alert(gggnews);
        totalItemsWidthimg+=containerWidthimg/itemsimg;
        totalItemsimg++;
  }
       //   alert(totalItemsWidthnews);

  // thumbnail-container width set up
  var kanimg = containerimg.style.width=totalItemsWidthimg + "px";
  //alert(kannews)



var NextBtnimg = document.querySelector("#nextimg");
var PrevBtnimg = document.querySelector("#previmg");

var totalimg = 0;
var countOfDivsimg = document.querySelectorAll(".suggimg").length;
//alert(countOfDivsnews);

 var harimg = document.querySelector(".suggimg").offsetWidth *2;
    // alert(harimg);
  var mainDivMarimg = document.querySelector("#wrapperimg");
  var hhuimg = mainDivMarimg.offsetLeft;
//  alert(hhunews);
   let numbimg = divimg + hhuimg;
       //alert(numbimg );
   var kolimg = jumpSlideWidthimg=jumpSlideWidthimg+(numbimg);
 //alert(kolimg );
   //var mainMargin = document.querySelector();

NextBtnimg.addEventListener('click', function() { 

  NextBtnimg.style.display = "block";
  PrevBtnimg.style.display = "block";

  var hhuimg = mainDivMarimg.offsetLeft;
  //alert(hhuimg );


  const allSlidesimg=Math.ceil(totalItemsimg/itemsimg);
  //alert(allSlidesimg);
  var vgtimg = countOfDivsimg-itemsimg+1;
  //var vgtimg = countOfDivsimg;

  var marginTopherimg = document.querySelector("#wrapperimg");
  let numbimg = harimg + 30;
  //jumpSlideWidth=jumpSlideWidth+(numb);

  console.log(marginTopherimg);
   if(countOfDivsimg <= allSlidesimg){
//    alert();
     allSlidesimg++;
     totalimg++;
   }
//    this.parentNode.getAttribute("data-element");
  // alert(-kolimg+"*"+vgtimg);
     var totalMarginimg = -kolimg*vgtimg;
     var juMarginimg = -jumpSlideWidthimg+hhuimg;
    //alert(totalMarginimg +" < "+juMarginimg );
     if( totalMarginimg < juMarginimg ){
       containerimg.style.marginLeft= -jumpSlideWidthimg+hhuimg + "px";
     //alert(-jumpSlideWidthimg+hhuimg);
     }
     else{
        NextBtnimg.style.display = "none";

            //alert("No slides to show");
//        alert(-jumpSlideWidthnews*vgtnews + "px");
     }
 });
 
PrevBtnimg.addEventListener('click', function() { 
  
  NextBtnimg.style.display = "block";
  PrevBtnimg.style.display = "block";

  var hhuimg = mainDivMarimg.offsetLeft;
  //alert(hhunews);


  const allSlidesimg = Math.ceil(totalItemsimg/itemsimg);
  var vgtimg = countOfDivsimg-allSlidesimg;
//  alert(vgtnews);
  var marginTopherimg = document.querySelector("#wrapperimg");
  let numbimg = harimg + 30;
  //jumpSlideWidth=jumpSlideWidth+(numb);

  console.log(marginTopherimg);
   if(countOfDivsimg <= allSlidesimg){
    //alert();
     allSlidesimg++;
     totalimg++;
   }
    this.parentNode.getAttribute("data-element");
     //alert(containerWidth);
     var totalMarginimg = -jumpSlideWidthimg*vgtimg;
     var juMarginimg = -jumpSlideWidthimg+hhuimg;
    //alert(totalMargin +" < "+juMargin  );
     if( juMarginimg  >= -247 ){
      PrevBtnimg.style.display = "none"; 
      //alert("No slides to show");
     }
     else{
            containerimg.style.marginLeft= jumpSlideWidthimg+hhuimg + "px";
            //alert(-jumpSlideWidth*vgt + "px");
     }
 });

 }

loadimg();





var galBlock = 1;
var openAdd = document.querySelectorAll(".resultitem");
var galhere = document.querySelectorAll(".myClass");
for (var i = 0; i < galhere.length; i++) {
    galhere[i].addEventListener("click", function () {
        
        for (var i = 0; i < openAdd.length; i++) {
            openAdd[i].classList.remove("open");
        }      
        galBlock = this.getAttribute("data-gal");
        console.log(galBlock);
        var detailV = document.getElementsByClassName("detailview");
        console.log(detailV);
        for (var i = 0; i < detailV.length; i++) {
            detailV[i].style.display = "none";
        }
        let idName = document.getElementById("gal" + galBlock);
        console.log(idName);
        idName.style.display = "block";
        //openAdd.classList.add("open");
        this.parentElement.className += " open ";


 if(idName.style.display === "block"){
        //alert("block");
        idName.scrollIntoView({ behavior: 'smooth',  block: "end" , inline: "end" });
        		 document.onkeydown = function(event) {
			        switch (event.keyCode) {
			           case 37:
			               // alert('Left key pressed');
			                 document.querySelector(".detailPrev").click();			               
			              break;
			           case 39:
			                //alert('Right key pressed');
			                 document.querySelector(".detailNext").click();
			              break;
			        }
			    };
        	}  

    });
}

var qVal;
var bVal, localItem;
var prevImg = document.querySelectorAll(".detailPrev");
var nextImg = document.querySelectorAll(".detailNext");

var lol;

for (var i = 0; i < nextImg.length; i++) {
    nextImg[i].addEventListener("click", function () {
        //alert(nextImg);

        if (galBlock >= 1) {
             for (var i = 0; i < openAdd.length; i++) {
                 openAdd[i].classList.remove("open");
             }  
            console.log(galBlock);
            galBlock++;
            qVal = galBlock;
            console.log(galBlock);
            localStorage.setItem(bVal, qVal);
            localItem = localStorage.getItem(bVal);
            console.log(localItem + "my");
            var detailV = document.getElementsByClassName("detailview");
            console.log(detailV);
            for (var i = 0; i < detailV.length; i++) {
                detailV[i].style.display = "none";
            }
            console.log(galBlock + "test");
            let idName = document.getElementById("gal" + galBlock);
            console.log(idName);
            idName.style.display = "block";
             let nextOpen = idName.parentNode.className += " open ";
             idName.scrollIntoView({ behavior: 'smooth',  block: "end" , inline: "end" });
        }
    });
    





    prevImg[i].addEventListener("click", function () {
        //alert( galBlock);
              for (var i = 0; i < openAdd.length; i++) {
                 openAdd[i].classList.remove("open");
             }  
        galBlock--;
        // alert( galBlock); 
        var detailV = document.getElementsByClassName("detailview");
        console.log(detailV);
        for (var i = 0; i < detailV.length; i++) {
            detailV[i].style.display = "none";
        }

        let idName = document.getElementById("gal" + galBlock);
        console.log(idName);
        idName.style.display = "block";
        let prevImgOpen = idName.parentNode.className += " open ";
        idName.scrollIntoView({ behavior: 'smooth',  block: "end" , inline: "end" });
       
        
        
    });


}
var closeBtn = document.querySelectorAll(".detailClose");
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener("click", function () {
    	
		 document.onkeydown = function(event) {
        		event.preventDefault();
        		 };    	
	
        localStorage.setItem(bVal, "");
        galBlock = 1;
        var detailV = document.getElementsByClassName("detailview");
        console.log(detailV);
        for (var i = 0; i < detailV.length; i++) {
            detailV[i].style.display = "none";
        }
         for (var i = 0; i < openAdd.length; i++) {
                 openAdd[i].classList.remove("open");
        }

    });
}}catch(error){
console.log(error);
}


}
