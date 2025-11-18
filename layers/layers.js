var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "Хозяйства",
                interactive: true,
    title: 'Хозяйства<br />\
    <img src="styles/legend/_2_0.png" /> КФХ Быть может<br />\
    <img src="styles/legend/_2_1.png" /> ОАО Ижевское отд. Земледелец<br />\
    <img src="styles/legend/_2_2.png" /> ОАО Мокинское<br />\
    <img src="styles/legend/_2_3.png" /> ОАО Мокинское отд. Житновский<br />\
    <img src="styles/legend/_2_4.png" /> ОАО Русь<br />\
    <img src="styles/legend/_2_5.png" /> ООО Агро Торг<br />\
    <img src="styles/legend/_2_6.png" /> ООО Агрофирма Надежда<br />\
    <img src="styles/legend/_2_7.png" /> ООО АгроХолдинг<br />\
    <img src="styles/legend/_2_8.png" /> ООО АПК Царицинское<br />\
    <img src="styles/legend/_2_9.png" /> ООО Лебяжское о. Ветошкино<br />\
    <img src="styles/legend/_2_10.png" /> ООО Лебяжское о. Меляндинское<br />\
    <img src="styles/legend/_2_11.png" /> Пигозина Л.Ю<br />\
    <img src="styles/legend/_2_12.png" /> СПК Боровковский<br />\
    <img src="styles/legend/_2_13.png" /> СПК Вотский<br />\
    <img src="styles/legend/_2_14.png" /> СПК Елизаровский<br />\
    <img src="styles/legend/_2_15.png" /> СПК Елькинский<br />\
    <img src="styles/legend/_2_16.png" /> СПК Запольский<br />\
    <img src="styles/legend/_2_17.png" /> СПК Земледелец<br />\
    <img src="styles/legend/_2_18.png" /> СПК Казаковский<br />\
    <img src="styles/legend/_2_19.png" /> СПК Кашнурский<br />\
    <img src="styles/legend/_2_20.png" /> СПК Кокоревский<br />\
    <img src="styles/legend/_2_21.png" /> СПК Колос<br />\
    <img src="styles/legend/_2_22.png" /> СПК колхоз Рассвет<br />\
    <img src="styles/legend/_2_23.png" /> СПК Кузнецовский<br />\
    <img src="styles/legend/_2_24.png" /> СПК Лажский<br />\
    <img src="styles/legend/_2_25.png" /> СПК Лебяжский<br />\
    <img src="styles/legend/_2_26.png" /> СПК Маяк<br />\
    <img src="styles/legend/_2_27.png" /> СПК Фокинский<br />\
    <img src="styles/legend/_2_28.png" /> СХПК Житновский<br />\
    <img src="styles/legend/_2_29.png" /> СХПК им. Говорова<br />\
    <img src="styles/legend/_2_30.png" /> СХПК Кичминский<br />\
    <img src="styles/legend/_2_31.png" /> СХПК Мушинский<br />\
    <img src="styles/legend/_2_32.png" /> СХПК Октябрьский<br />\
    <img src="styles/legend/_2_33.png" /> СХПК-СА Лошкаринский<br />\
    <img src="styles/legend/_2_34.png" /> ч/л Ведерников В.Н.<br />'
        });
var format___3 = new ol.format.GeoJSON();
var features___3 = format___3.readFeatures(json___3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___3.addFeatures(features___3);
var lyr___3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___3, 
                style: style___3,
                popuplayertitle: "Адм_деление КО",
                interactive: true,
                title: '<img src="styles/legend/__3.png" /> Адм_деление КО'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "Границы КО",
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Границы КО'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: "Кадастр",
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> Кадастр'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: "Границы поселений",
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> Границы поселений'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: "Границы обследованных районов",
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> Границы обследованных районов'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr__2.setVisible(true);lyr___3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr__2,lyr___3,lyr__4,lyr__5,lyr__6,lyr__7];
lyr__2.set('fieldAliases', {'FARM_NAME': 'Хозяйство', 'Osnova': 'Osnova', 'Rayon': 'Район', 'god': 'Год обследования', 'nom': 'Порядковый номер поля', 'area_ga': 'Площадь, га', });
lyr___3.set('fieldAliases', {'name': 'Район', });
lyr__4.set('fieldAliases', {'FID': 'FID', });
lyr__5.set('fieldAliases', {'TypeObjRus': 'TypeObjRus', 'adr': 'Адрес', 'cat': 'Категория', 'bydoc': 'bydoc', 'КАДА_1': 'Кадастровый номер', 'area_ga': 'Площадь, га', });
lyr__6.set('fieldAliases', {'name': 'Муниципальное образование', });
lyr__7.set('fieldAliases', {'name': 'Административный район', });
lyr__2.set('fieldImages', {'FARM_NAME': 'TextEdit', 'Osnova': 'Hidden', 'Rayon': 'TextEdit', 'god': 'TextEdit', 'nom': 'Range', 'area_ga': 'TextEdit', });
lyr___3.set('fieldImages', {'name': 'TextEdit', });
lyr__4.set('fieldImages', {'FID': 'TextEdit', });
lyr__5.set('fieldImages', {'TypeObjRus': 'Hidden', 'adr': 'TextEdit', 'cat': 'Hidden', 'bydoc': 'Hidden', 'КАДА_1': 'TextEdit', 'area_ga': 'TextEdit', });
lyr__6.set('fieldImages', {'name': 'TextEdit', });
lyr__7.set('fieldImages', {'name': 'TextEdit', });
lyr__2.set('fieldLabels', {'FARM_NAME': 'header label - always visible', 'Rayon': 'header label - always visible', 'god': 'header label - always visible', 'nom': 'header label - always visible', 'area_ga': 'header label - always visible', });
lyr___3.set('fieldLabels', {'name': 'header label - always visible', });
lyr__4.set('fieldLabels', {'FID': 'no label', });
lyr__5.set('fieldLabels', {'adr': 'no label', 'КАДА_1': 'header label - visible with data', 'area_ga': 'header label - always visible', });
lyr__6.set('fieldLabels', {'name': 'header label - always visible', });
lyr__7.set('fieldLabels', {'name': 'header label - always visible', });
lyr__7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});