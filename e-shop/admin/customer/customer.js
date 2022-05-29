const sidebarMenu = document.querySelectorAll(".sidebar__menu-item");
const link = document.querySelectorAll(".sidebar__menu-link");
const icon = document.querySelectorAll(".sidebar__menu-icon");
const articleWrapper = document.querySelector(".article__wrapper");
[...sidebarMenu].forEach((item) =>
  item.addEventListener("click", handleClickMenu)
);
function handleClickMenu(event) {
  [...sidebarMenu].forEach((item) => item.classList.remove("active"));
  event.target.classList.toggle("active");
  if (event.target.getAttribute("data-tab") === articleWrapper.dataset.tab) {
    articleWrapper.style.display = "block";
  } else {
    articleWrapper.style.display = "none";
  }
}
document.body.addEventListener("click", function (e) {
  [...sidebarMenu].forEach((item) => {
    if (!item.contains(e.target)) {
      item.classList.remove("active");
    }
  });
});

const line = document.createElement("div");
const artice = document.querySelector(".article");
const tableItem = document.querySelectorAll(".table__item");
line.className = "table__tab-line";
const table = document.querySelector(".table");
const gap = 5;
artice.appendChild(line);
tableItem.forEach((item) =>
  item.addEventListener("mouseenter", function (e) {
    const { top, left, width, height } = e.target.getBoundingClientRect();
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    line.style.top = `${top + height + gap}px`;
  })
);
table.addEventListener("mouseleave", function () {
  line.style.width = "0px";
});

const checkboxall = document.querySelector(".checkboxall");
const checkbox = document.querySelectorAll(".checkbox");
checkboxall.addEventListener("click", function () {
  [...checkbox].forEach((item) => {
    item.checked ? (item.checked = false) : (item.checked = true);
  });
});
