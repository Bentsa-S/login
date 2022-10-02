let sensor = true
let inputs = document.querySelectorAll('input')


document.querySelector('.sing-up').addEventListener('click', ()=> {
    if (sensor){
        let containers = document.querySelectorAll('.input-container')
        for (let container of containers) {
             container.classList.add('active')
        }
        document.querySelector('#button').value = 'зарегестрироваться'
        document.querySelector('.sing-up').textContent = 'log in'
        document.querySelector('#wrap').classList.add('input-wrap')
        sensor = false

    }else {
        let clasActive = document.querySelectorAll('.active')
        for (let active of clasActive){
            active.classList.remove('active')
        }
        document.querySelector('#button').value = 'войти'
        document.querySelector('.sing-up').textContent = 'sing up'
        document.querySelector('#wrap').classList.remove('input-wrap')
        sensor = true
    }
})
for (let input of inputs){
    input.addEventListener('blur', () =>{
        if (input.value === ''){
            let div = document.createElement('div')
            div.classList.add('error')
            div.textContent = `заповните стороку ${input.name}`
            input.after(div)
            input.style.borderBottom = '2px solid #bb4545'
        }else {
            let div = document.querySelector(`.error`)
            div.remove()
            input.style.borderBottom = '2px solid white'

        }
    })
}


