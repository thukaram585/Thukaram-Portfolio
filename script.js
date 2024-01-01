var typed = new Typed('#element', {
    strings: ['Web Developer,','Full Stack Developer'],
    typeSpeed: 50,
});


var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

  function opentab (tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// ###########################
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// ####################################
const scriptURL = 'https://script.google.com/macros/s/AKfycbx-lzTAvGM7_qNHo6IS4mq8noYL6wme0sfekKubP7DT9cu2BNM6y47EFVbTdtU3HTlN/exec'
const form = document.forms['submit-to-google-sheet']
const msgSent = document.getElementById("msg-sent")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msgSent.innerHTML="Message sent succesfully"
      setTimeout(function(){
        msgSent.innerHTML=""
      }, 5000);
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


// #############  -- theme

function changeMode(){
  let bodyElement = document.querySelector("body")
    console.log("Button Clicked")
    bodyElement.classList.toggle("dark")
}