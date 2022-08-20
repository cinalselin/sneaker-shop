// ====================== COOKIE REQUEST ======================

const modalCookie = document.getElementById("modalCookie");

document.getElementById("acceptCookie").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("du hast geklickt");
  document.cookie = `username=user1; Max-Age=1000000000; path=/`;
  modalCookie.style.display = "none";
  document.getElementById("blurBackground").classList.remove("blur");
});

// ====================== IF USER ALREADY VISITED THE SITE THEN DONT ASK FOR COOKIE REQUEST ======================

if (document.cookie !== "") {
  modalCookie.style.display = "none";
  document.getElementById("blurBackground").classList.remove("blur");
}

// ====================== IF USER REJECTS COOKIES DONT SET ANY  ======================

document.getElementById("rejectCookie").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("KEINE COOKIES");
  modalCookie.style.display = "none";
  document.getElementById("blurBackground").classList.remove("blur");
});
