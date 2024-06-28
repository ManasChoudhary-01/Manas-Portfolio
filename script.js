// INITIALIZING AOS ANIMATION ON START
AOS.init(
  {
    offset: 200,
    duration: 1000,
  }
);


// SETTING PRE LOADER 

function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4200)
}

loaderAnimation()

// CIRCULAR TEXT EFFECT

const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
  (char, i) =>
    `<span style="transform:rotate(${i * 10.2}deg)">${char}</span>`
).join("");


// TYPING TEXT ANIMATION

let typed = new Typed((".proffesion"), {
    strings: ["Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// ACTIVE LINKS ANIMATION 

const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop-100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
    var element = document.querySelector('header nav a[href="#' + id + '"]');
    if (element) {
        element.classList.add('active');
    }
    };
  });
};


// POPUP FUNCTION AND ITS ANIMATION 

const work1 = document.getElementsByClassName("work1")[0];
const work2 = document.getElementsByClassName("work2")[0];
const work3 = document.getElementsByClassName("work3")[0];
const frontEndTab = document.getElementsByClassName("med6")[0];
const uiDesignTab = document.getElementsByClassName("med6")[1];
const othersTab = document.getElementsByClassName("med6")[2];

function popup1(){
    work1.style.display="flex";
    work2.style.display="none";
    work3.style.display="none";
    work1.classList.add("fadeIn");
    work2.classList.remove("fadeIn");
    work3.classList.remove("fadeIn");
    frontEndTab.classList.add("active1");
    uiDesignTab.classList.remove("active1");
    othersTab.classList.remove("active1");
}
function popup2(){
    work1.style.display="none";
    work2.style.display="flex";
    work3.style.display="none";
    work1.classList.remove("fadeIn");
    work2.classList.add("fadeIn");
    work3.classList.remove("fadeIn");
    frontEndTab.classList.remove("active1");
    uiDesignTab.classList.add("active1");
    othersTab.classList.remove("active1");
}
function popup3(){
    work1.style.display="none";
    work2.style.display="none";
    work3.style.display="flex";
    work1.classList.remove("fadeIn");
    work2.classList.remove("fadeIn");
    work3.classList.add("fadeIn");
    frontEndTab.classList.remove("active1");
    uiDesignTab.classList.remove("active1");
    othersTab.classList.add("active1");
}

//  IMAGE-SLIDER

let flag = 0;

function controller(x) {
  flag = flag + x;
  slideshow(flag);
}

slideshow(flag);

function slideshow(num) {
  let slides = document.getElementsByClassName('slide');


  if (num == slides.length) {
    flag = 0;
    num = 0;
  }

  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }

  for (let y of slides) {
    y.style.display = "none";
  }

  slides[num].style.display = "block";

}

// FROM VALIDATION

function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var nameRegex = /^[A-Za-z ]{2,50}$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameRegex.test(name)) {
      alert('Name must contain at least 2 characters and only alphabets');
      return false;
  }

  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return false;
  }

  if (message.length < 2) {
      alert('Message must contain at least 2 characters');
      return false;
  }

  return true;
}

// HAMBURGER MENU FUNCTION 

function onClickMenu() {
  document.querySelector("nav").classList.toggle("active");
}  

// DISCUSSION FORM 

const entryForm = document.getElementById('disussForm');
const entriesContainer = document.getElementById('entries');

entryForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('d_name').value;
    const message = document.getElementById('d_message').value;
    const entry = document.createElement('div');
    const now = new Date();
    entry.className = 'entry';
    entry.innerHTML = `<p>${message}</p><p><strong>By ${name}</strong> - ${now.toLocaleString()}</p>`;
    entriesContainer.appendChild(entry);
    entryForm.reset();
});



  
