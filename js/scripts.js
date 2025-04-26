
const navLinks = document.querySelectorAll('.blackspace a');

navLinks.forEach(link => {

    link.addEventListener('mouseover', () => {
        link.style.transition = "font-size 0.3s ease-in-out";
        link.style.fontSize = "26px";
    });


    link.addEventListener('mouseout', () => {
        link.style.fontSize = "inherit"; // or use "16px" if that's your base size
    });
});