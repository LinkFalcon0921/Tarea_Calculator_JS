//Global variables
const nod = document.getElementById('cont-hs');
/** Create a item to the history
 * @param key andding a {h-} for id
 * @param value value to show in the element
 */
function setHistory(key, value) {
  const valElem = document.createElement("h3");

  //set values to elements
  valElem.id = `h-${key}`;
  valElem.innerHTML = value;
  valElem.classList ='ls';

  nod.appendChild(valElem);
}

/** Clean the historial and clear the local storage. */
function clearHistorial() {
  if (localStorage.length > 0) {
    const elems = getStorage();

    elems.forEach(function (key) {
      let item = document.getElementById(`h-${key}`);
      item.remove();
    });

    localStorage.clear();
  }
}
//Action for set the history
if(localStorage.length > 0){
    const values = getStorage();

    values.forEach(function(x){
        const y = localStorage.getItem(x);
        setHistory(x,y);
    });
}