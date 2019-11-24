/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
import List from './lib/list';
import Lectures from './lib/lectures';
import LectureLocalStorage from './lib/localStorage';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');
  const fyrirlestrar = document.querySelector('.fyrirlestrar');
  let x;
  let child;
  let hlekkur = window.location.href;
  let data;
  const img = document.querySelector('.header__img');


  /**
 * Athuga finna hvaða lecture svarar til div taggið
 * sem smellt er á
 * @param {compareDivId} e elementið sem smellt er á
 */
  function compareDivId(e) {
    const eventId = e.target.parentNode.id;    
    for (let i = 0; i < Lectures.getLecturesArray().length; i += 1) {
      if (eventId === Lectures.getLecturesArray()[i].slug) {
      // console.log(getLectureBySlug(eventId));
        data = Lectures.getLectureBySlug(eventId);
      }
    }
    console.log(data);
    loadContent(data);
    hlekkur += `fyrirlestur.html?slug=${eventId}`;
    window.location.href = hlekkur;
  }
  function getClickedItem() {
    for (x = 0; x < fyrirlestrar.children.length; x += 1) {
      child = fyrirlestrar.children[x];
      child.addEventListener('click', compareDivId);
    }
  }
  function loadContent(items) {
    // birta hluti inn
  }
  getClickedItem();
  if (isLecturePage) {
  } else {
    const list = new List();
    list.load();
  }
});
