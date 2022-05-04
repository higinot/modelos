const data = localStorage.getItem("reviews");
let reviews = JSON.parse(data);

console.log(reviews);

function getReviews() {
  if (reviews === null) {
    reviews = [
      {
        id: 1,
        name: "Higino Neto",
        job: "Programador",
        image:
          "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic incidunt soluta, laborum, porro asperiores quam repellendus eum repellat eligendi magnam iste nemo delectus consectetur reiciendis non suscipit obcaecati. Atque obcaecati, quas hic dolore sapiente mollitia voluptatum, ducimus natus optio voluptates deserunt. Similique hic sequi, incidunt ea fugit cupiditate a. Iure.",
      },
      {
        id: 2,
        name: "Jade Ambrozi",
        job: "Buyer",
        image:
          "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic incidunt soluta, laborum, porro asperiores quam repellendus eum repellat eligendi magnam iste nemo delectus consectetur reiciendis non suscipit obcaecati. Atque obcaecati, quas hic dolore sapiente mollitia voluptatum, ducimus natus optio voluptates deserunt. Similique hic sequi, incidunt ea fugit cupiditate a. Iure.",
      },
      {
        id: 3,
        name: "Guilherme Souza",
        job: "Analisty",
        image: "ok",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic incidunt soluta, laborum, porro asperiores quam repellendus eum repellat eligendi magnam iste nemo delectus consectetur reiciendis non suscipit obcaecati. Atque obcaecati, quas hic dolore sapiente mollitia voluptatum, ducimus natus optio voluptates deserunt. Similique hic sequi, incidunt ea fugit cupiditate a. Iure.",
      },
      {
        id: 4,
        name: "Julia Maria",
        job: "Influencer",
        image: "",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic incidunt soluta, laborum, porro asperiores quam repellendus eum repellat eligendi magnam iste nemo delectus consectetur reiciendis non suscipit obcaecati. Atque obcaecati, quas hic dolore sapiente mollitia voluptatum, ducimus natus optio voluptates deserunt. Similique hic sequi, incidunt ea fugit cupiditate a. Iure.",
      },
      {
        id: 5,
        name: "Maria Manuela",
        job: "Enginner",
        image: "",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic incidunt soluta, laborum, porro asperiores quam repellendus eum repellat eligendi magnam iste nemo delectus consectetur reiciendis non suscipit obcaecati. Atque obcaecati, quas hic dolore sapiente mollitia voluptatum, ducimus natus optio voluptates deserunt. Similique hic sequi, incidunt ea fugit cupiditate a. Iure.",
      },
    ];

    localStorage.setItem("reviews", JSON.stringify(reviews));
    return reviews;
  }
  return reviews;
}

getReviews();

const nome = document.querySelector("#name");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
const image = document.querySelector("#image");

const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const btnAdd = document.querySelector("#add");

let index = 0;
let number = reviews.length;

btnRight.addEventListener("click", () => {
  index += 1;
  if (index >= reviews.length) index = 0;
  nome.textContent = reviews[index].name;
  job.textContent = reviews[index].job;
  info.textContent = reviews[index].msg;
});

btnLeft.addEventListener("click", () => {
  index -= 1;
  if (index < 0) index = reviews.length - 1;

  nome.textContent = reviews[index].name;
  job.textContent = reviews[index].job;
  info.textContent = reviews[index].msg;
});

btnCadastrar.addEventListener("click", () => {
  console.log("Ok");
});
