function enterUniverse() {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("birthdayScreen").style.display = "flex";
  const music = document.getElementById("bgMusic");
  music.volume = 0.35;
  music.play().catch(() => {});
  window.scrollTo({top:0,behavior:"smooth"});
}
function showStory() {
  document.getElementById("birthdayScreen").style.display = "none";
  document.getElementById("storyScreen").style.display = "flex";
  window.scrollTo({top:0,behavior:"smooth"});
}
function showMemories() {
  document.getElementById("storyScreen").style.display = "none";
  document.getElementById("memoriesScreen").style.display = "flex";
  window.scrollTo({top:0,behavior:"smooth"});
}
function finishWebsite() {
  document.getElementById("memoriesScreen").style.display = "none";
  document.getElementById("letterScreen").style.display = "flex";
  window.scrollTo({top:0,behavior:"smooth"});
}
function showFinal() {
  document.getElementById("letterScreen").style.display = "none";
  document.getElementById("finalScreen").style.display = "flex";
  window.scrollTo({top:0,behavior:"smooth"});
}
function revealWish() {
  document.querySelector(".wish-button").style.display = "none";
  const wish = document.getElementById("hiddenWish");
  const text =
    "My\u00A0wish\u00A0already\u00A0came\u00A0true\u00A0when\u00A0I\u00A0found\u00A0you.\n\n" +
    "Happy\u00A0Birthday,\u00A0my\u00A0Ruuhi.\n" +
    "I\u00A0love\u00A0you,\u00A0forever\u00A0and\u00A0always. 🌼";
  wish.textContent = "";
  wish.style.display = "block";
  let i = 0;
  function type() {
    if (i < text.length) {
      wish.textContent += text.charAt(i);
      i++;
      setTimeout(type, 35);
    }
  }
  type();
}
