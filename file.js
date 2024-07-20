window.onload=()=>{
    
   //Lock key variables
   let keys =  document.querySelectorAll(".key")
   let password =  document.querySelector(".password")
   
   
   
   let lockBtn = document.querySelector(".lock")
    let topLock = document.querySelector(".topLock")
    
    let array = [];
    
    keys.forEach((key)=>{
  key.addEventListener("click",(e)=>{
   if(array.length < 6 ){
       password.innerHTML +="* "
   }
      
   array.push(e.target.innerHTML)
     console.log(array)
    
  })})
  
  
  lockBtn.addEventListener("click",()=>{
      
      topLock.classList.toggle("active")
      topLock.style.top = "-5%"
      
      
  })
    
    
    
    
    
}
