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
      newPlayerElement.innerHTML = `${playerName} <div class="player-modifier"><i onclick="modifyPlayer(this)" class="fa-regular fa-pen-to-square"></i><i onclick="modifyPlayer(this)" class="fa-solid fa-xmark"></i></div>`;
      playerList.appendChild(newPlayerElement);
      playerNameField.value = "";
    } else {
      alert("please enter player name!");
    }
  });
});

// D E L E T E      P L A Y E R
const modifyPlayer = (modifyBtn) => {
  const currentPlayerContainer = modifyBtn.parentElement.parentElement;
  const currentPlayerName = currentPlayerContainer.textContent;
  if (modifyBtn.classList.contains("fa-pen-to-square")) {
    const modifierInput = document.createElement("input");
    modifierInput.value = currentPlayerName;
    currentPlayerContainer.innerHTML = `<input class="modifiedName" type="text" value="${currentPlayerName}"> <div class="player-modifier"><i onclick="modifyPlayer(this)"
     class="fa-solid fa-check"></i></div>`;
    return;
  } else if (modifyBtn.classList.contains("fa-check")) {
    const playerNewName = document.querySelector(".modifiedName");
    if (playerNewName.value) {
      currentPlayerContainer.innerHTML = `${playerNewName.value} <div class="player-modifier"><i onclick="modifyPlayer(this)" class="fa-regular fa-pen-to-square"></i><i onclick="modifyPlayer(this)" class="fa-solid fa-xmark"></i></div>`;
      return;
    }
  } else if (modifyBtn.classList.contains("fa-xmark")) {
    currentPlayerContainer.remove();
    return;
  }
};

//  M A T C H       S E L E C T I O N       F U N C T I O N
let matchOver = 5;
const matchOvers = document.querySelectorAll(".match-overs");

matchOvers.forEach((o) => {
  o.addEventListener("change", (e) => {
    console.log(e.target);
  });
});
