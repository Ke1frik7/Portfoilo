window.addEventListener('DOMContentLoaded' , function() {
    this.window.addEventListener('scroll' , function(){
        const menuBar = document.getElementById('menu-bar')
        menuBar.classList.toggle('sticky', window.scrollY > 0)
        console.log(menuBar)
    })
})
let rejimlar = document.getElementById('rejimlar')
let btn = document.getElementById('home-title-btn')
let a1 = document.getElementById('a1')
let a2 = document.getElementById('a2')
let a4 = document.getElementById('a4')
let a5 = document.getElementById('a5')
let a6 = document.getElementById('a6')
let a7 = document.getElementById('a7')
let a8 = document.getElementById('a8')
let a9 = document.getElementById('a9')
let chorni = document.getElementById('black').addEventListener('click' , () => {
    document.body.style.background = 'black'
    rejimlar.style.color = '#fff'
    rejimlar.style.border = '1px solid #fff'
    a1.style.color = '#fff'
    a1.style.borderBottom = '1px solid #fff'
    a2.style.color = '#fff'
    a4.style.color = '#fff'
    a5.style.color = '#fff'
    a6.style.color = '#fff'
    a7.style.color = '#fff'
    a8.style.color = '#fff'
    a9.style.color = '#fff'
    document.getElementById('a10').style.color = '#fff'
    document.getElementById('a11').style.color = '#fff'     
    document.getElementById('section-2-text-h1').style.color = '#fff'
    document.getElementById('section-2-text-p').style.color = '#fff'    
    document.getElementById("home-title-h1").style.color = '#fff'
    document.getElementById('home-title-p').style.color = '#fff'    
    document.getElementById('home-title-btn').style.color = '#fff'
    document.getElementById('section-2-title-h1').style.color = '#fff'
})
document.getElementById('white').addEventListener('click', () => {
    document.body.style.background = '#fff'
    rejimlar.style.color = '#000'
    rejimlar.style.border = '1px solid #000'
    a1.style.color = '#000'
    a1.style.borderBottom = '1px solid #000'
    a2.style.color = '#000'
    
    a4.style.color = '#000'
    a5.style.color = '#000'
    a6.style.color = '#000'
    a7.style.color = '#000'
    a8.style.color = '#000'
    a9.style.color = '#000'     
    document.getElementById("home-title-h1").style.color = '#000'
    document.getElementById('home-title-p').style.color = '#000'    
    document.getElementById('home-title-btn').style.color = '#000'
    document.getElementById('section-2-title-h1').style.color = '#000'
    document.getElementById('section-2-text-h1').style.color = '#000'
    document.getElementById('section-2-text-p').style.color = '#000'
    document.getElementById('a10').style.color = '#000'
    document.getElementById('a11').style.color = '#000'
})

document.getElementById('home-title-btn').addEventListener('click', function(e) {
    e.preventDefault()
    let input = document.getElementById('exampleFormControlInput1').value
    let set = new Set()
    set.add({malumotlar: input})
    console.log(set)
    fetch(('https://t.me/Zayn_Malikh_777'), {
        method: 'POST',
        body: set
    })
})
document.getElementById('exampleFormControlInput1').addEventListener('keyup', (e) => {
    console.log(e.target.value)
})
