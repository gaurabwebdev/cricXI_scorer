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
      newPlayerElement.innerHTML = `${playerName} <div class="player-modifier"><i class="fa-regular fa-pen-to-square"></i><i class="fa-solid fa-xmark"></i></div>`;
      playerList.appendChild(newPlayerElement);
      playerNameField.value = "";
    } else {
      alert("please enter player name!");
    }
  });
});

// M A T C H        O V E R S       S E L E C T I O N

//  M A T C H       D E T A I L S       C O N T A I N E R
