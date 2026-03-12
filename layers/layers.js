var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format___39n_2 = new ol.format.GeoJSON();
var features___39n_2 = format___39n_2.readFeatures(json___39n_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___39n_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___39n_2.addFeatures(features___39n_2);
var lyr___39n_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___39n_2, 
                style: style___39n_2,
                popuplayertitle: 'Хозяйства_общие_39n',
                interactive: true,
    title: 'Хозяйства_общие_39n<br />\
    <img src="styles/legend/__39n_2_0.png" /> ЗАО ТПФ Котельничская<br />\
    <img src="styles/legend/__39n_2_1.png" /> ИП ГКФХ Базанов А.Б.<br />\
    <img src="styles/legend/__39n_2_2.png" /> ИП ГКФХ Ивунин В.В.<br />\
    <img src="styles/legend/__39n_2_3.png" /> ИП ГКФХ Казаков И.Н.<br />\
    <img src="styles/legend/__39n_2_4.png" /> ИП ГКФХ Мальцев С.В.<br />\
    <img src="styles/legend/__39n_2_5.png" /> ИП ГКФХ Севрюгин С.В.<br />\
    <img src="styles/legend/__39n_2_6.png" /> ИПГ КФХ Махов А.Л.<br />\
    <img src="styles/legend/__39n_2_7.png" /> ИПГКФХ Вершинин О.В.<br />\
    <img src="styles/legend/__39n_2_8.png" /> к-з Боровской<br />\
    <img src="styles/legend/__39n_2_9.png" /> к-з Вагинский<br />\
    <img src="styles/legend/__39n_2_10.png" /> к-з им.Кирова<br />\
    <img src="styles/legend/__39n_2_11.png" /> к-з Маяк<br />\
    <img src="styles/legend/__39n_2_12.png" /> к-з Рассвет<br />\
    <img src="styles/legend/__39n_2_13.png" /> КФХ Быть может<br />\
    <img src="styles/legend/__39n_2_14.png" /> КФХ Мамедов Г.Г.<br />\
    <img src="styles/legend/__39n_2_15.png" /> ОАО Беляево<br />\
    <img src="styles/legend/__39n_2_16.png" /> ОАО Ижевское отд. Земледелец<br />\
    <img src="styles/legend/__39n_2_17.png" /> ОАО Маяк<br />\
    <img src="styles/legend/__39n_2_18.png" /> ОАО Мокинское<br />\
    <img src="styles/legend/__39n_2_19.png" /> ОАО Мокинское отд. Житновский<br />\
    <img src="styles/legend/__39n_2_20.png" /> ОАО Прогресс<br />\
    <img src="styles/legend/__39n_2_21.png" /> ОАО РАО Кикнурская МТС<br />\
    <img src="styles/legend/__39n_2_22.png" /> ОАО Русь<br />\
    <img src="styles/legend/__39n_2_23.png" /> ОАО Тырышкино<br />\
    <img src="styles/legend/__39n_2_24.png" /> ООО "Возрождение"<br />\
    <img src="styles/legend/__39n_2_25.png" /> ООО "Возрождение" отд. "Новая жизнь"<br />\
    <img src="styles/legend/__39n_2_26.png" /> ООО "Мечта"<br />\
    <img src="styles/legend/__39n_2_27.png" /> ООО Агро Торг<br />\
    <img src="styles/legend/__39n_2_28.png" /> ООО Агрофирма Надежда<br />\
    <img src="styles/legend/__39n_2_29.png" /> ООО АгроХолдинг<br />\
    <img src="styles/legend/__39n_2_30.png" /> ООО АПК Царицинское<br />\
    <img src="styles/legend/__39n_2_31.png" /> ООО АФ Лада<br />\
    <img src="styles/legend/__39n_2_32.png" /> ООО Вотчина<br />\
    <img src="styles/legend/__39n_2_33.png" /> ООО Знаменский льнозавод<br />\
    <img src="styles/legend/__39n_2_34.png" /> ООО Крона<br />\
    <img src="styles/legend/__39n_2_35.png" /> ООО Лебяжское о. Ветошкино<br />\
    <img src="styles/legend/__39n_2_36.png" /> ООО Лебяжское о. Меляндинское<br />\
    <img src="styles/legend/__39n_2_37.png" /> ООО Молот<br />\
    <img src="styles/legend/__39n_2_38.png" /> ООО Племхоз Изваильский-97<br />\
    <img src="styles/legend/__39n_2_39.png" /> ООО Покровское<br />\
    <img src="styles/legend/__39n_2_40.png" /> ООО СХП Победа<br />\
    <img src="styles/legend/__39n_2_41.png" /> ООО Юрьево<br />\
    <img src="styles/legend/__39n_2_42.png" /> ОООАФ Пригородное<br />\
    <img src="styles/legend/__39n_2_43.png" /> ОООСХП Исток<br />\
    <img src="styles/legend/__39n_2_44.png" /> Пигозина Л.Ю<br />\
    <img src="styles/legend/__39n_2_45.png" /> ПХ Гороховское торфопредприятие<br />\
    <img src="styles/legend/__39n_2_46.png" /> СП ССК Южный<br />\
    <img src="styles/legend/__39n_2_47.png" /> СПК Авангард<br />\
    <img src="styles/legend/__39n_2_48.png" /> СПК Боровковский<br />\
    <img src="styles/legend/__39n_2_49.png" /> СПК Верхоуслинский<br />\
    <img src="styles/legend/__39n_2_50.png" /> СПК Вотский<br />\
    <img src="styles/legend/__39n_2_51.png" /> СПК Высоковский<br />\
    <img src="styles/legend/__39n_2_52.png" /> СПК Елизаровский<br />\
    <img src="styles/legend/__39n_2_53.png" /> СПК Елькинский<br />\
    <img src="styles/legend/__39n_2_54.png" /> СПК Запольский<br />\
    <img src="styles/legend/__39n_2_55.png" /> СПК Заря<br />\
    <img src="styles/legend/__39n_2_56.png" /> СПК Земледелец<br />\
    <img src="styles/legend/__39n_2_57.png" /> СПК Знамя Советов<br />\
    <img src="styles/legend/__39n_2_58.png" /> СПК Ивановское<br />\
    <img src="styles/legend/__39n_2_59.png" /> СПК к-з Искра<br />\
    <img src="styles/legend/__39n_2_60.png" /> СПК к-з Колос<br />\
    <img src="styles/legend/__39n_2_61.png" /> СПК к-з Котельничский<br />\
    <img src="styles/legend/__39n_2_62.png" /> СПК к-з Красногорье<br />\
    <img src="styles/legend/__39n_2_63.png" /> СПК к-з Красный Льновод<br />\
    <img src="styles/legend/__39n_2_64.png" /> СПК к-з Ударник<br />\
    <img src="styles/legend/__39n_2_65.png" /> СПК Казаковский<br />\
    <img src="styles/legend/__39n_2_66.png" /> СПК Кашнурский<br />\
    <img src="styles/legend/__39n_2_67.png" /> СПК Кокоревский<br />\
    <img src="styles/legend/__39n_2_68.png" /> СПК Кокшага<br />\
    <img src="styles/legend/__39n_2_69.png" /> СПК Колос<br />\
    <img src="styles/legend/__39n_2_70.png" /> СПК колхоз Рассвет<br />\
    <img src="styles/legend/__39n_2_71.png" /> СПК Кугушергский<br />\
    <img src="styles/legend/__39n_2_72.png" /> СПК Кузнецовский<br />\
    <img src="styles/legend/__39n_2_73.png" /> СПК Лажский<br />\
    <img src="styles/legend/__39n_2_74.png" /> СПК Лебяжский<br />\
    <img src="styles/legend/__39n_2_75.png" /> СПК Ломовской<br />\
    <img src="styles/legend/__39n_2_76.png" /> СПК Луч<br />\
    <img src="styles/legend/__39n_2_77.png" /> СПК Маяк<br />\
    <img src="styles/legend/__39n_2_78.png" /> СПК Мелиоратор<br />\
    <img src="styles/legend/__39n_2_79.png" /> СПК Надежда<br />\
    <img src="styles/legend/__39n_2_80.png" /> СПК Наша Родина<br />\
    <img src="styles/legend/__39n_2_81.png" /> СПК Первомайский<br />\
    <img src="styles/legend/__39n_2_82.png" /> СПК Победа<br />\
    <img src="styles/legend/__39n_2_83.png" /> СПК Птицевод отд. Искра<br />\
    <img src="styles/legend/__39n_2_84.png" /> СПК Птицевод отд. Яранское<br />\
    <img src="styles/legend/__39n_2_85.png" /> СПК Пушкино<br />\
    <img src="styles/legend/__39n_2_86.png" /> СПК Русские краи<br />\
    <img src="styles/legend/__39n_2_87.png" /> СПК Савичи<br />\
    <img src="styles/legend/__39n_2_88.png" /> СПК Салобелякский<br />\
    <img src="styles/legend/__39n_2_89.png" /> СПК Солнечный<br />\
    <img src="styles/legend/__39n_2_90.png" /> СПК Труженик<br />\
    <img src="styles/legend/__39n_2_91.png" /> СПК Уртма<br />\
    <img src="styles/legend/__39n_2_92.png" /> СПК Фокинский<br />\
    <img src="styles/legend/__39n_2_93.png" /> СПК Шкаланский<br />\
    <img src="styles/legend/__39n_2_94.png" /> СПК Южный<br />\
    <img src="styles/legend/__39n_2_95.png" /> СХПК "Аврора": фонд распределения<br />\
    <img src="styles/legend/__39n_2_96.png" /> СХПК "Алексеевский" : фонд распределения<br />\
    <img src="styles/legend/__39n_2_97.png" /> СХПК "Галицкий" : фонд распределения<br />\
    <img src="styles/legend/__39n_2_98.png" /> СХПК "Динамо": фонд распределения<br />\
    <img src="styles/legend/__39n_2_99.png" /> СХПК "Дружба": фонд распределения<br />\
    <img src="styles/legend/__39n_2_100.png" /> СХПК "Заветы Ленина": фонд распределения<br />\
    <img src="styles/legend/__39n_2_101.png" /> СХПК "Заозерский"<br />\
    <img src="styles/legend/__39n_2_102.png" /> СХПК "Заря": фонд распределения<br />\
    <img src="styles/legend/__39n_2_103.png" /> СХПК "Ленинский путь" : фонд распределения<br />\
    <img src="styles/legend/__39n_2_104.png" /> СХПК "Лисинский" : фонд распределения<br />\
    <img src="styles/legend/__39n_2_105.png" /> СХПК "Люйский": фонд распределения<br />\
    <img src="styles/legend/__39n_2_106.png" /> СХПК "Нива" : фонд распределения<br />\
    <img src="styles/legend/__39n_2_107.png" /> СХПК "Новая жизнь" : фонд распределения<br />\
    <img src="styles/legend/__39n_2_108.png" /> СХПК "Правда" : фонд распределения<br />\
    <img src="styles/legend/__39n_2_109.png" /> СХПК "Санчурский" : фонд распределения<br />\
    <img src="styles/legend/__39n_2_110.png" /> СХПК Восход<br />\
    <img src="styles/legend/__39n_2_111.png" /> СХПК Житновский<br />\
    <img src="styles/legend/__39n_2_112.png" /> СХПК Заря<br />\
    <img src="styles/legend/__39n_2_113.png" /> СХПК Знаменское<br />\
    <img src="styles/legend/__39n_2_114.png" /> СХПК им. Говорова<br />\
    <img src="styles/legend/__39n_2_115.png" /> СХПК им. Кирова : фонд распределения<br />\
    <img src="styles/legend/__39n_2_116.png" /> СХПК им. Крупской: фонд распределения<br />\
    <img src="styles/legend/__39n_2_117.png" /> СХПК им. Тимирязева : фонд распределения<br />\
    <img src="styles/legend/__39n_2_118.png" /> СХПК Искра<br />\
    <img src="styles/legend/__39n_2_119.png" /> СХПК Кичминский<br />\
    <img src="styles/legend/__39n_2_120.png" /> СХПК Макарье<br />\
    <img src="styles/legend/__39n_2_121.png" /> СХПК Мушинский<br />\
    <img src="styles/legend/__39n_2_122.png" /> СХПК Новый<br />\
    <img src="styles/legend/__39n_2_123.png" /> СХПК Октябрьский<br />\
    <img src="styles/legend/__39n_2_124.png" /> СХПК Россия<br />\
    <img src="styles/legend/__39n_2_125.png" /> СХПК-СА Лошкаринский<br />\
    <img src="styles/legend/__39n_2_126.png" /> Ф/л Воеводин Ю.Е.<br />\
    <img src="styles/legend/__39n_2_127.png" /> ФГУ СПО Яранский аграрный техникум<br />\
    <img src="styles/legend/__39n_2_128.png" /> ч/л Ведерников В.Н.<br />\
    <img src="styles/legend/__39n_2_129.png" /> <br />' });
var format___39n_3 = new ol.format.GeoJSON();
var features___39n_3 = format___39n_3.readFeatures(json___39n_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___39n_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___39n_3.addFeatures(features___39n_3);
var lyr___39n_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___39n_3, 
                style: style___39n_3,
                popuplayertitle: 'Кадастр_общий_39n',
                interactive: true,
                title: '<img src="styles/legend/__39n_3.png" /> Кадастр_общий_39n'
            });
var format___4 = new ol.format.GeoJSON();
var features___4 = format___4.readFeatures(json___4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___4.addFeatures(features___4);
var lyr___4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___4, 
                style: style___4,
                popuplayertitle: 'Адм_деление КО',
                interactive: true,
                title: '<img src="styles/legend/__4.png" /> Адм_деление КО'
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
                popuplayertitle: 'Границы КО',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> Границы КО'
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
                popuplayertitle: 'Границы поселений',
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
                popuplayertitle: 'Границы обследованных районов',
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> Границы обследованных районов'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr___39n_2.setVisible(true);lyr___39n_3.setVisible(true);lyr___4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr___39n_2,lyr___39n_3,lyr___4,lyr__5,lyr__6,lyr__7];
lyr___39n_2.set('fieldAliases', {'FARM_NAME': 'Хозяйство', 'nom': 'Порядковый номер поля', 'Rayon': 'Район', 'god': 'Год обследования', 'area_ga': 'Площадь, га', 'Osnova': 'Osnova', });
lyr___39n_3.set('fieldAliases', {'TypeObjRus': 'TypeObjRus', 'adr': 'Адрес', 'cat': 'Категория', 'bydoc': 'bydoc', 'КАДА_1': 'Кадастровый номер', 'area_ga': 'Площадь, га', });
lyr___4.set('fieldAliases', {'name': 'Район', });
lyr__5.set('fieldAliases', {'FID': 'FID', });
lyr__6.set('fieldAliases', {'name': 'Муниципальное образование', });
lyr__7.set('fieldAliases', {'name': 'Административный район', });
lyr___39n_2.set('fieldImages', {'FARM_NAME': 'TextEdit', 'nom': 'Range', 'Rayon': 'TextEdit', 'god': 'TextEdit', 'area_ga': 'TextEdit', 'Osnova': 'Hidden', });
lyr___39n_3.set('fieldImages', {'TypeObjRus': 'Hidden', 'adr': 'Hidden', 'cat': 'Hidden', 'bydoc': 'Hidden', 'КАДА_1': 'TextEdit', 'area_ga': 'TextEdit', });
lyr___4.set('fieldImages', {'name': 'TextEdit', });
lyr__5.set('fieldImages', {'FID': 'TextEdit', });
lyr__6.set('fieldImages', {'name': 'TextEdit', });
lyr__7.set('fieldImages', {'name': 'TextEdit', });
lyr___39n_2.set('fieldLabels', {'FARM_NAME': 'header label - always visible', 'nom': 'header label - always visible', 'Rayon': 'header label - always visible', 'god': 'header label - always visible', 'area_ga': 'header label - always visible', });
lyr___39n_3.set('fieldLabels', {'КАДА_1': 'header label - visible with data', 'area_ga': 'header label - always visible', });
lyr___4.set('fieldLabels', {'name': 'header label - always visible', });
lyr__5.set('fieldLabels', {'FID': 'no label', });
lyr__6.set('fieldLabels', {'name': 'header label - always visible', });
lyr__7.set('fieldLabels', {'name': 'header label - always visible', });
lyr__7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});