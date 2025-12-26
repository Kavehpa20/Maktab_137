// console.log("ok");
// const demo = document.getElementById("demo");

// console.log(demo);

// demo.innerText = "HELLO DOM ELEMENT";
// const demo = document.querySelector("#demo");
// const demo1 = document.querySelector(".demo1");

// console.log(demo1);
// console.log(demo);

// const demos = document.querySelectorAll(".demo1");
// const demo3 = demos[2];

// demo3.innerText = "testtttt";

// const firstName = `Ali`;

// const lastName = "Mohammadi";

// const birthYear = 2004;

// function declaration
// function fullNameGenerator(fName, lName, age) {
//   return fName + " " + lName + " " + age + " " + "Years Old";
// }

//function Expression
// const fullNameGenerator = function (fName, lName, age) {
//   return fName + " " + lName + " " + age + " " + "Years Old";
// };

//Arrow Function
// const fullNameGenerator = (fName, lName, bYear) =>
//   `${fName} ${lName} ${2025 - bYear} Years Old`;
//  fName + " " + lName + " " + age + " " + "Years Old";

// console.log(fullNameGenerator(firstName, lastName, birthYear));

// const container = document.getElementById("container");

// let htmlElement = `<div class="container" id="container">
//                         <p class="demo1">demo1</p>
//                         <p class="demo1">demo2</p>
//                         <p class="demo1">demo3</p>
//                         <p class="demo1">demo4</p>
//                         <p class="demo1">demo5</p>
//                         <p class="demo1">demo6</p>
//                         <p class="demo1">demo7</p>
//                       </div>`;

// htmlElement = `<div class="container2" id="container">
//                         <p class="paragraph">${firstName}</p>
//                         <p class="paragraph">${lastName}</p>
//                         <p class="paragraph">${2025 - birthYear}</p>
//                         <p class="paragraph">paragraph4</p>
//                         <p class="paragraph">paragraph5</p>
//                         <p class="paragraph">paragraph6</p>
//                         <p class="paragraph">paragraph7</p>
//                       </div>`;

// container.innerHTML = htmlElement;

const loginForm = document.getElementById("form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
