const modalcontainer=document.querySelector(".modal-overlay");
const closebtn=document.querySelector(".close-btn");
const modalbtn=document.querySelector(".modal-btn");

modalbtn.addEventListener('click', function(){
    modalcontainer.classList.add('open-modal');
})
closebtn.addEventListener('click', function(){
    modalcontainer.classList.remove('open-modal');
})