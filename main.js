const modal =document.getElementById('modal')
const closeBtn =document.getElementById('closeBtn')
const addBtn =document.getElementById('addBtn')
const container =document.getElementById('container')
const overly =document.getElementById('overly')

addBtn.addEventListener("click",()=>{
    modal.classList.remove("hidden")
    overly.classList.remove("hidden")
})
closeBtn.addEventListener("click",()=>{
    modal.classList.add("hidden")
    overly.classList.add("hidden")
})

document.addEventListener('keydown',(e)=>{
    console.log(e);
    
 if (e.key==="Escape") {
    modal.classList.add("hidden")
    overly.classList.add("hidden")
}else{
    console.log("Bu boshqa tugma");
    
}
})
overly.addEventListener("click",()=>{
    modal.classList.add("hidden")
    overly.classList.add("hidden")
})