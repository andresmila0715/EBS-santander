var wms_layers = [];

var format_Restaurantes_0 = new ol.format.GeoJSON();
var features_Restaurantes_0 = format_Restaurantes_0.readFeatures(json_Restaurantes_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restaurantes_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurantes_0.addFeatures(features_Restaurantes_0);
var lyr_Restaurantes_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Restaurantes_0, 
                style: style_Restaurantes_0,
                popuplayertitle: 'Restaurantes',
                interactive: true,
                title: '<img src="styles/legend/Restaurantes_0.png" /> Restaurantes'
            });
var format_Hospitales_1 = new ol.format.GeoJSON();
var features_Hospitales_1 = format_Hospitales_1.readFeatures(json_Hospitales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitales_1.addFeatures(features_Hospitales_1);
var lyr_Hospitales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospitales_1, 
                style: style_Hospitales_1,
                popuplayertitle: 'Hospitales',
                interactive: true,
                title: '<img src="styles/legend/Hospitales_1.png" /> Hospitales'
            });
var format_Cuevas_2 = new ol.format.GeoJSON();
var features_Cuevas_2 = format_Cuevas_2.readFeatures(json_Cuevas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuevas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuevas_2.addFeatures(features_Cuevas_2);
var lyr_Cuevas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuevas_2, 
                style: style_Cuevas_2,
                popuplayertitle: 'Cuevas',
                interactive: true,
                title: '<img src="styles/legend/Cuevas_2.png" /> Cuevas'
            });
var format_Escuelas_3 = new ol.format.GeoJSON();
var features_Escuelas_3 = format_Escuelas_3.readFeatures(json_Escuelas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Escuelas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escuelas_3.addFeatures(features_Escuelas_3);
var lyr_Escuelas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Escuelas_3, 
                style: style_Escuelas_3,
                popuplayertitle: 'Escuelas',
                interactive: true,
                title: '<img src="styles/legend/Escuelas_3.png" /> Escuelas'
            });
var format_Hospedajes_4 = new ol.format.GeoJSON();
var features_Hospedajes_4 = format_Hospedajes_4.readFeatures(json_Hospedajes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospedajes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospedajes_4.addFeatures(features_Hospedajes_4);
var lyr_Hospedajes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospedajes_4, 
                style: style_Hospedajes_4,
                popuplayertitle: 'Hospedajes',
                interactive: true,
                title: '<img src="styles/legend/Hospedajes_4.png" /> Hospedajes'
            });
var format_ZonasComerciales_5 = new ol.format.GeoJSON();
var features_ZonasComerciales_5 = format_ZonasComerciales_5.readFeatures(json_ZonasComerciales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasComerciales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasComerciales_5.addFeatures(features_ZonasComerciales_5);
var lyr_ZonasComerciales_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasComerciales_5, 
                style: style_ZonasComerciales_5,
                popuplayertitle: 'Zonas Comerciales',
                interactive: true,
                title: '<img src="styles/legend/ZonasComerciales_5.png" /> Zonas Comerciales'
            });
var format_ZonasComunes_6 = new ol.format.GeoJSON();
var features_ZonasComunes_6 = format_ZonasComunes_6.readFeatures(json_ZonasComunes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasComunes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasComunes_6.addFeatures(features_ZonasComunes_6);
var lyr_ZonasComunes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasComunes_6, 
                style: style_ZonasComunes_6,
                popuplayertitle: 'Zonas Comunes',
                interactive: true,
                title: '<img src="styles/legend/ZonasComunes_6.png" /> Zonas Comunes'
            });
var format_ZonasTuristicas_7 = new ol.format.GeoJSON();
var features_ZonasTuristicas_7 = format_ZonasTuristicas_7.readFeatures(json_ZonasTuristicas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasTuristicas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasTuristicas_7.addFeatures(features_ZonasTuristicas_7);
var lyr_ZonasTuristicas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasTuristicas_7, 
                style: style_ZonasTuristicas_7,
                popuplayertitle: 'Zonas Turisticas',
                interactive: true,
                title: '<img src="styles/legend/ZonasTuristicas_7.png" /> Zonas Turisticas'
            });
var format_Vacia_8 = new ol.format.GeoJSON();
var features_Vacia_8 = format_Vacia_8.readFeatures(json_Vacia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vacia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vacia_8.addFeatures(features_Vacia_8);
var lyr_Vacia_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vacia_8, 
                style: style_Vacia_8,
                popuplayertitle: 'Vacia',
                interactive: true,
                title: '<img src="styles/legend/Vacia_8.png" /> Vacia'
            });
var format_RiesgoAlto_9 = new ol.format.GeoJSON();
var features_RiesgoAlto_9 = format_RiesgoAlto_9.readFeatures(json_RiesgoAlto_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoAlto_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoAlto_9.addFeatures(features_RiesgoAlto_9);
var lyr_RiesgoAlto_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoAlto_9, 
                style: style_RiesgoAlto_9,
                popuplayertitle: 'Riesgo Alto',
                interactive: true,
                title: '<img src="styles/legend/RiesgoAlto_9.png" /> Riesgo Alto'
            });
var format_RiesgoBajo_10 = new ol.format.GeoJSON();
var features_RiesgoBajo_10 = format_RiesgoBajo_10.readFeatures(json_RiesgoBajo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoBajo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoBajo_10.addFeatures(features_RiesgoBajo_10);
var lyr_RiesgoBajo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoBajo_10, 
                style: style_RiesgoBajo_10,
                popuplayertitle: 'Riesgo Bajo',
                interactive: true,
                title: '<img src="styles/legend/RiesgoBajo_10.png" /> Riesgo Bajo'
            });
var format_RiesgoMedio_11 = new ol.format.GeoJSON();
var features_RiesgoMedio_11 = format_RiesgoMedio_11.readFeatures(json_RiesgoMedio_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoMedio_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoMedio_11.addFeatures(features_RiesgoMedio_11);
var lyr_RiesgoMedio_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoMedio_11, 
                style: style_RiesgoMedio_11,
                popuplayertitle: 'Riesgo Medio',
                interactive: true,
                title: '<img src="styles/legend/RiesgoMedio_11.png" /> Riesgo Medio'
            });

        var lyr_Mapa3_12 = new ol.layer.Tile({
            'title': 'Mapa #3',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Mapa2_13 = new ol.layer.Tile({
            'title': 'Mapa #2',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Negrilla_14 = new ol.layer.Tile({
            'title': 'Negrilla',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Mapa1_15 = new ol.layer.Tile({
            'title': 'Mapa #1',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_cartografiaveredaLAPALMAT1MT14_16 = new ol.format.GeoJSON();
var features_cartografiaveredaLAPALMAT1MT14_16 = format_cartografiaveredaLAPALMAT1MT14_16.readFeatures(json_cartografiaveredaLAPALMAT1MT14_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cartografiaveredaLAPALMAT1MT14_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cartografiaveredaLAPALMAT1MT14_16.addFeatures(features_cartografiaveredaLAPALMAT1MT14_16);
var lyr_cartografiaveredaLAPALMAT1MT14_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cartografiaveredaLAPALMAT1MT14_16, 
                style: style_cartografiaveredaLAPALMAT1MT14_16,
                popuplayertitle: 'cartografia vereda LA PALMA T1-MT14',
                interactive: true,
    title: 'cartografia vereda LA PALMA T1-MT14<br />\
    <img src="styles/legend/cartografiaveredaLAPALMAT1MT14_16_0.png" /> AMARILLO MEDIO<br />\
    <img src="styles/legend/cartografiaveredaLAPALMAT1MT14_16_1.png" /> Vacia<br />\
    <img src="styles/legend/cartografiaveredaLAPALMAT1MT14_16_2.png" /> VERDE BAJO<br />\
    <img src="styles/legend/cartografiaveredaLAPALMAT1MT14_16_3.png" /> <br />' });
var format_cartografiaveredaLAPALMAT1MT14_17 = new ol.format.GeoJSON();
var features_cartografiaveredaLAPALMAT1MT14_17 = format_cartografiaveredaLAPALMAT1MT14_17.readFeatures(json_cartografiaveredaLAPALMAT1MT14_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cartografiaveredaLAPALMAT1MT14_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cartografiaveredaLAPALMAT1MT14_17.addFeatures(features_cartografiaveredaLAPALMAT1MT14_17);
var lyr_cartografiaveredaLAPALMAT1MT14_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cartografiaveredaLAPALMAT1MT14_17, 
                style: style_cartografiaveredaLAPALMAT1MT14_17,
                popuplayertitle: 'cartografia vereda LA PALMA T1-MT14',
                interactive: true,
    title: 'cartografia vereda LA PALMA T1-MT14<br />\
    <img src="styles/legend/cartografiaveredaLAPALMAT1MT14_17_0.png" /> AMARILLO MEDIO<br />\
    <img src="styles/legend/cartografiaveredaLAPALMAT1MT14_17_1.png" /> Vacia<br />\
    <img src="styles/legend/cartografiaveredaLAPALMAT1MT14_17_2.png" /> VERDE BAJO<br />\
    <img src="styles/legend/cartografiaveredaLAPALMAT1MT14_17_3.png" /> <br />' });
var format_Palma_18 = new ol.format.GeoJSON();
var features_Palma_18 = format_Palma_18.readFeatures(json_Palma_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Palma_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Palma_18.addFeatures(features_Palma_18);
var lyr_Palma_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Palma_18, 
                style: style_Palma_18,
                popuplayertitle: 'Palma',
                interactive: true,
                title: '<img src="styles/legend/Palma_18.png" /> Palma'
            });
var format_fotografiascartografiaveredaCerritosMT21_19 = new ol.format.GeoJSON();
var features_fotografiascartografiaveredaCerritosMT21_19 = format_fotografiascartografiaveredaCerritosMT21_19.readFeatures(json_fotografiascartografiaveredaCerritosMT21_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fotografiascartografiaveredaCerritosMT21_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fotografiascartografiaveredaCerritosMT21_19.addFeatures(features_fotografiascartografiaveredaCerritosMT21_19);
var lyr_fotografiascartografiaveredaCerritosMT21_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fotografiascartografiaveredaCerritosMT21_19, 
                style: style_fotografiascartografiaveredaCerritosMT21_19,
                popuplayertitle: 'fotografias  cartografia vereda Cerritos MT21',
                interactive: true,
    title: 'fotografias  cartografia vereda Cerritos MT21<br />\
    <img src="styles/legend/fotografiascartografiaveredaCerritosMT21_19_0.png" /> Riesgo Bajo<br />\
    <img src="styles/legend/fotografiascartografiaveredaCerritosMT21_19_1.png" /> VIVIENDA NO HABITADA<br />\
    <img src="styles/legend/fotografiascartografiaveredaCerritosMT21_19_2.png" /> <br />' });
var format_CERRITOS_20 = new ol.format.GeoJSON();
var features_CERRITOS_20 = format_CERRITOS_20.readFeatures(json_CERRITOS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CERRITOS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CERRITOS_20.addFeatures(features_CERRITOS_20);
var lyr_CERRITOS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CERRITOS_20, 
                style: style_CERRITOS_20,
                popuplayertitle: 'CERRITOS',
                interactive: true,
                title: '<img src="styles/legend/CERRITOS_20.png" /> CERRITOS'
            });
var group_CERRITOS = new ol.layer.Group({
                                layers: [lyr_fotografiascartografiaveredaCerritosMT21_19,lyr_CERRITOS_20,],
                                fold: 'close',
                                title: 'CERRITOS'});
var group_PALMA = new ol.layer.Group({
                                layers: [lyr_cartografiaveredaLAPALMAT1MT14_16,lyr_cartografiaveredaLAPALMAT1MT14_17,lyr_Palma_18,],
                                fold: 'close',
                                title: 'PALMA'});
var group_Leyenda = new ol.layer.Group({
                                layers: [lyr_Restaurantes_0,lyr_Hospitales_1,lyr_Cuevas_2,lyr_Escuelas_3,lyr_Hospedajes_4,lyr_ZonasComerciales_5,lyr_ZonasComunes_6,lyr_ZonasTuristicas_7,lyr_Vacia_8,lyr_RiesgoAlto_9,lyr_RiesgoBajo_10,lyr_RiesgoMedio_11,],
                                fold: 'close',
                                title: 'Leyenda'});

lyr_Restaurantes_0.setVisible(true);lyr_Hospitales_1.setVisible(true);lyr_Cuevas_2.setVisible(true);lyr_Escuelas_3.setVisible(true);lyr_Hospedajes_4.setVisible(true);lyr_ZonasComerciales_5.setVisible(true);lyr_ZonasComunes_6.setVisible(true);lyr_ZonasTuristicas_7.setVisible(true);lyr_Vacia_8.setVisible(true);lyr_RiesgoAlto_9.setVisible(true);lyr_RiesgoBajo_10.setVisible(true);lyr_RiesgoMedio_11.setVisible(true);lyr_Mapa3_12.setVisible(true);lyr_Mapa2_13.setVisible(true);lyr_Negrilla_14.setVisible(true);lyr_Mapa1_15.setVisible(true);lyr_cartografiaveredaLAPALMAT1MT14_16.setVisible(true);lyr_cartografiaveredaLAPALMAT1MT14_17.setVisible(true);lyr_Palma_18.setVisible(true);lyr_fotografiascartografiaveredaCerritosMT21_19.setVisible(true);lyr_CERRITOS_20.setVisible(true);
var layersList = [group_Leyenda,lyr_Mapa3_12,lyr_Mapa2_13,lyr_Negrilla_14,lyr_Mapa1_15,group_PALMA,group_CERRITOS];
lyr_Restaurantes_0.set('fieldAliases', {'id': 'id', });
lyr_Hospitales_1.set('fieldAliases', {'id': 'id', });
lyr_Cuevas_2.set('fieldAliases', {'id': 'id', });
lyr_Escuelas_3.set('fieldAliases', {'id': 'id', });
lyr_Hospedajes_4.set('fieldAliases', {'id': 'id', });
lyr_ZonasComerciales_5.set('fieldAliases', {'id': 'id', });
lyr_ZonasComunes_6.set('fieldAliases', {'id': 'id', });
lyr_ZonasTuristicas_7.set('fieldAliases', {'id': 'id', });
lyr_Vacia_8.set('fieldAliases', {'id': 'id', });
lyr_RiesgoAlto_9.set('fieldAliases', {'id': 'id', });
lyr_RiesgoBajo_10.set('fieldAliases', {'id': 'id', });
lyr_RiesgoMedio_11.set('fieldAliases', {'id': 'id', });
lyr_cartografiaveredaLAPALMAT1MT14_16.set('fieldAliases', {'NÚMERO DE CASA': 'NÚMERO DE CASA', 'NÚMERO DE FAMILIA': 'NÚMERO DE FAMILIA', 'FOTOGRAFIA': 'FOTOGRAFIA', 'Y': 'Y', 'X': 'X', 'RIESGO': 'RIESGO', 'CONVENCIONES': 'CONVENCIONES', 'NOMBRE DE LA FOTO': 'NOMBRE DE LA FOTO', 'OBSERVACIÓN DE LA FAMILIA': 'OBSERVACIÓN DE LA FAMILIA', 'IDENTIFICACION DE LA FAMILIA': 'IDENTIFICACION DE LA FAMILIA', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', });
lyr_cartografiaveredaLAPALMAT1MT14_17.set('fieldAliases', {'NÚMERO DE CASA': 'NÚMERO DE CASA', 'NÚMERO DE FAMILIA': 'NÚMERO DE FAMILIA', 'FOTOGRAFIA': 'FOTOGRAFIA', 'Y': 'Y', 'X': 'X', 'RIESGO': 'RIESGO', 'CONVENCIONES': 'CONVENCIONES', 'NOMBRE DE LA FOTO': 'NOMBRE DE LA FOTO', 'OBSERVACIÓN DE LA FAMILIA': 'OBSERVACIÓN DE LA FAMILIA', 'IDENTIFICACION DE LA FAMILIA': 'IDENTIFICACION DE LA FAMILIA', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', });
lyr_Palma_18.set('fieldAliases', {'id': 'id', });
lyr_fotografiascartografiaveredaCerritosMT21_19.set('fieldAliases', {'NÚMERO DE CASA': 'NÚMERO DE CASA', 'NÚMERO DE FAMILIA': 'NÚMERO DE FAMILIA', 'FOTOGRAFIA': 'FOTOGRAFIA', 'Y': 'Y', 'X': 'X', 'RIESGO': 'RIESGO', 'CONVENCIONES': 'CONVENCIONES', 'NOMBRE DE LA FOTO': 'NOMBRE DE LA FOTO', 'observación de la familia': 'observación de la familia', 'IDENTIFICACION DE LA FAMILIA': 'IDENTIFICACION DE LA FAMILIA', });
lyr_CERRITOS_20.set('fieldAliases', {'id': 'id', });
lyr_Restaurantes_0.set('fieldImages', {'id': '', });
lyr_Hospitales_1.set('fieldImages', {'id': '', });
lyr_Cuevas_2.set('fieldImages', {'id': '', });
lyr_Escuelas_3.set('fieldImages', {'id': '', });
lyr_Hospedajes_4.set('fieldImages', {'id': '', });
lyr_ZonasComerciales_5.set('fieldImages', {'id': '', });
lyr_ZonasComunes_6.set('fieldImages', {'id': '', });
lyr_ZonasTuristicas_7.set('fieldImages', {'id': '', });
lyr_Vacia_8.set('fieldImages', {'id': '', });
lyr_RiesgoAlto_9.set('fieldImages', {'id': '', });
lyr_RiesgoBajo_10.set('fieldImages', {'id': '', });
lyr_RiesgoMedio_11.set('fieldImages', {'id': '', });
lyr_cartografiaveredaLAPALMAT1MT14_16.set('fieldImages', {'NÚMERO DE CASA': 'Range', 'NÚMERO DE FAMILIA': 'TextEdit', 'FOTOGRAFIA': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'RIESGO': 'TextEdit', 'CONVENCIONES': 'TextEdit', 'NOMBRE DE LA FOTO': 'TextEdit', 'OBSERVACIÓN DE LA FAMILIA': 'TextEdit', 'IDENTIFICACION DE LA FAMILIA': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', 'field_26': 'TextEdit', 'field_27': 'TextEdit', });
lyr_cartografiaveredaLAPALMAT1MT14_17.set('fieldImages', {'NÚMERO DE CASA': 'Range', 'NÚMERO DE FAMILIA': 'TextEdit', 'FOTOGRAFIA': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'RIESGO': 'TextEdit', 'CONVENCIONES': 'TextEdit', 'NOMBRE DE LA FOTO': 'TextEdit', 'OBSERVACIÓN DE LA FAMILIA': 'TextEdit', 'IDENTIFICACION DE LA FAMILIA': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', 'field_26': 'TextEdit', 'field_27': 'TextEdit', });
lyr_Palma_18.set('fieldImages', {'id': 'TextEdit', });
lyr_fotografiascartografiaveredaCerritosMT21_19.set('fieldImages', {'NÚMERO DE CASA': 'Range', 'NÚMERO DE FAMILIA': 'Range', 'FOTOGRAFIA': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'RIESGO': 'TextEdit', 'CONVENCIONES': 'TextEdit', 'NOMBRE DE LA FOTO': 'TextEdit', 'observación de la familia': 'TextEdit', 'IDENTIFICACION DE LA FAMILIA': 'TextEdit', });
lyr_CERRITOS_20.set('fieldImages', {'id': 'TextEdit', });
lyr_Restaurantes_0.set('fieldLabels', {'id': 'no label', });
lyr_Hospitales_1.set('fieldLabels', {'id': 'no label', });
lyr_Cuevas_2.set('fieldLabels', {'id': 'no label', });
lyr_Escuelas_3.set('fieldLabels', {'id': 'no label', });
lyr_Hospedajes_4.set('fieldLabels', {'id': 'no label', });
lyr_ZonasComerciales_5.set('fieldLabels', {'id': 'no label', });
lyr_ZonasComunes_6.set('fieldLabels', {'id': 'no label', });
lyr_ZonasTuristicas_7.set('fieldLabels', {'id': 'no label', });
lyr_Vacia_8.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoAlto_9.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoBajo_10.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoMedio_11.set('fieldLabels', {'id': 'no label', });
lyr_cartografiaveredaLAPALMAT1MT14_16.set('fieldLabels', {'NÚMERO DE CASA': 'inline label - always visible', 'NÚMERO DE FAMILIA': 'inline label - always visible', 'FOTOGRAFIA': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'RIESGO': 'inline label - always visible', 'CONVENCIONES': 'inline label - always visible', 'NOMBRE DE LA FOTO': 'hidden field', 'OBSERVACIÓN DE LA FAMILIA': 'inline label - always visible', 'IDENTIFICACION DE LA FAMILIA': 'inline label - always visible', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'field_25': 'no label', 'field_26': 'no label', 'field_27': 'no label', });
lyr_cartografiaveredaLAPALMAT1MT14_17.set('fieldLabels', {'NÚMERO DE CASA': 'inline label - always visible', 'NÚMERO DE FAMILIA': 'inline label - always visible', 'FOTOGRAFIA': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'RIESGO': 'inline label - always visible', 'CONVENCIONES': 'inline label - always visible', 'NOMBRE DE LA FOTO': 'hidden field', 'OBSERVACIÓN DE LA FAMILIA': 'inline label - always visible', 'IDENTIFICACION DE LA FAMILIA': 'inline label - always visible', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'field_25': 'no label', 'field_26': 'no label', 'field_27': 'no label', });
lyr_Palma_18.set('fieldLabels', {'id': 'no label', });
lyr_fotografiascartografiaveredaCerritosMT21_19.set('fieldLabels', {'NÚMERO DE CASA': 'inline label - always visible', 'NÚMERO DE FAMILIA': 'inline label - always visible', 'FOTOGRAFIA': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'RIESGO': 'inline label - always visible', 'CONVENCIONES': 'inline label - always visible', 'NOMBRE DE LA FOTO': 'hidden field', 'observación de la familia': 'inline label - always visible', 'IDENTIFICACION DE LA FAMILIA': 'inline label - always visible', });
lyr_CERRITOS_20.set('fieldLabels', {'id': 'no label', });
lyr_CERRITOS_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});