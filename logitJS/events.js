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
//wait the key form the keybo
/** Event : escucha al teclado para asignar valores numericos, asignandolo a la ventana. */
function setAction(key = "") {

  //Set the result
  if (key === "Enter") {
    getBotton("=").click();
    return;
  }

  //To clean a single number
  if (key === "Backspace") {
    clear();
    return;
  }

  //Clean it all
  if (key === "Escape") {
    clearAll();
    return;
  }

  //if is a number
  if (!isNaN(key)) {
    let num = Number.parseInt(key, 10);
    setValue(num);
  }
  //if it a point
  if (key === ".") {
    if (!valnum.textContent.includes(key)) {
      setValue(key);
    }
  }
}
