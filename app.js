const welcomeEl = document.querySelector("#welcome-el");
const incrementBtn = document.querySelector("#increment-btn");
const countEl = document.querySelector("#count-el");

let username = "Ezejim Amblessed";
welcomeEl.innerText = `Welcome Back, ${username}`;

let count = 0;
incrementBtn.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});
