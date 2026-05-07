// Small interaction polish: smooth hover focus state for clickable controls.
document.querySelectorAll(".icon-btn, .nav a, .login").forEach((element) => {
  element.addEventListener("focus", () => {
    element.style.opacity = "0.65";
  });

  element.addEventListener("blur", () => {
    element.style.opacity = "";
  });
});
