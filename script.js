/* =====================================
   SHEENAVERSE JAVASCRIPT
===================================== */


// MOBILE NAVIGATION

function toggleMenu() {

    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("show");

}


// =====================================
// GALLERY IMAGE PREVIEW / ZOOM
// =====================================

function openLightbox(imageSource) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-img");

    lightboxImage.src = imageSource;

    lightbox.style.display = "flex";
}


function closeLightbox() {

    const lightbox = document.getElementById("lightbox");

    lightbox.style.display = "none";
}


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeLightbox();
    }

});


// =====================================
// CONTACT FORM EVENT HANDLING
// =====================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();


    // CHECK IF ALL FIELDS ARE FILLED

    if (name === "" ||
        email === "" ||
        subject === "" ||
        message === "") {

        alert("Please fill in all required fields before sending your message.");

        return;
    }


    // SUCCESS MESSAGE

    alert("Message sent successfully! Thank you for reaching out.");


    // CLEAR THE FORM

    contactForm.reset();

});