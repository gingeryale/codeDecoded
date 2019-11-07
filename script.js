let phrase;
let btn = document.querySelector(".btn");
let clr = document.querySelector(".clr");
let allAlphabet = `abcdefghijklmnopqrstuvwxyz`;
let uller = document.querySelector(".containerList");
let coded;
let solve = document.querySelector(".solve");
let finalQ = document.querySelector("#result");
let clearAll = document.querySelector('.clearAll');

btn.addEventListener("click", function () {
  phrase = document
    .querySelector("#base")
    .value.toLowerCase().replace(/\s+/g, "")
    .split("");
  const phraseClean = [...new Set(phrase)];
  allAlphabet.split("");
  let coded = [...phraseClean, ...allAlphabet];
  var final = [...new Set(coded)];
  test(final, allAlphabet);
});

function test(final, allAlphabet) {
  for (let i = 0; i < final.length; i++) {
    var divi = document.createElement("div");
    //divi.textContent = final[i];
    divi.innerHTML = `<span class="baseLetter">${final[i]}</span>`;
    divi.classList.add("coded");
    for (let j = 0; j < allAlphabet.length; j++) {
      var spanner = document.createElement("span");
      spanner.textContent = allAlphabet[i];
      spanner.classList.add("alpha");
    }
    divi.appendChild(spanner);
    uller.appendChild(divi);
  }
}

clr.addEventListener("click", function () {
  uller.innerHTML = "";
});



solve.addEventListener("click", function () {
  let parent = document.querySelector(".containerList");
  let divs = parent.getElementsByTagName("div");
  let mod = parent.getElementsByClassName("baseLetter");
  let aleph = parent.getElementsByClassName("alpha");
  let finalArray = [];
  cphrase = document
    .querySelector("#code")
    .value.toLowerCase().replace(/\s+/g, "")
    .split("");
  console.log("what I typed", cphrase);
  cphrase.forEach(function (el) {
    console.log("each element", el);
    for (let i = 0; i < divs.length; i++) {
      if (mod[i].innerHTML == el) {
        finalArray.push(aleph[i].innerHTML);
      }
    }
    finalQ.textContent = finalArray.join("");
  });
});


clearAll.addEventListener("click", function () {
  location.reload();
})