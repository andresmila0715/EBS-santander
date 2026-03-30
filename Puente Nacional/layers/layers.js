var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_2 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_3 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_CapasMONTES_4 = new ol.format.GeoJSON();
var features_CapasMONTES_4 = format_CapasMONTES_4.readFeatures(json_CapasMONTES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasMONTES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasMONTES_4.addFeatures(features_CapasMONTES_4);
var lyr_CapasMONTES_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasMONTES_4, 
                style: style_CapasMONTES_4,
                popuplayertitle: 'Capas - MONTES',
                interactive: true,
                title: '<img src="styles/legend/CapasMONTES_4.png" /> Capas - MONTES'
            });
var format_CapasBarriochico_5 = new ol.format.GeoJSON();
var features_CapasBarriochico_5 = format_CapasBarriochico_5.readFeatures(json_CapasBarriochico_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasBarriochico_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasBarriochico_5.addFeatures(features_CapasBarriochico_5);
var lyr_CapasBarriochico_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasBarriochico_5, 
                style: style_CapasBarriochico_5,
                popuplayertitle: 'Capas — Barrio chico',
                interactive: true,
                title: '<img src="styles/legend/CapasBarriochico_5.png" /> Capas — Barrio chico'
            });
var format_CapasCentro_6 = new ol.format.GeoJSON();
var features_CapasCentro_6 = format_CapasCentro_6.readFeatures(json_CapasCentro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasCentro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasCentro_6.addFeatures(features_CapasCentro_6);
var lyr_CapasCentro_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasCentro_6, 
                style: style_CapasCentro_6,
                popuplayertitle: 'Capas — Centro',
                interactive: true,
                title: '<img src="styles/legend/CapasCentro_6.png" /> Capas — Centro'
            });
var format_CapasLaFlorida_7 = new ol.format.GeoJSON();
var features_CapasLaFlorida_7 = format_CapasLaFlorida_7.readFeatures(json_CapasLaFlorida_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasLaFlorida_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasLaFlorida_7.addFeatures(features_CapasLaFlorida_7);
var lyr_CapasLaFlorida_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasLaFlorida_7, 
                style: style_CapasLaFlorida_7,
                popuplayertitle: 'Capas — La Florida',
                interactive: true,
                title: '<img src="styles/legend/CapasLaFlorida_7.png" /> Capas — La Florida'
            });
var format_CapasLaUnion_8 = new ol.format.GeoJSON();
var features_CapasLaUnion_8 = format_CapasLaUnion_8.readFeatures(json_CapasLaUnion_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasLaUnion_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasLaUnion_8.addFeatures(features_CapasLaUnion_8);
var lyr_CapasLaUnion_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasLaUnion_8, 
                style: style_CapasLaUnion_8,
                popuplayertitle: 'Capas — La Union',
                interactive: true,
                title: '<img src="styles/legend/CapasLaUnion_8.png" /> Capas — La Union'
            });
var format_CapasLasPalmeras_9 = new ol.format.GeoJSON();
var features_CapasLasPalmeras_9 = format_CapasLasPalmeras_9.readFeatures(json_CapasLasPalmeras_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasLasPalmeras_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasLasPalmeras_9.addFeatures(features_CapasLasPalmeras_9);
var lyr_CapasLasPalmeras_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasLasPalmeras_9, 
                style: style_CapasLasPalmeras_9,
                popuplayertitle: 'Capas — Las Palmeras',
                interactive: true,
                title: '<img src="styles/legend/CapasLasPalmeras_9.png" /> Capas — Las Palmeras'
            });
var format_CapasPalacio_10 = new ol.format.GeoJSON();
var features_CapasPalacio_10 = format_CapasPalacio_10.readFeatures(json_CapasPalacio_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasPalacio_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasPalacio_10.addFeatures(features_CapasPalacio_10);
var lyr_CapasPalacio_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasPalacio_10, 
                style: style_CapasPalacio_10,
                popuplayertitle: 'Capas — Palacio',
                interactive: true,
                title: '<img src="styles/legend/CapasPalacio_10.png" /> Capas — Palacio'
            });
var format_CapasPetaqueros2_11 = new ol.format.GeoJSON();
var features_CapasPetaqueros2_11 = format_CapasPetaqueros2_11.readFeatures(json_CapasPetaqueros2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasPetaqueros2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasPetaqueros2_11.addFeatures(features_CapasPetaqueros2_11);
var lyr_CapasPetaqueros2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasPetaqueros2_11, 
                style: style_CapasPetaqueros2_11,
                popuplayertitle: 'Capas - Petaqueros 2 ',
                interactive: true,
                title: '<img src="styles/legend/CapasPetaqueros2_11.png" /> Capas - Petaqueros 2 '
            });
var format_CapasPETAQUEROS1_12 = new ol.format.GeoJSON();
var features_CapasPETAQUEROS1_12 = format_CapasPETAQUEROS1_12.readFeatures(json_CapasPETAQUEROS1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasPETAQUEROS1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasPETAQUEROS1_12.addFeatures(features_CapasPETAQUEROS1_12);
var lyr_CapasPETAQUEROS1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasPETAQUEROS1_12, 
                style: style_CapasPETAQUEROS1_12,
                popuplayertitle: 'Capas — PETAQUEROS 1',
                interactive: true,
                title: '<img src="styles/legend/CapasPETAQUEROS1_12.png" /> Capas — PETAQUEROS 1'
            });
var format_CapasSanFernando_13 = new ol.format.GeoJSON();
var features_CapasSanFernando_13 = format_CapasSanFernando_13.readFeatures(json_CapasSanFernando_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasSanFernando_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasSanFernando_13.addFeatures(features_CapasSanFernando_13);
var lyr_CapasSanFernando_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasSanFernando_13, 
                style: style_CapasSanFernando_13,
                popuplayertitle: 'Capas — San Fernando',
                interactive: true,
                title: '<img src="styles/legend/CapasSanFernando_13.png" /> Capas — San Fernando'
            });
var format_CapasSantaRosa_14 = new ol.format.GeoJSON();
var features_CapasSantaRosa_14 = format_CapasSantaRosa_14.readFeatures(json_CapasSantaRosa_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasSantaRosa_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasSantaRosa_14.addFeatures(features_CapasSantaRosa_14);
var lyr_CapasSantaRosa_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasSantaRosa_14, 
                style: style_CapasSantaRosa_14,
                popuplayertitle: 'Capas — Santa Rosa',
                interactive: true,
                title: '<img src="styles/legend/CapasSantaRosa_14.png" /> Capas — Santa Rosa'
            });
var format_CapasSemisa1_15 = new ol.format.GeoJSON();
var features_CapasSemisa1_15 = format_CapasSemisa1_15.readFeatures(json_CapasSemisa1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasSemisa1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasSemisa1_15.addFeatures(features_CapasSemisa1_15);
var lyr_CapasSemisa1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasSemisa1_15, 
                style: style_CapasSemisa1_15,
                popuplayertitle: 'Capas — Semisa 1',
                interactive: true,
                title: '<img src="styles/legend/CapasSemisa1_15.png" /> Capas — Semisa 1'
            });
var format_CapasSemisa2_16 = new ol.format.GeoJSON();
var features_CapasSemisa2_16 = format_CapasSemisa2_16.readFeatures(json_CapasSemisa2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasSemisa2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasSemisa2_16.addFeatures(features_CapasSemisa2_16);
var lyr_CapasSemisa2_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasSemisa2_16, 
                style: style_CapasSemisa2_16,
                popuplayertitle: 'Capas- Semisa 2',
                interactive: true,
                title: '<img src="styles/legend/CapasSemisa2_16.png" /> Capas- Semisa 2'
            });
var format_CapasSemisa3_17 = new ol.format.GeoJSON();
var features_CapasSemisa3_17 = format_CapasSemisa3_17.readFeatures(json_CapasSemisa3_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasSemisa3_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasSemisa3_17.addFeatures(features_CapasSemisa3_17);
var lyr_CapasSemisa3_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasSemisa3_17, 
                style: style_CapasSemisa3_17,
                popuplayertitle: 'Capas - Semisa 3',
                interactive: true,
                title: '<img src="styles/legend/CapasSemisa3_17.png" /> Capas - Semisa 3'
            });
var format_CapasSemisa4_18 = new ol.format.GeoJSON();
var features_CapasSemisa4_18 = format_CapasSemisa4_18.readFeatures(json_CapasSemisa4_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasSemisa4_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasSemisa4_18.addFeatures(features_CapasSemisa4_18);
var lyr_CapasSemisa4_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasSemisa4_18, 
                style: style_CapasSemisa4_18,
                popuplayertitle: 'Capas — Semisa 4',
                interactive: true,
                title: '<img src="styles/legend/CapasSemisa4_18.png" /> Capas — Semisa 4'
            });
var format_CapasVillaCampestre_19 = new ol.format.GeoJSON();
var features_CapasVillaCampestre_19 = format_CapasVillaCampestre_19.readFeatures(json_CapasVillaCampestre_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasVillaCampestre_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasVillaCampestre_19.addFeatures(features_CapasVillaCampestre_19);
var lyr_CapasVillaCampestre_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasVillaCampestre_19, 
                style: style_CapasVillaCampestre_19,
                popuplayertitle: 'Capas — Villa Campestre',
                interactive: true,
                title: '<img src="styles/legend/CapasVillaCampestre_19.png" /> Capas — Villa Campestre'
            });
var format_CapasVillaVieja_20 = new ol.format.GeoJSON();
var features_CapasVillaVieja_20 = format_CapasVillaVieja_20.readFeatures(json_CapasVillaVieja_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasVillaVieja_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasVillaVieja_20.addFeatures(features_CapasVillaVieja_20);
var lyr_CapasVillaVieja_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasVillaVieja_20, 
                style: style_CapasVillaVieja_20,
                popuplayertitle: 'Capas — Villa Vieja',
                interactive: true,
                title: '<img src="styles/legend/CapasVillaVieja_20.png" /> Capas — Villa Vieja'
            });
var format_culebrilla_21 = new ol.format.GeoJSON();
var features_culebrilla_21 = format_culebrilla_21.readFeatures(json_culebrilla_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_culebrilla_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_culebrilla_21.addFeatures(features_culebrilla_21);
var lyr_culebrilla_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_culebrilla_21, 
                style: style_culebrilla_21,
                popuplayertitle: 'culebrilla',
                interactive: true,
                title: '<img src="styles/legend/culebrilla_21.png" /> culebrilla'
            });
var format_CapasCuevas_22 = new ol.format.GeoJSON();
var features_CapasCuevas_22 = format_CapasCuevas_22.readFeatures(json_CapasCuevas_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasCuevas_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasCuevas_22.addFeatures(features_CapasCuevas_22);
var lyr_CapasCuevas_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasCuevas_22, 
                style: style_CapasCuevas_22,
                popuplayertitle: 'Capas — Cuevas',
                interactive: true,
                title: '<img src="styles/legend/CapasCuevas_22.png" /> Capas — Cuevas'
            });
var format_CapasEscuelas_23 = new ol.format.GeoJSON();
var features_CapasEscuelas_23 = format_CapasEscuelas_23.readFeatures(json_CapasEscuelas_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasEscuelas_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasEscuelas_23.addFeatures(features_CapasEscuelas_23);
var lyr_CapasEscuelas_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasEscuelas_23, 
                style: style_CapasEscuelas_23,
                popuplayertitle: 'Capas — Escuelas',
                interactive: true,
                title: '<img src="styles/legend/CapasEscuelas_23.png" /> Capas — Escuelas'
            });
var format_CapasAguaFria_24 = new ol.format.GeoJSON();
var features_CapasAguaFria_24 = format_CapasAguaFria_24.readFeatures(json_CapasAguaFria_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasAguaFria_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasAguaFria_24.addFeatures(features_CapasAguaFria_24);
var lyr_CapasAguaFria_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasAguaFria_24, 
                style: style_CapasAguaFria_24,
                popuplayertitle: 'Capas - Agua Fria',
                interactive: true,
                title: '<img src="styles/legend/CapasAguaFria_24.png" /> Capas - Agua Fria'
            });
var format_CapasBravoPaezA_25 = new ol.format.GeoJSON();
var features_CapasBravoPaezA_25 = format_CapasBravoPaezA_25.readFeatures(json_CapasBravoPaezA_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasBravoPaezA_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasBravoPaezA_25.addFeatures(features_CapasBravoPaezA_25);
var lyr_CapasBravoPaezA_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasBravoPaezA_25, 
                style: style_CapasBravoPaezA_25,
                popuplayertitle: 'Capas - Bravo Paez A',
                interactive: true,
                title: '<img src="styles/legend/CapasBravoPaezA_25.png" /> Capas - Bravo Paez A'
            });
var format_CapasBravoPaezB_26 = new ol.format.GeoJSON();
var features_CapasBravoPaezB_26 = format_CapasBravoPaezB_26.readFeatures(json_CapasBravoPaezB_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasBravoPaezB_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasBravoPaezB_26.addFeatures(features_CapasBravoPaezB_26);
var lyr_CapasBravoPaezB_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasBravoPaezB_26, 
                style: style_CapasBravoPaezB_26,
                popuplayertitle: 'Capas - Bravo Paez B',
                interactive: true,
                title: '<img src="styles/legend/CapasBravoPaezB_26.png" /> Capas - Bravo Paez B'
            });
var format_CapasLomadeHoyos_27 = new ol.format.GeoJSON();
var features_CapasLomadeHoyos_27 = format_CapasLomadeHoyos_27.readFeatures(json_CapasLomadeHoyos_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasLomadeHoyos_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasLomadeHoyos_27.addFeatures(features_CapasLomadeHoyos_27);
var lyr_CapasLomadeHoyos_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasLomadeHoyos_27, 
                style: style_CapasLomadeHoyos_27,
                popuplayertitle: 'Capas - Loma de Hoyos ',
                interactive: true,
                title: '<img src="styles/legend/CapasLomadeHoyos_27.png" /> Capas - Loma de Hoyos '
            });
var format_CapasAltoCruces_28 = new ol.format.GeoJSON();
var features_CapasAltoCruces_28 = format_CapasAltoCruces_28.readFeatures(json_CapasAltoCruces_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasAltoCruces_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasAltoCruces_28.addFeatures(features_CapasAltoCruces_28);
var lyr_CapasAltoCruces_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasAltoCruces_28, 
                style: style_CapasAltoCruces_28,
                popuplayertitle: 'Capas - Alto Cruces',
                interactive: true,
                title: '<img src="styles/legend/CapasAltoCruces_28.png" /> Capas - Alto Cruces'
            });
var format_CapasSanVicenteBajo_29 = new ol.format.GeoJSON();
var features_CapasSanVicenteBajo_29 = format_CapasSanVicenteBajo_29.readFeatures(json_CapasSanVicenteBajo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasSanVicenteBajo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasSanVicenteBajo_29.addFeatures(features_CapasSanVicenteBajo_29);
var lyr_CapasSanVicenteBajo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasSanVicenteBajo_29, 
                style: style_CapasSanVicenteBajo_29,
                popuplayertitle: 'Capas - San Vicente Bajo',
                interactive: true,
                title: '<img src="styles/legend/CapasSanVicenteBajo_29.png" /> Capas - San Vicente Bajo'
            });
var format_CapasSanVicenteAlto_30 = new ol.format.GeoJSON();
var features_CapasSanVicenteAlto_30 = format_CapasSanVicenteAlto_30.readFeatures(json_CapasSanVicenteAlto_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasSanVicenteAlto_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasSanVicenteAlto_30.addFeatures(features_CapasSanVicenteAlto_30);
var lyr_CapasSanVicenteAlto_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasSanVicenteAlto_30, 
                style: style_CapasSanVicenteAlto_30,
                popuplayertitle: 'Capas - San Vicente Alto',
                interactive: true,
                title: '<img src="styles/legend/CapasSanVicenteAlto_30.png" /> Capas - San Vicente Alto'
            });
var format_CapasPiedealto_31 = new ol.format.GeoJSON();
var features_CapasPiedealto_31 = format_CapasPiedealto_31.readFeatures(json_CapasPiedealto_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasPiedealto_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasPiedealto_31.addFeatures(features_CapasPiedealto_31);
var lyr_CapasPiedealto_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasPiedealto_31, 
                style: style_CapasPiedealto_31,
                popuplayertitle: 'Capas - Piedealto',
                interactive: true,
                title: '<img src="styles/legend/CapasPiedealto_31.png" /> Capas - Piedealto'
            });
var format_CapasSantaRita_32 = new ol.format.GeoJSON();
var features_CapasSantaRita_32 = format_CapasSantaRita_32.readFeatures(json_CapasSantaRita_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasSantaRita_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasSantaRita_32.addFeatures(features_CapasSantaRita_32);
var lyr_CapasSantaRita_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasSantaRita_32, 
                style: style_CapasSantaRita_32,
                popuplayertitle: 'Capas - Santa Rita',
                interactive: true,
                title: '<img src="styles/legend/CapasSantaRita_32.png" /> Capas - Santa Rita'
            });
var format_CapasChiquinta_33 = new ol.format.GeoJSON();
var features_CapasChiquinta_33 = format_CapasChiquinta_33.readFeatures(json_CapasChiquinta_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasChiquinta_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasChiquinta_33.addFeatures(features_CapasChiquinta_33);
var lyr_CapasChiquinta_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasChiquinta_33, 
                style: style_CapasChiquinta_33,
                popuplayertitle: 'Capas - Chiquinta',
                interactive: true,
                title: '<img src="styles/legend/CapasChiquinta_33.png" /> Capas - Chiquinta'
            });
var format_CapasCorbaraque_34 = new ol.format.GeoJSON();
var features_CapasCorbaraque_34 = format_CapasCorbaraque_34.readFeatures(json_CapasCorbaraque_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasCorbaraque_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasCorbaraque_34.addFeatures(features_CapasCorbaraque_34);
var lyr_CapasCorbaraque_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasCorbaraque_34, 
                style: style_CapasCorbaraque_34,
                popuplayertitle: 'Capas - Corbaraque',
                interactive: true,
                title: '<img src="styles/legend/CapasCorbaraque_34.png" /> Capas - Corbaraque'
            });
var format_CapasPoazaque_35 = new ol.format.GeoJSON();
var features_CapasPoazaque_35 = format_CapasPoazaque_35.readFeatures(json_CapasPoazaque_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasPoazaque_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasPoazaque_35.addFeatures(features_CapasPoazaque_35);
var lyr_CapasPoazaque_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasPoazaque_35, 
                style: style_CapasPoazaque_35,
                popuplayertitle: 'Capas - Poazaque',
                interactive: true,
                title: '<img src="styles/legend/CapasPoazaque_35.png" /> Capas - Poazaque'
            });
var format_CapasLaRetirada_36 = new ol.format.GeoJSON();
var features_CapasLaRetirada_36 = format_CapasLaRetirada_36.readFeatures(json_CapasLaRetirada_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasLaRetirada_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasLaRetirada_36.addFeatures(features_CapasLaRetirada_36);
var lyr_CapasLaRetirada_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasLaRetirada_36, 
                style: style_CapasLaRetirada_36,
                popuplayertitle: 'Capas - La Retirada',
                interactive: true,
                title: '<img src="styles/legend/CapasLaRetirada_36.png" /> Capas - La Retirada'
            });
var format_CapasCanoas_37 = new ol.format.GeoJSON();
var features_CapasCanoas_37 = format_CapasCanoas_37.readFeatures(json_CapasCanoas_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasCanoas_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasCanoas_37.addFeatures(features_CapasCanoas_37);
var lyr_CapasCanoas_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasCanoas_37, 
                style: style_CapasCanoas_37,
                popuplayertitle: 'Capas - Canoas',
                interactive: true,
                title: '<img src="styles/legend/CapasCanoas_37.png" /> Capas - Canoas'
            });
var format_CapasMompox_38 = new ol.format.GeoJSON();
var features_CapasMompox_38 = format_CapasMompox_38.readFeatures(json_CapasMompox_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasMompox_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasMompox_38.addFeatures(features_CapasMompox_38);
var lyr_CapasMompox_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasMompox_38, 
                style: style_CapasMompox_38,
                popuplayertitle: 'Capas - Mompox',
                interactive: true,
                title: '<img src="styles/legend/CapasMompox_38.png" /> Capas - Mompox'
            });
var format_CapasJardinesDelRecuerdo_39 = new ol.format.GeoJSON();
var features_CapasJardinesDelRecuerdo_39 = format_CapasJardinesDelRecuerdo_39.readFeatures(json_CapasJardinesDelRecuerdo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasJardinesDelRecuerdo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasJardinesDelRecuerdo_39.addFeatures(features_CapasJardinesDelRecuerdo_39);
var lyr_CapasJardinesDelRecuerdo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasJardinesDelRecuerdo_39, 
                style: style_CapasJardinesDelRecuerdo_39,
                popuplayertitle: 'Capas - Jardines Del Recuerdo',
                interactive: true,
                title: '<img src="styles/legend/CapasJardinesDelRecuerdo_39.png" /> Capas - Jardines Del Recuerdo'
            });
var format_CapasPescaderito_40 = new ol.format.GeoJSON();
var features_CapasPescaderito_40 = format_CapasPescaderito_40.readFeatures(json_CapasPescaderito_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasPescaderito_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasPescaderito_40.addFeatures(features_CapasPescaderito_40);
var lyr_CapasPescaderito_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasPescaderito_40, 
                style: style_CapasPescaderito_40,
                popuplayertitle: 'Capas - Pescaderito',
                interactive: true,
                title: '<img src="styles/legend/CapasPescaderito_40.png" /> Capas - Pescaderito'
            });
var format_CapasLaFeria_41 = new ol.format.GeoJSON();
var features_CapasLaFeria_41 = format_CapasLaFeria_41.readFeatures(json_CapasLaFeria_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasLaFeria_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasLaFeria_41.addFeatures(features_CapasLaFeria_41);
var lyr_CapasLaFeria_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasLaFeria_41, 
                style: style_CapasLaFeria_41,
                popuplayertitle: 'Capas - La Feria',
                interactive: true,
                title: '<img src="styles/legend/CapasLaFeria_41.png" /> Capas - La Feria'
            });
var format_CapasElSaman_42 = new ol.format.GeoJSON();
var features_CapasElSaman_42 = format_CapasElSaman_42.readFeatures(json_CapasElSaman_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasElSaman_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasElSaman_42.addFeatures(features_CapasElSaman_42);
var lyr_CapasElSaman_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasElSaman_42, 
                style: style_CapasElSaman_42,
                popuplayertitle: 'Capas - El Saman',
                interactive: true,
                title: '<img src="styles/legend/CapasElSaman_42.png" /> Capas - El Saman'
            });
var format_CapasAltoGrande_43 = new ol.format.GeoJSON();
var features_CapasAltoGrande_43 = format_CapasAltoGrande_43.readFeatures(json_CapasAltoGrande_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasAltoGrande_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasAltoGrande_43.addFeatures(features_CapasAltoGrande_43);
var lyr_CapasAltoGrande_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasAltoGrande_43, 
                style: style_CapasAltoGrande_43,
                popuplayertitle: 'Capas - Alto Grande',
                interactive: true,
                title: '<img src="styles/legend/CapasAltoGrande_43.png" /> Capas - Alto Grande'
            });
var format_CapasResguardo_44 = new ol.format.GeoJSON();
var features_CapasResguardo_44 = format_CapasResguardo_44.readFeatures(json_CapasResguardo_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasResguardo_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasResguardo_44.addFeatures(features_CapasResguardo_44);
var lyr_CapasResguardo_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasResguardo_44, 
                style: style_CapasResguardo_44,
                popuplayertitle: 'Capas - Resguardo',
                interactive: true,
                title: '<img src="styles/legend/CapasResguardo_44.png" /> Capas - Resguardo'
            });
var format_CapasCabreraAlta_45 = new ol.format.GeoJSON();
var features_CapasCabreraAlta_45 = format_CapasCabreraAlta_45.readFeatures(json_CapasCabreraAlta_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasCabreraAlta_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasCabreraAlta_45.addFeatures(features_CapasCabreraAlta_45);
var lyr_CapasCabreraAlta_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasCabreraAlta_45, 
                style: style_CapasCabreraAlta_45,
                popuplayertitle: 'Capas - Cabrera Alta',
                interactive: true,
                title: '<img src="styles/legend/CapasCabreraAlta_45.png" /> Capas - Cabrera Alta'
            });
var format_CapasPortachuelo_46 = new ol.format.GeoJSON();
var features_CapasPortachuelo_46 = format_CapasPortachuelo_46.readFeatures(json_CapasPortachuelo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasPortachuelo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasPortachuelo_46.addFeatures(features_CapasPortachuelo_46);
var lyr_CapasPortachuelo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasPortachuelo_46, 
                style: style_CapasPortachuelo_46,
                popuplayertitle: 'Capas - Portachuelo',
                interactive: true,
                title: '<img src="styles/legend/CapasPortachuelo_46.png" /> Capas - Portachuelo'
            });
var format_CapasBarroBlanco_47 = new ol.format.GeoJSON();
var features_CapasBarroBlanco_47 = format_CapasBarroBlanco_47.readFeatures(json_CapasBarroBlanco_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasBarroBlanco_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasBarroBlanco_47.addFeatures(features_CapasBarroBlanco_47);
var lyr_CapasBarroBlanco_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasBarroBlanco_47, 
                style: style_CapasBarroBlanco_47,
                popuplayertitle: 'Capas - Barro Blanco',
                interactive: true,
                title: '<img src="styles/legend/CapasBarroBlanco_47.png" /> Capas - Barro Blanco'
            });
var format_CapasCabreraBaja_48 = new ol.format.GeoJSON();
var features_CapasCabreraBaja_48 = format_CapasCabreraBaja_48.readFeatures(json_CapasCabreraBaja_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasCabreraBaja_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasCabreraBaja_48.addFeatures(features_CapasCabreraBaja_48);
var lyr_CapasCabreraBaja_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasCabreraBaja_48, 
                style: style_CapasCabreraBaja_48,
                popuplayertitle: 'Capas - Cabrera Baja',
                interactive: true,
                title: '<img src="styles/legend/CapasCabreraBaja_48.png" /> Capas - Cabrera Baja'
            });
var format_CapasElOscuro_49 = new ol.format.GeoJSON();
var features_CapasElOscuro_49 = format_CapasElOscuro_49.readFeatures(json_CapasElOscuro_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasElOscuro_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasElOscuro_49.addFeatures(features_CapasElOscuro_49);
var lyr_CapasElOscuro_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasElOscuro_49, 
                style: style_CapasElOscuro_49,
                popuplayertitle: 'Capas - El Oscuro',
                interactive: true,
                title: '<img src="styles/legend/CapasElOscuro_49.png" /> Capas - El Oscuro'
            });
var format_CapasLaderas_50 = new ol.format.GeoJSON();
var features_CapasLaderas_50 = format_CapasLaderas_50.readFeatures(json_CapasLaderas_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasLaderas_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasLaderas_50.addFeatures(features_CapasLaderas_50);
var lyr_CapasLaderas_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasLaderas_50, 
                style: style_CapasLaderas_50,
                popuplayertitle: 'Capas - Laderas',
                interactive: true,
                title: '<img src="styles/legend/CapasLaderas_50.png" /> Capas - Laderas'
            });
var format_CapasCristales_51 = new ol.format.GeoJSON();
var features_CapasCristales_51 = format_CapasCristales_51.readFeatures(json_CapasCristales_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasCristales_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasCristales_51.addFeatures(features_CapasCristales_51);
var lyr_CapasCristales_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasCristales_51, 
                style: style_CapasCristales_51,
                popuplayertitle: 'Capas - Cristales',
                interactive: true,
                title: '<img src="styles/legend/CapasCristales_51.png" /> Capas - Cristales'
            });
var format_CapasCascoUrbano_52 = new ol.format.GeoJSON();
var features_CapasCascoUrbano_52 = format_CapasCascoUrbano_52.readFeatures(json_CapasCascoUrbano_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasCascoUrbano_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasCascoUrbano_52.addFeatures(features_CapasCascoUrbano_52);
var lyr_CapasCascoUrbano_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasCascoUrbano_52, 
                style: style_CapasCascoUrbano_52,
                popuplayertitle: 'Capas - Casco Urbano',
                interactive: true,
                title: '<img src="styles/legend/CapasCascoUrbano_52.png" /> Capas - Casco Urbano'
            });
var format_CapasAngostura_53 = new ol.format.GeoJSON();
var features_CapasAngostura_53 = format_CapasAngostura_53.readFeatures(json_CapasAngostura_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasAngostura_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasAngostura_53.addFeatures(features_CapasAngostura_53);
var lyr_CapasAngostura_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasAngostura_53, 
                style: style_CapasAngostura_53,
                popuplayertitle: 'Capas - Angostura',
                interactive: true,
                title: '<img src="styles/legend/CapasAngostura_53.png" /> Capas - Angostura'
            });
var format_CapasBuenosAires_54 = new ol.format.GeoJSON();
var features_CapasBuenosAires_54 = format_CapasBuenosAires_54.readFeatures(json_CapasBuenosAires_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasBuenosAires_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasBuenosAires_54.addFeatures(features_CapasBuenosAires_54);
var lyr_CapasBuenosAires_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasBuenosAires_54, 
                style: style_CapasBuenosAires_54,
                popuplayertitle: 'Capas - Buenos Aires',
                interactive: true,
                title: '<img src="styles/legend/CapasBuenosAires_54.png" /> Capas - Buenos Aires'
            });
var format_CapasArciniegas_55 = new ol.format.GeoJSON();
var features_CapasArciniegas_55 = format_CapasArciniegas_55.readFeatures(json_CapasArciniegas_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasArciniegas_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasArciniegas_55.addFeatures(features_CapasArciniegas_55);
var lyr_CapasArciniegas_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasArciniegas_55, 
                style: style_CapasArciniegas_55,
                popuplayertitle: 'Capas -Arciniegas',
                interactive: true,
                title: '<img src="styles/legend/CapasArciniegas_55.png" /> Capas -Arciniegas'
            });
var format_CapasHospedajes_56 = new ol.format.GeoJSON();
var features_CapasHospedajes_56 = format_CapasHospedajes_56.readFeatures(json_CapasHospedajes_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasHospedajes_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasHospedajes_56.addFeatures(features_CapasHospedajes_56);
var lyr_CapasHospedajes_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasHospedajes_56, 
                style: style_CapasHospedajes_56,
                popuplayertitle: 'Capas — Hospedajes',
                interactive: true,
                title: '<img src="styles/legend/CapasHospedajes_56.png" /> Capas — Hospedajes'
            });
var format_CapasRiesgoAltoEfectiva_57 = new ol.format.GeoJSON();
var features_CapasRiesgoAltoEfectiva_57 = format_CapasRiesgoAltoEfectiva_57.readFeatures(json_CapasRiesgoAltoEfectiva_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasRiesgoAltoEfectiva_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasRiesgoAltoEfectiva_57.addFeatures(features_CapasRiesgoAltoEfectiva_57);
var lyr_CapasRiesgoAltoEfectiva_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasRiesgoAltoEfectiva_57, 
                style: style_CapasRiesgoAltoEfectiva_57,
                popuplayertitle: 'Capas — Riesgo Alto - Efectiva',
                interactive: true,
                title: '<img src="styles/legend/CapasRiesgoAltoEfectiva_57.png" /> Capas — Riesgo Alto - Efectiva'
            });
var format_CapasRiesgoAltoEfectivaSinPatologias_58 = new ol.format.GeoJSON();
var features_CapasRiesgoAltoEfectivaSinPatologias_58 = format_CapasRiesgoAltoEfectivaSinPatologias_58.readFeatures(json_CapasRiesgoAltoEfectivaSinPatologias_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasRiesgoAltoEfectivaSinPatologias_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasRiesgoAltoEfectivaSinPatologias_58.addFeatures(features_CapasRiesgoAltoEfectivaSinPatologias_58);
var lyr_CapasRiesgoAltoEfectivaSinPatologias_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasRiesgoAltoEfectivaSinPatologias_58, 
                style: style_CapasRiesgoAltoEfectivaSinPatologias_58,
                popuplayertitle: 'Capas — Riesgo Alto - Efectiva (Sin Patologias)',
                interactive: true,
                title: '<img src="styles/legend/CapasRiesgoAltoEfectivaSinPatologias_58.png" /> Capas — Riesgo Alto - Efectiva (Sin Patologias)'
            });
var format_CapasRiesgoAltoNohabitada_59 = new ol.format.GeoJSON();
var features_CapasRiesgoAltoNohabitada_59 = format_CapasRiesgoAltoNohabitada_59.readFeatures(json_CapasRiesgoAltoNohabitada_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasRiesgoAltoNohabitada_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasRiesgoAltoNohabitada_59.addFeatures(features_CapasRiesgoAltoNohabitada_59);
cluster_CapasRiesgoAltoNohabitada_59 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CapasRiesgoAltoNohabitada_59
});
var lyr_CapasRiesgoAltoNohabitada_59 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CapasRiesgoAltoNohabitada_59, 
                style: style_CapasRiesgoAltoNohabitada_59,
                popuplayertitle: 'Capas — Riesgo Alto - No habitada',
                interactive: true,
                title: '<img src="styles/legend/CapasRiesgoAltoNohabitada_59.png" /> Capas — Riesgo Alto - No habitada'
            });
var format_CapasRiesgoBajoEfectiva_60 = new ol.format.GeoJSON();
var features_CapasRiesgoBajoEfectiva_60 = format_CapasRiesgoBajoEfectiva_60.readFeatures(json_CapasRiesgoBajoEfectiva_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasRiesgoBajoEfectiva_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasRiesgoBajoEfectiva_60.addFeatures(features_CapasRiesgoBajoEfectiva_60);
var lyr_CapasRiesgoBajoEfectiva_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasRiesgoBajoEfectiva_60, 
                style: style_CapasRiesgoBajoEfectiva_60,
                popuplayertitle: 'Capas — Riesgo Bajo - Efectiva',
                interactive: true,
                title: '<img src="styles/legend/CapasRiesgoBajoEfectiva_60.png" /> Capas — Riesgo Bajo - Efectiva'
            });
var format_CapasRiesgoBajoEfectivaSinPatologias_61 = new ol.format.GeoJSON();
var features_CapasRiesgoBajoEfectivaSinPatologias_61 = format_CapasRiesgoBajoEfectivaSinPatologias_61.readFeatures(json_CapasRiesgoBajoEfectivaSinPatologias_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasRiesgoBajoEfectivaSinPatologias_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasRiesgoBajoEfectivaSinPatologias_61.addFeatures(features_CapasRiesgoBajoEfectivaSinPatologias_61);
var lyr_CapasRiesgoBajoEfectivaSinPatologias_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasRiesgoBajoEfectivaSinPatologias_61, 
                style: style_CapasRiesgoBajoEfectivaSinPatologias_61,
                popuplayertitle: 'Capas — Riesgo Bajo - Efectiva (Sin Patologias)',
                interactive: true,
                title: '<img src="styles/legend/CapasRiesgoBajoEfectivaSinPatologias_61.png" /> Capas — Riesgo Bajo - Efectiva (Sin Patologias)'
            });
var format_CapasRiesgoBajoHabitadaOcasionalmente_62 = new ol.format.GeoJSON();
var features_CapasRiesgoBajoHabitadaOcasionalmente_62 = format_CapasRiesgoBajoHabitadaOcasionalmente_62.readFeatures(json_CapasRiesgoBajoHabitadaOcasionalmente_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasRiesgoBajoHabitadaOcasionalmente_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasRiesgoBajoHabitadaOcasionalmente_62.addFeatures(features_CapasRiesgoBajoHabitadaOcasionalmente_62);
var lyr_CapasRiesgoBajoHabitadaOcasionalmente_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasRiesgoBajoHabitadaOcasionalmente_62, 
                style: style_CapasRiesgoBajoHabitadaOcasionalmente_62,
                popuplayertitle: 'Capas — Riesgo Bajo - Habitada Ocasionalmente',
                interactive: true,
                title: '<img src="styles/legend/CapasRiesgoBajoHabitadaOcasionalmente_62.png" /> Capas — Riesgo Bajo - Habitada Ocasionalmente'
            });
var format_CapasRiesgoBajoNoEfectiva_63 = new ol.format.GeoJSON();
var features_CapasRiesgoBajoNoEfectiva_63 = format_CapasRiesgoBajoNoEfectiva_63.readFeatures(json_CapasRiesgoBajoNoEfectiva_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasRiesgoBajoNoEfectiva_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasRiesgoBajoNoEfectiva_63.addFeatures(features_CapasRiesgoBajoNoEfectiva_63);
var lyr_CapasRiesgoBajoNoEfectiva_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasRiesgoBajoNoEfectiva_63, 
                style: style_CapasRiesgoBajoNoEfectiva_63,
                popuplayertitle: 'Capas — Riesgo Bajo - No Efectiva',
                interactive: true,
                title: '<img src="styles/legend/CapasRiesgoBajoNoEfectiva_63.png" /> Capas — Riesgo Bajo - No Efectiva'
            });
var format_CapasRiesgoBajoNoHabitada_64 = new ol.format.GeoJSON();
var features_CapasRiesgoBajoNoHabitada_64 = format_CapasRiesgoBajoNoHabitada_64.readFeatures(json_CapasRiesgoBajoNoHabitada_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasRiesgoBajoNoHabitada_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasRiesgoBajoNoHabitada_64.addFeatures(features_CapasRiesgoBajoNoHabitada_64);
var lyr_CapasRiesgoBajoNoHabitada_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasRiesgoBajoNoHabitada_64, 
                style: style_CapasRiesgoBajoNoHabitada_64,
                popuplayertitle: 'Capas — Riesgo Bajo - No Habitada',
                interactive: true,
                title: '<img src="styles/legend/CapasRiesgoBajoNoHabitada_64.png" /> Capas — Riesgo Bajo - No Habitada'
            });
var format_CapasRiesgoMedioEfectiva_65 = new ol.format.GeoJSON();
var features_CapasRiesgoMedioEfectiva_65 = format_CapasRiesgoMedioEfectiva_65.readFeatures(json_CapasRiesgoMedioEfectiva_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasRiesgoMedioEfectiva_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasRiesgoMedioEfectiva_65.addFeatures(features_CapasRiesgoMedioEfectiva_65);
var lyr_CapasRiesgoMedioEfectiva_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasRiesgoMedioEfectiva_65, 
                style: style_CapasRiesgoMedioEfectiva_65,
                popuplayertitle: 'Capas — Riesgo Medio - Efectiva',
                interactive: true,
                title: '<img src="styles/legend/CapasRiesgoMedioEfectiva_65.png" /> Capas — Riesgo Medio - Efectiva'
            });
var format_CapasRiesgoMedioEfectivaSinPatologias_66 = new ol.format.GeoJSON();
var features_CapasRiesgoMedioEfectivaSinPatologias_66 = format_CapasRiesgoMedioEfectivaSinPatologias_66.readFeatures(json_CapasRiesgoMedioEfectivaSinPatologias_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasRiesgoMedioEfectivaSinPatologias_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasRiesgoMedioEfectivaSinPatologias_66.addFeatures(features_CapasRiesgoMedioEfectivaSinPatologias_66);
var lyr_CapasRiesgoMedioEfectivaSinPatologias_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasRiesgoMedioEfectivaSinPatologias_66, 
                style: style_CapasRiesgoMedioEfectivaSinPatologias_66,
                popuplayertitle: 'Capas — Riesgo Medio - Efectiva (Sin Patologias)',
                interactive: true,
                title: '<img src="styles/legend/CapasRiesgoMedioEfectivaSinPatologias_66.png" /> Capas — Riesgo Medio - Efectiva (Sin Patologias)'
            });
var format_CapasRiesgoMedioHabitadaOcasionalmente_67 = new ol.format.GeoJSON();
var features_CapasRiesgoMedioHabitadaOcasionalmente_67 = format_CapasRiesgoMedioHabitadaOcasionalmente_67.readFeatures(json_CapasRiesgoMedioHabitadaOcasionalmente_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasRiesgoMedioHabitadaOcasionalmente_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasRiesgoMedioHabitadaOcasionalmente_67.addFeatures(features_CapasRiesgoMedioHabitadaOcasionalmente_67);
var lyr_CapasRiesgoMedioHabitadaOcasionalmente_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasRiesgoMedioHabitadaOcasionalmente_67, 
                style: style_CapasRiesgoMedioHabitadaOcasionalmente_67,
                popuplayertitle: 'Capas — Riesgo Medio - Habitada Ocasionalmente',
                interactive: true,
                title: '<img src="styles/legend/CapasRiesgoMedioHabitadaOcasionalmente_67.png" /> Capas — Riesgo Medio - Habitada Ocasionalmente'
            });
var format_CapasRiesgoMedioNoEfectiva_68 = new ol.format.GeoJSON();
var features_CapasRiesgoMedioNoEfectiva_68 = format_CapasRiesgoMedioNoEfectiva_68.readFeatures(json_CapasRiesgoMedioNoEfectiva_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasRiesgoMedioNoEfectiva_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasRiesgoMedioNoEfectiva_68.addFeatures(features_CapasRiesgoMedioNoEfectiva_68);
var lyr_CapasRiesgoMedioNoEfectiva_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasRiesgoMedioNoEfectiva_68, 
                style: style_CapasRiesgoMedioNoEfectiva_68,
                popuplayertitle: 'Capas — Riesgo Medio - No Efectiva',
                interactive: true,
                title: '<img src="styles/legend/CapasRiesgoMedioNoEfectiva_68.png" /> Capas — Riesgo Medio - No Efectiva'
            });
var format_CapasRiesgoMedioNoHabitada_69 = new ol.format.GeoJSON();
var features_CapasRiesgoMedioNoHabitada_69 = format_CapasRiesgoMedioNoHabitada_69.readFeatures(json_CapasRiesgoMedioNoHabitada_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasRiesgoMedioNoHabitada_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasRiesgoMedioNoHabitada_69.addFeatures(features_CapasRiesgoMedioNoHabitada_69);
var lyr_CapasRiesgoMedioNoHabitada_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasRiesgoMedioNoHabitada_69, 
                style: style_CapasRiesgoMedioNoHabitada_69,
                popuplayertitle: 'Capas — Riesgo Medio - No Habitada',
                interactive: true,
                title: '<img src="styles/legend/CapasRiesgoMedioNoHabitada_69.png" /> Capas — Riesgo Medio - No Habitada'
            });
var format_CapasZonasComunes_70 = new ol.format.GeoJSON();
var features_CapasZonasComunes_70 = format_CapasZonasComunes_70.readFeatures(json_CapasZonasComunes_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasZonasComunes_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasZonasComunes_70.addFeatures(features_CapasZonasComunes_70);
var lyr_CapasZonasComunes_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasZonasComunes_70, 
                style: style_CapasZonasComunes_70,
                popuplayertitle: 'Capas — Zonas Comunes',
                interactive: true,
                title: '<img src="styles/legend/CapasZonasComunes_70.png" /> Capas — Zonas Comunes'
            });
var format_CapasZonasTuristicas_71 = new ol.format.GeoJSON();
var features_CapasZonasTuristicas_71 = format_CapasZonasTuristicas_71.readFeatures(json_CapasZonasTuristicas_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapasZonasTuristicas_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapasZonasTuristicas_71.addFeatures(features_CapasZonasTuristicas_71);
var lyr_CapasZonasTuristicas_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapasZonasTuristicas_71, 
                style: style_CapasZonasTuristicas_71,
                popuplayertitle: 'Capas — Zonas Turisticas',
                interactive: true,
                title: '<img src="styles/legend/CapasZonasTuristicas_71.png" /> Capas — Zonas Turisticas'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_GoogleLabels_2.setVisible(true);lyr_GoogleHybrid_3.setVisible(true);lyr_CapasMONTES_4.setVisible(true);lyr_CapasBarriochico_5.setVisible(true);lyr_CapasCentro_6.setVisible(true);lyr_CapasLaFlorida_7.setVisible(true);lyr_CapasLaUnion_8.setVisible(true);lyr_CapasLasPalmeras_9.setVisible(true);lyr_CapasPalacio_10.setVisible(true);lyr_CapasPetaqueros2_11.setVisible(true);lyr_CapasPETAQUEROS1_12.setVisible(true);lyr_CapasSanFernando_13.setVisible(true);lyr_CapasSantaRosa_14.setVisible(true);lyr_CapasSemisa1_15.setVisible(true);lyr_CapasSemisa2_16.setVisible(true);lyr_CapasSemisa3_17.setVisible(true);lyr_CapasSemisa4_18.setVisible(true);lyr_CapasVillaCampestre_19.setVisible(true);lyr_CapasVillaVieja_20.setVisible(true);lyr_culebrilla_21.setVisible(true);lyr_CapasCuevas_22.setVisible(true);lyr_CapasEscuelas_23.setVisible(true);lyr_CapasAguaFria_24.setVisible(true);lyr_CapasBravoPaezA_25.setVisible(true);lyr_CapasBravoPaezB_26.setVisible(true);lyr_CapasLomadeHoyos_27.setVisible(true);lyr_CapasAltoCruces_28.setVisible(true);lyr_CapasSanVicenteBajo_29.setVisible(true);lyr_CapasSanVicenteAlto_30.setVisible(true);lyr_CapasPiedealto_31.setVisible(true);lyr_CapasSantaRita_32.setVisible(true);lyr_CapasChiquinta_33.setVisible(true);lyr_CapasCorbaraque_34.setVisible(true);lyr_CapasPoazaque_35.setVisible(true);lyr_CapasLaRetirada_36.setVisible(true);lyr_CapasCanoas_37.setVisible(true);lyr_CapasMompox_38.setVisible(true);lyr_CapasJardinesDelRecuerdo_39.setVisible(true);lyr_CapasPescaderito_40.setVisible(true);lyr_CapasLaFeria_41.setVisible(true);lyr_CapasElSaman_42.setVisible(true);lyr_CapasAltoGrande_43.setVisible(true);lyr_CapasResguardo_44.setVisible(true);lyr_CapasCabreraAlta_45.setVisible(true);lyr_CapasPortachuelo_46.setVisible(true);lyr_CapasBarroBlanco_47.setVisible(true);lyr_CapasCabreraBaja_48.setVisible(true);lyr_CapasElOscuro_49.setVisible(true);lyr_CapasLaderas_50.setVisible(true);lyr_CapasCristales_51.setVisible(true);lyr_CapasCascoUrbano_52.setVisible(true);lyr_CapasAngostura_53.setVisible(true);lyr_CapasBuenosAires_54.setVisible(true);lyr_CapasArciniegas_55.setVisible(true);lyr_CapasHospedajes_56.setVisible(true);lyr_CapasRiesgoAltoEfectiva_57.setVisible(true);lyr_CapasRiesgoAltoEfectivaSinPatologias_58.setVisible(true);lyr_CapasRiesgoAltoNohabitada_59.setVisible(true);lyr_CapasRiesgoBajoEfectiva_60.setVisible(true);lyr_CapasRiesgoBajoEfectivaSinPatologias_61.setVisible(true);lyr_CapasRiesgoBajoHabitadaOcasionalmente_62.setVisible(true);lyr_CapasRiesgoBajoNoEfectiva_63.setVisible(true);lyr_CapasRiesgoBajoNoHabitada_64.setVisible(true);lyr_CapasRiesgoMedioEfectiva_65.setVisible(true);lyr_CapasRiesgoMedioEfectivaSinPatologias_66.setVisible(true);lyr_CapasRiesgoMedioHabitadaOcasionalmente_67.setVisible(true);lyr_CapasRiesgoMedioNoEfectiva_68.setVisible(true);lyr_CapasRiesgoMedioNoHabitada_69.setVisible(true);lyr_CapasZonasComunes_70.setVisible(true);lyr_CapasZonasTuristicas_71.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleRoad_1,lyr_GoogleLabels_2,lyr_GoogleHybrid_3,lyr_CapasMONTES_4,lyr_CapasBarriochico_5,lyr_CapasCentro_6,lyr_CapasLaFlorida_7,lyr_CapasLaUnion_8,lyr_CapasLasPalmeras_9,lyr_CapasPalacio_10,lyr_CapasPetaqueros2_11,lyr_CapasPETAQUEROS1_12,lyr_CapasSanFernando_13,lyr_CapasSantaRosa_14,lyr_CapasSemisa1_15,lyr_CapasSemisa2_16,lyr_CapasSemisa3_17,lyr_CapasSemisa4_18,lyr_CapasVillaCampestre_19,lyr_CapasVillaVieja_20,lyr_culebrilla_21,lyr_CapasCuevas_22,lyr_CapasEscuelas_23,lyr_CapasAguaFria_24,lyr_CapasBravoPaezA_25,lyr_CapasBravoPaezB_26,lyr_CapasLomadeHoyos_27,lyr_CapasAltoCruces_28,lyr_CapasSanVicenteBajo_29,lyr_CapasSanVicenteAlto_30,lyr_CapasPiedealto_31,lyr_CapasSantaRita_32,lyr_CapasChiquinta_33,lyr_CapasCorbaraque_34,lyr_CapasPoazaque_35,lyr_CapasLaRetirada_36,lyr_CapasCanoas_37,lyr_CapasMompox_38,lyr_CapasJardinesDelRecuerdo_39,lyr_CapasPescaderito_40,lyr_CapasLaFeria_41,lyr_CapasElSaman_42,lyr_CapasAltoGrande_43,lyr_CapasResguardo_44,lyr_CapasCabreraAlta_45,lyr_CapasPortachuelo_46,lyr_CapasBarroBlanco_47,lyr_CapasCabreraBaja_48,lyr_CapasElOscuro_49,lyr_CapasLaderas_50,lyr_CapasCristales_51,lyr_CapasCascoUrbano_52,lyr_CapasAngostura_53,lyr_CapasBuenosAires_54,lyr_CapasArciniegas_55,lyr_CapasHospedajes_56,lyr_CapasRiesgoAltoEfectiva_57,lyr_CapasRiesgoAltoEfectivaSinPatologias_58,lyr_CapasRiesgoAltoNohabitada_59,lyr_CapasRiesgoBajoEfectiva_60,lyr_CapasRiesgoBajoEfectivaSinPatologias_61,lyr_CapasRiesgoBajoHabitadaOcasionalmente_62,lyr_CapasRiesgoBajoNoEfectiva_63,lyr_CapasRiesgoBajoNoHabitada_64,lyr_CapasRiesgoMedioEfectiva_65,lyr_CapasRiesgoMedioEfectivaSinPatologias_66,lyr_CapasRiesgoMedioHabitadaOcasionalmente_67,lyr_CapasRiesgoMedioNoEfectiva_68,lyr_CapasRiesgoMedioNoHabitada_69,lyr_CapasZonasComunes_70,lyr_CapasZonasTuristicas_71];
lyr_CapasMONTES_4.set('fieldAliases', {'id': 'id', });
lyr_CapasBarriochico_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasCentro_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasLaFlorida_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasLaUnion_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasLasPalmeras_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasPalacio_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasPetaqueros2_11.set('fieldAliases', {'id': 'id', });
lyr_CapasPETAQUEROS1_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasSanFernando_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasSantaRosa_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasSemisa1_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasSemisa2_16.set('fieldAliases', {'id': 'id', });
lyr_CapasSemisa3_17.set('fieldAliases', {'id': 'id', });
lyr_CapasSemisa4_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasVillaCampestre_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasVillaVieja_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_culebrilla_21.set('fieldAliases', {'id': 'id', });
lyr_CapasCuevas_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasEscuelas_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasAguaFria_24.set('fieldAliases', {'id': 'id', });
lyr_CapasBravoPaezA_25.set('fieldAliases', {'id': 'id', });
lyr_CapasBravoPaezB_26.set('fieldAliases', {'id': 'id', });
lyr_CapasLomadeHoyos_27.set('fieldAliases', {'id': 'id', });
lyr_CapasAltoCruces_28.set('fieldAliases', {'id': 'id', });
lyr_CapasSanVicenteBajo_29.set('fieldAliases', {'id': 'id', });
lyr_CapasSanVicenteAlto_30.set('fieldAliases', {'id': 'id', });
lyr_CapasPiedealto_31.set('fieldAliases', {'id': 'id', });
lyr_CapasSantaRita_32.set('fieldAliases', {'id': 'id', });
lyr_CapasChiquinta_33.set('fieldAliases', {'id': 'id', });
lyr_CapasCorbaraque_34.set('fieldAliases', {'id': 'id', });
lyr_CapasPoazaque_35.set('fieldAliases', {'id': 'id', });
lyr_CapasLaRetirada_36.set('fieldAliases', {'id': 'id', });
lyr_CapasCanoas_37.set('fieldAliases', {'id': 'id', });
lyr_CapasMompox_38.set('fieldAliases', {'id': 'id', });
lyr_CapasJardinesDelRecuerdo_39.set('fieldAliases', {'id': 'id', });
lyr_CapasPescaderito_40.set('fieldAliases', {'id': 'id', });
lyr_CapasLaFeria_41.set('fieldAliases', {'id': 'id', });
lyr_CapasElSaman_42.set('fieldAliases', {'id': 'id', });
lyr_CapasAltoGrande_43.set('fieldAliases', {'id': 'id', });
lyr_CapasResguardo_44.set('fieldAliases', {'id': 'id', });
lyr_CapasCabreraAlta_45.set('fieldAliases', {'id': 'id', });
lyr_CapasPortachuelo_46.set('fieldAliases', {'id': 'id', });
lyr_CapasBarroBlanco_47.set('fieldAliases', {'id': 'id', });
lyr_CapasCabreraBaja_48.set('fieldAliases', {'id': 'id', });
lyr_CapasElOscuro_49.set('fieldAliases', {'id': 'id', });
lyr_CapasLaderas_50.set('fieldAliases', {'id': 'id', });
lyr_CapasCristales_51.set('fieldAliases', {'id': 'id', });
lyr_CapasCascoUrbano_52.set('fieldAliases', {'id': 'id', });
lyr_CapasAngostura_53.set('fieldAliases', {'id': 'id', });
lyr_CapasBuenosAires_54.set('fieldAliases', {'id': 'id', });
lyr_CapasArciniegas_55.set('fieldAliases', {'id': 'id', });
lyr_CapasHospedajes_56.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasRiesgoAltoEfectiva_57.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Patologias': 'Patologias', });
lyr_CapasRiesgoAltoEfectivaSinPatologias_58.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasRiesgoAltoNohabitada_59.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasRiesgoBajoEfectiva_60.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Patologias': 'Patologias', });
lyr_CapasRiesgoBajoEfectivaSinPatologias_61.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasRiesgoBajoHabitadaOcasionalmente_62.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasRiesgoBajoNoEfectiva_63.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasRiesgoBajoNoHabitada_64.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasRiesgoMedioEfectiva_65.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Patologias': 'Patologias', });
lyr_CapasRiesgoMedioEfectivaSinPatologias_66.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasRiesgoMedioHabitadaOcasionalmente_67.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasRiesgoMedioNoEfectiva_68.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasRiesgoMedioNoHabitada_69.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasZonasComunes_70.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasZonasTuristicas_71.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CapasMONTES_4.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasBarriochico_5.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasCentro_6.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasLaFlorida_7.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasLaUnion_8.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasLasPalmeras_9.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasPalacio_10.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasPetaqueros2_11.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasPETAQUEROS1_12.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasSanFernando_13.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasSantaRosa_14.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasSemisa1_15.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasSemisa2_16.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasSemisa3_17.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasSemisa4_18.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasVillaCampestre_19.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasVillaVieja_20.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_culebrilla_21.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasCuevas_22.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasEscuelas_23.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasAguaFria_24.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasBravoPaezA_25.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasBravoPaezB_26.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasLomadeHoyos_27.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasAltoCruces_28.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasSanVicenteBajo_29.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasSanVicenteAlto_30.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasPiedealto_31.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasSantaRita_32.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasChiquinta_33.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasCorbaraque_34.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasPoazaque_35.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasLaRetirada_36.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasCanoas_37.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasMompox_38.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasJardinesDelRecuerdo_39.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasPescaderito_40.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasLaFeria_41.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasElSaman_42.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasAltoGrande_43.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasResguardo_44.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasCabreraAlta_45.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasPortachuelo_46.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasBarroBlanco_47.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasCabreraBaja_48.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasElOscuro_49.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasLaderas_50.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasCristales_51.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasCascoUrbano_52.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasAngostura_53.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasBuenosAires_54.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasArciniegas_55.set('fieldImages', {'id': 'TextEdit', });
lyr_CapasHospedajes_56.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasRiesgoAltoEfectiva_57.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Patologias': 'TextEdit', });
lyr_CapasRiesgoAltoEfectivaSinPatologias_58.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasRiesgoAltoNohabitada_59.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasRiesgoBajoEfectiva_60.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Patologias': '', });
lyr_CapasRiesgoBajoEfectivaSinPatologias_61.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasRiesgoBajoHabitadaOcasionalmente_62.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasRiesgoBajoNoEfectiva_63.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasRiesgoBajoNoHabitada_64.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasRiesgoMedioEfectiva_65.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Patologias': 'TextEdit', });
lyr_CapasRiesgoMedioEfectivaSinPatologias_66.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasRiesgoMedioHabitadaOcasionalmente_67.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasRiesgoMedioNoEfectiva_68.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasRiesgoMedioNoHabitada_69.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasZonasComunes_70.set('fieldImages', {'fid': '', 'id': '', });
lyr_CapasZonasTuristicas_71.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_CapasMONTES_4.set('fieldLabels', {'id': 'no label', });
lyr_CapasBarriochico_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasCentro_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasLaFlorida_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasLaUnion_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasLasPalmeras_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasPalacio_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasPetaqueros2_11.set('fieldLabels', {'id': 'no label', });
lyr_CapasPETAQUEROS1_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasSanFernando_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasSantaRosa_14.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasSemisa1_15.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasSemisa2_16.set('fieldLabels', {'id': 'no label', });
lyr_CapasSemisa3_17.set('fieldLabels', {'id': 'no label', });
lyr_CapasSemisa4_18.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasVillaCampestre_19.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasVillaVieja_20.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_culebrilla_21.set('fieldLabels', {'id': 'no label', });
lyr_CapasCuevas_22.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasEscuelas_23.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasAguaFria_24.set('fieldLabels', {'id': 'no label', });
lyr_CapasBravoPaezA_25.set('fieldLabels', {'id': 'no label', });
lyr_CapasBravoPaezB_26.set('fieldLabels', {'id': 'no label', });
lyr_CapasLomadeHoyos_27.set('fieldLabels', {'id': 'no label', });
lyr_CapasAltoCruces_28.set('fieldLabels', {'id': 'no label', });
lyr_CapasSanVicenteBajo_29.set('fieldLabels', {'id': 'no label', });
lyr_CapasSanVicenteAlto_30.set('fieldLabels', {'id': 'no label', });
lyr_CapasPiedealto_31.set('fieldLabels', {'id': 'no label', });
lyr_CapasSantaRita_32.set('fieldLabels', {'id': 'no label', });
lyr_CapasChiquinta_33.set('fieldLabels', {'id': 'no label', });
lyr_CapasCorbaraque_34.set('fieldLabels', {'id': 'no label', });
lyr_CapasPoazaque_35.set('fieldLabels', {'id': 'no label', });
lyr_CapasLaRetirada_36.set('fieldLabels', {'id': 'no label', });
lyr_CapasCanoas_37.set('fieldLabels', {'id': 'no label', });
lyr_CapasMompox_38.set('fieldLabels', {'id': 'no label', });
lyr_CapasJardinesDelRecuerdo_39.set('fieldLabels', {'id': 'no label', });
lyr_CapasPescaderito_40.set('fieldLabels', {'id': 'no label', });
lyr_CapasLaFeria_41.set('fieldLabels', {'id': 'no label', });
lyr_CapasElSaman_42.set('fieldLabels', {'id': 'no label', });
lyr_CapasAltoGrande_43.set('fieldLabels', {'id': 'no label', });
lyr_CapasResguardo_44.set('fieldLabels', {'id': 'no label', });
lyr_CapasCabreraAlta_45.set('fieldLabels', {'id': 'no label', });
lyr_CapasPortachuelo_46.set('fieldLabels', {'id': 'no label', });
lyr_CapasBarroBlanco_47.set('fieldLabels', {'id': 'no label', });
lyr_CapasCabreraBaja_48.set('fieldLabels', {'id': 'no label', });
lyr_CapasElOscuro_49.set('fieldLabels', {'id': 'no label', });
lyr_CapasLaderas_50.set('fieldLabels', {'id': 'no label', });
lyr_CapasCristales_51.set('fieldLabels', {'id': 'no label', });
lyr_CapasCascoUrbano_52.set('fieldLabels', {'id': 'no label', });
lyr_CapasAngostura_53.set('fieldLabels', {'id': 'no label', });
lyr_CapasBuenosAires_54.set('fieldLabels', {'id': 'no label', });
lyr_CapasArciniegas_55.set('fieldLabels', {'id': 'no label', });
lyr_CapasHospedajes_56.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasRiesgoAltoEfectiva_57.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Patologias': 'no label', });
lyr_CapasRiesgoAltoEfectivaSinPatologias_58.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasRiesgoAltoNohabitada_59.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasRiesgoBajoEfectiva_60.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Patologias': 'no label', });
lyr_CapasRiesgoBajoEfectivaSinPatologias_61.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasRiesgoBajoHabitadaOcasionalmente_62.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasRiesgoBajoNoEfectiva_63.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasRiesgoBajoNoHabitada_64.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasRiesgoMedioEfectiva_65.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Patologias': 'no label', });
lyr_CapasRiesgoMedioEfectivaSinPatologias_66.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasRiesgoMedioHabitadaOcasionalmente_67.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasRiesgoMedioNoEfectiva_68.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasRiesgoMedioNoHabitada_69.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasZonasComunes_70.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasZonasTuristicas_71.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CapasZonasTuristicas_71.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});