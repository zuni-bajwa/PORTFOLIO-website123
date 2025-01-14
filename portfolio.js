   
    AOS.init();

    const text="an SEO Content Writer based in lahore";
    let index=0;
    let speed = 100;
   function  typeWriter(params) {
       if ( index<text.length) {
           document.getElementById("typed").textContent += text.charAt(index);
           index++;
           setTimeout(typeWriter, speed);
       } else{
           setTimeout(()=>{
               reset();
           },1000)
       } 
   }
   function  reset(params) {
       index = 0;
       document.getElementById("typed").textContent = "";
       typeWriter();
   }
   typeWriter();
    
   //about animation
   const text1="SEO Content Writer";
    let index1=0;
    let speed1 = 100;
   function  typeWriter1( ) {
       if ( index1<text1.length) {
           document.getElementById("about-animation").textContent += text1.charAt(index1);
           index1++;
           setTimeout(typeWriter1, speed1);
       } else{
           setTimeout(()=>{
               reset1();
           },1000)
       } 
   }
   function  reset1(params) {
       index1 = 0;
       document.getElementById("about-animation").textContent = "";
       typeWriter1();
   }
   typeWriter1();
   
     
   
   
  
   //active button
   const button = document.querySelectorAll('.btn1');
    
   
   button.forEach((btn)=>{
     btn.addEventListener('click', function() {
       button.forEach(btn => btn.classList.remove('active'));
       this.classList.add('active');
   });
    
   })
    
   
    
   const buttons = document.querySelectorAll('.btn11');
   
   buttons.forEach((button, index) => {
       button.addEventListener('click', function() {
           // Remove active class from all buttons
           buttons.forEach(btn => btn.classList.remove('active1'));
   
           // Find the next button
           
      this.classList.add('active1');
    
       });
   });
    
   //respo header
    
   
   
   
     const hamburger = document.querySelector('.hamburger');
       const navLinks = document.querySelector('.nav-link');
       
       hamburger.addEventListener('click', function() {
         navLinks.classList.toggle('show-nav');
       });
       
    
   //contact us
   

       //scroll animation
       window.addEventListener('load', function() {
       const contentt = document.getElementById('myContent');
       contentt.classList.add('visible'); // Apply the .visible class on page load
   });
   
   
   let sections = document.querySelectorAll('section');
   let mybutton = document.getElementById("myBtn");
      window.onscroll = () => {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       mybutton.style.display = "block";
     } else {
       mybutton.style.display = "none";
     }
       
       sections.forEach(element=>{
           let off = element.offsetHeight;
    
           if ( window.scrollY >= element.offsetTop &&  window.scrollY <= element.offsetHeight+element.offsetTop) {
               element.classList.add('show');
           }else{
               element.classList.remove('show');
           }
       })
      }
    
      //goo
      function topFunction() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }
   
    
   
   
   
   const toggle = document.querySelectorAll('.toggle-btn');
   
   toggle.forEach(button => {
       button.addEventListener('click', function() {
           // Find the corresponding more-text element within the same content block
           const moreText = this.previousElementSibling.querySelector('.more-text');
           const btnText = this;
   
           if (moreText.style.display === 'none' || moreText.style.display === '') {
               moreText.style.display = 'inline';
               btnText.textContent = 'Read Less';
           } else {
               moreText.style.display = 'none';
               btnText.textContent = 'Read More';
           }
       });
   });
   
   
   


   
   const openPopupBtn = document.getElementById('ecomms'); // single button

const modal = document.getElementById('modal');
const closePopupBtn = document.querySelector('.modal-close');

openPopupBtn.addEventListener('click', function() {
  modal.classList.add('show');
});

closePopupBtn.addEventListener('click', function() {
  modal.classList.remove('show');
});