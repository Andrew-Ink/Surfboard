;(function () {
  let myMap;

  ymaps.ready(init);

  function init() {
    myMap = new ymaps.Map("map", {
      center: [55.74919670, 37.56119665],
      zoom: 15,
      controls: [],
    });

    let coords = [
      [55.75199728, 37.57605556],
    ],
      myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/markermap/marker.png',
    iconImageSize: [58, 73],
      iconImageOffset: [-30, -70]
  });

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);
  myMap.behaviors.disable('scrollZoom');
};
})()
