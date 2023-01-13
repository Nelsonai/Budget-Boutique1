const navSlide=()=>{
    const burger = document.querySelector(".burger")
    const nav= document.querySelector(".navlinks")
    burger.addEventListener("click",()=>{
        nav.classList.toggle("nav-active")
        burger.classList.toggle("close")
    })


}
navSlide()


// Wait for the window to load
window.onload = function() {
    // Select all elements with the class 'kids'
    const textElements = document.querySelectorAll('.kids');
  
    // Create a new IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Check if the text element is visible in the viewport
        if (entry.intersectionRatio > 0) {
          // Add the 'active' class to the text element to start the animation
          entry.target.classList.add('active');
        } else {
          // Remove the 'active' class to stop the animation
          entry.target.classList.remove('active');
        }
      });
    });
  
    // Iterate through all text elements and observe each one
    textElements.forEach((textElement) => {
      observer.observe(textElement);
    });
};
