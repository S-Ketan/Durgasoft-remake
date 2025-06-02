function showDropdown() {
  document.getElementById("coursesDropdown").classList.add("show");
}
function hideDropdown() {
  document.getElementById("coursesDropdown").classList.remove("show");
}

const closeBtn = document.querySelectorAll(".close-btn");
const adContainer = document.querySelector(".special-offer-carousel");
function closeAd() {
  closeBtn.forEach((btn) => (btn.style.display = "none"));
  if (adContainer) adContainer.style.display = "none";
}

availableCourses = [
  {
    Subject: "Full Stack Java",
    image: "Java.jpeg",
    Instructor: "Mr. NagoorBabu",
    Date: "2023-10-01",
    Duration: "3 months",
    Price: "Rs. 5000",
  },

  {
    Subject: "Spring Boot",
    image: "SpringBoot.jpeg",
    Instructor: "Dr. Smith",
    Date: "2023-10-01",
    Duration: "3 months",
    Price: "Rs. 10000",
  },
  {
    Subject: "Full Stack Python",
    image: "Python.jpeg",
    Instructor: "Mr. Mohan Reddy",
    Date: "2023-10-01",
    Duration: "3 months",
    Price: "Rs. 10000",
  },
  {
    Subject: "Oracle",
    image: "Oracle.jpeg",
    Instructor: "Mr. Ahmad Shareef",
    Date: "2023-10-01",
    Duration: "3 months",
    Price: "Rs. 5000",
  },
  {
    Subject: "React JS",
    image: "React.jpeg",
    Instructor: "Mr. Ramesh",
    Date: "2023-10-01",
    Duration: "2 months",
    Price: "Rs. 3000",
  },
  {
    Subject: "DevOps With AWS and Azure",
    image: "DevopsAWS.jpeg",
    Instructor: "Mr. Maha",
    Date: "2023-10-01",
    Duration: "4 months",
    Price: "Rs. 15000",
  },
  {
    Subject: "Core Java",
    image: "CoreJava.jpeg",
    Instructor: "Dr. Smith",
    Date: "2023-10-01",
    Duration: "5 months",
    Price: "Rs. 7000",
  },
  {
    Subject: "SQL Server Development",
    image: "SQLServer.jpeg",
    Instructor: "Mr. Mohan Reddy",
    Date: "2025-05-28",
    Duration: "2 months",
    Price: "Rs. 5000",
  },
  {
    Subject: ".NET Core",
    image: "DotNetCore.jpeg",

    Instructor: "Mr. Mohan Reddy",
    Date: "2023-10-01",
    Duration: "3 months",
    Price: "Rs. 8000",
  },
];
function courseStartsToday(course) {
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0]; // Format: YYYY-MM-DD

  const courseDateStr = new Date(course.Date).toISOString().split("T")[0];

  return courseDateStr === todayStr;
}

function createCourseCard(course, limit = availableCourses.length) {
  if (courseStartsToday(course)) {
    return `
        <div class="course-card today">
          <img
            src="/assets/${course.image || "logo.jpg"}"
            alt="Java Programming Course"
            class="course-image"
          />
          <div class="course-content">
            <h3>${course.Subject}</h3>
            <p><span class="label">Instructor:</span> ${course.Instructor}</p>
            <p><span class="label">Date:</span>${course.Date} </p>
            <p><span class="label">Duration:</span> ${course.Duration}</p>
            <p><span class="label">Price:</span> ${course.Price}</p>
          </div>
          <a href="#" class="enroll-btn">Enroll Now</a>
        </div>
    `;
  } else {
    return `
        <div class="course-card ">
          <img
            src="/assets/${course.image || "logo.jpg"}"
            alt="Java Programming Course"
            class="course-image"
          />
          <div class="course-content">
            <h3>${course.Subject}</h3>
            <p><span class="label">Instructor:</span> ${course.Instructor}</p>
            <p><span class="label">Date:</span>${course.Date} </p>
            <p><span class="label">Duration:</span> ${course.Duration}</p>
            <p><span class="label">Price:</span> ${course.Price}</p>
          </div>
          <a href="#" class="enroll-btn">Enroll Now</a>
        </div>
    `;
  }
}

function displayCourses(limit) {
  const coursesContainer = document.getElementById("coursesContainer");
  coursesContainer.innerHTML = availableCourses
    .slice(0, limit)
    .map(createCourseCard)
    .join("");
}

window.onload = function () {
  displayCourses(4);
  console.log("Today's date is: " + new Date().toLocaleDateString());
};
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Auto-slide every 180 seconds (3 minutes)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 180000);

// Manual dot navigation
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentSlide = parseInt(dot.getAttribute("data-slide"));
    showSlide(currentSlide);
  });
});

function viewMore() {
  const viewBtn = document.getElementById("viewMoreBtn");
  displayCourses(availableCourses.length);
  viewBtn.style.display = "none";
}
