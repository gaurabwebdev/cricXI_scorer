const teamOne = [];
const teamTwo = [];

// P l A Y E R      A D D        F U N C T I O N ========

const addPlayers = (field) => {
  const targetField = field.target;
  const playerList =
    targetField.parentElement.parentElement.querySelector(".player-list ol");
  const teamName =
    targetField.parentElement.parentElement.querySelector(".team-name");
  const newPlayerElement = document.createElement("li");
  const playerNameField =
    targetField.parentElement.querySelector(".player-name-input");
  const playerName = playerNameField.value;
  if (playerName) {
    newPlayerElement.innerHTML = `${playerName} <div class="player-modifier"><i onclick="modifyPlayer(this)" class="fa-regular fa-pen-to-square"></i><i onclick="modifyPlayer(this)" class="fa-solid fa-xmark"></i></div>`;
    playerList.appendChild(newPlayerElement);
    playerNameField.value = "";
  } else {
    alert("please enter player name!");
  }
};

const playerAddButtons = document.querySelectorAll(".player-add-btn");

playerAddButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    addPlayers(e);
  });
});

const playersInputFields = document.querySelectorAll(".player-name-input");

playersInputFields.forEach((i) => {
  i.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      addPlayers(e);
    } else {
      return;
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

const matchFormatSelector = (selectedOver) => {
  matchOvers.forEach((over) => {
    if (over === selectedOver && selectedOver.checked) {
      selectedOver.classList.add("active");
    } else if (over === selectedOver && !selectedOver.checked) {
      selectedOver.classList.remove("active");
    } else if (over.disabled) {
      over.disabled = false;
    } else {
      over.disabled = true;
    }
  });
};
