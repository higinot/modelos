const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");

  if (navList.classList[1] === "active") {
    return navList.classList.remove("active");
  }

  navList.classList.add("active");
});
