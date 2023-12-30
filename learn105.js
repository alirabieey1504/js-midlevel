
let username=prompt('enter the user name :')

let newdiv=document.createElement('div')
newdiv.innerHTML=username
newdiv.setAttribute('id','username')
newdiv.setAttribute('class','totle')
newdiv.style.color='black'
console.log(newdiv);