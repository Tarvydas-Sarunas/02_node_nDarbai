"use strict";
console.log("public.js file was loaded");

const url = "http://localhost:8080/brands";

function getAll() {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => carToHtml(data))
    .catch((error) => {
      console.warn("ivyko klaida:", error);
    });
}

function carToHtml(carsArr) {
  const ul = document.createElement("ul");
  carsArr.forEach((ele) => {
    const li = document.createElement("li");
    li.textContent = ele;
    ul.append(li);
  });
  document.body.append(ul);
  return ul;
}
getAll();
