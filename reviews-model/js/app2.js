const data = localStorage.getItem('reviews');
reviews = JSON.parse(data);

const btnCadastrar = document.querySelector(".btn");

const addName = document.querySelector("#valueName");
const addImage = document.querySelector("#valueImage");
const addJob = document.querySelector("#valueJob");
const addInfo = document.querySelector("#valueInfo");

btnCadastrar.addEventListener("click", () => {
  const newReview = {
    id: reviews.length+1,
    name: addName.value,
    job: addJob.value,
    image: addImage.value,
    msg: addInfo.value,
  };
  reviews.push(newReview);

  localStorage.setItem('reviews', JSON.stringify(reviews));
  history.back()

  console.log(reviews);
});
