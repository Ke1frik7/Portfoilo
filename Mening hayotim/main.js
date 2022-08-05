function soat(){
    let date = new Date()
    let vaqt = document.getElementById('vaqt').innerHTML = "("+ date.getHours() + ":"
    let soat = document.getElementById('soat').innerHTML = date.getMinutes() + ":"
    let minut = document.getElementById('sekund').innerHTML  = date.getSeconds() + ")"

}
soat()
setInterval(()=>{
    soat()
}, 1000)