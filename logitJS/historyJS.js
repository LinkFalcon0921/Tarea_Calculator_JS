/** Create a item to the history
 * @param key andding a {h-} for id
 * @param value value to show in the element
 */
function setHistory(key, value) {
  const nod = document.createElement("div");
  const valElem = document.createElement("strong");

  //set values to elements
  nod.id = `h-${key}`;
  valElem.innerHTML = value;

  nod.appendChild(valElem);

  document.getElementById("history").appendChild(nod);
}

/** Clean the historial and clear the local storage. */
function clearHistorial() {
  if (localStorage.length > 0) {
    let elems = getStorage();

    elems.forEach(function (el) {
      let item = document.getElementById(`h-${el}`);
      item.remove();
    });

    localStorage.clear();
  }
}


if(localStorage.length > 0 ){
    let values = getStorage();

    values.forEach(function(x){
        const y = localStorage.getItem(x);
        setHistory(x,y);
    });
}