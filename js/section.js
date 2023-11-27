const men=document.querySelector('.fa-bars');
const closeb=document.querySelector('.fa-times');
const nlist=document.querySelector('.nlist');
men.addEventListener('click',()=>{
    nlist.style.width='250px';
})

closeb.addEventListener('click',()=>{
    nlist.style.width=0;
})