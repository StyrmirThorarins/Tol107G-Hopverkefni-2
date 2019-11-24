import List from './lib/list';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');
  const btn = document.querySelector('button');

  if (isLecturePage) {

  } else {
    const list = new List();
    list.load();
    btn.addEventListener('click', toggleBtn);
    console.log('ha');

    toggleBtn() {
        console.log('ni');
        if (btn.classList.contains('btn__active')) {
            btn.classList.remove('btn__active');
        }
        else {
            btn.classList.add('btn__active');
        }
    }
    

  }
});
