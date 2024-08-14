/***
 * Concept: An arithmetic progression is a sequence of numbers in which the difference between consecutive terms is constant.
 * Formula: a_n =a_1 + (n-1) * d
 *a_n is the nth term
 *a_1 is the first term
 *d is the common difference
 *n is the position of term in the sequence
 */

let a1 = 3,
  d = 2;
n = 3;
let anext = a1;

let arithmeticSeriesArray = [];
document
  .querySelector("input#firstTermSlider")
  .addEventListener("change", function (e) {
    a1 = Number(e.target.value);
    document.querySelectorAll(".a1").forEach((a) => (a.textContent = a1));
    calculateArithemticSeries();
  });
document
  .querySelector("input#commonDifferenceSlider")
  .addEventListener("change", function (e) {
    d = Number(e.target.value);
    document.querySelectorAll(".d").forEach((dd) => (dd.textContent = d));
    calculateArithemticSeries();
  });
document
  .querySelector("input#numberTermsSlider")
  .addEventListener("change", function (e) {
    n = Number(e.target.value);
    document.querySelectorAll(".n").forEach((nn) => (nn.textContent = n));
    calculateArithemticSeries();
  });

function calculateArithemticSeries() {
  arithmeticSeriesArray = [];
  anext = a1; // console.log(an);
  arithmeticSeriesArray.push({ x: 1, y: anext });
  let an = a1 + (n - 1) * d;
  for (let i = 2; i <= n; i++) {
    anext = anext + d;
    arithmeticSeriesArray.push({ x: i, y: anext });
  }
  document.querySelector(".an").textContent = an;
  document.querySelector(".ap").textContent = "";
  arithmeticSeriesArray.map((ap, index) => {
    document.querySelector(".ap").innerHTML +=
      `${ap.y}` +
      `${!(index === arithmeticSeriesArray.length - 1) ? ", " : ""}`;
    // document.querySelector(
    //   ".ap"
    // ).innerHTML += `(a<sub>${ap.x}</sub> = ${ap.y}),`;
  });
  plotGraph();
}
function plotGraph() {
  document.getElementById("graph").innerHTML = "";
  graphline("graph", arithmeticSeriesArray, "n", "an", "red");
}

calculateArithemticSeries();
