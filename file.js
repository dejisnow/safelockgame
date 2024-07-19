window.onload=()=>{
    
   //Lock key variables
   let keys =  document.querySelectorAll(".key")
   
   let lockBtn = document.querySelector(".lock")
    let topLock = document.querySelector(".topLock")
    
    let array = [];
    
    keys.forEach((key)=>{
  key.addEventListener("click",(e)=>{
  
   array.push(e.target.innerHTML)
     console.log(array)
    
  })})
  
  
  lockBtn.addEventListener("click",()=>{
      
      topLock.classList.toggle("active")
      topLock.style.top = "-5%"
      
      
  })
    
    
    
    
    
}
