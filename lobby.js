let playNow = document.getElementById("playNow");
let options = document.getElementById("options");
let modes = document.getElementById("modes");
let back = document.getElementById("back");
let credits = document.getElementById("credits");
let creditsList = document.getElementById("creditsList");
let backCredits = document.getElementById("backCredits");
let backPlay = document.getElementById("backPlay");
let backInstructions = document.getElementById("backInstructions");
let instructions = document.getElementById("instructions");

instructionsList.style.display = "none";
modes.style.display = "none";
creditsList.style.display = "none";

backPlay.addEventListener("click", function () {
  options.style.display = "flex";
  modes.style.display = "none";
});
backCredits.addEventListener("click", function () {
  options.style.display = "flex";
  creditsList.style.display = "none";
});
backInstructions.addEventListener("click", function () {
  options.style.display = "flex";
  instructionsList.style.display = "none";
});
playNow.addEventListener("click", function () {
  options.style.display = "none";
  modes.style.display = "flex";
});
credits.addEventListener("click", function () {
  options.style.display = "none";
  creditsList.style.display = "flex";
});
instructions.addEventListener("click", function () {
  options.style.display = "none";
  instructionsList.style.display = "flex";
});
