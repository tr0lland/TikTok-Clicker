document.addEventListener("DOMContentLoaded", () => {  let score = 0;
  let goal = 100;

  const scoreElement = document.getElementById("score");
  const goalElement = document.getElementById("goal");
  const clickButton = document.getElementById("clickButton");
  const resetButton = document.getElementById("resetButton");
  const customScoreButton = document.getElementById("setCustomScore");
  const customScoreInput = document.getElementById("customScore");
  const setGoalButton = document.getElementById("setGoal");
  const goalInput = document.getElementById("goalInput");
  const goalMenu = document.querySelector(".goal-menu");
  const closeGoalMenuButton = document.querySelector(".close-btn");
  const setGoalMainButton = document.querySelector(".set-goal-btn");

  function updateScore() {
    scoreElement.textContent = score;
    const remaining = goal - score;
    goalElement.textContent = `${remaining < 0 ? 0 : remaining}`;
  }

  clickButton.addEventListener("click", () => {
    score++;
    updateScore();
  });

  resetButton.addEventListener("click", () => {
    score = 0;
    updateScore();
  });

  customScoreButton.addEventListener("click", () => {
    const customScoreValue = parseInt(customScoreInput.value);
    if (!isNaN(customScoreValue)) {
      score = customScoreValue;
      updateScore();
    }
  });

  setGoalMainButton.addEventListener("click", () => {
    goalMenu.style.display = "block";
  });

  setGoalButton.addEventListener("click", () => {
    const customGoalValue = parseInt(goalInput.value);
    if (!isNaN(customGoalValue)) {
      goal = customGoalValue;
      updateScore();
      goalMenu.style.display = "none";
    }
  });

  closeGoalMenuButton.addEventListener("click", () => {
    goalMenu.style.display = "none";
  });
});

