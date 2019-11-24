/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
import List from './lib/list.js';
import Lectures from './lib/lectures.js';
import LectureLocalStorage from './lib/localStorage.js';
import { el } from './lib/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');
  const fyrirlestrar = document.querySelector('.fyrirlestrar');
  let x;
  let child;
  let hlekkur = window.location.href;
  let data;
  let eventId;


  /**
 * Athuga finna hvaða lecture svarar til div taggið
 * sem smellt er á
 * @param {compareDivId} e elementið sem smellt er á
 */
  function compareDivId(e) {
    eventId = e.target.id ? e.target.id : e.target.parentNode.id;
    for (let i = 0; i < Lectures.getLecturesArray().length; i += 1) {
      if (eventId === Lectures.getLecturesArray()[i].slug) {
        data = Lectures.getLectureBySlug(eventId);
      }
    }
    localStorage.setItem('data', JSON.stringify(data));
    hlekkur += `fyrirlestur.html?slug=${eventId}`;
    window.location.href = hlekkur;
  }
  function getClickedItem() {
    for (x = 0; x < fyrirlestrar.children.length; x += 1) {
      child = fyrirlestrar.children[x];
      child.addEventListener('click', compareDivId);
    }
  }
  function initFyrirlestur(gogn, json) {
    const img = document.querySelector('.header__img');
    const p = document.querySelector('.header-p');
    const h1 = document.querySelector('.header-h1');
    if (!json.image) {
      const header = document.querySelector('.header');
      header.classList.add('fyrirlestur');
      img.parentNode.removeChild(img);
    } else {
      img.src = json.image;
    }
    p.innerHTML = json.category.toUpperCase();
    h1.innerHTML = json.title;
  }
  function uploadContent(content) {
    const lecture = document.querySelector('.lecture');
    const firstChild = lecture.childNodes[0];
    for (let i = 0; i < content.length; i += 1) {
      const div = el('div');
      div.classList.add('lecture__div');
      if (content[i].type === 'youtube') {
        const iframe = el('iframe');
        div.classList.add('lecture__iframe');
        iframe.src = content[i].data;
        iframe.frameborder = 0;
        div.appendChild(iframe);
      }
      if (content[i].type === 'image') {
        const img = el('img');
        const p = el('p', content[i].caption);
        img.src = content[i].data;
        div.appendChild(img);
        div.appendChild(p);
      }
      if (content[i].type === 'text') {
        const p = el('p');
        const texti = content[i].data.replace(/\n/g, '<br /><br />');
        p.innerHTML = texti;
        div.appendChild(p);
      }
      if (content[i].type === 'quote') {
        const p = el('p', content[i].data);
        const atr = el('p', content[i].attribute);
        atr.style = 'font-style: italic';
        div.classList.add('fyrirlestur'); // gefa því gráan kassa
        div.appendChild(p);
        div.appendChild(atr);
      }
      if (content[i].type === 'heading') {
        const h1 = el('h1', content[i].data);
        div.appendChild(h1);
      }
      if (content[i].type === 'list') {
        const list = el('ul');
        let li;
        let p;
        for (let k = 0; k < content[i].data.length; k += 1) {
          p = el('p', content[i].data[k]);
          li = el('li');
          li.appendChild(p);
          list.appendChild(li);
          list.appendChild(el('br'));
        }
        div.appendChild(list);
      }
      if (content[i].type === 'code') {
        if (/<\/?[a-z][\s\S]*>/i.test(content[i].data)) {
          const p = el('p', content[i].data);
          p.style = 'white-space:pre-wrap';
          div.appendChild(p);
        } else {
          const p = el('p');
          const texti = content[i].data.replace(/\n/g, '<br />');
          p.innerHTML = texti;
          div.appendChild(p);
        }
      }
      lecture.insertBefore(div, firstChild);
    }
  }
  function tilBaka() {
    // var s = '/Controller/Action';
    const n = hlekkur.lastIndexOf('/');
    hlekkur = hlekkur.substring(0, n);
    console.log(hlekkur);
    window.location.href = hlekkur;
  }
  function loadContent() {
    const gogn = localStorage.getItem('data');
    const json = JSON.parse(gogn);
    const { content } = json;
    initFyrirlestur(gogn, json);
    uploadContent(content);
  }
  if (isLecturePage) {
    loadContent();
    const atag = document.querySelector('.lecture__last-pt');
    atag.addEventListener('click', tilBaka);
  } else {
    localStorage.removeItem('data');
    const list = new List();
    list.load();
    getClickedItem();
  }
});
