function saveStorage(operation = "") {
    //key
  let key = localStorage.length;
  localStorage.setItem(key, operation);
  setHistory(key,operation);
}

function getStorage() {
  let values = [];

  for (let i = 0; i < localStorage.length; i++) {
    values.push(i);
  }
  return values;
}
