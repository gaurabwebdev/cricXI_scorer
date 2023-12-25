const teamOne = [];
const teamTwo = [];

const playerAdd = () => {
  const addBtn = document.querySelectorAll(
    ".player-registration-container .player-add-btn"
  );

  addBtn.forEach((x) => {
    x.addEventListener("click", (e) => {
      const clickedBtn = e.target;
      const plyerNameInput =
        clickedBtn.parentElement.querySelector(".player-name-input");
      if (plyerNameInput.value) {
        const currentPlayerInputName = plyerNameInput.value;
        if (
          clickedBtn.parentElement.parentElement.querySelector(".team-name")
            .textContent === "Team One"
        ) {
          teamOne.push(currentPlayerInputName);
          console.log(true);
          console.log(currentPlayerInputName);
          console.log(teamOne);
          plyerNameInput.value = "";
        } else if (
          clickedBtn.parentElement.parentElement.querySelector(".team-name")
            .textContent === "Team Two"
        ) {
          teamTwo.push(currentPlayerInputName);
          console.log(false);
          console.log(currentPlayerInputName);
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
