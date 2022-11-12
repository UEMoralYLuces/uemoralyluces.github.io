const alemania =document.querySelector('.alemania');
const menu =document.querySelector('.menu-navegacion');

console.log(menu)
console.log(alemania)

alemania.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target !=menu && e.target != alemania){

            menu.classList.toggle("spread")

        }

})