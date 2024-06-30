// Compatibility with phones for navigation-bar 

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navigation-bar") {
      x.className += " responsive";
    } else {
      x.className = "navigation-bar";
    }
  }

  // Allows user to search for jobs easier
  function filterJobs() {
    //lowercase everything 
    const searchInput = document.getElementById('search').value.toLowerCase();
    const jobs = document.querySelectorAll('.job');

    //iterate over all job and then check if the input is in the title and if yes display
    jobs.forEach(job => {
        const title = job.querySelector('.job-title').textContent.toLowerCase();
        const details = job.querySelector('.details').textContent.toLowerCase();

        if (title.includes(searchInput) || details.includes(searchInput)) {
            job.style.display = '';
        } else {
            job.style.display = 'none';
        }
    });
}

// Checks for valid email on contact home of footer
//listens if submit is clicked
document.getElementById('contactForm').addEventListener('submit', function(event) {
   //get input
    var email = document.getElementById('email').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //checks if it follows the pattern if not then it displays an alert
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

//slider
const slider = document.querySelector(".slider");
const slideImages = document.querySelector(".slideImages");

const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

let counter = 1;
const size = slideImage[0].clientWidth;

slider.style.trasform = 'translateX('+(-size*counter) + 'px)';

nextButton.addEventListener('click', () => {
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', () => {
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

