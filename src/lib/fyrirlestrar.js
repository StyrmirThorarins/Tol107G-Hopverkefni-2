/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */
const fyrirlestrar = document.querySelector('.fyrirlestrar');
let slug = '';
let x;
let child;
// let hlekkur = window.location.href;


/**
 * Athuga finna hvaða lecture svarar til div taggið
 * sem smellt er á
 * @param {compareDivId} e elementið sem smellt er á
 */
function compareDivId(e) {
  const eventId = e.target.parentNode.id;
  for (let i = 0; i < getLecturesArray().length; i += 1) {
    if (eventId === getLecturesArray()[i].slug) {
      console.log(getLectureBySlug(eventId));
    }
  }
  slug = '';
}
function getClickedItem() {
  for (x = 0; x < fyrirlestrar.children.length; x += 1) {
    child = fyrirlestrar.children[x];
    child.addEventListener('click', compareDivId);
  }
}
getClickedItem();
