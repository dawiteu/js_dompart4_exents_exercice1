//1

const h1 = document.querySelector('h1'); 

//2 - 3 
blueColor = (element) =>{
    element.style.color="blue";
}

//4 
// blueColor(h1); 

// 5 

h1.addEventListener("click", function(){
    blueColor(h1); 
}); 

