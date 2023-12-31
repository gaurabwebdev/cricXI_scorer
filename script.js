const teamOne = [];
const teamTwo = [];

// P l A Y E R      A D D        F U N C T I O N ========
const playerAddButtons = document.querySelectorAll(".player-add-btn");

playerAddButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const clickedBtn = e.target;
    const playerList =
      clickedBtn.parentElement.parentElement.querySelector(".player-list ol");
    const teamName =
      clickedBtn.parentElement.parentElement.querySelector(".team-name");
    const newPlayerElement = document.createElement("li");
    const playerNameField =
      clickedBtn.parentElement.querySelector(".player-name-input");
    const playerName = playerNameField.value;
    if (playerName) {
      newPlayerElement.textContent = playerName;
      playerList.appendChild(newPlayerElement);
    } else {
      alert("please enter player name!");
    }
  });
});

//  M A T C H       D E T A I L S       C O N T A I N E R
