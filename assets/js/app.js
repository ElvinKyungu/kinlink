// Partie preloader
let preloader = document.querySelector('.o_page_loader');

setTimeout(()=>{
    preloader.classList.add('hidden');
},3000)

/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Supression des classes d'abord si elles existent
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Ajout des classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Supression des classes d'abord si elles existent
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})


