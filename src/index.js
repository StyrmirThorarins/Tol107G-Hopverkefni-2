/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
import List from './lib/list';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
  } else {
    const list = new List();
    list.load();
  }
});
