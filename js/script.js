/* ================= NAVBAR COLLAPSE ================= */

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const navbarMenu = document.getElementById("navbarMenu");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const collapse = bootstrap.Collapse.getInstance(navbarMenu);

    if (collapse) {
      collapse.hide();
    }
  });
});

/* ================= BOOKING FORM ================= */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Your table has been reserved successfully! ☕");

  bookingForm.reset();

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("bookingModal"),
  );

  if (modal) {
    modal.hide();
  }
});
