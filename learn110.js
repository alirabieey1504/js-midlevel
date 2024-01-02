





// function car (model,make,year){
//     this.make=make
//     this.model=model
//     this.year=year
// }

// car.prototype.run=function(){
//     return 'run'
// }

// let car3=new car('ford','mustang',1960)


let ajaxs   =new XMLHttpRequest()
console.log(ajaxs);
ajaxs.open('POST','')

// ajaxs.open('GET','https://jsonplaceholder.typicode.com/users')

// ajaxs.onreadystatechange=function(){
//     if(this.readyState==XMLHttpRequest.DONE){
//        if(this.status==0){
//         console.log('done',this.responseText);
//        }else if(this.status==404){
//         console.log('user not found');
//        }
//     }
// }




// ajaxs.addEventListener('load',function(){
//           if(this.readyState==XMLHttpRequest.DONE){
//        if(this.status==0){
//         console.log('done',this.responseText);
//     }else if(this.status==404){
//         console.log('user not found');
//        }
//     }
// })


// ajaxs.send()
