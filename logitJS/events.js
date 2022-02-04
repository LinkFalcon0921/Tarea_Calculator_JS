const valnum = document.getElementById("window");

document.addEventListener("keydown", (event) => {
  setAction(event.key);
});

/**Clean the actual number in the window. */
function clear() {
  let val = valnum.textContent.substring(0, valnum.textContent.length - 1);
  valnum.textContent = val.length > 0 ? val : "0";
}

/** Clean the window. */
function clearAll() {
  valnum.textContent = "0";
}

function setValue(val) {
  if (val === ".") {
    valnum.textContent += val;
  } else {
    //If is a number
    valnum.textContent =
      valnum.textContent === "0" ? "" + val : valnum.textContent + val;
  }
}
/** Event : escucha al teclado para asignar valores numericos, asignandolo a la ventana. */
function setAction(key = "") {
  let digit = key;
  //   console.log(digit);

  //if is a number
  if (!isNaN(digit)) {
    let num = Number.parseInt(digit, 10);
    setValue(num);
  }
  //if it a point
  if (digit === ".") {
    if (!valnum.textContent.includes(digit)) {
      setValue(digit);
    }
  }

  if (digit === "Backspace") {
    clear();
  }
}
