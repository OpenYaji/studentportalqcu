
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top>= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'left'});

const typed = new Typed ('.multiple-text',{
    strings: ['EDUCATION','COMPUTER STUDIES','ENGINEERING'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const form = document.getElementById('contactForm');
const responseDiv = document.getElementById('form-response');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  responseDiv.innerHTML = "Sending...";

  fetch(form.action, {
    method: form.method,
    body: new FormData(form)
  })
  .then(response => {
    if (response.ok) {
      responseDiv.innerHTML = "Thank you for your message!";
      form.reset();
    } else {
      console.error("Formspree Error:", response.status, response.statusText);
      responseDiv.innerHTML = "Thank you for your message!";
      form.reset(); 
    }
  })
  .catch(error => {
    console.error("Fetch Error:", error);
    responseDiv.innerHTML = "Thank you for your message!"; 
    form.reset();
  });
});

const studentPortalLink = document.querySelector('nav.navbar a[href="#loginform"]');
const loginFormOverlay = document.getElementById('login-form-overlay');

studentPortalLink.addEventListener('click', (event) => {
    event.preventDefault();
    loginFormOverlay.style.display = 'flex';
});

function closeLoginForm() {
    loginFormOverlay.style.display = 'none';
}

loginFormOverlay.addEventListener('click', (event) => {
    if (event.target === loginFormOverlay) {
        closeLoginForm();
    }
});

function closeLoginForm() {
  document.getElementById("login-form-overlay").style.display = "none";
}

function validateLogin() {
  console.log("validateLogin called");

  const studentID = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("studentID:", studentID);
  console.log("password:", password);

  document.getElementById("loading-screen").style.display = "flex";

  if (studentID === "23-0000" && password === "123") {
    console.log("Login successful");

    setTimeout(() => {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("success-notification").style.display = "block";

      setTimeout(() => {
        console.log("Redirecting to student_portal.html");
        window.location.href = "student.html";
      }, 1500);
    }, 2000);
  } else {
    console.log("Login failed");

    document.getElementById("loading-screen").style.display = "none";
    alert("Invalid student ID or password.");
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  console.log("DOM fully loaded");
  document.getElementById('loading-screen').style.display = 'none';
});
