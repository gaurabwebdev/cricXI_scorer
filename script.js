const playerAdd = () => {
  const teamOne = [];
  const addBtn = document.querySelectorAll(
    ".player-registraton-container .player-add-btn"
  );

  addBtn.forEach((x) => {
    x.addEventListener("click", (e) => {
      const clickedBtn = e.target;
      console.log(clickedBtn);
    });
  });
};

playerAdd();
