// import "./styles.css";

// document.onload = (event) => {
//   console.log('page is fully loaded');
// };

let calc_btn = document.getElementById("calc");
  calc_btn.addEventListener("click",()=>{
    calc();
    console.log("Calculated");
  })

function calc() {
  let howto = document.getElementById("howto");
  howto.classList.add("hide");
  let code = document.getElementById("code");
  let st = code.value.toUpperCase();
  console.log(st);
  document.getElementById("app").innerHTML = `
<h1 style="padding:10px;margin-bottom:10px;">${st}<span style="color:rgb(17, 94, 156);;">XX</span></h1>
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
  table.textContent = "";
  for (let i = 0; i < mainlen; i++) {
    let text = document.createElement("div");
    text.setAttribute("id", `${i.toString()}`);
    text.setAttribute("class", `item`);
    text.setAttribute("done", "");
    text.textContent = `${arr[i]}`;
    table.append(text);
    // console.log(text)
  }

  for (let i = 0; i < mainlen; i++) {
    let item = document.getElementById(i.toString());
    item.addEventListener("click", (v) => {
    let done = item.getAttribute("done")
      if(done == "" || done == "false"){
        console.log("false clicked");
        item.setAttribute("done","true");
      }
      else if(done == "true"){
        console.log("true clicked");
        item.setAttribute("done","false")
      }
      let id = v.target.id.toString();
      var copyText = document.getElementById(id);
      let text = copyText.innerText;
      console.log(text);
      navigator.clipboard.writeText(text);
      // alert("Copied the text: " + text);
    });
  }
}
