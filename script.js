const toggle=document.querySelector('.nav-toggle');const menu=document.querySelector('.menu');if(toggle&&menu){toggle.addEventListener('click',()=>menu.classList.toggle('open'));}
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const href=a.getAttribute('href');if(href.length>1){e.preventDefault();document.querySelector(href).scrollIntoView({behavior:'smooth'});menu?.classList.remove('open');}});});
document.getElementById('year').textContent=new Date().getFullYear();
