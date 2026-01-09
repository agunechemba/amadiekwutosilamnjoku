// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    const target=document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});

// Fade-in on scroll
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.2});

document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));




/*/ Mobile menu toggle
const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuBtn.addEventListener('click',()=>{
  nav.classList.toggle('open');
}); */







// Grab the toggle button and nav links
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');

  // Toggle menu open/close when clicking the hamburger button
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // Close the menu when any nav link is clicked (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
    });
  });








// Year in footer
document.getElementById('year').textContent=new Date().getFullYear();