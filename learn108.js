
let btnb=document.getElementById('btnbulb')
let chane = document.getElementById('bright')
let flag=true;
function change() {
  if(flag){
     chane.setAttribute('src', './bulbon.gif')  
     btnb.innerHTML='turn off'
      flag=false

    }else if(!flag){
    chane.setAttribute('src', './bulboff.gif')
    btnb.innerHTML='turn on'
      flag=true     
    }  
}





