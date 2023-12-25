const teamOne = [];
const teamTwo = [];

// P l A Y E R      A D D        F U N C T I O N

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
          newPlayer.textContent = plyerNameInput.value;
          playerList.appendChild(newPlayer);
          teamOne.push(plyerNameInput.value);
          console.log(teamOne);
          plyerNameInput.value = "";
        } else if (
          clickedBtn.parentElement.parentElement.querySelector(".team-name")
            .textContent === "Team Two"
        ) {
          const newPlayer = document.createElement("li");
          newPlayer.textContent = plyerNameInput.value;
          playerList.appendChild(newPlayer);
          teamOne.push(plyerNameInput.value);
          console.log(teamTwo);
          plyerNameInput.value = "";
        }
      } else {
        alert("Please Enter Your Player Name");
      }
    });
  });
};

playerAdd();
