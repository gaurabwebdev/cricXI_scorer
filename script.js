const teamOne = [];
const teamTwo = [];

// P l A Y E R      A D D        F U N C T I O N ========

const playerAdd = () => {
  const addBtn = document.querySelectorAll(
    ".player-registration-container .player-add-btn"
  );

  addBtn.forEach((x) => {
    x.addEventListener("click", (e) => {
      const clickedBtn = e.target;
      const playerRegisterContainer = clickedBtn.parentElement.parentElement;
      const plyerNameInput =
        clickedBtn.parentElement.querySelector(".player-name-input");
      const playerList =
        playerRegisterContainer.querySelector(".player-list ol");
      if (plyerNameInput.value) {
        const currentPlayerInputName = plyerNameInput.value;
        if (
          playerRegisterContainer.querySelector(".team-name").textContent ===
          "Team One"
        ) {
          const newPlayer = document.createElement("li");
          // newPlayer.textContent = plyerNameInput.value;
          // playerList.appendChild(newPlayer);
          teamOne.push(plyerNameInput.value);
          console.log(teamOne);
          if (teamOne.length <= 11) {
            for (let x = 0; x < teamOne.length; x++) {
              newPlayer.textContent = teamOne[x];
              playerList.appendChild(newPlayer);
            }
            plyerNameInput.value = "";
          } else {
            alert("Player Limit Exceeded");
          }
        } else if (
          clickedBtn.parentElement.parentElement.querySelector(".team-name")
            .textContent === "Team Two"
        ) {
          const newPlayer = document.createElement("li");
          // newPlayer.textContent = plyerNameInput.value;
          // playerList.appendChild(newPlayer);
          teamOne.push(plyerNameInput.value);
          console.log(teamTwo);
          if (teamTwo > length <= 11) {
            for (let x = 0; x < teamTwo.length; x++) {
              newPlayer.textContent = teamTwo[x];
              playerList.appendChild(newPlayer);
            }
            plyerNameInput.value = "";
          } else {
            alert("Player Limit Exceeded");
          }
        }
      } else {
        alert("Please Enter Your Player Name");
      }
    });
  });
};

//  M A T C H       D E T A I L S       C O N T A I N E R
const matchStartBtn = document.getElementsByClassName("match-start-btn");
let setOvers = 0;
const matchOverSelection = (over) => {
  const matchOvers = document.getElementsByName(`${over.name}`);

  if (over.checked) {
    for (let o = 0; o < matchOvers.length; o++) {
      if (matchOvers[o].checked) {
        matchOvers[o].disabled = false;
        matchStartBtn.disabled = false;
      } else if (!matchOvers[o].checked) {
        matchOvers[o].disabled = true;
      }
    }
  } else {
    for (let o = 0; o < matchOvers.length; o++) {
      matchOvers[o].disabled = false;
    }
  }
};

playerAdd();
