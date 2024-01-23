// Set the default selected section at 'About'
let aboutSection = document.querySelectorAll('.menu-bar a')[0];
aboutSection.classList.add('selected');

// Change Selected Section
function selectOption(index) {
    let menuItems = document.querySelectorAll('.menu-bar a');    
    for (let i = 0; i < menuItems.length; i++) {
        if (i===index) {
            menuItems[i].classList.add('selected');
        }
        else {
            menuItems[i].classList.remove('selected');
        }
    }
}

// Logo handling
let logo = document.querySelector('#logo');
logo.addEventListener('mouseover', function() {

    this.src = 'Assets/logo/logo_light_selected.png';
});

logo.addEventListener('mouseout', function() {
    this.src='Assets/logo/logo_light.png';
});

// Tracking the section I am at when scrolling the window
// window.addEventListener('scroll', function() {
//     let sections = document.querySelectorAll('section');
//     let menuItems = document.querySelectorAll('.menu-bar li a');

//     let currentSection = '';

//     sections.forEach((section) => {
//         let sectionTop = section.offsetTop;
//         let sectionHeight = section.clientHeight;
//         if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
//             currentSection = section.getAttribute('id');
//         }
//     });

//     menuItems.forEach((item) => {
//         item.classList.remove('selected');
//         const href = item.getAttribute('href').substring(1);
//         if(href === currentSection) {
//             item.classList.add('selected');
//         }
//     });
// });


// Get the menu items and sections
const menuItems = document.querySelectorAll('.menu-bar a');
const sections = Array.from(menuItems).map(item => document.querySelector(item.getAttribute('href')));

// Function to determine which section is currently visible
function getVisibleSection() {
  const scrollPosition = window.scrollY;
  let visibleSection = sections[0];

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      visibleSection = section;
    }
  });

  return visibleSection;
}

// Function to update the selected menu item based on the visible section
function updateSelectedMenuItem() {
  const visibleSection = getVisibleSection();

  menuItems.forEach(item => {
    if (item.getAttribute('href') === `#${visibleSection.id}`) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });
}

// Event listener for scroll events
window.addEventListener('scroll', updateSelectedMenuItem);

// Initial update when the page loads
updateSelectedMenuItem();



// View Resume
const resumeButton = document.getElementById('resume-button');
resumeButton.addEventListener('click', function() {
    window.open('My Resume/Phuc (Daniel) Tran - Resume.pdf', '_blank')
});


// Skills & Certificate radio button
// const skillsDiv = document.querySelector('#skills');
// const certDiv = document.querySelector('#certification');
// const skillsButton = document.querySelector('#btn-skills');
// const certButton = document.querySelector('#btn-cert');

// skillsButton.addEventListener('click', () => {
//     skillsDiv.style.display = "block";
//     certDiv.style.display = "none";
//     certButton.style.backgroundColor = "white";
//     certButton.style.color = "black";
//     skillsButton.style.backgroundColor = "#3a86ff";
//     skillsButton.style.color = "white";
// });

// certButton.addEventListener('click', () => {
//     skillsDiv.style.display = "none";
//     certDiv.style.display = "flex";
//     skillsButton.style.backgroundColor = "white";
//     skillsButton.style.color = "black";
//     certButton.style.backgroundColor = "#3a86ff";
//     certButton.style.color = "white";
// });



function toggleContent() {
    const toggleBox = document.querySelector('.toggle-box');
    const skillsDiv = document.querySelector('#skills');
    const certDiv = document.querySelector('#certification');
    const skillsButton = document.querySelector('#btn-skills');
    const certButton = document.querySelector('#btn-cert');

    skillsButton.classList.toggle('active');
    
    if (skillsButton.classList.contains('active')) {
        certButton.classList.remove('active')
        skillsDiv.style.display = "block";
        certDiv.style.display = "none";

    }
    else {
        certButton.classList.add('active')
        certDiv.style.display = "block";
        skillsDiv.style.display = "none";
    }
  }
  

  