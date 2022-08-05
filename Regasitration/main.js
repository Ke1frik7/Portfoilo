let form = document.getElementById('form').addEventListener('submit' , (e) => {
    e.preventDefault()
    let ism = document.getElementById('ism').value
    console.log(ism)
    let familya = document.getElementById('familya').value
    console.log(familya)
    let email = document.getElementById('email').value
    console.log(email)
    let parol = document.getElementById("parol").value
    console.log(parol)
    let textarea = document.getElementById('textarea').value
    console.log(textarea)

    document.getElementById('check').addEventListener('click', shox )
    function shox(){
        console.log('Bajarildi')
    }
    setTimeout(() => {
        confirm('Yuborildi ... ')
        let set = new Set()
        set.add({ism: ism})
        set.add({familya: familya})
        set.add({email: email})
        set.add({parol: parol})
        set.add({textarea: textarea})
        console.log(set)
    }, 1000)        
})