const welcomeEl = document.querySelector("#welcome-el");
const incrementBtn = document.querySelector("#increment-btn");
const countEl = document.querySelector("#count-el");
const saveBtn = document.querySelector("#save-btn");
const previousEl = document.querySelector("#previous-entries");
const totalEl = document.querySelector("#total-el");

let username = "Ezejim Amblessed";
welcomeEl.innerText = `Welcome Back, ${username}`;

let count = 0;
let total = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", () => {
  previousEl.textContent += count + " - ";
  total += count;
  count = 0;
  totalEl.textContent = "Total: " + total;
  countEl.textContent = 0;
});
