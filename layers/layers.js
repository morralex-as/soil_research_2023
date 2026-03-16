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
                popuplayertitle: 'Хозяйства',
                interactive: true,
    title: 'Хозяйства<br />\
    <img src="styles/legend/_2_0.png" /> ЗАО ТПФ Котельничская<br />\
    <img src="styles/legend/_2_1.png" /> ИП ГКФХ Базанов А.Б.<br />\
    <img src="styles/legend/_2_2.png" /> ИП ГКФХ Ивунин В.В.<br />\
    <img src="styles/legend/_2_3.png" /> ИП ГКФХ Казаков И.Н.<br />\
    <img src="styles/legend/_2_4.png" /> ИП ГКФХ Мальцев С.В.<br />\
    <img src="styles/legend/_2_5.png" /> ИП ГКФХ Севрюгин С.В.<br />\
    <img src="styles/legend/_2_6.png" /> ИПГ КФХ Махов А.Л.<br />\
    <img src="styles/legend/_2_7.png" /> ИПГКФХ Вершинин О.В.<br />\
    <img src="styles/legend/_2_8.png" /> к-з Боровской<br />\
    <img src="styles/legend/_2_9.png" /> к-з Вагинский<br />\
    <img src="styles/legend/_2_10.png" /> к-з им.Кирова<br />\
    <img src="styles/legend/_2_11.png" /> к-з Маяк<br />\
    <img src="styles/legend/_2_12.png" /> к-з Рассвет<br />\
    <img src="styles/legend/_2_13.png" /> КФХ Быть может<br />\
    <img src="styles/legend/_2_14.png" /> КФХ Мамедов Г.Г.<br />\
    <img src="styles/legend/_2_15.png" /> ОАО АФ Калинино<br />\
    <img src="styles/legend/_2_16.png" /> ОАО АФ Смаиль<br />\
    <img src="styles/legend/_2_17.png" /> ОАО Беляево<br />\
    <img src="styles/legend/_2_18.png" /> ОАО Ижевское отд. Земледелец<br />\
    <img src="styles/legend/_2_19.png" /> ОАО Маяк<br />\
    <img src="styles/legend/_2_20.png" /> ОАО Мокинское<br />\
    <img src="styles/legend/_2_21.png" /> ОАО Мокинское отд. Житновский<br />\
    <img src="styles/legend/_2_22.png" /> ОАО Прогресс<br />\
    <img src="styles/legend/_2_23.png" /> ОАО РАО Кикнурская МТС<br />\
    <img src="styles/legend/_2_24.png" /> ОАО Русь<br />\
    <img src="styles/legend/_2_25.png" /> ОАО Тырышкино<br />\
    <img src="styles/legend/_2_26.png" /> ООО "Возрождение"<br />\
    <img src="styles/legend/_2_27.png" /> ООО "Возрождение" отд. "Новая жизнь"<br />\
    <img src="styles/legend/_2_28.png" /> ООО "Мечта"<br />\
    <img src="styles/legend/_2_29.png" /> ООО Агро Торг<br />\
    <img src="styles/legend/_2_30.png" /> ООО Агрофирма Надежда<br />\
    <img src="styles/legend/_2_31.png" /> ООО АгроХолдинг<br />\
    <img src="styles/legend/_2_32.png" /> ООО Александровский<br />\
    <img src="styles/legend/_2_33.png" /> ООО Андреевское<br />\
    <img src="styles/legend/_2_34.png" /> ООО АПК Царицинское<br />\
    <img src="styles/legend/_2_35.png" /> ООО АФ Лада<br />\
    <img src="styles/legend/_2_36.png" /> ООО АФ Малмыж<br />\
    <img src="styles/legend/_2_37.png" /> ООО АФ Строитель<br />\
    <img src="styles/legend/_2_38.png" /> ООО Витлинское<br />\
    <img src="styles/legend/_2_39.png" /> ООО Вотчина<br />\
    <img src="styles/legend/_2_40.png" /> ООО Вятское<br />\
    <img src="styles/legend/_2_41.png" /> ООО Дружба<br />\
    <img src="styles/legend/_2_42.png" /> ООО Заря<br />\
    <img src="styles/legend/_2_43.png" /> ООО Знаменский льнозавод<br />\
    <img src="styles/legend/_2_44.png" /> ООО Крона<br />\
    <img src="styles/legend/_2_45.png" /> ООО Кюри<br />\
    <img src="styles/legend/_2_46.png" /> ООО Лебяжское о. Ветошкино<br />\
    <img src="styles/legend/_2_47.png" /> ООО Лебяжское о. Меляндинское<br />\
    <img src="styles/legend/_2_48.png" /> ООО Молот<br />\
    <img src="styles/legend/_2_49.png" /> ООО Надежда Хлеб Н.А.<br />\
    <img src="styles/legend/_2_50.png" /> ООО Племхоз Изваильский-97<br />\
    <img src="styles/legend/_2_51.png" /> ООО Покровское<br />\
    <img src="styles/legend/_2_52.png" /> ООО Порез<br />\
    <img src="styles/legend/_2_53.png" /> ООО Пригороднное отделение Ударник<br />\
    <img src="styles/legend/_2_54.png" /> ООО Пригородное отд Восход<br />\
    <img src="styles/legend/_2_55.png" /> ООО Пригородное отд Заря<br />\
    <img src="styles/legend/_2_56.png" /> ООО Пригородное отд Савиновский<br />\
    <img src="styles/legend/_2_57.png" /> ООО Пригородное отд. Буйское<br />\
    <img src="styles/legend/_2_58.png" /> ООО Пригородное отд. Плодовоягодное<br />\
    <img src="styles/legend/_2_59.png" /> ООО Пригородное отд.Лазаревское<br />\
    <img src="styles/legend/_2_60.png" /> ООО Ральники<br />\
    <img src="styles/legend/_2_61.png" /> ООО Рассвет<br />\
    <img src="styles/legend/_2_62.png" /> ООО СП Чисты пруды<br />\
    <img src="styles/legend/_2_63.png" /> ООО СХП Победа<br />\
    <img src="styles/legend/_2_64.png" /> ООО СХП Унур<br />\
    <img src="styles/legend/_2_65.png" /> ООО Труд<br />\
    <img src="styles/legend/_2_66.png" /> ООО Юрьево<br />\
    <img src="styles/legend/_2_67.png" /> ОООАФ Пригородное<br />\
    <img src="styles/legend/_2_68.png" /> ОООСХП Исток<br />\
    <img src="styles/legend/_2_69.png" /> Пигозина Л.Ю<br />\
    <img src="styles/legend/_2_70.png" /> ПХ Гороховское торфопредприятие<br />\
    <img src="styles/legend/_2_71.png" /> СП ССК Южный<br />\
    <img src="styles/legend/_2_72.png" /> СПК "Лажский"<br />\
    <img src="styles/legend/_2_73.png" /> СПК (к-з)  Родина<br />\
    <img src="styles/legend/_2_74.png" /> СПК (к-з) Лазаревский<br />\
    <img src="styles/legend/_2_75.png" /> СПК (к-з) Овсянниковский<br />\
    <img src="styles/legend/_2_76.png" /> СПК Авангард<br />\
    <img src="styles/legend/_2_77.png" /> СПК Аджимский<br />\
    <img src="styles/legend/_2_78.png" /> СПК Боровковский<br />\
    <img src="styles/legend/_2_79.png" /> СПК Верхоуслинский<br />\
    <img src="styles/legend/_2_80.png" /> СПК Вотский<br />\
    <img src="styles/legend/_2_81.png" /> СПК Всходы<br />\
    <img src="styles/legend/_2_82.png" /> СПК Высоковский<br />\
    <img src="styles/legend/_2_83.png" /> СПК Елизаровский<br />\
    <img src="styles/legend/_2_84.png" /> СПК Елькинский<br />\
    <img src="styles/legend/_2_85.png" /> СПК Запольский<br />\
    <img src="styles/legend/_2_86.png" /> СПК Заря<br />\
    <img src="styles/legend/_2_87.png" /> СПК Земледелец<br />\
    <img src="styles/legend/_2_88.png" /> СПК Знамя<br />\
    <img src="styles/legend/_2_89.png" /> СПК Знамя Советов<br />\
    <img src="styles/legend/_2_90.png" /> СПК Ивановское<br />\
    <img src="styles/legend/_2_91.png" /> СПК к-з Восход<br />\
    <img src="styles/legend/_2_92.png" /> СПК к-з им. Коминтерна<br />\
    <img src="styles/legend/_2_93.png" /> СПК к-з Искра<br />\
    <img src="styles/legend/_2_94.png" /> СПК к-з Колос<br />\
    <img src="styles/legend/_2_95.png" /> СПК к-з Котельничский<br />\
    <img src="styles/legend/_2_96.png" /> СПК к-з Красногорье<br />\
    <img src="styles/legend/_2_97.png" /> СПК к-з Красный Льновод<br />\
    <img src="styles/legend/_2_98.png" /> СПК к-з Савиновский<br />\
    <img src="styles/legend/_2_99.png" /> СПК к-з Ударник<br />\
    <img src="styles/legend/_2_100.png" /> СПК Казаковский<br />\
    <img src="styles/legend/_2_101.png" /> СПК Каксинвайский<br />\
    <img src="styles/legend/_2_102.png" /> СПК Кашнурский<br />\
    <img src="styles/legend/_2_103.png" /> СПК Китякский<br />\
    <img src="styles/legend/_2_104.png" /> СПК Кокоревский<br />\
    <img src="styles/legend/_2_105.png" /> СПК Кокшага<br />\
    <img src="styles/legend/_2_106.png" /> СПК Колос<br />\
    <img src="styles/legend/_2_107.png" /> СПК колхоз Колос<br />\
    <img src="styles/legend/_2_108.png" /> СПК колхоз Новый<br />\
    <img src="styles/legend/_2_109.png" /> СПК колхоз Рассвет<br />\
    <img src="styles/legend/_2_110.png" /> СПК колхоз Трудовой<br />\
    <img src="styles/legend/_2_111.png" /> СПК колхоз Ударник<br />\
    <img src="styles/legend/_2_112.png" /> СПК Кугушергский<br />\
    <img src="styles/legend/_2_113.png" /> СПК Кузнецовский<br />\
    <img src="styles/legend/_2_114.png" /> СПК Лажский<br />\
    <img src="styles/legend/_2_115.png" /> СПК Лебяжский<br />\
    <img src="styles/legend/_2_116.png" /> СПК Ленинский Путь<br />\
    <img src="styles/legend/_2_117.png" /> СПК Ломовской<br />\
    <img src="styles/legend/_2_118.png" /> СПК Луч<br />\
    <img src="styles/legend/_2_119.png" /> СПК Маяк<br />\
    <img src="styles/legend/_2_120.png" /> СПК Мелиоратор<br />\
    <img src="styles/legend/_2_121.png" /> СПК Надежда<br />\
    <img src="styles/legend/_2_122.png" /> СПК Наша Родина<br />\
    <img src="styles/legend/_2_123.png" /> СПК Нива<br />\
    <img src="styles/legend/_2_124.png" /> СПК Первомайский<br />\
    <img src="styles/legend/_2_125.png" /> СПК Передовая<br />\
    <img src="styles/legend/_2_126.png" /> СПК Плодовоягодный<br />\
    <img src="styles/legend/_2_127.png" /> СПК Победа<br />\
    <img src="styles/legend/_2_128.png" /> СПК Птицевод отд. Искра<br />\
    <img src="styles/legend/_2_129.png" /> СПК Птицевод отд. Яранское<br />\
    <img src="styles/legend/_2_130.png" /> СПК Путеводитель<br />\
    <img src="styles/legend/_2_131.png" /> СПК Пушкино<br />\
    <img src="styles/legend/_2_132.png" /> СПК Ральниковский<br />\
    <img src="styles/legend/_2_133.png" /> СПК Русские краи<br />\
    <img src="styles/legend/_2_134.png" /> СПК СА к-з Березка<br />\
    <img src="styles/legend/_2_135.png" /> СПК СА-колхоз Зерновой<br />\
    <img src="styles/legend/_2_136.png" /> СПК Савичи<br />\
    <img src="styles/legend/_2_137.png" /> СПК Салобелякский<br />\
    <img src="styles/legend/_2_138.png" /> СПК Солнечный<br />\
    <img src="styles/legend/_2_139.png" /> СПК СХА (колхоз) Гигант<br />\
    <img src="styles/legend/_2_140.png" /> СПК Труженик<br />\
    <img src="styles/legend/_2_141.png" /> СПК Уртма<br />\
    <img src="styles/legend/_2_142.png" /> СПК Фокинский<br />\
    <img src="styles/legend/_2_143.png" /> СПК Шкаланский<br />\
    <img src="styles/legend/_2_144.png" /> СПК Южный<br />\
    <img src="styles/legend/_2_145.png" /> СХПК "Аврора": фонд распределения<br />\
    <img src="styles/legend/_2_146.png" /> СХПК "Алексеевский" : фонд распределения<br />\
    <img src="styles/legend/_2_147.png" /> СХПК "Галицкий" : фонд распределения<br />\
    <img src="styles/legend/_2_148.png" /> СХПК "Динамо": фонд распределения<br />\
    <img src="styles/legend/_2_149.png" /> СХПК "Дружба": фонд распределения<br />\
    <img src="styles/legend/_2_150.png" /> СХПК "Заветы Ленина": фонд распределения<br />\
    <img src="styles/legend/_2_151.png" /> СХПК "Заозерский"<br />\
    <img src="styles/legend/_2_152.png" /> СХПК "Заря": фонд распределения<br />\
    <img src="styles/legend/_2_153.png" /> СХПК "Ленинский путь" : фонд распределения<br />\
    <img src="styles/legend/_2_154.png" /> СХПК "Лисинский" : фонд распределения<br />\
    <img src="styles/legend/_2_155.png" /> СХПК "Люйский": фонд распределения<br />\
    <img src="styles/legend/_2_156.png" /> СХПК "Нива" : фонд распределения<br />\
    <img src="styles/legend/_2_157.png" /> СХПК "Новая жизнь" : фонд распределения<br />\
    <img src="styles/legend/_2_158.png" /> СХПК "Правда" : фонд распределения<br />\
    <img src="styles/legend/_2_159.png" /> СХПК "Санчурский" : фонд распределения<br />\
    <img src="styles/legend/_2_160.png" /> СХПК Восход<br />\
    <img src="styles/legend/_2_161.png" /> СХПК Житновский<br />\
    <img src="styles/legend/_2_162.png" /> СХПК Заря<br />\
    <img src="styles/legend/_2_163.png" /> СХПК Знаменское<br />\
    <img src="styles/legend/_2_164.png" /> СХПК им. Говорова<br />\
    <img src="styles/legend/_2_165.png" /> СХПК им. Кирова : фонд распределения<br />\
    <img src="styles/legend/_2_166.png" /> СХПК им. Крупской: фонд распределения<br />\
    <img src="styles/legend/_2_167.png" /> СХПК им. Тимирязева : фонд распределения<br />\
    <img src="styles/legend/_2_168.png" /> СХПК Искра<br />\
    <img src="styles/legend/_2_169.png" /> СХПК Кичминский<br />\
    <img src="styles/legend/_2_170.png" /> СХПК Макарье<br />\
    <img src="styles/legend/_2_171.png" /> СХПК Мушинский<br />\
    <img src="styles/legend/_2_172.png" /> СХПК Новый<br />\
    <img src="styles/legend/_2_173.png" /> СХПК Октябрьский<br />\
    <img src="styles/legend/_2_174.png" /> СХПК Россия<br />\
    <img src="styles/legend/_2_175.png" /> СХПК-СА Лошкаринский<br />\
    <img src="styles/legend/_2_176.png" /> Ф/л Воеводин Ю.Е.<br />\
    <img src="styles/legend/_2_177.png" /> ФГУ СПО Яранский аграрный техникум<br />\
    <img src="styles/legend/_2_178.png" /> ч/л Ведерников В.Н.<br />\
    <img src="styles/legend/_2_179.png" /> <br />' });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Земельные участки ЕГРН',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Земельные участки ЕГРН'
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
                popuplayertitle: 'Границы поселений',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Границы поселений'
            });
var format___5 = new ol.format.GeoJSON();
var features___5 = format___5.readFeatures(json___5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___5.addFeatures(features___5);
var lyr___5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___5, 
                style: style___5,
                popuplayertitle: 'Адм_деление КО',
                interactive: true,
                title: '<img src="styles/legend/__5.png" /> Адм_деление КО'
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
                popuplayertitle: 'Границы КО',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> Границы КО'
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

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr___5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr__2,lyr__3,lyr__4,lyr___5,lyr__6,lyr__7];
lyr__2.set('fieldAliases', {'FARM_NAME': 'Хозяйство', 'nom': 'Порядковый номер поля', 'Rayon': 'Район', 'god': 'Год обследования', 'area_ga': 'Площадь, га', 'Osnova': 'Osnova', });
lyr__3.set('fieldAliases', {'TypeObjRus': 'TypeObjRus', 'adr': 'Адрес', 'cat': 'Категория', 'bydoc': 'Назначение', 'КАДА_1': 'Кадастровый номер', 'area_ga': 'Площадь, га', 'cad_num_la': 'cad_num_la', 'cost_value': 'Стоимость', 'status': 'Статус', });
lyr__4.set('fieldAliases', {'name': 'Муниципальное образование', });
lyr___5.set('fieldAliases', {'name': 'Район', });
lyr__6.set('fieldAliases', {'FID': 'FID', });
lyr__7.set('fieldAliases', {'name': 'Административный район', });
lyr__2.set('fieldImages', {'FARM_NAME': 'TextEdit', 'nom': 'Range', 'Rayon': 'TextEdit', 'god': 'TextEdit', 'area_ga': 'TextEdit', 'Osnova': 'Hidden', });
lyr__3.set('fieldImages', {'TypeObjRus': 'Hidden', 'adr': 'TextEdit', 'cat': 'TextEdit', 'bydoc': 'Hidden', 'КАДА_1': 'TextEdit', 'area_ga': 'TextEdit', 'cad_num_la': 'Hidden', 'cost_value': 'TextEdit', 'status': 'TextEdit', });
lyr__4.set('fieldImages', {'name': 'TextEdit', });
lyr___5.set('fieldImages', {'name': 'TextEdit', });
lyr__6.set('fieldImages', {'FID': 'TextEdit', });
lyr__7.set('fieldImages', {'name': 'TextEdit', });
lyr__2.set('fieldLabels', {'FARM_NAME': 'header label - always visible', 'nom': 'header label - always visible', 'Rayon': 'header label - always visible', 'god': 'header label - always visible', 'area_ga': 'header label - always visible', });
lyr__3.set('fieldLabels', {'adr': 'no label', 'cat': 'header label - always visible', 'КАДА_1': 'header label - visible with data', 'area_ga': 'header label - always visible', 'cost_value': 'header label - always visible', 'status': 'header label - always visible', });
lyr__4.set('fieldLabels', {'name': 'header label - always visible', });
lyr___5.set('fieldLabels', {'name': 'header label - always visible', });
lyr__6.set('fieldLabels', {'FID': 'no label', });
lyr__7.set('fieldLabels', {'name': 'header label - always visible', });
lyr__7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});