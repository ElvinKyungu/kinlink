// Partie preloader
let preloader = document.querySelector('.o_page_loader');

setTimeout(()=>{
    preloader.classList.add('hidden');
},3000)

// Menu navbar

let btnMenu = document.querySelector('.user-info .fa-bars');
let menu = document.querySelector('#navbar');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});


/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Supression des classes d'abord si elles existent
    loginIn.classList.remove('d-block')
    loginUp.classList.remove('d-none')

    // Ajout des classes
    loginIn.classList.toggle('d-none')
    loginUp.classList.toggle('d-block')
})

signIn.addEventListener('click', ()=>{
    // Supression des classes d'abord si elles existent
    loginIn.classList.remove('d-none')
    loginUp.classList.remove('d-block')

    // Add classes
    loginIn.classList.toggle('d-block')
    loginUp.classList.toggle('d-none')
})

