
let ui = document.querySelector('ul')

for (let i = 0; i < 5; i++) {
    let newli = document.createElement('li')
    let userinput = prompt("enter your text li :")
    newli.innerHTML = userinput
   
    ui.append(newli)
}




console.log(newli);


