"use strict";

// Callback function to handle the intersection changes
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      //   entry.target.classList.remove("hidden");
    } else {
      //   entry.target.classList.add("hidden");
      entry.target.classList.remove("visible");
    }
  });
};

const observer = new IntersectionObserver(handleIntersection);

const elementsToObserve = document.querySelectorAll(".obsaver");

// Apply the observer to the selected elements
elementsToObserve.forEach((element) => {
  observer.observe(element);
});
