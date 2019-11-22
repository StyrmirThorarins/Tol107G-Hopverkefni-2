/*
  Module that handles the saving, loading and modifying of data in localStorage
*/


/*
    Load and save localStorage data, saving information on completed lectures.
*/

const LOCALSTORAGE_KEY = 'lectureComplete';

/**
   * Vistaðar myndir með texta.
   *
   * @param {string} slug for the lecture status being saved
   * @param {boolean} true or false statement, signifying whether lecture is completed or not   
*/
export function getLectureStatus(slug) {  
  console.log('localStorage: ', localStorage);
  const savedMedia = [];

  for (let n = 1; n <= localStorage.length; n += 1) {
    const mediaJSON = localStorage.getItem(`${LOCALSTORAGE_KEY}-${n}`);
    const mediaObj = JSON.parse(mediaJSON);

    const mediaItem = new Array(4);
    mediaItem[0] = mediaObj.type;
    mediaItem[1] = mediaObj.mediaUrl;
    mediaItem[2] = mediaObj.text;
    mediaItem[3] = mediaObj.title;
 
    savedMedia.push(mediaItem);
  }

  return savedMedia;
}

/**
   * Vistaðar myndir með texta.
   *
   * @param {string} slug for the lecture status being saved
   * @param {boolean} true or false statement, signifying whether lecture is completed or not   
*/
export function save(slug, bCompleted) {
  const mediaJSON = `{"slug": "${bCompleted}"}`;
  localStorage.setItem(`${LOCALSTORAGE_KEY}-${slug}`, mediaJSON);

  console.log('Lecture completions status saved.');
}

 
/**
   * Remove items from local storage
*/
export function clear() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

// Clears all local storage.
export function deleteAllLocalStorage() {
  localStorage.clear();
}