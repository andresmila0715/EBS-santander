var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_2 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_3 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_RiesgoAltoNoHabitada_4 = new ol.format.GeoJSON();
var features_RiesgoAltoNoHabitada_4 = format_RiesgoAltoNoHabitada_4.readFeatures(json_RiesgoAltoNoHabitada_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoAltoNoHabitada_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoAltoNoHabitada_4.addFeatures(features_RiesgoAltoNoHabitada_4);
var lyr_RiesgoAltoNoHabitada_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoAltoNoHabitada_4, 
                style: style_RiesgoAltoNoHabitada_4,
                popuplayertitle: 'Riesgo Alto - No Habitada',
                interactive: true,
                title: '<img src="styles/legend/RiesgoAltoNoHabitada_4.png" /> Riesgo Alto - No Habitada'
            });
var format_RiesgoAltoHabitadaOcasionalmente_5 = new ol.format.GeoJSON();
var features_RiesgoAltoHabitadaOcasionalmente_5 = format_RiesgoAltoHabitadaOcasionalmente_5.readFeatures(json_RiesgoAltoHabitadaOcasionalmente_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoAltoHabitadaOcasionalmente_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoAltoHabitadaOcasionalmente_5.addFeatures(features_RiesgoAltoHabitadaOcasionalmente_5);
var lyr_RiesgoAltoHabitadaOcasionalmente_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoAltoHabitadaOcasionalmente_5, 
                style: style_RiesgoAltoHabitadaOcasionalmente_5,
                popuplayertitle: 'Riesgo Alto - Habitada Ocasionalmente',
                interactive: true,
                title: '<img src="styles/legend/RiesgoAltoHabitadaOcasionalmente_5.png" /> Riesgo Alto - Habitada Ocasionalmente'
            });
var format_RiesgoAltoNoEfectiva_6 = new ol.format.GeoJSON();
var features_RiesgoAltoNoEfectiva_6 = format_RiesgoAltoNoEfectiva_6.readFeatures(json_RiesgoAltoNoEfectiva_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoAltoNoEfectiva_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoAltoNoEfectiva_6.addFeatures(features_RiesgoAltoNoEfectiva_6);
var lyr_RiesgoAltoNoEfectiva_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoAltoNoEfectiva_6, 
                style: style_RiesgoAltoNoEfectiva_6,
                popuplayertitle: 'Riesgo Alto - No Efectiva',
                interactive: true,
                title: '<img src="styles/legend/RiesgoAltoNoEfectiva_6.png" /> Riesgo Alto - No Efectiva'
            });
var format_RiesgoAltoEfectiva_7 = new ol.format.GeoJSON();
var features_RiesgoAltoEfectiva_7 = format_RiesgoAltoEfectiva_7.readFeatures(json_RiesgoAltoEfectiva_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoAltoEfectiva_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoAltoEfectiva_7.addFeatures(features_RiesgoAltoEfectiva_7);
var lyr_RiesgoAltoEfectiva_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoAltoEfectiva_7, 
                style: style_RiesgoAltoEfectiva_7,
                popuplayertitle: 'Riesgo Alto - Efectiva',
                interactive: true,
                title: '<img src="styles/legend/RiesgoAltoEfectiva_7.png" /> Riesgo Alto - Efectiva'
            });
var format_RiesgoAltoEfectivaSinpatologias_8 = new ol.format.GeoJSON();
var features_RiesgoAltoEfectivaSinpatologias_8 = format_RiesgoAltoEfectivaSinpatologias_8.readFeatures(json_RiesgoAltoEfectivaSinpatologias_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoAltoEfectivaSinpatologias_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoAltoEfectivaSinpatologias_8.addFeatures(features_RiesgoAltoEfectivaSinpatologias_8);
var lyr_RiesgoAltoEfectivaSinpatologias_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoAltoEfectivaSinpatologias_8, 
                style: style_RiesgoAltoEfectivaSinpatologias_8,
                popuplayertitle: 'Riesgo Alto - Efectiva (Sin patologias)',
                interactive: true,
                title: '<img src="styles/legend/RiesgoAltoEfectivaSinpatologias_8.png" /> Riesgo Alto - Efectiva (Sin patologias)'
            });
var format_RiesgoMedioNoHabitda_9 = new ol.format.GeoJSON();
var features_RiesgoMedioNoHabitda_9 = format_RiesgoMedioNoHabitda_9.readFeatures(json_RiesgoMedioNoHabitda_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoMedioNoHabitda_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoMedioNoHabitda_9.addFeatures(features_RiesgoMedioNoHabitda_9);
var lyr_RiesgoMedioNoHabitda_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoMedioNoHabitda_9, 
                style: style_RiesgoMedioNoHabitda_9,
                popuplayertitle: 'Riesgo Medio - No Habitda',
                interactive: true,
                title: '<img src="styles/legend/RiesgoMedioNoHabitda_9.png" /> Riesgo Medio - No Habitda'
            });
var format_RiesgoMedioHabitadaOcasionalmente_10 = new ol.format.GeoJSON();
var features_RiesgoMedioHabitadaOcasionalmente_10 = format_RiesgoMedioHabitadaOcasionalmente_10.readFeatures(json_RiesgoMedioHabitadaOcasionalmente_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoMedioHabitadaOcasionalmente_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoMedioHabitadaOcasionalmente_10.addFeatures(features_RiesgoMedioHabitadaOcasionalmente_10);
var lyr_RiesgoMedioHabitadaOcasionalmente_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoMedioHabitadaOcasionalmente_10, 
                style: style_RiesgoMedioHabitadaOcasionalmente_10,
                popuplayertitle: 'Riesgo Medio - Habitada Ocasionalmente',
                interactive: true,
                title: '<img src="styles/legend/RiesgoMedioHabitadaOcasionalmente_10.png" /> Riesgo Medio - Habitada Ocasionalmente'
            });
var format_RiesgoMedioNoEfectiva_11 = new ol.format.GeoJSON();
var features_RiesgoMedioNoEfectiva_11 = format_RiesgoMedioNoEfectiva_11.readFeatures(json_RiesgoMedioNoEfectiva_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoMedioNoEfectiva_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoMedioNoEfectiva_11.addFeatures(features_RiesgoMedioNoEfectiva_11);
var lyr_RiesgoMedioNoEfectiva_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoMedioNoEfectiva_11, 
                style: style_RiesgoMedioNoEfectiva_11,
                popuplayertitle: 'Riesgo Medio - No Efectiva',
                interactive: true,
                title: '<img src="styles/legend/RiesgoMedioNoEfectiva_11.png" /> Riesgo Medio - No Efectiva'
            });
var format_RiesgoMedioEfectiva_12 = new ol.format.GeoJSON();
var features_RiesgoMedioEfectiva_12 = format_RiesgoMedioEfectiva_12.readFeatures(json_RiesgoMedioEfectiva_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoMedioEfectiva_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoMedioEfectiva_12.addFeatures(features_RiesgoMedioEfectiva_12);
var lyr_RiesgoMedioEfectiva_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoMedioEfectiva_12, 
                style: style_RiesgoMedioEfectiva_12,
                popuplayertitle: 'Riesgo Medio - Efectiva',
                interactive: true,
                title: '<img src="styles/legend/RiesgoMedioEfectiva_12.png" /> Riesgo Medio - Efectiva'
            });
var format_RiesgoMedioEfectivaSinpatologias_13 = new ol.format.GeoJSON();
var features_RiesgoMedioEfectivaSinpatologias_13 = format_RiesgoMedioEfectivaSinpatologias_13.readFeatures(json_RiesgoMedioEfectivaSinpatologias_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoMedioEfectivaSinpatologias_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoMedioEfectivaSinpatologias_13.addFeatures(features_RiesgoMedioEfectivaSinpatologias_13);
var lyr_RiesgoMedioEfectivaSinpatologias_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoMedioEfectivaSinpatologias_13, 
                style: style_RiesgoMedioEfectivaSinpatologias_13,
                popuplayertitle: 'Riesgo Medio - Efectiva (Sin patologias)',
                interactive: true,
                title: '<img src="styles/legend/RiesgoMedioEfectivaSinpatologias_13.png" /> Riesgo Medio - Efectiva (Sin patologias)'
            });
var format_RiesgoBajoNoHabitada_14 = new ol.format.GeoJSON();
var features_RiesgoBajoNoHabitada_14 = format_RiesgoBajoNoHabitada_14.readFeatures(json_RiesgoBajoNoHabitada_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoBajoNoHabitada_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoBajoNoHabitada_14.addFeatures(features_RiesgoBajoNoHabitada_14);
var lyr_RiesgoBajoNoHabitada_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoBajoNoHabitada_14, 
                style: style_RiesgoBajoNoHabitada_14,
                popuplayertitle: 'Riesgo Bajo - No Habitada',
                interactive: true,
                title: '<img src="styles/legend/RiesgoBajoNoHabitada_14.png" /> Riesgo Bajo - No Habitada'
            });
var format_RiesgoBajoHabitadaOcasionalmente_15 = new ol.format.GeoJSON();
var features_RiesgoBajoHabitadaOcasionalmente_15 = format_RiesgoBajoHabitadaOcasionalmente_15.readFeatures(json_RiesgoBajoHabitadaOcasionalmente_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoBajoHabitadaOcasionalmente_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoBajoHabitadaOcasionalmente_15.addFeatures(features_RiesgoBajoHabitadaOcasionalmente_15);
var lyr_RiesgoBajoHabitadaOcasionalmente_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoBajoHabitadaOcasionalmente_15, 
                style: style_RiesgoBajoHabitadaOcasionalmente_15,
                popuplayertitle: 'Riesgo Bajo - Habitada Ocasionalmente',
                interactive: true,
                title: '<img src="styles/legend/RiesgoBajoHabitadaOcasionalmente_15.png" /> Riesgo Bajo - Habitada Ocasionalmente'
            });
var format_RiesgoBajoNoEfectiva_16 = new ol.format.GeoJSON();
var features_RiesgoBajoNoEfectiva_16 = format_RiesgoBajoNoEfectiva_16.readFeatures(json_RiesgoBajoNoEfectiva_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoBajoNoEfectiva_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoBajoNoEfectiva_16.addFeatures(features_RiesgoBajoNoEfectiva_16);
var lyr_RiesgoBajoNoEfectiva_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoBajoNoEfectiva_16, 
                style: style_RiesgoBajoNoEfectiva_16,
                popuplayertitle: 'Riesgo Bajo - No Efectiva',
                interactive: true,
                title: '<img src="styles/legend/RiesgoBajoNoEfectiva_16.png" /> Riesgo Bajo - No Efectiva'
            });
var format_RiesgoBajoEfectiva_17 = new ol.format.GeoJSON();
var features_RiesgoBajoEfectiva_17 = format_RiesgoBajoEfectiva_17.readFeatures(json_RiesgoBajoEfectiva_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoBajoEfectiva_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoBajoEfectiva_17.addFeatures(features_RiesgoBajoEfectiva_17);
var lyr_RiesgoBajoEfectiva_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoBajoEfectiva_17, 
                style: style_RiesgoBajoEfectiva_17,
                popuplayertitle: 'Riesgo Bajo - Efectiva',
                interactive: true,
                title: '<img src="styles/legend/RiesgoBajoEfectiva_17.png" /> Riesgo Bajo - Efectiva'
            });
var format_RiesgoBajoEfectivaSinpatologias_18 = new ol.format.GeoJSON();
var features_RiesgoBajoEfectivaSinpatologias_18 = format_RiesgoBajoEfectivaSinpatologias_18.readFeatures(json_RiesgoBajoEfectivaSinpatologias_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiesgoBajoEfectivaSinpatologias_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiesgoBajoEfectivaSinpatologias_18.addFeatures(features_RiesgoBajoEfectivaSinpatologias_18);
var lyr_RiesgoBajoEfectivaSinpatologias_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiesgoBajoEfectivaSinpatologias_18, 
                style: style_RiesgoBajoEfectivaSinpatologias_18,
                popuplayertitle: 'Riesgo Bajo - Efectiva (Sin patologias)',
                interactive: true,
                title: '<img src="styles/legend/RiesgoBajoEfectivaSinpatologias_18.png" /> Riesgo Bajo - Efectiva (Sin patologias)'
            });
var format_LimitesOtroMundo_19 = new ol.format.GeoJSON();
var features_LimitesOtroMundo_19 = format_LimitesOtroMundo_19.readFeatures(json_LimitesOtroMundo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesOtroMundo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesOtroMundo_19.addFeatures(features_LimitesOtroMundo_19);
var lyr_LimitesOtroMundo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesOtroMundo_19, 
                style: style_LimitesOtroMundo_19,
                popuplayertitle: 'Limites Otro Mundo',
                interactive: true,
                title: '<img src="styles/legend/LimitesOtroMundo_19.png" /> Limites Otro Mundo'
            });
var format_LimitesVentaColes_20 = new ol.format.GeoJSON();
var features_LimitesVentaColes_20 = format_LimitesVentaColes_20.readFeatures(json_LimitesVentaColes_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesVentaColes_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesVentaColes_20.addFeatures(features_LimitesVentaColes_20);
var lyr_LimitesVentaColes_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesVentaColes_20, 
                style: style_LimitesVentaColes_20,
                popuplayertitle: 'Limites Venta Coles',
                interactive: true,
                title: '<img src="styles/legend/LimitesVentaColes_20.png" /> Limites Venta Coles'
            });
var format_LimitesSanAntonio_21 = new ol.format.GeoJSON();
var features_LimitesSanAntonio_21 = format_LimitesSanAntonio_21.readFeatures(json_LimitesSanAntonio_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesSanAntonio_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesSanAntonio_21.addFeatures(features_LimitesSanAntonio_21);
var lyr_LimitesSanAntonio_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesSanAntonio_21, 
                style: style_LimitesSanAntonio_21,
                popuplayertitle: 'Limites San Antonio',
                interactive: true,
                title: '<img src="styles/legend/LimitesSanAntonio_21.png" /> Limites San Antonio'
            });
var format_LimitesLucitania_22 = new ol.format.GeoJSON();
var features_LimitesLucitania_22 = format_LimitesLucitania_22.readFeatures(json_LimitesLucitania_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesLucitania_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesLucitania_22.addFeatures(features_LimitesLucitania_22);
var lyr_LimitesLucitania_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesLucitania_22, 
                style: style_LimitesLucitania_22,
                popuplayertitle: 'Limites Lucitania',
                interactive: true,
                title: '<img src="styles/legend/LimitesLucitania_22.png" /> Limites Lucitania'
            });
var format_LimitesSantaCruz_23 = new ol.format.GeoJSON();
var features_LimitesSantaCruz_23 = format_LimitesSantaCruz_23.readFeatures(json_LimitesSantaCruz_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesSantaCruz_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesSantaCruz_23.addFeatures(features_LimitesSantaCruz_23);
var lyr_LimitesSantaCruz_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesSantaCruz_23, 
                style: style_LimitesSantaCruz_23,
                popuplayertitle: 'Limites Santa Cruz',
                interactive: true,
                title: '<img src="styles/legend/LimitesSantaCruz_23.png" /> Limites Santa Cruz'
            });
var format_LimitesSanGil_24 = new ol.format.GeoJSON();
var features_LimitesSanGil_24 = format_LimitesSanGil_24.readFeatures(json_LimitesSanGil_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesSanGil_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesSanGil_24.addFeatures(features_LimitesSanGil_24);
var lyr_LimitesSanGil_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesSanGil_24, 
                style: style_LimitesSanGil_24,
                popuplayertitle: 'Limites San Gil',
                interactive: true,
                title: '<img src="styles/legend/LimitesSanGil_24.png" /> Limites San Gil'
            });
var format_LimitesLomadeVelez_25 = new ol.format.GeoJSON();
var features_LimitesLomadeVelez_25 = format_LimitesLomadeVelez_25.readFeatures(json_LimitesLomadeVelez_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesLomadeVelez_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesLomadeVelez_25.addFeatures(features_LimitesLomadeVelez_25);
var lyr_LimitesLomadeVelez_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesLomadeVelez_25, 
                style: style_LimitesLomadeVelez_25,
                popuplayertitle: 'Limites Loma de Velez',
                interactive: true,
                title: '<img src="styles/legend/LimitesLomadeVelez_25.png" /> Limites Loma de Velez'
            });
var format_LimitesLaColorada_26 = new ol.format.GeoJSON();
var features_LimitesLaColorada_26 = format_LimitesLaColorada_26.readFeatures(json_LimitesLaColorada_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesLaColorada_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesLaColorada_26.addFeatures(features_LimitesLaColorada_26);
var lyr_LimitesLaColorada_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesLaColorada_26, 
                style: style_LimitesLaColorada_26,
                popuplayertitle: 'Limites La Colorada',
                interactive: true,
                title: '<img src="styles/legend/LimitesLaColorada_26.png" /> Limites La Colorada'
            });
var format_LimitesElZarval_27 = new ol.format.GeoJSON();
var features_LimitesElZarval_27 = format_LimitesElZarval_27.readFeatures(json_LimitesElZarval_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesElZarval_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesElZarval_27.addFeatures(features_LimitesElZarval_27);
var lyr_LimitesElZarval_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesElZarval_27, 
                style: style_LimitesElZarval_27,
                popuplayertitle: 'Limites El Zarval',
                interactive: true,
                title: '<img src="styles/legend/LimitesElZarval_27.png" /> Limites El Zarval'
            });
var format_LimitesSanJoseAlto_28 = new ol.format.GeoJSON();
var features_LimitesSanJoseAlto_28 = format_LimitesSanJoseAlto_28.readFeatures(json_LimitesSanJoseAlto_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesSanJoseAlto_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesSanJoseAlto_28.addFeatures(features_LimitesSanJoseAlto_28);
var lyr_LimitesSanJoseAlto_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesSanJoseAlto_28, 
                style: style_LimitesSanJoseAlto_28,
                popuplayertitle: 'Limites San Jose Alto',
                interactive: true,
                title: '<img src="styles/legend/LimitesSanJoseAlto_28.png" /> Limites San Jose Alto'
            });
var format_LimitesVILLACATALINA_29 = new ol.format.GeoJSON();
var features_LimitesVILLACATALINA_29 = format_LimitesVILLACATALINA_29.readFeatures(json_LimitesVILLACATALINA_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesVILLACATALINA_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesVILLACATALINA_29.addFeatures(features_LimitesVILLACATALINA_29);
var lyr_LimitesVILLACATALINA_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesVILLACATALINA_29, 
                style: style_LimitesVILLACATALINA_29,
                popuplayertitle: 'Limites VILLA CATALINA',
                interactive: true,
                title: '<img src="styles/legend/LimitesVILLACATALINA_29.png" /> Limites VILLA CATALINA'
            });
var format_LimitesVILLASDETISQUIZOQUE_30 = new ol.format.GeoJSON();
var features_LimitesVILLASDETISQUIZOQUE_30 = format_LimitesVILLASDETISQUIZOQUE_30.readFeatures(json_LimitesVILLASDETISQUIZOQUE_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesVILLASDETISQUIZOQUE_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesVILLASDETISQUIZOQUE_30.addFeatures(features_LimitesVILLASDETISQUIZOQUE_30);
var lyr_LimitesVILLASDETISQUIZOQUE_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesVILLASDETISQUIZOQUE_30, 
                style: style_LimitesVILLASDETISQUIZOQUE_30,
                popuplayertitle: 'Limites VILLAS DE TISQUIZOQUE',
                interactive: true,
                title: '<img src="styles/legend/LimitesVILLASDETISQUIZOQUE_30.png" /> Limites VILLAS DE TISQUIZOQUE'
            });
var format_LimitesCasacote_31 = new ol.format.GeoJSON();
var features_LimitesCasacote_31 = format_LimitesCasacote_31.readFeatures(json_LimitesCasacote_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesCasacote_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesCasacote_31.addFeatures(features_LimitesCasacote_31);
var lyr_LimitesCasacote_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesCasacote_31, 
                style: style_LimitesCasacote_31,
                popuplayertitle: 'Limites Casacote',
                interactive: true,
                title: '<img src="styles/legend/LimitesCasacote_31.png" /> Limites Casacote'
            });
var format_LimitesSANTAHELENA_32 = new ol.format.GeoJSON();
var features_LimitesSANTAHELENA_32 = format_LimitesSANTAHELENA_32.readFeatures(json_LimitesSANTAHELENA_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesSANTAHELENA_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesSANTAHELENA_32.addFeatures(features_LimitesSANTAHELENA_32);
var lyr_LimitesSANTAHELENA_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesSANTAHELENA_32, 
                style: style_LimitesSANTAHELENA_32,
                popuplayertitle: 'Limites SANTA HELENA',
                interactive: true,
                title: '<img src="styles/legend/LimitesSANTAHELENA_32.png" /> Limites SANTA HELENA'
            });
var format_LimitesBuenosAires_33 = new ol.format.GeoJSON();
var features_LimitesBuenosAires_33 = format_LimitesBuenosAires_33.readFeatures(json_LimitesBuenosAires_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesBuenosAires_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesBuenosAires_33.addFeatures(features_LimitesBuenosAires_33);
var lyr_LimitesBuenosAires_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesBuenosAires_33, 
                style: style_LimitesBuenosAires_33,
                popuplayertitle: 'Limites Buenos Aires',
                interactive: true,
                title: '<img src="styles/legend/LimitesBuenosAires_33.png" /> Limites Buenos Aires'
            });
var format_LimitesCorazondelEden_34 = new ol.format.GeoJSON();
var features_LimitesCorazondelEden_34 = format_LimitesCorazondelEden_34.readFeatures(json_LimitesCorazondelEden_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesCorazondelEden_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesCorazondelEden_34.addFeatures(features_LimitesCorazondelEden_34);
var lyr_LimitesCorazondelEden_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesCorazondelEden_34, 
                style: style_LimitesCorazondelEden_34,
                popuplayertitle: 'Limites Corazon del Eden',
                interactive: true,
                title: '<img src="styles/legend/LimitesCorazondelEden_34.png" /> Limites Corazon del Eden'
            });
var format_LimitesPLAZANUEVA_35 = new ol.format.GeoJSON();
var features_LimitesPLAZANUEVA_35 = format_LimitesPLAZANUEVA_35.readFeatures(json_LimitesPLAZANUEVA_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesPLAZANUEVA_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesPLAZANUEVA_35.addFeatures(features_LimitesPLAZANUEVA_35);
var lyr_LimitesPLAZANUEVA_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesPLAZANUEVA_35, 
                style: style_LimitesPLAZANUEVA_35,
                popuplayertitle: 'Limites PLAZA NUEVA',
                interactive: true,
                title: '<img src="styles/legend/LimitesPLAZANUEVA_35.png" /> Limites PLAZA NUEVA'
            });
var format_LimitesLaUnion_36 = new ol.format.GeoJSON();
var features_LimitesLaUnion_36 = format_LimitesLaUnion_36.readFeatures(json_LimitesLaUnion_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesLaUnion_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesLaUnion_36.addFeatures(features_LimitesLaUnion_36);
var lyr_LimitesLaUnion_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesLaUnion_36, 
                style: style_LimitesLaUnion_36,
                popuplayertitle: 'Limites La Union',
                interactive: true,
                title: '<img src="styles/legend/LimitesLaUnion_36.png" /> Limites La Union'
            });
var format_LimitesCentro_37 = new ol.format.GeoJSON();
var features_LimitesCentro_37 = format_LimitesCentro_37.readFeatures(json_LimitesCentro_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesCentro_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesCentro_37.addFeatures(features_LimitesCentro_37);
var lyr_LimitesCentro_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesCentro_37, 
                style: style_LimitesCentro_37,
                popuplayertitle: 'Limites Centro',
                interactive: true,
                title: '<img src="styles/legend/LimitesCentro_37.png" /> Limites Centro'
            });
var format_Limitessanjose_38 = new ol.format.GeoJSON();
var features_Limitessanjose_38 = format_Limitessanjose_38.readFeatures(json_Limitessanjose_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitessanjose_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitessanjose_38.addFeatures(features_Limitessanjose_38);
var lyr_Limitessanjose_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitessanjose_38, 
                style: style_Limitessanjose_38,
                popuplayertitle: 'Limites san jose',
                interactive: true,
                title: '<img src="styles/legend/Limitessanjose_38.png" /> Limites san jose'
            });
var format_LimitesGUAYMARAL_39 = new ol.format.GeoJSON();
var features_LimitesGUAYMARAL_39 = format_LimitesGUAYMARAL_39.readFeatures(json_LimitesGUAYMARAL_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesGUAYMARAL_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesGUAYMARAL_39.addFeatures(features_LimitesGUAYMARAL_39);
var lyr_LimitesGUAYMARAL_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesGUAYMARAL_39, 
                style: style_LimitesGUAYMARAL_39,
                popuplayertitle: 'Limites GUAYMARAL',
                interactive: true,
                title: '<img src="styles/legend/LimitesGUAYMARAL_39.png" /> Limites GUAYMARAL'
            });
var group_Florian = new ol.layer.Group({
                                layers: [lyr_LimitesOtroMundo_19,lyr_LimitesVentaColes_20,lyr_LimitesSanAntonio_21,lyr_LimitesLucitania_22,lyr_LimitesSantaCruz_23,lyr_LimitesSanGil_24,lyr_LimitesLomadeVelez_25,lyr_LimitesLaColorada_26,lyr_LimitesElZarval_27,lyr_LimitesSanJoseAlto_28,lyr_LimitesVILLACATALINA_29,lyr_LimitesVILLASDETISQUIZOQUE_30,lyr_LimitesCasacote_31,lyr_LimitesSANTAHELENA_32,lyr_LimitesBuenosAires_33,lyr_LimitesCorazondelEden_34,lyr_LimitesPLAZANUEVA_35,lyr_LimitesLaUnion_36,lyr_LimitesCentro_37,lyr_Limitessanjose_38,lyr_LimitesGUAYMARAL_39,],
                                fold: 'open',
                                title: 'Florian'});
var group_RiesgoBajo = new ol.layer.Group({
                                layers: [lyr_RiesgoBajoNoHabitada_14,lyr_RiesgoBajoHabitadaOcasionalmente_15,lyr_RiesgoBajoNoEfectiva_16,lyr_RiesgoBajoEfectiva_17,lyr_RiesgoBajoEfectivaSinpatologias_18,],
                                fold: 'open',
                                title: 'Riesgo Bajo'});
var group_RiesgoMedio = new ol.layer.Group({
                                layers: [lyr_RiesgoMedioNoHabitda_9,lyr_RiesgoMedioHabitadaOcasionalmente_10,lyr_RiesgoMedioNoEfectiva_11,lyr_RiesgoMedioEfectiva_12,lyr_RiesgoMedioEfectivaSinpatologias_13,],
                                fold: 'open',
                                title: 'Riesgo Medio'});
var group_RiesgoAlto = new ol.layer.Group({
                                layers: [lyr_RiesgoAltoNoHabitada_4,lyr_RiesgoAltoHabitadaOcasionalmente_5,lyr_RiesgoAltoNoEfectiva_6,lyr_RiesgoAltoEfectiva_7,lyr_RiesgoAltoEfectivaSinpatologias_8,],
                                fold: 'open',
                                title: 'Riesgo Alto'});
var group_Diseos = new ol.layer.Group({
                                layers: [lyr_GoogleTerrain_0,lyr_GoogleRoad_1,lyr_GoogleLabels_2,lyr_GoogleHybrid_3,],
                                fold: 'open',
                                title: 'Diseños'});

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_GoogleLabels_2.setVisible(true);lyr_GoogleHybrid_3.setVisible(true);lyr_RiesgoAltoNoHabitada_4.setVisible(true);lyr_RiesgoAltoHabitadaOcasionalmente_5.setVisible(true);lyr_RiesgoAltoNoEfectiva_6.setVisible(true);lyr_RiesgoAltoEfectiva_7.setVisible(true);lyr_RiesgoAltoEfectivaSinpatologias_8.setVisible(true);lyr_RiesgoMedioNoHabitda_9.setVisible(true);lyr_RiesgoMedioHabitadaOcasionalmente_10.setVisible(true);lyr_RiesgoMedioNoEfectiva_11.setVisible(true);lyr_RiesgoMedioEfectiva_12.setVisible(true);lyr_RiesgoMedioEfectivaSinpatologias_13.setVisible(true);lyr_RiesgoBajoNoHabitada_14.setVisible(true);lyr_RiesgoBajoHabitadaOcasionalmente_15.setVisible(true);lyr_RiesgoBajoNoEfectiva_16.setVisible(true);lyr_RiesgoBajoEfectiva_17.setVisible(true);lyr_RiesgoBajoEfectivaSinpatologias_18.setVisible(true);lyr_LimitesOtroMundo_19.setVisible(true);lyr_LimitesVentaColes_20.setVisible(true);lyr_LimitesSanAntonio_21.setVisible(true);lyr_LimitesLucitania_22.setVisible(true);lyr_LimitesSantaCruz_23.setVisible(true);lyr_LimitesSanGil_24.setVisible(true);lyr_LimitesLomadeVelez_25.setVisible(true);lyr_LimitesLaColorada_26.setVisible(true);lyr_LimitesElZarval_27.setVisible(true);lyr_LimitesSanJoseAlto_28.setVisible(true);lyr_LimitesVILLACATALINA_29.setVisible(true);lyr_LimitesVILLASDETISQUIZOQUE_30.setVisible(true);lyr_LimitesCasacote_31.setVisible(true);lyr_LimitesSANTAHELENA_32.setVisible(true);lyr_LimitesBuenosAires_33.setVisible(true);lyr_LimitesCorazondelEden_34.setVisible(true);lyr_LimitesPLAZANUEVA_35.setVisible(true);lyr_LimitesLaUnion_36.setVisible(true);lyr_LimitesCentro_37.setVisible(true);lyr_Limitessanjose_38.setVisible(true);lyr_LimitesGUAYMARAL_39.setVisible(true);
var layersList = [group_Diseos,group_RiesgoAlto,group_RiesgoMedio,group_RiesgoBajo,group_Florian];
lyr_RiesgoAltoNoHabitada_4.set('fieldAliases', {'id': 'id', });
lyr_RiesgoAltoHabitadaOcasionalmente_5.set('fieldAliases', {'id': 'id', });
lyr_RiesgoAltoNoEfectiva_6.set('fieldAliases', {'id': 'id', });
lyr_RiesgoAltoEfectiva_7.set('fieldAliases', {'id': 'id', 'Patologia': 'Patologia', });
lyr_RiesgoAltoEfectivaSinpatologias_8.set('fieldAliases', {'id': 'id', });
lyr_RiesgoMedioNoHabitda_9.set('fieldAliases', {'id': 'id', });
lyr_RiesgoMedioHabitadaOcasionalmente_10.set('fieldAliases', {'id': 'id', });
lyr_RiesgoMedioNoEfectiva_11.set('fieldAliases', {'id': 'id', });
lyr_RiesgoMedioEfectiva_12.set('fieldAliases', {'id': 'id', 'Patologia': 'Patologia', });
lyr_RiesgoMedioEfectivaSinpatologias_13.set('fieldAliases', {'id': 'id', });
lyr_RiesgoBajoNoHabitada_14.set('fieldAliases', {'id': 'id', });
lyr_RiesgoBajoHabitadaOcasionalmente_15.set('fieldAliases', {'id': 'id', });
lyr_RiesgoBajoNoEfectiva_16.set('fieldAliases', {'id': 'id', });
lyr_RiesgoBajoEfectiva_17.set('fieldAliases', {'id': 'id', 'Patologias': 'Patologias', });
lyr_RiesgoBajoEfectivaSinpatologias_18.set('fieldAliases', {'id': 'id', });
lyr_LimitesOtroMundo_19.set('fieldAliases', {'id': 'id', });
lyr_LimitesVentaColes_20.set('fieldAliases', {'id': 'id', });
lyr_LimitesSanAntonio_21.set('fieldAliases', {'id': 'id', });
lyr_LimitesLucitania_22.set('fieldAliases', {'id': 'id', });
lyr_LimitesSantaCruz_23.set('fieldAliases', {'id': 'id', });
lyr_LimitesSanGil_24.set('fieldAliases', {'id': 'id', });
lyr_LimitesLomadeVelez_25.set('fieldAliases', {'id': 'id', });
lyr_LimitesLaColorada_26.set('fieldAliases', {'id': 'id', });
lyr_LimitesElZarval_27.set('fieldAliases', {'id': 'id', });
lyr_LimitesSanJoseAlto_28.set('fieldAliases', {'id': 'id', });
lyr_LimitesVILLACATALINA_29.set('fieldAliases', {'id': 'id', });
lyr_LimitesVILLASDETISQUIZOQUE_30.set('fieldAliases', {'id': 'id', });
lyr_LimitesCasacote_31.set('fieldAliases', {'id': 'id', });
lyr_LimitesSANTAHELENA_32.set('fieldAliases', {'id': 'id', });
lyr_LimitesBuenosAires_33.set('fieldAliases', {'id': 'id', });
lyr_LimitesCorazondelEden_34.set('fieldAliases', {'id': 'id', });
lyr_LimitesPLAZANUEVA_35.set('fieldAliases', {'id': 'id', });
lyr_LimitesLaUnion_36.set('fieldAliases', {'id': 'id', });
lyr_LimitesCentro_37.set('fieldAliases', {'id': 'id', });
lyr_Limitessanjose_38.set('fieldAliases', {'id': 'id', });
lyr_LimitesGUAYMARAL_39.set('fieldAliases', {'id': 'id', });
lyr_RiesgoAltoNoHabitada_4.set('fieldImages', {'id': 'TextEdit', });
lyr_RiesgoAltoHabitadaOcasionalmente_5.set('fieldImages', {'id': 'TextEdit', });
lyr_RiesgoAltoNoEfectiva_6.set('fieldImages', {'id': 'TextEdit', });
lyr_RiesgoAltoEfectiva_7.set('fieldImages', {'id': 'TextEdit', 'Patologia': '', });
lyr_RiesgoAltoEfectivaSinpatologias_8.set('fieldImages', {'id': 'TextEdit', });
lyr_RiesgoMedioNoHabitda_9.set('fieldImages', {'id': 'TextEdit', });
lyr_RiesgoMedioHabitadaOcasionalmente_10.set('fieldImages', {'id': 'TextEdit', });
lyr_RiesgoMedioNoEfectiva_11.set('fieldImages', {'id': 'TextEdit', });
lyr_RiesgoMedioEfectiva_12.set('fieldImages', {'id': 'TextEdit', 'Patologia': 'TextEdit', });
lyr_RiesgoMedioEfectivaSinpatologias_13.set('fieldImages', {'id': 'TextEdit', });
lyr_RiesgoBajoNoHabitada_14.set('fieldImages', {'id': 'TextEdit', });
lyr_RiesgoBajoHabitadaOcasionalmente_15.set('fieldImages', {'id': 'TextEdit', });
lyr_RiesgoBajoNoEfectiva_16.set('fieldImages', {'id': 'TextEdit', });
lyr_RiesgoBajoEfectiva_17.set('fieldImages', {'id': 'TextEdit', 'Patologias': '', });
lyr_RiesgoBajoEfectivaSinpatologias_18.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesOtroMundo_19.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesVentaColes_20.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesSanAntonio_21.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesLucitania_22.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesSantaCruz_23.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesSanGil_24.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesLomadeVelez_25.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesLaColorada_26.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesElZarval_27.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesSanJoseAlto_28.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesVILLACATALINA_29.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesVILLASDETISQUIZOQUE_30.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesCasacote_31.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesSANTAHELENA_32.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesBuenosAires_33.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesCorazondelEden_34.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesPLAZANUEVA_35.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesLaUnion_36.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesCentro_37.set('fieldImages', {'id': 'TextEdit', });
lyr_Limitessanjose_38.set('fieldImages', {'id': 'TextEdit', });
lyr_LimitesGUAYMARAL_39.set('fieldImages', {'id': 'TextEdit', });
lyr_RiesgoAltoNoHabitada_4.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoAltoHabitadaOcasionalmente_5.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoAltoNoEfectiva_6.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoAltoEfectiva_7.set('fieldLabels', {'id': 'no label', 'Patologia': 'no label', });
lyr_RiesgoAltoEfectivaSinpatologias_8.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoMedioNoHabitda_9.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoMedioHabitadaOcasionalmente_10.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoMedioNoEfectiva_11.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoMedioEfectiva_12.set('fieldLabels', {'id': 'no label', 'Patologia': 'no label', });
lyr_RiesgoMedioEfectivaSinpatologias_13.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoBajoNoHabitada_14.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoBajoHabitadaOcasionalmente_15.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoBajoNoEfectiva_16.set('fieldLabels', {'id': 'no label', });
lyr_RiesgoBajoEfectiva_17.set('fieldLabels', {'id': 'no label', 'Patologias': 'no label', });
lyr_RiesgoBajoEfectivaSinpatologias_18.set('fieldLabels', {'id': 'no label', });
lyr_LimitesOtroMundo_19.set('fieldLabels', {'id': 'no label', });
lyr_LimitesVentaColes_20.set('fieldLabels', {'id': 'no label', });
lyr_LimitesSanAntonio_21.set('fieldLabels', {'id': 'no label', });
lyr_LimitesLucitania_22.set('fieldLabels', {'id': 'no label', });
lyr_LimitesSantaCruz_23.set('fieldLabels', {'id': 'no label', });
lyr_LimitesSanGil_24.set('fieldLabels', {'id': 'no label', });
lyr_LimitesLomadeVelez_25.set('fieldLabels', {'id': 'no label', });
lyr_LimitesLaColorada_26.set('fieldLabels', {'id': 'no label', });
lyr_LimitesElZarval_27.set('fieldLabels', {'id': 'no label', });
lyr_LimitesSanJoseAlto_28.set('fieldLabels', {'id': 'no label', });
lyr_LimitesVILLACATALINA_29.set('fieldLabels', {'id': 'no label', });
lyr_LimitesVILLASDETISQUIZOQUE_30.set('fieldLabels', {'id': 'no label', });
lyr_LimitesCasacote_31.set('fieldLabels', {'id': 'no label', });
lyr_LimitesSANTAHELENA_32.set('fieldLabels', {'id': 'no label', });
lyr_LimitesBuenosAires_33.set('fieldLabels', {'id': 'no label', });
lyr_LimitesCorazondelEden_34.set('fieldLabels', {'id': 'no label', });
lyr_LimitesPLAZANUEVA_35.set('fieldLabels', {'id': 'no label', });
lyr_LimitesLaUnion_36.set('fieldLabels', {'id': 'no label', });
lyr_LimitesCentro_37.set('fieldLabels', {'id': 'no label', });
lyr_Limitessanjose_38.set('fieldLabels', {'id': 'no label', });
lyr_LimitesGUAYMARAL_39.set('fieldLabels', {'id': 'no label', });
lyr_LimitesGUAYMARAL_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});