(function () {
    let myMap;

    const init = () => {
        myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.749013, 37.603531],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14,
            controls: []
        });
        const coords = [
            [55.755810, 37.594610],
            [55.746209, 37.580434],
            [55.743601, 37.597666],
            [55.743258, 37.622399],
        ]
    
        const myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/icons/marker.svg',
            iconImageSize: [60, 70],
            iconImageOffset: [-3, -42], //все метки красные
            draggable: false // и их можно перемещать
        });
    
        coords.forEach(coord => {
            myCollection.add(new ymaps.Placemark(coord));
        });
    
        myMap.geoObjects.add(myCollection);
        myMap.behaviors.disable('scrollZoom');
    }
    
    ymaps.ready(init);
})();
