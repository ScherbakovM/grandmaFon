let preloader = document.getElementById('preloader');
window.addEventListener('load', () =>{
    preloader.classList.add('hide');
    setTimeout(() => {
    preloader.remove();
    }, 800)
})