var threeLines = document.querySelector(".three-bar");
console.log(threeLines);
var menuBar=document.querySelector(".main-nav ul");
threeLines.addEventListener('click',function(){
    var menuBar=document.querySelector(".main-nav ul");
      
    if(menuBar.style.display=="none"){
     console.log("if work");
    
    menuBar.style.display="flex";
    }
    else {
        console.log("ELSE work");
       menuBar.style.display="none";
       }
    
   
})


