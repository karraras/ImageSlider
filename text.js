let content = document.querySelectorAll(".content img");
let btn = document.querySelectorAll(".btn span");

btn.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    btn.forEach((el) => {
      el.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    content.forEach((le) => {
      le.classList.remove("active");
    });

    document
      .querySelector(`.${e.currentTarget.dataset.id}`)
      .classList.add("active");
  });
});
