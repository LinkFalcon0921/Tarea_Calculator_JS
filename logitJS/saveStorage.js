function saveStorage(operation = "") {
    //key
  let l = localStorage.length + 1;
  localStorage.setItem(l, operation);
}

function getStorage() {
  let values = [];

  for (let i = 1; i < localStorage.length; i++) {
    values.push(localStorage.getItem(i));
  }
  return values;
}
