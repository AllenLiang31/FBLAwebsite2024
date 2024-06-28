//Adding an event listener to look for incorrect inputs
document.addEventListener('DOMContentLoaded', function () {
    //Get reference of the following inputs
    const form = document.getElementById('CreateAccount');
    const passwordInput = form.querySelector('input[type="password"]');
    const confirmPasswordInput = form.querySelector('input[placeholder="Confirm Password"]');
    const emailInput = form.querySelector('input[placeholder="Email Address"]');
    //create error messages 
    const errorMessagePassword = document.createElement('div');
    errorMessagePassword.classList.add('input-error-message');
    errorMessagePassword.textContent = 'Passwords do not match';
    const errorMessageEmail = document.createElement('div');
    errorMessageEmail.classList.add('input-error-message');
    errorMessageEmail.textContent = 'Invalid email address';
    //checking if the password matches 
    confirmPasswordInput.addEventListener('input', function () {
        //if it do not match then display error
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.parentNode.appendChild(errorMessagePassword);
        } else {
            //if it does then remove the before error message 
            const existingErrorMessage = confirmPasswordInput.parentNode.querySelector('.input-error-message');
            if (existingErrorMessage && existingErrorMessage.textContent === 'Passwords do not match') {
                existingErrorMessage.remove();
            }
        }
    });

    //Check if the email input is a valid email
    emailInput.addEventListener('input', function () {
        const email = emailInput.value;
        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        //if not print error message
        if (!isValidEmail) {
            emailInput.parentNode.appendChild(errorMessageEmail);
        } else {
            //If it does then remove the before error message 
            const existingErrorMessage = emailInput.parentNode.querySelector('.input-error-message');
            if (existingErrorMessage && existingErrorMessage.textContent === 'Invalid email address') {
                existingErrorMessage.remove();
            }
        }
    });

    //check if it should submit or not
    form.addEventListener('submit', function (event) {
        const isValidEmail = /\S+@\S+\.\S+/.test(emailInput.value);
        if (passwordInput.value !== confirmPasswordInput.value || !isValidEmail) {
            event.preventDefault();
            //if either email input and password do not match then don't submit
            if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordInput.parentNode.appendChild(errorMessagePassword);
            }
            if (!isValidEmail) {
                emailInput.parentNode.appendChild(errorMessageEmail);
            }
        }
    });
});

// Compatibility with phones for navigation-bar 

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navigation-bar") {
      x.className += " responsive";
    } else {
      x.className = "navigation-bar";
    }
  }

  //job opening, creating objects for each job
  const jobs =[
    {
        title:"Stir Fry Chef ($17/hr)",
        image:"pictures/Image for stir fry chef.png",
        details:"#",
        openPosition:"#"
        
      },
    
      {
        title:"Fryer Chef ($17/hr)",
        image:"pictures/Image for fryer chef.png",
        details:"#",
        openPosition:"#"
    
      },
      {
        title:"Preparation Chef ($17/hr)",
        image:"pictures/Image for prep chef.png",
        details:"#",
        openPosition:"#"
    
      },
      {
        title:"Customer service specialist ($16/hr)",
        image:"pictures/Image for customer service spec.png",
        details:"#",
        openPosition:"#"
    
      },
      {
        title:"Driver ($10/hr + tips)",
        image:"pictures/Image for driver.png",
        details:"#",
        openPosition:"#"
    
      },
      {
        title:"Waiter/Waitress ($16/hr)",
        image:"pictures/Image for waiter.png",
        details:"#",
        openPosition:"#"
    
      },

  ];
  

  const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Job`;
} else {
  jobsHeading.innerHTML = `${jobs.length} Jobs`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`;
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`;
      }

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      jobCard.appendChild(openPositions);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});
  


