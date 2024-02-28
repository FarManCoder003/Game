let playerone = document.querySelector(".playerone");
let playeronemen = document.querySelector(".playeronemen");
let playeroneinput = document.querySelector(".playeroneinput");
let playeronebtn = document.querySelector(".playeronebtn");
let playeroneerr = document.querySelector(".playeroneerr");
let playertwo = document.querySelector(".playertwo");
let playertwomen = document.querySelector(".playertwomen");
let playertwoinput = document.querySelector(".playertwoinput");
let playertwobtn = document.querySelector(".playertwobtn");
let playertwoerr = document.querySelector(".playertwoerr");
let success = document.querySelector(".success");
let chance = document.querySelector(".chance");
let successone = document.querySelector(".successone");
let playeronevalue;
let chancevalue = 5;

playeronebtn.addEventListener("click", () => {
  if (playeroneinput.value) {
    if (playeroneinput.value - 10) {
      if (playeroneinput.value > 0 && playeroneinput.value < 10) {
        playeronevalue = playeroneinput.value;
        playertwo.style.display = "block";
        playerone.style.display = "none";
      } else {
        playeroneerr.innerHTML = "Enter number between 1 to 9 only";
      }
    } else {
      playeroneerr.innerHTML = "Enter Number";
    }
  } else {
    playeroneerr.innerHTML = "Enter Some Value";
  }
});

playertwobtn.addEventListener("click", () => {
  if (playertwoinput.value) {
    if (playertwoinput.value - 10) {
      if (playertwoinput.value > 0 && playertwoinput.value < 10) {
        if (playertwoinput.value == playeronevalue) {
          success.innerHTML = "Player Two Won";
        } else {
          chancevalue--;
          if (chancevalue != 1) {
            chance.innerHTML = "Chances left: " + " " + chancevalue;
          } else {
            success.innerHTML = "Player Two Lost";
            chance.innerHTML = "";
          }
        }
      } else {
        playertwoerr.innerHTML = "Enter number between 1 to 9";
      }
    } else {
      playertwoerr.innerHTML = "Enter Number";
    }
  } else {
    playertwoerr.innerHTML = "Enter Some Value";
  }
});
