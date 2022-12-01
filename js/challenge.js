let i = 0;
let isPaused = false;
let likes = {};

function counter() {
  setInterval(() => {
    if (!isPaused) document.getElementById("counter").innerText = ++i;
  }, 1000);
}

function pause() {
  document.querySelector("#pause").addEventListener("click", () => {
    isPaused = !isPaused;
    console.log("pause is clicked");
  });
}

function like() {
  document.querySelector("#heart").addEventListener("click", () => {
    if (i in likes) {
      likes[i]++;
      document.getElementById(
        i
      ).textContent = `${i} has been liked ${likes[i]} times`;
    } else {
      likes[i] = 1;
      let item = document.createElement("li");
      item.id = i;
      document.querySelector(".likes").appendChild(item);
      item.textContent = `${i} has been liked ${likes[i]} times`;
    }
  });
}

function comment() {
  document.querySelector("#submit").addEventListener("submit", (e) => {
    e.preventDefault();
    createComment(e.target.comment_input.value);
  });
}

function createComment(comment) {
  let p = document.createElement("p");
  p.innerText = `${comment}`;
  document.querySelector("#list").appendChild(p);
}

// call the functions:
counter();
pause();
like();
comment();
