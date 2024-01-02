
let inputb = document.getElementById('inputd')
let todo = document.querySelector('.add')
let uielemtodo=document.querySelector('.todos')



function addnewtodo(newtodovalu) {
    let newli = document.createElement('li')
    newli.className = 'list-group-item d-flex justify-content-between align-items-center'
    let newspan = document.createElement('span')
    newspan.className = 'span'
    newspan.innerHTML = newtodovalu;
    
    let newresicle=document.createElement('i')
    newresicle.className='fa fa-trash-o delete'
    newresicle.addEventListener('click',function(event){
        
        event.target.parentElement.remove()
    })
    newli.append(newspan,newresicle)
    uielemtodo.append(newli)
  
}


todo.addEventListener('submit', function (e) {
    e.preventDefault()

})

inputb.addEventListener('keydown', function (event) {
    let newtodovalu = event.target.value.trim()
    if (event.keyCode === 13) {
        if (newtodovalu) {
          
            addnewtodo(newtodovalu)
            inputb.value=''
        }
    } else {

    }
})
