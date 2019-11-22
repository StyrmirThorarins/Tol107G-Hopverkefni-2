/*
  functions to handle data for lectures    
*/

const lectureFilePath = '~/lectures.json';

// returns JSON object of all lectures
function getLecturesJSON() {
  const lecturesJSON = JSON.parse(lectureFilePath);
  return lecturesJSON;
}

// returns Array of all lectures
function getLecturesArray() {
  const lecturesJSON = getLecturesJSON();
  const lectures = [];        

  for (let n = 0; n < lecturesJSON.length; n += 1) {
    /*
      Data example:

      "slug": "html-sagan",
      "title": "Sagan",
      "category": "html",
      "image": "img/code.jpg",
      "thumbnail": "img/thumb1.jpg",
      "content": [
        {
          "type": "youtube",
          "data": "https://www.youtube.com/embed/-dC37AYntUQ"
        },
    */

    const obj = lecturesJSON[i];
    for (var key in obj){
      lectures[n][key] = obj[key]; 
    }
  }
  return lectures;
}

// return one lecture, found by slug passed, returns lecture JSON object if found, returns null if not found
function getBySlug (slug) {
  const lectures = getLecturesArray();

  let lecture = null;
  for (let n = 0; n < lectures.length; n += 1) {
    if (lectures[n].slug === slug) {
      lecture = lectures[n];
    }
  }
  return lecture;
}
