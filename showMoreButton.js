const showMoreBtn = document.getElementsByClassName("speaker-more-btn")[0];
const speakersContainer =
  document.getElementsByClassName("speakers-container")[0];

showMoreBtn.addEventListener("click", () => {
  speakersContainer.classList.toggle("active");
  if (showMoreBtn.textContent == "SHOW LESS") {
    showMoreBtn.textContent = "MORE";
  } else {
    showMoreBtn.textContent = "SHOW LESS";
  }
});
