let firstOprNum = "0";
let secondOprNum = "";
let operator;

const p = document.querySelector(".display");

function reset() {
  p.textContent = "0";
  firstOprNum = "0";
  secondOprNum = "";
  operator = undefined;
}

function calc() {
  if (!operator) {
    return;
  }
  let result;
  switch (operator) {
    case "plus":
      result = +firstOprNum + +p.textContent;
      break;
    case "minus":
      result = +firstOprNum - +p.textContent;
      break;
    case "multiply":
      result = +firstOprNum * +p.textContent;
      break;
    case "divide":
      result = +firstOprNum / +p.textContent;
      break;
    default:
      result = firstOprNum;
  }
  p.textContent = String(result);
  firstOprNum = p.textContent;
  secondOprNum = "";
}

document.querySelector("#ce").addEventListener("click", reset);
document.querySelector("#c").addEventListener("click", reset);

document.querySelector("#backspace").addEventListener("click", () => {
  if (p.textContent.length > 1) {
    p.textContent = p.textContent.slice(0, -1);
  } else {
    p.textContent = "0";
  }
});

document.querySelector("#divide").addEventListener("click", () => {
  if (operator && secondOprNum) {
    calc();
  } else {
    firstOprNum = +p.textContent;
  }
  operator = "divide";
});

document.querySelector("#multiply").addEventListener("click", () => {
  if (operator && secondOprNum) {
    calc();
  } else {
    firstOprNum = +p.textContent;
  }
  operator = "multiply";
});

document.querySelector("#minus").addEventListener("click", () => {
  if (operator && secondOprNum) {
    calc();
  } else {
    firstOprNum = +p.textContent;
  }
  operator = "minus";
});

document.querySelector("#plus").addEventListener("click", () => {
  if (operator && secondOprNum) {
    calc();
  } else {
    firstOprNum = +p.textContent;
  }
  operator = "plus";
});

document.querySelector("#negation").addEventListener("click", () => {
  if (p.textContent !== "0") {
    p.textContent = String(-p.textContent);
  }
});

document.querySelector("#period").addEventListener("click", () => {
  if (Number.isInteger(+p.textContent)) {
    p.textContent += ".";
    if (secondOprNum) {
      secondOprNum = p.textContent;
    }
  }
});

document.querySelector("#equals").addEventListener("click", () => {
  if (secondOprNum) {
    calc();
    operator = undefined;
  }
});

const numberDivs = document.querySelectorAll("#container .number");
numberDivs.forEach((div) => {
  div.addEventListener("click", () => {
    if (isFinite(div.textContent)) {
      if (p.textContent === "0") {
        p.textContent = div.textContent;
      } else if (operator) {
        secondOprNum += div.textContent;
        p.textContent = secondOprNum;
      } else {
        p.textContent += div.textContent;
      }
    }
  });
});
