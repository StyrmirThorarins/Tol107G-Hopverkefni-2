/*
 * Sækir nýja Mynd af handahófi frá Nasa API og birtir hana á forsíðunni
 * ásamt titli og texta.
 */
function getNewImage() {
  nasaModule.default().then((data) => {
    if (data === null) {
      console.log('No data retrieved from NASA.');
    } else if (data !== null) {
      console.log('Data retrieved from NASA', data);

      image = data;
      title = data.title;
      text = data.explanation;
      img = data.hdurl;
      videoURL = data.url;

      const apodNode = document.querySelector('.apod');
      const titleNode = document.querySelector('.apod__title');
      removeMediaNode(apodNode);

      if (data.media_type === 'image') {
        const imageNode = helpersModule.el('img');
        imageNode.classList.add('apod__image');
        imageNode.setAttribute('src', img);
        titleNode.before(imageNode);
      } else if (data.media_type === 'video') {
        const vidDivNode = helpersModule.el('div');
        vidDivNode.innerHTML = `<iframe width='560' height='315' src='${videoURL}' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;

        titleNode.before(vidDivNode);
      }

      document.querySelector('.apod__title').innerText = title;
      document.querySelector('.apod__text').innerText = text;
    } else {
      console.log('Error getting data.');
    }
  });
}