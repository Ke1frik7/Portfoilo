// window.addEventListener('load', () => {
//     this.window.addEventListener('scroll', function(){
//         const tepa = this.document.getElementById("tepaga")
//         tepa.classList.toggle("scrolling", window > 100)
//         console.log('ishladi')
//         console.log(tepa)
//     })
// })
document.getElementById('like-1').addEventListener('click', ()=>{
    let like = document.getElementById("like-1")
    like.style.color = 'red'
    like.style.background = 'black'
    console.log('Full steak sahifaga like bosildi')
    let set  = new Set()
    set.add({fullSteak: 'Like bosildi'})
    console.log(set)
    
    fetch(('https://t.me/Zayn_Malikh_777'), {
        method: 'POST', 
        body: set
    })
})
document.getElementById('like-2').addEventListener('click', ()=>{
    let like = document.getElementById("like-2")
    like.style.color = 'red'
    like.style.background = 'black'
    console.log('Raketa sahifasiga like bosildi')
    let set  = new Set()
    set.add({raketa: 'Like bosildi'})
    console.log(set)
    
    fetch(('https://t.me/Zayn_Malikh_777'), {
        method: 'POST', 
        body: set
    })
})
document.getElementById('like-3').addEventListener('click', ()=>{
    let like = document.getElementById("like-3")
    like.style.color = 'red'
    like.style.background = 'black'
    console.log('Maqsad sahifasiga like bosildi')
    let set  = new Set()
    set.add({maqsad: 'Like bosildi'})
    console.log(set)
    
    fetch(('https://t.me/Zayn_Malikh_777'), {
        method: 'POST', 
        body: set
    })
})