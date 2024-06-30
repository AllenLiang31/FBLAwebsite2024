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
let slideIndex = 1;
showSlides(slideIndex);


//next and previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


// if the slide index exceeds the max amount then it resets to 1, hides all slides except the one being shown, makes the dots active and deactivate
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


