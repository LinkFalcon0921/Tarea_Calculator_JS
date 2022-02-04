function saveStorage(operation = "") {
    //key
  let l = localStorage.length;
  localStorage.setItem(l, operation);
  setHistory(l,operation);
}

function getStorage() {
  let values = [];

  for (let i = 0; i < localStorage.length; i++) {
    values.push(i);
  }
  return values;
}
