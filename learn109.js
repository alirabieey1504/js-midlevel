

let usrn = document.getElementById('usn')
let pss = document.getElementById('psw')
let btn = document.getElementById('subbtn')

function check() {
    if (usrn.value.length > 12 && pss.value.length > 8) {
        alert('ok')
    } else {
        alert('no')
    }
    console.log(pss.value);
    console.log(usrn.value);
}







