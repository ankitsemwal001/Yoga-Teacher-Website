// ================= AOS INIT =================
document.addEventListener("DOMContentLoaded", () => {

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 120
    });
  }

});





// ================= CONTACT FORM =================

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  if (!form) return;

  const button = document.getElementById("submitBtn");
  const loader = document.getElementById("loader");
  const btnText = document.getElementById("btnText");
  const modal = document.getElementById("successModal");

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");

    nameError.classList.add("hidden");
    phoneError.classList.add("hidden");
    messageError.classList.add("hidden");

    if (name.length < 2) {
      nameError.classList.remove("hidden");
      return;
    }

    if (phone.length < 10) {
      phoneError.classList.remove("hidden");
      return;
    }

    if (message.length < 3) {
      messageError.classList.remove("hidden");
      return;
    }

    button.disabled = true;
    loader.classList.remove("hidden");
    btnText.textContent = "Opening WhatsApp...";

    const text =
`New Yoga Enquiry

Name: ${name}
Phone: ${phone}
Message: ${message}`;

    const whatsapp =
      "https://wa.me/918979400645?text=" + encodeURIComponent(text);

    setTimeout(() => {

      window.open(whatsapp, "_blank");

      loader.classList.add("hidden");
      btnText.textContent = "Send Enquiry";
      button.disabled = false;

      modal.classList.remove("hidden");
      modal.classList.add("flex");

      form.reset();

      setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }, 4000);

    }, 900);

  });

});


// ================= CLOSE MODAL =================
function closeModal() {
  const modal = document.getElementById("successModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}



// feedback

const feedbackBtn = document.getElementById("feedbackBtn");
const feedbackModal = document.getElementById("feedbackModal");
const closeFeedback = document.getElementById("closeFeedback");
const whatsappReview = document.getElementById("whatsappReview");

feedbackBtn.addEventListener("click", () => {
  feedbackModal.classList.remove("hidden");
  feedbackModal.classList.add("flex");
});

closeFeedback.addEventListener("click", () => {
  feedbackModal.classList.add("hidden");
});

whatsappReview.addEventListener("click", () => {

  const message = encodeURIComponent(
`Namaste Gokul ji 🙏

I wanted to share my feedback about your yoga classes:

⭐ Rating: _____ /5

My experience:
________________________________

Thank you for the guidance!`
  );

  const phone = "918979400645";

  const whatsappURL = `https://wa.me/${phone}?text=${message}`;

  window.open(whatsappURL, "_blank");

});


window.addEventListener("scroll", () => {

const feedbackBtn = document.getElementById("feedbackBtn");

if(window.scrollY > 600){

feedbackBtn.classList.add("feedback-breath");

}

});