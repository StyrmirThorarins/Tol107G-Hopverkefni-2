/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/*
  functions to handle data for lectures
*/

const LECTUREFILENAME = 'lectures.json';

export default class Lectures {
  // reads and returns local json file, pass filename of a json file in the root of the server
  readLocalJSON(filename) {
    const req = new XMLHttpRequest();
    req.open('GET', `${window.location.href}/${filename}`, false);
    req.send(null);
    if (req.status === 200) {
      // console.log('readLocalJSON -> read file data:', req.responseText);
      return req.responseText;
    }  
  }

  // returns JSON object of all lectures
  getLecturesJSON() {
    const lecturesJSON = JSON.parse(this.readLocalJSON(LECTUREFILENAME));
    // console.log('getLecturesJSON -> lecturesJSON:', lecturesJSON);
    return lecturesJSON;
  }

  /** returns Array with data for all lectures
      How to use:
        const data = getLecturesArray();
        console.log('first entry, slug', data[0].slug);
        console.log('first entry, data content for first entry', data[0].content);
  */
  getLecturesArray() {
    const lecturesJSON = this.getLecturesJSON();
    const lectures = Object.entries(lecturesJSON);

    return lectures[0][1];
  }

  /**  return one lecture, found by slug passed, returns lecture JSON object if found, returns null if not found
     * How to use:
     *   const data = getLectureBySlug('some-slug-string');
     *   console.log('single entry data returned', data);
     *   console.log('single entry data returned, title', data.title);

     * @param {string} slug for the lecture to be returned
  */
  getLectureBySlug(slug) {
    const lectures = this.getLecturesArray();

    let lecture = null;
    for (let n = 0; n < Object.keys(lectures).length; n += 1) {
      if (lectures[n].slug === slug) {
        lecture = lectures[n];
      }
    }
    return lecture;
  }

  test1() {
    // const data = getLecturesArray();
    // console.log('data returned, slug: ', data[0].slug);
    // console.log('data returned, content: ', data[0].content);

    const dataSearched = getLectureBySlug('js-programs');
    // console.log('dataSearched returned: ', dataSearched);
    // console.log('dataSearched returned, title: ', dataSearched.title);
  }
}
