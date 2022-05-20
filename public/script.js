const fruitName = document.getElementsByClassName("name");
console.log(fruitName);
// eslint-disable-next-line no-plusplus
for (let i = 0; i < fruitName.length; i++) {
  fruitName[i].addEventListener("click", () => {
    if (fruitName[i].classList.contains("unclicked")) {
      document.body.style.backgroundColor = "grey";
      fruitName[i].classList.remove("unclicked");
      fruitName[i].classList.add("clicked");
    } else if (fruitName[i].classList.contains("clicked")) {
      document.body.style.backgroundColor = "pink";
      fruitName[i].classList.remove("clicked");
      fruitName[i].classList.add("unclicked");
    }
  });
}
