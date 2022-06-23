let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzARGOhXYMD8tdG4y15MStuXo7ClE_GXKNVtJbewYAKFsGrdHO3w4weVK0GXYXOf2LhNQ/exec";
const form = document.forms["hizkia-reppi-contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      alert("Terimakasih! Pesan anda sudah kami terima");
      console.log("Success!", response);
    })
    .catch((error) => {
      alert("Gagal mengirim pesan");
      console.error("Error!", error.message);
    });
});
