// import "./styles.css";

// document.onload = (event) => {
//   console.log('page is fully loaded');
// };

function calc() {
  let code = document.getElementById("code");
  let st = code.value.toUpperCase();
  console.log(st)
  document.getElementById("app").innerHTML = `
<h1 style="padding:10px;margin-bottom:10px;">${st}<span style="color:darkgray;">XX</span></h1>
`;
  var char = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var charlen = char.length;
  var numlen = num.length;
  var arr = [];

  for (let i = 0; i < numlen; i++) {
    for (let j = 0; j < numlen; j++) {
      arr.push(st + num[i] + num[j]);
    }
  }

  for (let i = 0; i < charlen; i++) {
    for (let j = 0; j < numlen; j++) {
      arr.push(st + char[i] + num[j]);
    }
  }

  for (let i = 0; i < charlen; i++) {
    for (let j = 0; j < charlen; j++) {
      arr.push(st + char[i] + char[j]);
    }
  }

  // console.log(arr)
  // document.getElementById("table").innerHTML = `<td class="item">${arr}</td>`;
  let mainlen = arr.length;
  let table = document.getElementById("table");

  for (let i = 0; i < mainlen; i++) {
    table
      .insertRow()
      .insertCell().innerHTML = `<span id="${i}" class="item">${arr[i]}</span>`;
    // console.log(arr[i]);
  }

  for (let i = 0; i < mainlen; i++) {
    let item = document.getElementById(i.toString());
    item.addEventListener("click", (v) => {
      let id = v.target.id.toString();
      var copyText = document.getElementById(id);

      let text = copyText.innerText;
      console.log(text);
      navigator.clipboard.writeText(text);

      // alert("Copied the text: " + copyText.value);
    });
  }
}
