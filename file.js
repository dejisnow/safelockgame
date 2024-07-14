window.onload=()=>{
    
   //Lock key variables
   let keys =  document.querySelectorAll(".key")
    
    keys.forEach((key)=>{
  key.addEventListener("click",()=>{
  if(colorArray.length >= 1 && colorArray[0] === colorArray[1]){
  box.style.display= "none"
      alert("You win")
      location.reload()
  }
    
    
    
    
    
  }
