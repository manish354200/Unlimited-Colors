// generate random color
const changingcolors=function(){
  const hex='0123456789ABCDEF'
  let color='#'
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color
}
const startChangingColors=function(){
  document.body.style.backgroundColor=changingcolors()
}
let changing;
document.querySelector('#start').addEventListener('click',function(){
  if(!changing){ 
  changing=setInterval(startChangingColors,1000)
  }
})
document.querySelector('#stop').addEventListener('click',function(){
  clearTimeout(changing)
  changing=null
})